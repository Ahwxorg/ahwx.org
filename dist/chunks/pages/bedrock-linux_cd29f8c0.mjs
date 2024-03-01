/* empty css                          */import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead, d as renderSlot, u as unescapeHTML } from '../astro_71295d57.mjs';
import 'clsx';
import { $ as $$Header, a as $$Heading, b as $$Paragraph, c as $$Layout } from './404_5c8b0a9f.mjs';

const $$Astro = createAstro();
const $$BlogPost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { frontmatter } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Ahwx >> Wishlist", "description": "Ahwx' cozy wishlist" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<div class="h-40"></div> <main> ${renderComponent($$result2, "Heading", $$Heading, {}, { "default": ($$result3) => renderTemplate`<span class="text-2xl text-pink-300">「ahwx <span class="text-indigo-300">♥</span>」</span>` })} ${renderComponent($$result2, "Paragraph", $$Paragraph, {}, { "default": ($$result3) => renderTemplate` <div class="opacity-50">${frontmatter.pubDate.slice(0, 10)}</div> ${renderSlot($$result3, $$slots["default"])} ` })} </main> ` })}`;
}, "/home/liv/Development/ahwx.org/src/layouts/blogPost.astro", void 0);

const html = "<h1 id=\"bedrock-linux\">bedrock linux</h1>\n<blockquote>\n<p>bedrock linux is a meta distribution which allows the user to install other distros into it, you also install it by installing i.e. void/gentoo/arch and hijack that install by the script they provide.</p>\n</blockquote>\n<h2 id=\"pros\">pros:</h2>\n<ul>\n<li>ease of use once you understand it</li>\n<li>you get a shit ton of packages</li>\n<li>it doesn’t use a lot of resoures to be on your system (almost no/within margin of error battery life loss, 20mb ram extra at most)</li>\n<li>easily switch init systems (althought i have not tried that yet)</li>\n<li>of course, it’s linux so that’s already a huge pro</li>\n</ul>\n<h2 id=\"cons\">cons:</h2>\n<ul>\n<li>might be a little overwhelming</li>\n<li>strata (distros) are quite picky with packages, for example if you already have void’s base-devel packages, you need to install them on arch anyways, since they don’t see packages from eachother, which leads to con 2:</li>\n<li>more storage space required (i currently use about 36GiB which includes about 16GiB of fonts)</li>\n<li>some things just don’t work well together, check their website</li>\n</ul>\n<h2 id=\"overall-thoughts\">overall thoughts:</h2>\n<p>i like it very much</p>\n<ul>\n<li>ease of use is great</li>\n<li>packages from debian might be a lot more stable (or they don’t even exist for other distros) than from void, gentoo or arch and thus might be usefull</li>\n<li>it’s cool :]</li>\n</ul>\n<p>so, it’s very likely for me to use it again in the future, but for example on top of gentoo- instead of void gnu/linux.</p>";

				const frontmatter = {"layout":"../../layouts/blogPost.astro","title":"So I installed Bedrock Linux...","pubDate":"2022-12-21T00:00:00.000Z","description":"A small dive into Bedrock Linux","author":"Ahwx"};
				const file = "/home/liv/Development/ahwx.org/src/pages/blog/bedrock-linux.md";
				const url = "/blog/bedrock-linux";
				function rawContent() {
					return "\n# bedrock linux\n> bedrock linux is a meta distribution which allows the user to install other distros into it, you also install it by installing i.e. void/gentoo/arch and hijack that install by the script they provide.\n\n## pros:\n* ease of use once you understand it\n* you get a shit ton of packages\n* it doesn't use a lot of resoures to be on your system (almost no/within margin of error battery life loss, 20mb ram extra at most)\n* easily switch init systems (althought i have not tried that yet)\n* of course, it's linux so that's already a huge pro\n\n## cons:\n* might be a little overwhelming\n* strata (distros) are quite picky with packages, for example if you already have void's base-devel packages, you need to install them on arch anyways, since they don't see packages from eachother, which leads to con 2:\n* more storage space required (i currently use about 36GiB which includes about 16GiB of fonts)\n* some things just don't work well together, check their website\n\n## overall thoughts:\n\ni like it very much\n* ease of use is great\n* packages from debian might be a lot more stable (or they don't even exist for other distros) than from void, gentoo or arch and thus might be usefull\n* it's cool :]\n\nso, it's very likely for me to use it again in the future, but for example on top of gentoo- instead of void gnu/linux.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"bedrock-linux","text":"bedrock linux"},{"depth":2,"slug":"pros","text":"pros:"},{"depth":2,"slug":"cons","text":"cons:"},{"depth":2,"slug":"overall-thoughts","text":"overall thoughts:"}];
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

const bedrockLinux = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content,
  compiledContent,
  default: Content,
  file,
  frontmatter,
  getHeadings,
  rawContent,
  url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$BlogPost as $, bedrockLinux as b };
