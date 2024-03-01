/* empty css                          */import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead, f as renderTransition } from '../astro_71295d57.mjs';
import 'clsx';
import { $ as $$Header, a as $$Heading, b as $$Paragraph, c as $$Layout } from './404_5c8b0a9f.mjs';
/* empty css                              */
const $$Astro = createAstro();
const $$Hosts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hosts;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Ahwx >> Hostnames", "description": "Ahwx' cozy hostnames" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<div class="h-40"></div> <main> ${renderComponent($$result2, "Heading", $$Heading, {}, { "default": ($$result3) => renderTemplate`<span class="text-2xl text-pink-300">「ahwx <span class="text-indigo-300">♥</span>」</span>` })} ${renderComponent($$result2, "Paragraph", $$Paragraph, { "data-astro-transition-scope": renderTransition($$result2, "mrsfpwjk", "", "Paragraph") }, { "default": ($$result3) => renderTemplate` <ul> <h3 class="text-xl font-bold">Servers</h3> <li>ava.ahwx.org > Self-built (Threadripper 1920X, 192GB CL16 3200MHz RAM, Gentoo GNU/Linux)</li> <li>evelyn.ahwx.org > Intel NUC (Pentium N3700, 4GB RAM, Gentoo GNU/Linux)</li> <li>naomi.ahwx.org > Asus K56 (i5-3337U, 8GB RAM, Gentoo GNU/Linux)</li> <li>meow.ahwx.org > Asus Chromebook C200M (Celeron N2830, 2GB RAM, Gentoo GNU/Linux)</li> <h3 class="text-xl font-bold">Network equipment</h3> <li>sediment.ahwx.org > UniFi Dream Machine Pro (8x GbE, 2x SFP+)</li> <li>erosion.ahwx.org > UniFi USW-48-500W (48x GbE, 2x SFP+, 2x SFP)</li> <h3 class="text-xl font-bold">Personal machines</h3> <li>lila.ahwx.org > Main machine (MacBook Pro 14" 2023, M2 Pro, 16GB RAM, Gentoo GNU/Linux) </li> <li>eepy.ahwx.org > Gaming machine (Ryzen 5 5600X/Radeon RX 5700XT, 16GB 3800MHz CL18 RAM, Gentoo GNU/Linux)</li> <li>eievui.ahwx.org > iPhone 11 Pro* (256GB, Space Gray)</li> <li>parshen.ahwx.org > Apple Watch SE*1 (44mm)</li> <li>eleboo.ahwx.org > AirPods Pro*2 (2nd gen)</li> <br><br>
*0 = I tried Android for years and after having issues for years, I switched to iOS.<br>
*1 = I have an Apple Watch because it helps me monitor health (stress and anxiety) related issues.<br>
*2 = Since I have an iPhone and I need headphones with ANC (public transport and anxiety), these were an easy choice.<br> </ul> ` })} </main> ` })}`;
}, "/home/liv/Development/ahwx.org/src/pages/other/hosts.astro", "self");

const $$file = "/home/liv/Development/ahwx.org/src/pages/other/hosts.astro";
const $$url = "/other/hosts";

export { $$Hosts as default, $$file as file, $$url as url };
