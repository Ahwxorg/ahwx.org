/* empty css                          */import { a as createComponent, r as renderTemplate, e as renderComponent, u as unescapeHTML } from '../astro_71295d57.mjs';
import 'clsx';
import { $ as $$BlogPost } from './bedrock-linux_cd29f8c0.mjs';

const html = "<h1 id=\"switching-to-fish\">Switching to Fish</h1>\n<p>So I’ve been having some speed issues with oh-my-zsh, and I could not find a way to resolve them, and this made me effectively ditch ZSH due to it simply not working (usually about 100-600ms time). I also found out about the Fish shell, and wanted to try it out. By default, fish is already great for me: it has syntax highlighting, smart suggestions and even out-of-the-box aliasing easily added using:</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color:#79B8FF\">alias</span><span style=\"color:#79B8FF\"> -s</span><span style=\"color:#9ECBFF\"> helloworld=\"echo helloworld | dmenu\"</span></span></code></pre>\n<p>So that’s great and all, but it’s not like Bash or ZSH, so there definetely is a learning curve to Fish.</p>\n<p>I’ve currently added my setup to my dotfiles, so you can take a look if you want. I’ve followed the documentation, specifically “Fish for bash users”, which worked great.</p>";

				const frontmatter = {"layout":"../../layouts/blogPost.astro","title":"Switching to the Fish shell","pubDate":"2023-08-14T00:00:00.000Z","description":"A brief overview of Fish","author":"Ahwx"};
				const file = "/home/liv/Development/ahwx.org/src/pages/blog/fish.md";
				const url = "/blog/fish";
				function rawContent() {
					return "\n# Switching to Fish\n\nSo I've been having some speed issues with oh-my-zsh, and I could not find a way to resolve them, and this made me effectively ditch ZSH due to it simply not working (usually about 100-600ms time). I also found out about the Fish shell, and wanted to try it out. By default, fish is already great for me: it has syntax highlighting, smart suggestions and even out-of-the-box aliasing easily added using:\n\n```sh\nalias -s helloworld=\"echo helloworld | dmenu\"\n```\n\nSo that's great and all, but it's not like Bash or ZSH, so there definetely is a learning curve to Fish.\n\nI've currently added my setup to my dotfiles, so you can take a look if you want. I've followed the documentation, specifically \"Fish for bash users\", which worked great.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"switching-to-fish","text":"Switching to Fish"}];
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
