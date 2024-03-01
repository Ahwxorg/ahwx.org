/* empty css                          */import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead, f as renderTransition } from '../astro_71295d57.mjs';
import 'clsx';
import { $ as $$Header, a as $$Heading, H as Home, d as Home$1, b as $$Paragraph, c as $$Layout } from './404_5c8b0a9f.mjs';
/* empty css                              */
const $$Astro = createAstro();
const $$Matrix = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Matrix;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Ahwx >> Matrix", "description": "Ahwx' cozy Matrix page" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<div class="h-40"></div> <main> ${renderComponent($$result2, "Heading", $$Heading, {}, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Greeting", Home, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/liv/Development/ahwx.org/src/components/Greeting", "client:component-export": "default" })}, I'm <span class="text-2xl text-pink-300">「ahwx <span class="text-indigo-300">♥</span>」</span>` })} ${renderComponent($$result2, "Heading", $$Heading, {}, { "default": ($$result3) => renderTemplate`I'm a ${renderComponent($$result3, "Introduction", Home$1, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/liv/Development/ahwx.org/src/components/Introduction", "client:component-export": "default" })}.` })} ${renderComponent($$result2, "Paragraph", $$Paragraph, { "data-astro-transition-scope": renderTransition($$result2, "ehtptuqn", "", "Paragraph") }, { "default": ($$result3) => renderTemplate` <p class="font-bold">Requirements
</p><ul> <li class="indent-2">Basically any internet connection (Tor works).</li> <li class="indent-2">Some common sense.</li> </ul><br> <p class="font-bold">Getting a client (see this as "downloading the app")</p>
I recommend <a href="https://element.io&quot;">Element</a>, since it works on mobile platforms and on a real desktop OS.
        You should look into other clients, however. Matrix is a free and open source protocol. This means that anyone with some coding skills could make their own application for messaging.<br><br> <p class="font-bold">Getting a user account</p>
It's not that hard to get a normal @matrix.org account, but the official server is crowded, slow and has some restrictions. Since Matrix is <a href="https://en.wikipedia.org/wiki/Decentralization?lang=en">decentralized</a>, you can use any "homeserver". This is also promoted by Matrix itself. Anyways, if we're friends, I can make an account for you on my @ahwx.org homeserver (I also have some normal user rules and I cannot garantee 100% uptime). Shoot me a message to the email on my <a href="contact.php">contact page</a>. Otherwise, you can just make an account on any homeserver you like, <a href="https://catgirl.cloud">catgirl.cloud</a> as an example.<br><br> <p class="font-bold">But I want my own domain as homeserver?</p>
If you run a server, it's not extremely difficult to set up a <a href="https://matrix-org.github.io/synapse/latest/setup/installation.html#installing-as-a-python-module-from-pypi">Matrix Synapse server using Python</a>. Contact me if you need help :).<br><br> <p class="font-bold">But how and why is this better than WhatsApp, Discord, Telegram, Facebook Messenger, Snapchat, etc, etc</p>
Because of different features, I can't really compare those with Matrix. For example, Snapchat tells you when they *think* someone took a screenshot, Discord has a pretty solid user experience (except for users that don't want to connect over their normal IP, don't want to verify their account with a phone number, etc etc. Read more <a href="https://stallman.org">here</a>.) and more/other apps might also have special features. The main issues I am having with those apps, is that they're all closed source, don't have any form of privacy (except for E2EE for some apps such as WhatsApp and others). This is something you "just have to believe", tho. All those apps say that they're using state of the art militairy level security, but they're usually just using HTTPS as far as we can see (something my website is using, and all websites with a little lock icon in the search bar use).
        Matrix is using encrypted messages, has simple DMs (direct messaging, simple one on one messages), rooms (similar to group chats), spaces (similar to Discord guilds/servers). It also allows media sharing, Jitsi integration for audio/video calls and much more. This is all fine, but where it really gets interesting is when two people communicate. All messages get sent through the homeservers of both of these users. This allows for very safe messaging, since the only server in the middle is someone's homeserver, and not some big data-harvesting company such as Discord, Facebook, etc etc.<br><br> <p class="font-bold">Why am I making the switch now?</p>
Because of two reasons: 1) I think Matrix is working good enough, and Element is user friendly enough for people to actually start using it. 2) I am done with Discord. See my article over at <a href="https://blog.ahwx.org/discord">my blog</a>.
` })} </main> ` })}`;
}, "/home/liv/Development/ahwx.org/src/pages/matrix.astro", "self");

const $$file = "/home/liv/Development/ahwx.org/src/pages/matrix.astro";
const $$url = "/matrix";

export { $$Matrix as default, $$file as file, $$url as url };
