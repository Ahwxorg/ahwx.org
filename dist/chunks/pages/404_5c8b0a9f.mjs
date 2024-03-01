/* empty css                          */import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, m as maybeRenderHead, d as renderSlot, e as renderComponent, s as spreadAttributes, f as renderTransition } from '../astro_71295d57.mjs';
import 'clsx';
/* empty css                              */import { jsx } from 'react/jsx-runtime';
import { Component } from 'react';
/* empty css                              */
const $$Astro$6 = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate", handleForms } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${handleForms ? renderTemplate`<meta name="astro-view-transitions-forms" content="true">` : ""}`;
}, "/home/liv/Development/ahwx.org/node_modules/astro/components/ViewTransitions.astro", void 0);

const HOMEPAGE_URL = "https://ahwx.org";

const $$Astro$5 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description, image = "/placeholder-social.jpg" } = Astro2.props;
  return renderTemplate`<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/png" href="/logo.png"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Canonical URL --><link rel="canonical"${addAttribute(HOMEPAGE_URL, "href")}><!-- Primary Meta Tags --><title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(new URL(image, Astro2.url), "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro2.url, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(new URL(image, Astro2.url), "content")}><!-- Disable Dark Reader --><meta name="darkreader-lock">${maybeRenderHead()}<div> ${renderSlot($$result, $$slots["default"])} </div> ${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}`;
}, "/home/liv/Development/ahwx.org/src/layouts/Layout.astro", void 0);

const $$Astro$4 = createAstro();
const $$HeaderLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$HeaderLink;
  const { href, class: className, ...props } = Astro2.props;
  const { pathname } = Astro2.url;
  const isActive = href === pathname || href === pathname.replace(/\/$/, "");
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute([className, { active: isActive }], "class:list")}${spreadAttributes(props)} data-astro-cid-eimmu3lg> ${renderSlot($$result, $$slots["default"])} </a> `;
}, "/home/liv/Development/ahwx.org/src/components/HeaderLink.astro", void 0);

const $$Astro$3 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header class="items-center fixed w-full"> <div class="backdrop-blur-3xl rounded-xl"> <nav class="flex items-center gap-3 text-base"> <div class="p-6 items-center gap-6 hidden md:flex"> ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/" }, { "default": ($$result2) => renderTemplate`Home` })} ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/blog" }, { "default": ($$result2) => renderTemplate`Blog` })} <!-- <HeaderLink href="/github">GitHub</HeaderLink> --> ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/contact" }, { "default": ($$result2) => renderTemplate`Contact` })} <!-- <HeaderLink href="/webrings">Webrings</HeaderLink> --> <!-- <HeaderLink href="/instances">Instances</HeaderLink> --> ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/other" }, { "default": ($$result2) => renderTemplate`Other` })} </div> <div class="flex-1"></div> ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/go" }, { "default": ($$result2) => renderTemplate`Go!` })} <div class="p-1"></div> </nav> </div> </header>`;
}, "/home/liv/Development/ahwx.org/src/components/Header.astro", void 0);

const $$Astro$2 = createAstro();
const $$Paragraph = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Paragraph;
  return renderTemplate`${maybeRenderHead()}<div class="ml-8 mr-8 md:ml-80 md:mr-80"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/home/liv/Development/ahwx.org/src/components/Paragraph.astro", void 0);

const $$Astro$1 = createAstro();
const $$Heading = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Heading;
  return renderTemplate`${maybeRenderHead()}<h1 class="text-xl font-bold align-middle text-center p-2 m-2"> ${renderSlot($$result, $$slots["default"])} </h1>`;
}, "/home/liv/Development/ahwx.org/src/components/Heading.astro", void 0);

const textArray = [
  "technology enthousiast",
  "homelabber",
  "nerd",
  "person",
  "student",
  "teacher",
  "blogger",
  "shitposter",
  "ƃuoɹʍ ʎlqɐqoɹd"
];
let Home$1 = class Home extends Component {
  constructor() {
    super();
    this.state = { textIdx: 0 };
  }
  componentDidMount() {
    this.timeout = setInterval(() => {
      let currentIdx = this.state.textIdx;
      this.setState({ textIdx: currentIdx + 1 });
    }, 3e3);
  }
  componentWillUnmount() {
    clearInterval(this.timeout);
  }
  render() {
    let introductionText = textArray[this.state.textIdx % textArray.length];
    return /* @__PURE__ */ jsx("span", { children: introductionText });
  }
};

const greetingArray = [
  "Hai",
  "Hey",
  "Salut",
  "¿Qué tal?",
  "Nǐ hǎo",
  "Ciao",
  "Yā, Yō",
  "Guten Tag",
  "Oi",
  "Anyoung",
  "Ahlan",
  "Halløj",
  "Hujambo",
  "Hallo",
  "Yassou",
  "Cześć",
  "Selamat siang",
  "Namaskar",
  "Hei",
  "Selam",
  "Shalom",
  "Tjena"
];
class Home extends Component {
  constructor() {
    super();
    this.state = { textIdx: 0 };
  }
  componentDidMount() {
    this.timeout = setInterval(() => {
      let currentIdx = this.state.textIdx;
      this.setState({ textIdx: currentIdx + 1 });
    }, 3e3);
  }
  componentWillUnmount() {
    clearInterval(this.timeout);
  }
  render() {
    let greetingText = greetingArray[this.state.textIdx % greetingArray.length];
    return /* @__PURE__ */ jsx("span", { children: greetingText });
  }
}

const $$Astro = createAstro();
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Ahwx >> 404; page not found", "description": "Ahwx' cozy website" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<div class="h-40"></div> <main> ${renderComponent($$result2, "Heading", $$Heading, {}, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Greeting", Home, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/liv/Development/ahwx.org/src/components/Greeting", "client:component-export": "default" })}, I'm <span class="text-2xl text-pink-300">「ahwx <span class="text-indigo-300">♥</span>」</span>` })} ${renderComponent($$result2, "Heading", $$Heading, {}, { "default": ($$result3) => renderTemplate`I'm a ${renderComponent($$result3, "Introduction", Home$1, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/liv/Development/ahwx.org/src/components/Introduction", "client:component-export": "default" })}.` })} ${renderComponent($$result2, "Paragraph", $$Paragraph, { "data-astro-transition-scope": renderTransition($$result2, "idyw556u", "", "Paragraph") }, { "default": ($$result3) => renderTemplate`
You've reached the end of the universe, astronaut.
` })} </main> ` })}`;
}, "/home/liv/Development/ahwx.org/src/pages/404.astro", "self");

const $$file = "/home/liv/Development/ahwx.org/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Header as $, Home as H, _404 as _, $$Heading as a, $$Paragraph as b, $$Layout as c, Home$1 as d };
