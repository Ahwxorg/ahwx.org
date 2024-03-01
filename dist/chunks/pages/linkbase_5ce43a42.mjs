/* empty css                          */import { a as createComponent, r as renderTemplate, e as renderComponent, u as unescapeHTML } from '../astro_71295d57.mjs';
import 'clsx';
import { $ as $$BlogPost } from './bedrock-linux_cd29f8c0.mjs';

const html = "<h1 id=\"introducing-linkbase\">Introducing Linkbase</h1>\n<h2 id=\"what\">What?</h2>\n<p><a href=\"https://docs.ahwx.org\">Linkbase</a> is trying its best to be a huge list of links on subjects I read about.</p>\n<h2 id=\"why\">Why?</h2>\n<p>It started with <a href=\"/browser-quest\">the quest for a good browser</a>. As of writing this, I have 236 tabs open. Since I dislike having this much tabs open (mainly because that “forces” me to use a browser), I tried some alternatives such as bookmarks etc, but I found bookmarks a bit broad. When I found VitePress, a very cool static site generator. I tried playing around with it and thus I made a bookmark place for myself and possibly others.</p>";

				const frontmatter = {"layout":"../../layouts/blogPost.astro","title":"Introducing Linkbase","pubDate":"2023-09-10T00:00:00.000Z","description":"I decided to start documenting my learnings.","author":"Ahwx"};
				const file = "/home/liv/Development/ahwx.org/src/pages/blog/linkbase.md";
				const url = "/blog/linkbase";
				function rawContent() {
					return "\n# Introducing Linkbase\n\n## What?\n\n[Linkbase](https://docs.ahwx.org) is trying its best to be a huge list of links on subjects I read about.\n\n## Why?\n\nIt started with [the quest for a good browser](/browser-quest). As of writing this, I have 236 tabs open. Since I dislike having this much tabs open (mainly because that \"forces\" me to use a browser), I tried some alternatives such as bookmarks etc, but I found bookmarks a bit broad. When I found VitePress, a very cool static site generator. I tried playing around with it and thus I made a bookmark place for myself and possibly others.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"introducing-linkbase","text":"Introducing Linkbase"},{"depth":2,"slug":"what","text":"What?"},{"depth":2,"slug":"why","text":"Why?"}];
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
