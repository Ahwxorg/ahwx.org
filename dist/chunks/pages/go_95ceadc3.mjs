/* empty css                          */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, e as renderComponent, f as renderTransition } from '../astro_71295d57.mjs';
import 'clsx';
import { $ as $$Header, a as $$Heading, H as Home, d as Home$1, b as $$Paragraph, c as $$Layout } from './404_5c8b0a9f.mjs';
/* empty css                              */
const $$Astro$1 = createAstro();
const $$NormalLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$NormalLink;
  const { text, href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} target="_blank" class="underline underline-offset-1 text-indigo-300">${text}</a>`;
}, "/home/liv/Development/ahwx.org/src/components/NormalLink.astro", void 0);

const $$Astro = createAstro();
const $$Go = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Go;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Ahwx >> Go!", "description": "Ahwx' cozy Go! page" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<div class="h-40"></div> <main> ${renderComponent($$result2, "Heading", $$Heading, {}, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Greeting", Home, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/liv/Development/ahwx.org/src/components/Greeting", "client:component-export": "default" })}, I'm <span class="text-2xl text-pink-300">「ahwx <span class="text-indigo-300">♥</span>」</span>` })} ${renderComponent($$result2, "Heading", $$Heading, {}, { "default": ($$result3) => renderTemplate`I'm a ${renderComponent($$result3, "Introduction", Home$1, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/liv/Development/ahwx.org/src/components/Introduction", "client:component-export": "default" })}.` })} ${renderComponent($$result2, "Paragraph", $$Paragraph, { "data-astro-transition-scope": renderTransition($$result2, "cbz4j5sq", "", "Paragraph") }, { "default": ($$result3) => renderTemplate` <ul> <li class="pt-2">${renderComponent($$result3, "NormalLink", $$NormalLink, { "href": "/blog", "text": "Blog" })}</li> <li class="pt-2">${renderComponent($$result3, "NormalLink", $$NormalLink, { "href": "https://matrix.to/#/@ahwx:ahwx.org", "text": "Matrix" })}</li> <li class="pt-2">${renderComponent($$result3, "NormalLink", $$NormalLink, { "href": "https://tilde.zone/@ahwx", "text": "Mastodon" })}</li> <li class="pt-2">${renderComponent($$result3, "NormalLink", $$NormalLink, { "href": "/github", "text": "GitHub" })}</li> </ul> ` })} ${renderComponent($$result2, "Paragraph", $$Paragraph, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Heading", $$Heading, {}, { "default": ($$result4) => renderTemplate`Services I host` })} ` })} ${renderComponent($$result2, "Paragraph", $$Paragraph, {}, { "default": ($$result3) => renderTemplate` <ul> <li>Invidious: ${renderComponent($$result3, "NormalLink", $$NormalLink, { "href": "https://yt.ahwx.org", "text": "Clearweb" })} | ${renderComponent($$result3, "NormalLink", $$NormalLink, { "href": "http://fcajtfmklq2t2zyc5p2yvwkok2gqm6kej6bipgm4umhioscpokx2lwad.onion", "text": "Tor" })}</li> <li>LibreY instance 1: ${renderComponent($$result3, "NormalLink", $$NormalLink, { "href": "https://search.ahwx.org", "text": "Clearweb" })} | ${renderComponent($$result3, "NormalLink", $$NormalLink, { "href": "http://wn5jl6fxlzzfenlyu3lc4q7jpw2saplrywxvxtvqbguotwd4y5cjeuqd.onion/", "text": "Tor" })}</li> <li>LibreY instance 2: ${renderComponent($$result3, "NormalLink", $$NormalLink, { "href": "https://search2.ahwx.org", "text": "Clearweb" })} | ${renderComponent($$result3, "NormalLink", $$NormalLink, { "href": "http://hyy7rcvknwb22v4nnoar635wntiwr4uwzhiuyimemyl4fz6k7tahj5id.onion/", "text": "Tor" })}</li> <li>Binternet: ${renderComponent($$result3, "NormalLink", $$NormalLink, { "href": "https://binternet.ahwx.org", "text": "Clearweb" })} | ${renderComponent($$result3, "NormalLink", $$NormalLink, { "href": "http://ttyaq2vjaxdzjmi6zta6vutzhoquunnqozesg4rj6ibpr477jujaxoqd.onion", "text": "Tor" })}</li> <li>Nitter: ${renderComponent($$result3, "NormalLink", $$NormalLink, { "href": "https://nitter.ahwx.org", "text": "Clearweb" })} | ${renderComponent($$result3, "NormalLink", $$NormalLink, { "href": "http://xxrxbae7tw2auxmq2bkigtpaklu5bepiybgl6arqg5a7puv6cyt3h4id.onion", "text": "Tor" })}</li> <li>SimplyTranslate: ${renderComponent($$result3, "NormalLink", $$NormalLink, { "href": "https://translate.ahwx.org", "text": "Clearweb" })} | ${renderComponent($$result3, "NormalLink", $$NormalLink, { "href": "http://h7ehq5i6bnqjlypp2qek434p6diyxa2ipmhzbmxmogjtoitearrxamqd.onion", "text": "Tor" })}</li> <li>Service uptime monitor: ${renderComponent($$result3, "NormalLink", $$NormalLink, { "href": "https://up.ahwx.org/", "text": "Clearweb" })} </li></ul> ` })} </main> ` })}`;
}, "/home/liv/Development/ahwx.org/src/pages/go.astro", "self");

const $$file = "/home/liv/Development/ahwx.org/src/pages/go.astro";
const $$url = "/go";

const go = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Go,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$NormalLink as $, go as g };
