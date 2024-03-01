/* empty css                          */import { a as createComponent, r as renderTemplate, e as renderComponent, u as unescapeHTML } from '../astro_71295d57.mjs';
import 'clsx';
import { $ as $$BlogPost } from './bedrock-linux_cd29f8c0.mjs';

const html = "<hr>\n<h2 id=\"title-automatic-updates-using-crondate-2022-06-16\">title: automatic updates using cron\ndate: 2022-06-16</h2>\n<h1 id=\"automatic-updates\">Automatic updates</h1>\n<p>if you run a server), it’s important to keep it up to date, especially if it’s exposed to the internet. in this little guide I will show you how you can do this, using a cronjob.</p>\n<p>explaination:</p>\n<blockquote>\n<p>for this task, we’re going to be using cron. cron is a tool that we’ll use to scheduele our updates.</p>\n</blockquote>\n<h2 id=\"istallation\">istallation</h2>\n<p>debian comes with the cron package installed, so we’re ready to start using it!</p>\n<p>if you don’t use debian, please refer to the package list of your distribution of choice.</p>\n<h2 id=\"configuration\">configuration</h2>\n<p>once you open your editor by running:</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color:#B392F0\">doas</span><span style=\"color:#9ECBFF\"> crontab</span><span style=\"color:#79B8FF\"> -e</span></span></code></pre>\n<p>put the following text into it (or whatever command your distro uses to upgrade without user input, i.e. debian:</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color:#B392F0\">0</span><span style=\"color:#79B8FF\"> 1</span><span style=\"color:#79B8FF\"> *</span><span style=\"color:#79B8FF\"> *</span><span style=\"color:#79B8FF\"> *</span><span style=\"color:#9ECBFF\"> apt</span><span style=\"color:#79B8FF\"> -y</span><span style=\"color:#9ECBFF\"> update</span><span style=\"color:#E1E4E8\"> &#x26;&#x26; </span><span style=\"color:#B392F0\">apt</span><span style=\"color:#79B8FF\"> -y</span><span style=\"color:#9ECBFF\"> upgrade</span></span></code></pre>\n<p>save and exit, and now your system should update every day at 1:00 AM.</p>";

				const frontmatter = {"layout":"../../layouts/blogPost.astro","title":"Automatic updates using Cron","pubDate":"2022-06-16T00:00:00.000Z","description":"A little dive into Cron","author":"Ahwx"};
				const file = "/home/liv/Development/ahwx.org/src/pages/blog/updates-cron.md";
				const url = "/blog/updates-cron";
				function rawContent() {
					return "\n---\ntitle: automatic updates using cron\ndate: 2022-06-16\n---\n\n# Automatic updates\n\nif you run a server), it's important to keep it up to date, especially if it's exposed to the internet. in this little guide I will show you how you can do this, using a cronjob.\n\nexplaination:\n> for this task, we're going to be using cron. cron is a tool that we'll use to scheduele our updates.\n\n## istallation\n\ndebian comes with the cron package installed, so we're ready to start using it!\n\nif you don't use debian, please refer to the package list of your distribution of choice.\n\n## configuration\n\nonce you open your editor by running:\n\n```sh\ndoas crontab -e\n```\n\nput the following text into it (or whatever command your distro uses to upgrade without user input, i.e. debian:\n\n```sh\n0 1 * * * apt -y update && apt -y upgrade\n```\n\nsave and exit, and now your system should update every day at 1:00 AM.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"title-automatic-updates-using-crondate-2022-06-16","text":"title: automatic updates using cron\ndate: 2022-06-16"},{"depth":1,"slug":"automatic-updates","text":"Automatic updates"},{"depth":2,"slug":"istallation","text":"istallation"},{"depth":2,"slug":"configuration","text":"configuration"}];
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
