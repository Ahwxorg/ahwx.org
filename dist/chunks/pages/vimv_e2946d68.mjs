/* empty css                          */import { a as createComponent, r as renderTemplate, e as renderComponent, u as unescapeHTML } from '../astro_71295d57.mjs';
import 'clsx';
import { $ as $$BlogPost } from './bedrock-linux_cd29f8c0.mjs';

const html = "<hr>\n<h2 id=\"title-rename-files-with-vimvdate-2022-11-07\">title: rename files with vimv\ndate: 2022-11-07</h2>\n<h1 id=\"vimv\">vimv</h1>\n<h2 id=\"example-i-rename-my-pictures-to-11000extention\">example: i rename my pictures to {1…1000}.$extention</h2>\n<p>Go into the folder where you want to bulk rename and enter the following Vim command. First remove any other names of any files if there are any, so that you get a list of file name extentions such as this:</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color:#B392F0\">.png</span></span>\n<span class=\"line\"><span style=\"color:#B392F0\">.jpg</span></span>\n<span class=\"line\"><span style=\"color:#B392F0\">.jpg</span></span>\n<span class=\"line\"><span style=\"color:#B392F0\">.jpg</span></span>\n<span class=\"line\"><span style=\"color:#B392F0\">.png</span></span></code></pre>\n<p>You can do this easily using :%s and/or the V-Block editor, which you can use with Ctrl + V.</p>\n<p>Now you can enter this command:</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color:#79B8FF\">:</span><span style=\"color:#E1E4E8\">%s/^/\\=</span><span style=\"color:#79B8FF\">printf</span><span style=\"color:#E1E4E8\">(</span><span style=\"color:#B392F0\">'%-4d'</span><span style=\"color:#B392F0\">,</span><span style=\"color:#9ECBFF\"> line</span><span style=\"color:#E1E4E8\">(</span><span style=\"color:#B392F0\">'.'</span><span style=\"color:#E1E4E8\">)) </span></span></code></pre>";

				const frontmatter = {"layout":"../../layouts/blogPost.astro","title":"Awesome batch renaming with VimV","pubDate":"2022-11-07T00:00:00.000Z","description":"A cool little script for Vim","author":"Ahwx"};
				const file = "/home/liv/Development/ahwx.org/src/pages/blog/vimv.md";
				const url = "/blog/vimv";
				function rawContent() {
					return "\n---\ntitle: rename files with vimv\ndate: 2022-11-07\n---\n\n# vimv\n\n## example: i rename my pictures to {1...1000}.$extention\n\nGo into the folder where you want to bulk rename and enter the following Vim command. First remove any other names of any files if there are any, so that you get a list of file name extentions such as this:\n\n```sh\n.png\n.jpg\n.jpg\n.jpg\n.png\n```\n\nYou can do this easily using :%s and/or the V-Block editor, which you can use with Ctrl + V.\n\nNow you can enter this command:\n\n```sh\n:%s/^/\\=printf('%-4d', line('.')) \n```\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"title-rename-files-with-vimvdate-2022-11-07","text":"title: rename files with vimv\ndate: 2022-11-07"},{"depth":1,"slug":"vimv","text":"vimv"},{"depth":2,"slug":"example-i-rename-my-pictures-to-11000extention","text":"example: i rename my pictures to ${1…1000}.$extention"}];
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
