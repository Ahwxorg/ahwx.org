/* empty css                          */import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead, f as renderTransition } from '../astro_71295d57.mjs';
import 'clsx';
import { $ as $$Header, a as $$Heading, b as $$Paragraph, c as $$Layout } from './404_5c8b0a9f.mjs';
/* empty css                              */
const $$Astro = createAstro();
const $$Donate = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Donate;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Ahwx >> Donate", "description": "Ahwx' cozy donation page" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<div class="h-40"></div> <main> ${renderComponent($$result2, "Heading", $$Heading, {}, { "default": ($$result3) => renderTemplate`<span class="text-2xl text-pink-300">「ahwx <span class="text-indigo-300">♥</span>」</span>` })} ${renderComponent($$result2, "Paragraph", $$Paragraph, { "data-astro-transition-scope": renderTransition($$result2, "22gr3kjm", "", "Paragraph") }, { "default": ($$result3) => renderTemplate` <ul> <li>You can donate using Monero/XMR: <span class="underline underline-offset-1 text-indigo-300">4ArntPzKpu32s4z2XqYhyaY1eUeUBKtCzJqEqxWtF5mCi5vR6sdhh32Hd2fk9FjeUxYDtaaUexUqoRNxrgfrtuXs4XpgMNJ</span></li> <li>You can also ${renderComponent($$result3, "NormalLink", NormalLink, { "href": "https://buymeacoffee/ahwx" }, { "default": ($$result4) => renderTemplate`buy me a coffee (preferred)` })}.
</li></ul> ` })} </main> ` })}`;
}, "/home/liv/Development/ahwx.org/src/pages/donate.astro", "self");

const $$file = "/home/liv/Development/ahwx.org/src/pages/donate.astro";
const $$url = "/donate";

export { $$Donate as default, $$file as file, $$url as url };
