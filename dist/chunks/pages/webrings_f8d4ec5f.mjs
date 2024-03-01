/* empty css                          */import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead, f as renderTransition } from '../astro_71295d57.mjs';
import 'clsx';
import { $ as $$Header, a as $$Heading, b as $$Paragraph, c as $$Layout } from './404_5c8b0a9f.mjs';
/* empty css                              */
const $$Astro = createAstro();
const $$Webrings = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Webrings;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Ahwx >> Webrings", "description": "Ahwx' cozy webrings" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<div class="h-40"></div> <main> ${renderComponent($$result2, "Heading", $$Heading, {}, { "default": ($$result3) => renderTemplate`<span class="text-2xl text-pink-300">「ahwx <span class="text-indigo-300">♥</span>」</span>` })} ${renderComponent($$result2, "Paragraph", $$Paragraph, { "data-astro-transition-scope": renderTransition($$result2, "k7yqzgzk", "", "Paragraph") }, { "default": ($$result3) => renderTemplate`
A webring is a list of websites which are somewhat related to eachother, often used before the 2001's. Webrings were usually used to connect sites together before the web was all commercial. That's why I have some on my website; to fight for the old web to come back! :)<br><br> <ul class="pt-2">
Hotline: <a class="underline underline-offset-1 text-indigo-300" href="https://hotlinewebring.club/ahwxorg/previous" target="_blank" rel="noopener nofollow">Previous</a> — <a class="underline underline-offset-1 text-indigo-300" href="https://hotlinewebring.club/ahwxorg/next" target="_blank" rel="noopener nofollow">Next</a><br>
Retronout: <a class="underline underline-offset-1 text-indigo-300" href="https://webring.dinhe.net/prev/ahwx.org" target="_blank" rel="noopener nofollow">Previous</a> - <a class="underline underline-offset-1 text-indigo-300" href="https://webring.dinhe.net/next/ahwx.org" target="_blank" rel="noopener nofollow">Next</a><br>
Yesterweb: <a class="underline underline-offset-1 text-indigo-300" href="https://webring.yesterweb.org/noJS/index.php?d=prev&url=https://ahwx.org" target="_blank" rel="noopener nofollow">Previous</a> - <a class="underline underline-offset-1 text-indigo-300" href="https://webring.yesterweb.org/noJS/index.php?d=rand&url=https://ahwx.org" target="_blank" rel="noopener nofollow">Random</a> - <a class="underline underline-offset-1 text-indigo-300" href="https://webring.yesterweb.org/noJS/index.php?d=next&url=https://ahwx.org" target="_blank" rel="noopener nofollow">Next</a><br>
Safonts:${renderComponent($$result3, "ring-900", "ring-900", { "site": "https://ahwx.org/" })}<br> </ul> ` })} </main> ` })}`;
}, "/home/liv/Development/ahwx.org/src/pages/webrings.astro", "self");

const $$file = "/home/liv/Development/ahwx.org/src/pages/webrings.astro";
const $$url = "/webrings";

export { $$Webrings as default, $$file as file, $$url as url };
