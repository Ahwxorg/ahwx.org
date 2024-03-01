/* empty css                          */import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead, f as renderTransition } from '../astro_71295d57.mjs';
import 'clsx';
import { $ as $$Header, a as $$Heading, b as $$Paragraph, c as $$Layout } from './404_5c8b0a9f.mjs';
import { $ as $$NormalLink } from './go_95ceadc3.mjs';
/* empty css                              */
const $$Astro = createAstro();
const $$Instances = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Instances;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Ahwx >> Instances", "description": "Ahwx' cozy instances" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<div class="h-40"></div> <main> ${renderComponent($$result2, "Heading", $$Heading, {}, { "default": ($$result3) => renderTemplate`<span class="text-2xl text-pink-300">「ahwx <span class="text-indigo-300">♥</span>」</span>` })} ${renderComponent($$result2, "Paragraph", $$Paragraph, { "data-astro-transition-scope": renderTransition($$result2, "xvb5l5uc", "", "Paragraph") }, { "default": ($$result3) => renderTemplate`
See my ${renderComponent($$result3, "NormalLink", $$NormalLink, { "href": "/go", "text": "Go! page" })}.
` })} </main> ` })}`;
}, "/home/liv/Development/ahwx.org/src/pages/instances.astro", "self");

const $$file = "/home/liv/Development/ahwx.org/src/pages/instances.astro";
const $$url = "/instances";

export { $$Instances as default, $$file as file, $$url as url };
