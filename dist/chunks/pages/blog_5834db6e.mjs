/* empty css                          */import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead, f as renderTransition, b as addAttribute } from '../astro_71295d57.mjs';
import { $ as $$Header, a as $$Heading, b as $$Paragraph, c as $$Layout } from './404_5c8b0a9f.mjs';
/* empty css                              */
const $$Astro = createAstro();
const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Blog;
  const blogPosts = (await Astro2.glob(/* #__PURE__ */ Object.assign({"./blog/bedrock-linux.md": () => import('./bedrock-linux_cd29f8c0.mjs').then(n => n.b),"./blog/browser-quest.md": () => import('./browser-quest_c8a191c6.mjs'),"./blog/cgit-gentoo.md": () => import('./cgit-gentoo_b4a32af2.mjs'),"./blog/cologne.md": () => import('./cologne_f1571fb1.mjs'),"./blog/discord.md": () => import('./discord_c60c1290.mjs'),"./blog/fish.md": () => import('./fish_33b52fb5.mjs'),"./blog/ilo4mod.md": () => import('./ilo4mod_c4f05782.mjs'),"./blog/imagemagick.md": () => import('./imagemagick_e02d5da9.mjs'),"./blog/instant-messaging.md": () => import('./instant-messaging_fa2240cb.mjs'),"./blog/intel-me.md": () => import('./intel-me_0fe01995.mjs'),"./blog/linkbase.md": () => import('./linkbase_5ce43a42.mjs'),"./blog/send-ssh.md": () => import('./send-ssh_97d615fd.mjs'),"./blog/ssh.md": () => import('./ssh_f8f9c2cc.mjs'),"./blog/updates-cron.md": () => import('./updates-cron_d98688f1.mjs'),"./blog/vimv.md": () => import('./vimv_e2946d68.mjs')}), () => "./blog/*.md")).sort(
    (a, b) => new Date(b.frontmatter.pubDate).valueOf() - new Date(a.frontmatter.pubDate).valueOf()
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Ahwx >> Blog", "description": "Ahwx' cozy blog" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<div class="h-40"></div> <main> ${renderComponent($$result2, "Heading", $$Heading, {}, { "default": ($$result3) => renderTemplate`<span class="text-2xl text-pink-300">「ahwx <span class="text-indigo-300">♥</span>」</span>` })} ${renderComponent($$result2, "Paragraph", $$Paragraph, { "data-astro-transition-scope": renderTransition($$result2, "p6lkpf6z", "", "Paragraph") }, { "default": ($$result3) => renderTemplate` <span class="text-lg">A lot of pages have also moved to <a class="underline underline-offset-1 text-indigo-300" href="https://docs.ahwx.org">Linkbase</a>.</span> <ul class="pt-8"> ${blogPosts.map((post) => renderTemplate`<li class="mb-4 hover:opacity-70"> <a${addAttribute(post.url, "href")}> <div class="mt-3 text-xl">${post.frontmatter.title}</div> <div class="opacity-70">${post.frontmatter.description}</div> </a> </li>`)} </ul> ` })} </main> ` })}`;
}, "/home/liv/Development/ahwx.org/src/pages/blog.astro", "self");

const $$file = "/home/liv/Development/ahwx.org/src/pages/blog.astro";
const $$url = "/blog";

export { $$Blog as default, $$file as file, $$url as url };
