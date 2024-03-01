/* empty css                          */import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead, f as renderTransition } from '../astro_71295d57.mjs';
import 'clsx';
import { $ as $$Header, a as $$Heading, b as $$Paragraph, c as $$Layout } from './404_5c8b0a9f.mjs';
/* empty css                              */
const $$Astro = createAstro();
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Ahwx >> Contact", "description": "Ahwx' cozy contact page" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<div class="h-40"></div> <main> ${renderComponent($$result2, "Heading", $$Heading, {}, { "default": ($$result3) => renderTemplate`<span class="text-2xl text-pink-300">「ahwx <span class="text-indigo-300">♥</span>」</span>` })} ${renderComponent($$result2, "Paragraph", $$Paragraph, { "data-astro-transition-scope": renderTransition($$result2, "zzu22ndd", "", "Paragraph") }, { "default": ($$result3) => renderTemplate`
You can contact me if you like using the options below.<br><br> <span class="bg-yellow-300 text-slate-900 rounded-xl"><code>‎ Note: please do not email me about copyright issues on <a class="underline underline-offset-1" href="https://search.ahwx.org">LibreY</a>/<a class="underline underline-offset-1" href="https://r.ahwx.org">Libreddit</a>/<a class="underline underline-offset-1" href="https://binternet.ahwx.org">Binternet</a>. The images are not on our servers, we just serve a link or a proxy to those images. ‎</code></span> <ul class="pt-2"> <li>Matrix: <code class="bg-indigo-950 rounded-xl">‎ @ahwx:ahwx.org ‎</code> <a class="underline-offset-1 underline text-indigo-300" href="https://ahwx.org/matrix.php">(instructions here)</a></li> <li>Mail: <code class="bg-indigo-950 rounded-xl">‎ ahwx at ahwx dot org ‎</code></li> </ul> ` })} </main> ` })}`;
}, "/home/liv/Development/ahwx.org/src/pages/contact.astro", "self");

const $$file = "/home/liv/Development/ahwx.org/src/pages/contact.astro";
const $$url = "/contact";

export { $$Contact as default, $$file as file, $$url as url };
