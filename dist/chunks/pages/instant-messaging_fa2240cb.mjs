/* empty css                          */import { a as createComponent, r as renderTemplate, e as renderComponent, u as unescapeHTML } from '../astro_71295d57.mjs';
import 'clsx';
import { $ as $$BlogPost } from './bedrock-linux_cd29f8c0.mjs';

const html = "<hr>\n<h2 id=\"title-instant-messaging-servicesdate-2023-02-06\">title: instant messaging services\ndate: 2023-02-06</h2>\n<h1 id=\"instant-messaging-services\">instant messaging services</h1>\n<h2 id=\"the-problem\">the problem</h2>\n<h3 id=\"centralized\">centralized</h3>\n<p>most of the services are <del>made to steal data</del> made to deliver messages instantly. since most services are centralized (centralized means that you have one or multiple physical and/or virtual servers all being used to host the service), you don’t have control over your own data.</p>\n<h3 id=\"decentralized\">decentralized</h3>\n<p>let’s take the example of email. you mail someone using <code>username@hosting.tld</code>, this means that the user has an account at said <code>hosting.tld</code>, and thus they can read all emails, which is a problem… except for when you use encryption, encryption makes sure only you, and the recipient can read the message. someone else just sees some random gibberish, since they’re not intended to read the message. this is fine and all, but what if you take it a step further: use both encryption and your own server? for email that’s absolutely possible if you dedicate your entire life to it. for chatting as well, but the problem is that that requires a decentralized chat application. those are not very widely available, but a few are:</p>\n<ul>\n<li><a href=\"https://matrix.org\">Matrix</a>, most people use <a href=\"https://element.io\">Element</a></li>\n<li>irc, which is outdated</li>\n<li>xmpp, which is harder to set up and use</li>\n</ul>\n<h2 id=\"the-solution\">”the solution”</h2>\n<p>Matrix is very easy to <a href=\"https://blog.ahwx.org/selfhosting\">selfhost</a>, and for that, they have <a href=\"https://matrix.org/docs/guides/installing-synapse\">amazing documentation</a>.</p>\n<p>once you have a <a href=\"https://matrix.org/docs/guides/installing-synapse\">Matrix Synapse (home)server</a> (Synapse is the name of their selfhosted server) set up, you can install <a href=\"https://element.io\">Element</a> and log into your own “homeserver” (homeserver is their naming for your instance of Synapse). Then you can join groups, chat with people, and even voice/video call with them, using Jitsi.</p>\n<h2 id=\"does-everyone-need-their-own-server\">does everyone need their own server?</h2>\n<p>no, you can also just register at <a href=\"httpps://matrix.org\">matrix.org</a>, or any other alternative homeserver, but doing it yourself is way better for your privacy and you have the nice bonus of a fun experience and you learn a ton.</p>";

				const frontmatter = {"layout":"../../layouts/blogPost.astro","title":"Instant messaging services; the problem and the solution","pubDate":"2023-08-14T00:00:00.000Z","description":"A little dive into IM services","author":"Ahwx"};
				const file = "/home/liv/Development/ahwx.org/src/pages/blog/instant-messaging.md";
				const url = "/blog/instant-messaging";
				function rawContent() {
					return "\n---\ntitle: instant messaging services\ndate: 2023-02-06\n---\n\n# instant messaging services\n\n## the problem\n\n### centralized\n\nmost of the services are ~~made to steal data~~ made to deliver messages instantly. since most services are centralized (centralized means that you have one or multiple physical and/or virtual servers all being used to host the service), you don't have control over your own data.\n\n### decentralized\n\nlet's take the example of email. you mail someone using `username@hosting.tld`, this means that the user has an account at said `hosting.tld`, and thus they can read all emails, which is a problem... except for when you use encryption, encryption makes sure only you, and the recipient can read the message. someone else just sees some random gibberish, since they're not intended to read the message. this is fine and all, but what if you take it a step further: use both encryption and your own server? for email that's absolutely possible if you dedicate your entire life to it. for chatting as well, but the problem is that that requires a decentralized chat application. those are not very widely available, but a few are:\n\n* [Matrix](https://matrix.org), most people use [Element](https://element.io)\n* irc, which is outdated\n* xmpp, which is harder to set up and use\n\n## \"the solution\"\n\nMatrix is very easy to [selfhost](https://blog.ahwx.org/selfhosting), and for that, they have [amazing documentation](https://matrix.org/docs/guides/installing-synapse).\n\nonce you have a [Matrix Synapse (home)server](https://matrix.org/docs/guides/installing-synapse) (Synapse is the name of their selfhosted server) set up, you can install [Element](https://element.io) and log into your own \"homeserver\" (homeserver is their naming for your instance of Synapse). Then you can join groups, chat with people, and even voice/video call with them, using Jitsi.\n\n## does everyone need their own server?\n\nno, you can also just register at [matrix.org](httpps://matrix.org), or any other alternative homeserver, but doing it yourself is way better for your privacy and you have the nice bonus of a fun experience and you learn a ton.\n\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"title-instant-messaging-servicesdate-2023-02-06","text":"title: instant messaging services\ndate: 2023-02-06"},{"depth":1,"slug":"instant-messaging-services","text":"instant messaging services"},{"depth":2,"slug":"the-problem","text":"the problem"},{"depth":3,"slug":"centralized","text":"centralized"},{"depth":3,"slug":"decentralized","text":"decentralized"},{"depth":2,"slug":"the-solution","text":"”the solution”"},{"depth":2,"slug":"does-everyone-need-their-own-server","text":"does everyone need their own server?"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$BlogPost, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
