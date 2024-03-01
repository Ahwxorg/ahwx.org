/* empty css                          */import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead, f as renderTransition } from '../astro_71295d57.mjs';
import 'clsx';
import { $ as $$Header, a as $$Heading, H as Home, d as Home$1, b as $$Paragraph, c as $$Layout } from './404_5c8b0a9f.mjs';
/* empty css                              */
const $$Astro$1 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Ahwx >> Home", "description": "Ahwx' cozy homepage" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<div class="h-40"></div> <main> ${renderComponent($$result2, "Heading", $$Heading, {}, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Greeting", Home, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/liv/Development/ahwx.org/src/components/Greeting", "client:component-export": "default" })}, I'm <span class="text-2xl text-pink-300">「ahwx <span class="text-indigo-300">♥</span>」</span>` })} ${renderComponent($$result2, "Heading", $$Heading, {}, { "default": ($$result3) => renderTemplate`I'm a ${renderComponent($$result3, "Introduction", Home$1, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/liv/Development/ahwx.org/src/components/Introduction", "client:component-export": "default" })}.` })} ${renderComponent($$result2, "Paragraph", $$Paragraph, { "data-astro-transition-scope": renderTransition($$result2, "ralnyjf7", "", "Paragraph") }, { "default": ($$result3) => renderTemplate`
Welcome to my own cozy little corner on the internet :3! This place is trying its best to be my personal website. I don't want to tell you too much about myself, and you don't want to read a wall of text. I love GNU/Linux, servers, networking etc. Just go and read my blog if you care or follow me on <a class="underline-offset-1 underline text-indigo-300" rel="me" href="https://tilde.zone/@ahwx">Mastodon</a>. As for this site... I just like the 2000 era of computing, and all previous version were more based on that. I wanted to try the Art stack (<a href="https://astro.build" class="underline-offset-1 underline text-indigo-300">Astro</a>/<a href="https://reactjs.org" class="underline-offset-1 underline text-indigo-300">React</a>/<a href="https://tailwindcss.com/" class="underline-offset-1 underline text-indigo-300">TailwindCSS</a>) since that is what I also use in other projects.<br><br>
If you support me, or might like what I do, consider <a class="underline underline-offset-1 text-indigo-300" href="/donate">donating</a>. Also, please sign <a class="underline underline-offset-1 text-indigo-300" href="https://ahwx.123guestbook.com/">my guestbook here</a> (external link)!
` })} ${renderComponent($$result2, "Heading", $$Heading, {}, { "default": ($$result3) => renderTemplate`<span class="text-2xl text-pink-300">「about <span class="text-indigo-300"><abbr title="This is a Korean character, it looks a bit like a person, and it also means 'smiling'.">웃<abbr></abbr></abbr></span>」</span>` })} ${renderComponent($$result2, "Paragraph", $$Paragraph, { "data-astro-transition-scope": renderTransition($$result2, "a3gxg3gc", "", "Paragraph") }, { "default": ($$result3) => renderTemplate`
This place is a home for my psychological dysfunctioning, I write on my blog whenever I feel like writing. I love this place because I am in control, there is no censorship or manipulation, you can visit from <a class="underline underline-offset-1 text-indigo-300" href="https://torproject.org" class="underline underline-offset-1 text-indigo-300">Tor</a> if you'd like. This website is written using <a href="https://astro.build" class="underline-offset-1 underline text-indigo-300">Astro</a>. I also used <a href="https://reactjs.org" class="underline-offset-1 underline text-indigo-300">React</a> and <a href="https://tailwindcss.com/" class="underline-offset-1 underline text-indigo-300">TailwindCSS</a>.
` })} ${renderComponent($$result2, "Paragraph", $$Paragraph, {}, { "default": ($$result3) => renderTemplate`
Join our Matrix chatroom over at #main:ahwx.org!
` })} </main> ` })}`;
}, "/home/liv/Development/ahwx.org/src/pages/index.astro", "self");

const $$file$1 = "/home/liv/Development/ahwx.org/src/pages/index.astro";
const $$url$1 = "";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Ahwx >> Other", "description": "Ahwx' cozy other collection page" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<div class="h-40"></div> <main> ${renderComponent($$result2, "Heading", $$Heading, {}, { "default": ($$result3) => renderTemplate`<span class="text-2xl text-pink-300">「ahwx <span class="text-indigo-300">♥</span>」</span>` })} ${renderComponent($$result2, "Paragraph", $$Paragraph, { "data-astro-transition-scope": renderTransition($$result2, "zajpv5at", "", "Paragraph") }, { "default": ($$result3) => renderTemplate` <ul> <li><a class="underline underline-offset-1 text-indigo-300" href="/other/alternatives">Software alternatives</a> I recommend.</li> <li>My <a class="underline underline-offset-1 text-indigo-300" href="/other/wishlist">wishlist</a>.</li> <li>The <a class="underline underline-offset-1 text-indigo-300" href="/other/hosts">devices and hostnames that I use</a>.</li> <li>Options to <a class="underline underline-offset-1 text-indigo-300" href="/donate">donate</a></li> </ul> ` })} </main> ` })}`;
}, "/home/liv/Development/ahwx.org/src/pages/other/index.astro", "self");

const $$file = "/home/liv/Development/ahwx.org/src/pages/other/index.astro";
const $$url = "/other";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index as a, index$1 as i };
