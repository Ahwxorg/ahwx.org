/* empty css                          */import { a as createComponent, r as renderTemplate, e as renderComponent, u as unescapeHTML } from '../astro_71295d57.mjs';
import 'clsx';
import { $ as $$BlogPost } from './bedrock-linux_cd29f8c0.mjs';

const html = "<h1 id=\"why-discord-is-bad\">Why Discord is bad</h1>\n<blockquote>\n<p>Because I think this is very important, please share any other information with me using my <a href=\"https://ahwx.org/contact\">contact information</a>.</p>\n</blockquote>\n<ul>\n<li>\n<p>Discord has changed their ToS to allow them to record your voice/video/screensharing. See screenshow below.</p>\n</li>\n<li>\n<p>Discord itself requires running a closed source client/program on your computer/browser. That alone is a reason for me to only run it in the browser unless I really need to run it on my computer.</p>\n</li>\n<li>\n<p>Discord reportedly collects lots of data about users. There is no way to prove this wrong, as Discord is closed source.</p>\n</li>\n<li>\n<p>Discord requires phone number verification when logging in over Tor and VPNs</p>\n</li>\n<li>\n<p>Users report that Discord <a href=\"https://r.ahwx.org/r/discordapp/comments/7y71y6/account_disabled/\">shut off their accounts</a> and <a href=\"https://r.ahwx.org/r/discordapp/comments/7arzdn/my_account_has_been_disabled_with_no_reason_given/\">won’t tell them why</a>. I myself have seen this happen numerous times.</p>\n</li>\n</ul>\n<p><img src=\"https://ahwx.org/pub/discord.png\" alt=\"screenshot of reddit post explaining discord&#x27;s new tos changes\"></p>\n<p><img src=\"https://ahwx.org/pub/discord-tor.png\" alt=\"screenshot of discord prompting me for phone verification after connecting from tor\"></p>\n<p>I myself will not be using Discord (regularly) after they change their ToS at 2023-03-26.</p>";

				const frontmatter = {"layout":"../../layouts/blogPost.astro","title":"Discord sucks, a lot.","pubDate":"2023-03-10T00:00:00.000Z","description":"Please do not use Discord...","author":"Ahwx"};
				const file = "/home/liv/Development/ahwx.org/src/pages/blog/discord.md";
				const url = "/blog/discord";
				function rawContent() {
					return "\n# Why Discord is bad\n\n> Because I think this is very important, please share any other information with me using my [contact information](https://ahwx.org/contact).\n\n* Discord has changed their ToS to allow them to record your voice/video/screensharing. See screenshow below.\n\n* Discord itself requires running a closed source client/program on your computer/browser. That alone is a reason for me to only run it in the browser unless I really need to run it on my computer.\n\n* Discord reportedly collects lots of data about users. There is no way to prove this wrong, as Discord is closed source.\n\n* Discord requires phone number verification when logging in over Tor and VPNs\n\n* Users report that Discord [shut off their accounts](https://r.ahwx.org/r/discordapp/comments/7y71y6/account_disabled/) and [won't tell them why](https://r.ahwx.org/r/discordapp/comments/7arzdn/my_account_has_been_disabled_with_no_reason_given/). I myself have seen this happen numerous times.\n\n![screenshot of reddit post explaining discord's new tos changes](https://ahwx.org/pub/discord.png)\n\n![screenshot of discord prompting me for phone verification after connecting from tor](https://ahwx.org/pub/discord-tor.png)\n\nI myself will not be using Discord (regularly) after they change their ToS at 2023-03-26.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"why-discord-is-bad","text":"Why Discord is bad"}];
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
