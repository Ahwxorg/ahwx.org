---
layout: ../../layouts/blogPost.astro
title: 'Git hosting done right'
pubDate: 2023-08-14
description: "Set up Cgit using UWSGI & NGINX on Gentoo"
author: "Ahwx"
---

---
title: 
date: 2023-02-16
---

# set up cgit using uwsgi & nginx on gentoo

> i recommend mainly using the root user for this

> this is partially copied from the wiki, but just my setup for when i reinstall :)

```sh
echo "www-servers/uwsgi cgi" >> /etc/portage/package.use/uwsgi
root # emerge -avq www-apps/cgit www-servers/nginx www-servers/uwsgi
root # useradd -m -s /bin/bash git
root # su - git

git $ mkdir ~/repos
git $ chown git:nginx ~/repos
git $ chmod 750 ~/repos

root # nvim /etc/cgitrc
```

## my /etc/cgitrc, tweak what you want:

```sh
# Make cgit generate link using absolute URL
virtual-root=/

# The maximum number of entries in the cgit cache. When set to "0",
# caching is disabled.
cache-size=0

# Cache time to live
# All cache ttl values are in minutes. Negative ttl values indicate that a page
# type will never expire, and thus the first time a URL is accessed, the result
# will be cached indefinitely, even if the underlying git repository changes.
# Conversely, when a ttl value is zero, the cache is disabled for that
# particular page type, and the page type is never cached.
cache-dynamic-ttl=0
cache-repo-ttl=0

# Specify some default clone urls using macro expansion
clone-url=https://git.ahwx.org/$CGIT_REPO_URL

# Specify the css url
css=/cgit.css

# Show owner on index page
enable-index-owner=0

# Allow http transport git clone
enable-http-clone=1

# Show extra links for each repository on the index page
enable-index-links=1

# Remove .git suffix from project display
remove-suffix=1

# Enable ASCII art commit history graph on the log pages
enable-commit-graph=1

# Show number of affected files per commit on the log pages
enable-log-filecount=1

# Show number of added/removed lines per commit on the log pages
enable-log-linecount=1

# Sort branches by date
branch-sort=age

# Add a cgit favicon
favicon=/favicon.ico

# Use a custom logo
logo=/cgit.png

# Enable statistics per week, month and quarter
max-stats=year

# Set the title and heading of the repository index page
root-title=Ahwx Git Repositories

# Set a subheading for the repository index page
root-desc=Ahwx development garbage & other nonsense

# Allow download of tar.gz, tar.bz2 and zip-files
snapshots=tar.bz2

# List of common mimetypes
# See https://www.sitepoint.com/mime-types-complete-list/
mimetype.html=text/html
mimetype.js=text/javascript
mimetype.css=text/css
mimetype.pl=text/x-script.perl
mimetype.pm=text/x-script.perl-module
mimetype.py=text/x-script.python
mimetype.png=image/png
mimetype.gif=image/gif
mimetype.jpg=image/jpeg
mimetype.jpeg=image/jpeg

# Highlight source code with python pygments-based highligher
source-filter=/usr/lib64/cgit/filters/syntax-highlighting.py

# Format markdown, restructuredtext, manpages, text files, and html files
# through the right converters
about-filter=/usr/local/lib/cgit/filters/about-formatting.sh

# Search for these files in the root of the default branch of repositories
# for coming up with the about page:
readme=:README.md
readme=:readme.md
readme=:README.mkd
readme=:readme.mkd
readme=:README.rst
readme=:readme.rst
readme=:README.html
readme=:readme.html
readme=:README.htm
readme=:readme.htm
readme=:README.txt
readme=:readme.txt
readme=:README
readme=:readme
readme=:INSTALL.md
readme=:install.md
readme=:INSTALL.mkd
readme=:install.mkd
readme=:INSTALL.rst
readme=:install.rst
readme=:INSTALL.html
readme=:install.html
readme=:INSTALL.htm
readme=:install.htm
readme=:INSTALL.txt
readme=:install.txt
readme=:INSTALL
readme=:install

# Repositories.
# There are 2 options, please choose one:
#
# Option 1 - separate entries for each repo
#
#repo.url=My-Repo
#repo.path=/home/someuser/repos/My-Repo
#repo.desc=Some description
#repo.owner=author@some.email
#repo.readme=info/web/about.html
#
# Option 2 - a list with all repos
# (description, owner etc can be indicated inside repos)
#
enable-git-config=1
scan-path=/home/git/repos

```

## /home/git/uwsgi.cgit.ini
```sh
[uwsgi]
; enables logging via the system-default syslog program
; (for example, syslog-ng)
logger = syslog

; recommended for all your apps, unless you're using emperor
; https://stackoverflow.com/a/35080578
master = true

; can be nginx or of other web-server
; CAN NOT BE ROOT !!
uid = nginx
gid = nginx

; please tune according to your needs
processes = 1
threads = 4

; cgit requires cgi
plugins = cgi

; location where all uwsgi plugins were installed
plugins-dir = /usr/lib64/uwsgi/

; modifier for uwsgi packets to fit into cgi standard
; https://uwsgi-docs.readthedocs.io/en/latest/Protocol.html
http-modifier1 = 9

; name can be any
socket = /run/uwsgi_cgit/uwsgi_cgit.sock
chmod-socket = 600
pidfile = /run/uwsgi_cgit/uwsgi_cgit.pid

; can be any address:port on localhost
; useful for debugging - just curl that address
; http = 127.0.0.7:7777

; location where the cgi binary was installed
; MUST BE CHANGED accordingly in case of installing another cgit version
chdir = /usr/share/webapps/cgit/1.2.3-r201/hostroot/cgi-bin

; cgi binary name
cgi = cgit.cgi

; this is an alternative to nginx rewrite rule
; "rewrite ^/subdirectory/(.*)$ /subdirectory/$1?url=/$1 break;"
route-uri = ^/(.*) rewrite:/$1
```

```sh
root # ln -s /etc/init.d/uwsgi /etc/init.d/uwsgi.cgit
```

```sh
# Distributed under the terms of the GNU General Public License v2

# Additional options you might want to pass to uWSGI
#
UWSGI_EXTRA_OPTIONS="--ini /home/git/uwsgi.cgit.ini"

# The application will run as nginx:nginx even without these,
# because uid and gid are set to nginx in /home/someuser/uwsgi.cgit.ini,
# but these are necessary for changing permissions of the directory
# /run/uwsgi_cgit (and permitting the application to create a socket there)
#
UWSGI_USER=nginx
UWSGI_GROUP=nginx
```

## nginx

for nginx, just make a server and make sure it looks something like this and add some ssl certs

```sh
server {
    listen 80;
    server_name git.ahwx.org ;

    root /home/git/;
    try_files $uri @cgit;

    location ~* ^.+(cgit.(css|png)|favicon.ico) {
        root /usr/share/webapps/cgit/1.2.3-r201/htdocs/;
        expires 30d;
    }

    location / {
        uwsgi_pass uwsgi_cgit;
        include uwsgi_params;
        uwsgi_param PATH_INFO $1;
        uwsgi_modifier1 9;
        uwsgi_param GIT_HTTP_EXPORT_ALL "";
        uwsgi_param GIT_PROJECT_ROOT /home/git;
    }
}
```

## start it

```sh
rc-service uwsgi.cgit start
rc-service nginx restart
rc-update add uwsgi.cgit default
rc-update add nginx default
```

# make sure to:

* change the version for cgit on every update
* check if git clone works over http
* keep you stuff updated







