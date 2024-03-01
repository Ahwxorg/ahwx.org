/* empty css                          */import { a as createComponent, r as renderTemplate, e as renderComponent, u as unescapeHTML } from '../astro_71295d57.mjs';
import 'clsx';
import { $ as $$BlogPost } from './bedrock-linux_cd29f8c0.mjs';

const html = "<h1 id=\"the-quest-for-a-good-browser\">The quest for a good browser</h1>\n<h2 id=\"why\">Why</h2>\n<p>So this began when I tried to use ungoogled-chromium and found out that they do some not-so-cool manifest stuff. The obvious solution was using another browser, but, all of the browsers I tried had issues. I tried:</p>\n<h2 id=\"firefox\">Firefox</h2>\n<p>Firefox does not seem to like Vimium and I need that, the rest of Firefox is awesome.</p>\n<h2 id=\"safari\">Safari</h2>\n<p>Safari does not have anything like Vimium except Vimari made by peppy, the creator of osu!. It’s pretty nice, except it does not include any of the shortcuts I want.</p>\n<h2 id=\"orion\">Orion</h2>\n<p>Orion does not like Vimium. Neither as a Firefox nor Chromium plugin.</p>\n<h2 id=\"arc\">Arc</h2>\n<p>Arc hitted me with a “sign in pwease we need your data pwetty pwease” and I don’t want that :L</p>\n<h2 id=\"opera-gx\">Opera (GX)</h2>\n<p>Spyware.</p>\n<h2 id=\"other-browser-xyz\">Other browser xyz?</h2>\n<p>I did not know any other browsers, and so I am still using ungoogled-chromium at the moment. Please help :P</p>";

				const frontmatter = {"layout":"../../layouts/blogPost.astro","title":"The quest for a good browser","pubDate":"2023-08-14T00:00:00.000Z","description":"All browsers ever suck.","author":"Ahwx"};
				const file = "/home/liv/Development/ahwx.org/src/pages/blog/browser-quest.md";
				const url = "/blog/browser-quest";
				function rawContent() {
					return "\n# The quest for a good browser\n\n## Why\n\nSo this began when I tried to use ungoogled-chromium and found out that they do some not-so-cool manifest stuff. The obvious solution was using another browser, but, all of the browsers I tried had issues. I tried:\n\n## Firefox\n\nFirefox does not seem to like Vimium and I need that, the rest of Firefox is awesome.\n\n## Safari\n\nSafari does not have anything like Vimium except Vimari made by peppy, the creator of osu!. It's pretty nice, except it does not include any of the shortcuts I want.\n\n## Orion\n\nOrion does not like Vimium. Neither as a Firefox nor Chromium plugin.\n\n## Arc\n\nArc hitted me with a \"sign in pwease we need your data pwetty pwease\" and I don't want that :L\n\n## Opera (GX)\n\nSpyware.\n\n## Other browser xyz?\n\nI did not know any other browsers, and so I am still using ungoogled-chromium at the moment. Please help :P\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"the-quest-for-a-good-browser","text":"The quest for a good browser"},{"depth":2,"slug":"why","text":"Why"},{"depth":2,"slug":"firefox","text":"Firefox"},{"depth":2,"slug":"safari","text":"Safari"},{"depth":2,"slug":"orion","text":"Orion"},{"depth":2,"slug":"arc","text":"Arc"},{"depth":2,"slug":"opera-gx","text":"Opera (GX)"},{"depth":2,"slug":"other-browser-xyz","text":"Other browser xyz?"}];
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
