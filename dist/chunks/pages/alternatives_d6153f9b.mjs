/* empty css                          */import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead, f as renderTransition } from '../astro_71295d57.mjs';
import 'clsx';
import { $ as $$Header, a as $$Heading, b as $$Paragraph, c as $$Layout } from './404_5c8b0a9f.mjs';
/* empty css                              */
const $$Astro = createAstro();
const $$Alternatives = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Alternatives;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Ahwx >> Alternatives", "description": "Ahwx' cozy alternatives" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<div class="h-40"></div> <main> ${renderComponent($$result2, "Heading", $$Heading, {}, { "default": ($$result3) => renderTemplate`<span class="text-2xl text-pink-300">「ahwx <span class="text-indigo-300">♥</span>」</span>` })} ${renderComponent($$result2, "Heading", $$Heading, {}, { "default": ($$result3) => renderTemplate`Software Alternatives for massive privacy` })} ${renderComponent($$result2, "Paragraph", $$Paragraph, { "data-astro-transition-scope": renderTransition($$result2, "37iv6dff", "", "Paragraph") }, { "default": ($$result3) => renderTemplate` <strong>Operating systems</strong>
Use GNU/Linux or a *BSD variant. Avoid Windows at all cost and preferably also avoid macOS. If you want a 100% free system check out the <a class="underline underline-offset-1 text-indigo-300" href="https://www.gnu.org/distros/free-distros.en.html">FSF endorsed distributions</a><br><br> <strong>VPNs</strong><br>
Don't use one, instead use Tor or I2P, if thats not an option; <a class="underline underline-offset-1 text-indigo-300" href="https://www.ivpn.net/">IVPN</a>, <a class="underline underline-offset-1 text-indigo-300" href="https://www.ovpn.com/">OVPN</a> or <a class="underline underline-offset-1 text-indigo-300" href="https://mullvad.net">Mullvad VPN</a> preferably via Monero or cash<br><br> <strong>Modern browsers</strong><br>
If you like Firefox switch to <a class="underline underline-offset-1 text-indigo-300" href="https://librewolf.net/">LibreWolf</a> or use a custom user.js, if you like Chrome switch to <a class="underline underline-offset-1 text-indigo-300" href="https://github.com/Eloston/ungoogled-chromium">Ungoogled Chromium</a>, if you want something minimal with Vim keybinds use <a class="underline underline-offset-1 text-indigo-300" href="https://www.qutebrowser.org/">qutebrowser</a>. I've used all three, and can't recommend one specifically.<br><br> <strong>Messaging services</strong><br>
If you want something modern with multimedia, screenshare VC and encryption use Matrix with the <a class="underline underline-offset-1 text-indigo-300" href="https://element.io/download">Element client</a>, if you don't like electron use <a class="underline underline-offset-1 text-indigo-300" href="https://github.com/Nheko-Reborn/nheko">nheko</a>. You could also use irc/xmpp.<br><br> <strong>Search engines</strong><br>
I personally use <a class="underline underline-offset-1 text-indigo-300" href="https://github.com/Ahwxorg/LibreY">LibreY</a> <a class="underline underline-offset-1 text-indigo-300" href="https://search.ahwx.org">(instance)</a>. <a class="underline underline-offset-1 text-indigo-300" href="https://wiby.me/">Wiby</a> is also very cool.<br><br> <strong>Git hosts</strong><br>
If you want to self host use <a class="underline underline-offset-1 text-indigo-300" href="https://git.zx2c4.com/cgit/">cgit</a>. Otherwise everything isn't great, <a class="underline underline-offset-1 text-indigo-300" href="https://disroot.org">Disroot</a> looks promising.<br><br> <strong>Code editors</strong><br>
I personally use <a class="underline underline-offset-1 text-indigo-300" href="https://neovim.io/">Neovim</a>. If you need a GUI, I'd recommend <a class="underline underline-offset-1 text-indigo-300" href="https://vscodium.com">VS Codium</a> (libre VSCode).
` })} <div class="pt-8"></div> ${renderComponent($$result2, "Paragraph", $$Paragraph, { "data-astro-transition-scope": renderTransition($$result2, "kxf5t2dj", "", "Paragraph") }, { "default": ($$result3) => renderTemplate`
Note: I personally use Gentoo GNU/Linux and macOS, Tor, Ungoogled Chromium, Matrix, LibreY, GitHub and Neovim.
` })} </main> ` })}`;
}, "/home/liv/Development/ahwx.org/src/pages/other/alternatives.astro", "self");

const $$file = "/home/liv/Development/ahwx.org/src/pages/other/alternatives.astro";
const $$url = "/other/alternatives";

export { $$Alternatives as default, $$file as file, $$url as url };
