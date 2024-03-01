/* empty css                          */import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead, f as renderTransition } from '../astro_71295d57.mjs';
import 'clsx';
import { $ as $$Header, a as $$Heading, b as $$Paragraph, c as $$Layout } from './404_5c8b0a9f.mjs';
/* empty css                              */
const $$Astro = createAstro();
const $$Github = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Github;
  return renderTemplate`<meta http-equiv="refresh" content="0; url=https://github.com/Ahwxorg">${renderComponent($$result, "Layout", $$Layout, { "title": "Ahwx >> GitHub", "description": "Ahwx' cozy GitHub page" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, {})}${maybeRenderHead()}<div class="h-40"></div><main>${renderComponent($$result2, "Heading", $$Heading, {}, { "default": ($$result3) => renderTemplate`<span class="text-2xl text-pink-300">「ahwx <span class="text-indigo-300">♥</span>」</span>` })}${renderComponent($$result2, "Paragraph", $$Paragraph, { "data-astro-transition-scope": renderTransition($$result2, "xgx3sx5w", "", "Paragraph") }, { "default": ($$result3) => renderTemplate`This page should redirect to my <a class="underline underline-offset-1 text-indigo-300" href="https://github.com/Ahwxorg">GitHub account</a>. If it does not, click <a class="underline underline-offset-1 text-indigo-300" href="https://github.com/Ahwxorg">here</a>.` })}</main>` })}`;
}, "/home/liv/Development/ahwx.org/src/pages/github.astro", "self");

const $$file = "/home/liv/Development/ahwx.org/src/pages/github.astro";
const $$url = "/github";

export { $$Github as default, $$file as file, $$url as url };
