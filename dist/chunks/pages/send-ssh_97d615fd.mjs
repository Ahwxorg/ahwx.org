/* empty css                          */import { a as createComponent, r as renderTemplate, e as renderComponent, u as unescapeHTML } from '../astro_71295d57.mjs';
import 'clsx';
import { $ as $$BlogPost } from './bedrock-linux_cd29f8c0.mjs';

const html = "<hr>\n<h2 id=\"title-send-file-over-ssh-using-scp\">title: send file over ssh using scp</h2>\n<h1 id=\"introduction\">introduction</h1>\n<p>you can send files to your server without opening some random port or using a docker container or something very easily, over ssh using scp.</p>\n<h1 id=\"how-to\">how-to:</h1>\n<p>for this blog i am using prose.sh, i send my markdown files to them using scp:</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color:#B392F0\">scp</span><span style=\"color:#9ECBFF\"> ~/dev/blog/</span><span style=\"color:#79B8FF\">*</span><span style=\"color:#9ECBFF\">.md</span><span style=\"color:#9ECBFF\"> ahwx@prose.sh:/</span></span></code></pre>\n<p>or sending images to my server, or a backup:</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color:#B392F0\">scp</span><span style=\"color:#9ECBFF\"> ~/pix</span><span style=\"color:#9ECBFF\"> snowflake:/mnt/raid/pix/</span></span></code></pre>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color:#B392F0\">scp</span><span style=\"color:#9ECBFF\"> \"/mnt/usb1/backup-$(</span><span style=\"color:#B392F0\">date</span><span style=\"color:#9ECBFF\">).tar.gz\"</span><span style=\"color:#9ECBFF\"> snowflake:/mnt/raid/backups/</span></span></code></pre>\n<blockquote>\n<p><code>snowflake</code> works here, since i have some details about <code>snowflake</code> in my <code>~/.ssh/config</code> file.</p>\n</blockquote>\n<h1 id=\"why\">why?</h1>\n<p>because you:</p>\n<p>1: dont need to open another port\n2: can use very secure ssh keys\n3: dont have to depend on sluggish web apps\n4: can use it almost everywhere: bsd, mac, (gnu/)linux and windows, all of those support ssh/scp.</p>";

				const frontmatter = {"layout":"../../layouts/blogPost.astro","title":"Send a file over SSH using SCP","pubDate":"2022-07-09T00:00:00.000Z","description":"A secure way to send files over SSH","author":"Ahwx"};
				const file = "/home/liv/Development/ahwx.org/src/pages/blog/send-ssh.md";
				const url = "/blog/send-ssh";
				function rawContent() {
					return "\n---\ntitle: send file over ssh using scp\n---\n\n# introduction\n\nyou can send files to your server without opening some random port or using a docker container or something very easily, over ssh using scp.\n\n# how-to:\n\nfor this blog i am using prose.sh, i send my markdown files to them using scp:\n\n```sh\nscp ~/dev/blog/*.md ahwx@prose.sh:/\n```\n\nor sending images to my server, or a backup:\n\n```sh\nscp ~/pix snowflake:/mnt/raid/pix/\n```\n\n```sh\nscp \"/mnt/usb1/backup-$(date).tar.gz\" snowflake:/mnt/raid/backups/\n```\n\n> `snowflake` works here, since i have some details about `snowflake` in my `~/.ssh/config` file.\n\n# why?\n\nbecause you:\n\n1: dont need to open another port\n2: can use very secure ssh keys\n3: dont have to depend on sluggish web apps\n4: can use it almost everywhere: bsd, mac, (gnu/)linux and windows, all of those support ssh/scp.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"title-send-file-over-ssh-using-scp","text":"title: send file over ssh using scp"},{"depth":1,"slug":"introduction","text":"introduction"},{"depth":1,"slug":"how-to","text":"how-to:"},{"depth":1,"slug":"why","text":"why?"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$BlogPost, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
