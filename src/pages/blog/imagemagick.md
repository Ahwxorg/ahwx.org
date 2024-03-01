---
layout: ../../layouts/blogPost.astro
title: "ImageMagick rocks, here's why"
pubDate: 2023-02-02
description: "I used ImageMagick tools to help a friend"
author: "Ahwx"
---

# imagemagick rocks, here's why

> foss ftw :)

## introduction

so today i overheard some complaining about HEIC files not being able to be opened by photoshop on windows, so i got over there, downloaded the imagemagick portable version, copied the files over and gotten it to work with just one command. learn basic terminal usage everyone...

## how does it work?

imagemagick is a program you can use to, well, do magic with images.

### step 1

go to the official website: [imagemagick.org](https://imagemagick.org/script/download.php), and download the portable script if running windows (for gentoo, just emerge imagemagick and for other distro's, use your package manager as that should work). and last, unzip the folder to a new folder, name doesn't matter

### step 2

copy all your images into a folder in the imagemagick folder, such as folder:

```sh
imagemagick (folder)
-convert.exe (file in imagemagick folder)
-etc
-etc
---pictures (folder in imagemagick folder)
----1.HEIC (file in 'pictures' folder in imagemagick folder)
----2.HEIC
----3.HEIC
```

### step 3

open a powershell window, and use the `ls` and `cd` commands to move around. ie:

```sh
PS C:\Users\usegentoo> ls
PS C:\Users\usegentoo> cd Downloads
PS C:\Users\usegentoo> cd imagemagick-version-portable-x64-idk-their-naming-or-yours
PS C:\Users\usegentoo> .\convert.exe pictures\*.HEIC pictures\*.JPEG
```

the convert command does take some time, so you should just let it go for a few minutes. on a ryzen 7 5800x it took about 2 min for 50 pictures ranging from 5-50mb.

### step 4

use this for more than only heic pictures :D

### step 5

enjoy!
