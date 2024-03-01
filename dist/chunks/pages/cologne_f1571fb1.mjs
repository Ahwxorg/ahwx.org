/* empty css                          */import { a as createComponent, r as renderTemplate, e as renderComponent, u as unescapeHTML } from '../astro_71295d57.mjs';
import 'clsx';
import { $ as $$BlogPost } from './bedrock-linux_cd29f8c0.mjs';

const html = "<h1 id=\"a-trip-to-cologne\">a trip to cologne</h1>\n<blockquote>\n<p>so some family had some medical issues and thus they needed to go to a hospital asap. cologne had the best hospital in the closest range, and thus they went there and since i could, i joined them and tried to see some parts of cologne itself.</p>\n</blockquote>\n<h2 id=\"chistmas-vibes\">chistmas vibes</h2>\n<p>since i went there from 18-12 till 21-12, i saw a lot of christmas stuff (for pictures, check the pictures section on <a href=\"https://ahwx.org/pix\">my website</a>, they’ll be uploaded soon. (note from 2024, they’re not and most likely will not be uploaded.))</p>\n<p>there was even a little ice skating on one of the “platze”, and there were a lot of little kids. the smiles of kids make me feel quite sad since i had that smile too when i was 3, and school took it al away. i love how kids can smile and can be happy with little things.</p>\n<p>there also were a lot of little christmas lights and some people even decorated their baby pram thingies, how cute! :)</p>\n<h2 id=\"environmental-stuff\">environmental stuff</h2>\n<p>there were not too many homeless people as far as i’ve seen (i’ve seen stuff in corners for about 4 people i think, and one actual homeless guy), which is good of course, in contrast to another big city in germany (berlin), there where a lot less homeless people.</p>\n<p>there where not too many people begging, i’ve seen about 10 i think.</p>\n<p>there was also a little (not much) less smoking than in berlin (in all big cities, a shit ton of people smoke, and i dont know why. i saw this when i was in toronto, berlin, detroit, dublin and amsterdam).</p>\n<p>there was quite a lot of trash on the ground, especially in the bahnhoff places.</p>\n<h2 id=\"people\">people</h2>\n<p>i’ve noticed a lot of nice people, but also quite a few people (in restaurants specifically) that were a little agressive to their customers.</p>\n<p>in general, the people were very nice.</p>\n<h2 id=\"historical-places\">historical places</h2>\n<p>i’ve been to the dom, a historical city wall thingy, a few old departs of the city, and i took a lot of pictures.</p>\n<h2 id=\"zoo\">zoo</h2>\n<p>of course, i also went to the “Kolner Zoo”, and there were my favorite animals! monkeys and pinguins! also there were giraffes, rhino’s, a lot of fish, some bears, some other typical animals and even see lions :)</p>\n<h2 id=\"overal-thoughts\">overal thoughts</h2>\n<p>even thought i stayed in a hotel in a little worse depart of the city, it was very nice to see a big city once again, and going out of my little hometown.</p>\n<p>pros: a lot of historical stuff, a lot of nice places and people to go to, a lot of nice food (schnitzels :]), overal quite a safe city afaik</p>\n<p>cons: smoking is popular, not as clean in every depart, quite slow mobile connectivity (4g, is not really a con for me, but for some it might be), going somewhere is always expensive</p>\n<p>rating from me: 7/10</p>";

				const frontmatter = {"layout":"../../layouts/blogPost.astro","title":"A trip to Cologne","pubDate":"2022-12-21T00:00:00.000Z","description":"See Cologne from my eyes","author":"Ahwx"};
				const file = "/home/liv/Development/ahwx.org/src/pages/blog/cologne.md";
				const url = "/blog/cologne";
				function rawContent() {
					return "\n# a trip to cologne\n\n> so some family had some medical issues and thus they needed to go to a hospital asap. cologne had the best hospital in the closest range, and thus they went there and since i could, i joined them and tried to see some parts of cologne itself.\n\n## chistmas vibes\n\nsince i went there from 18-12 till 21-12, i saw a lot of christmas stuff (for pictures, check the pictures section on [my website](https://ahwx.org/pix), they'll be uploaded soon. (note from 2024, they're not and most likely will not be uploaded.))\n\nthere was even a little ice skating on one of the \"platze\", and there were a lot of little kids. the smiles of kids make me feel quite sad since i had that smile too when i was 3, and school took it al away. i love how kids can smile and can be happy with little things.\n\nthere also were a lot of little christmas lights and some people even decorated their baby pram thingies, how cute! :)\n\n## environmental stuff\n\nthere were not too many homeless people as far as i've seen (i've seen stuff in corners for about 4 people i think, and one actual homeless guy), which is good of course, in contrast to another big city in germany (berlin), there where a lot less homeless people.\n\nthere where not too many people begging, i've seen about 10 i think.\n\nthere was also a little (not much) less smoking than in berlin (in all big cities, a shit ton of people smoke, and i dont know why. i saw this when i was in toronto, berlin, detroit, dublin and amsterdam).\n\nthere was quite a lot of trash on the ground, especially in the bahnhoff places.\n\n## people\n\ni've noticed a lot of nice people, but also quite a few people (in restaurants specifically) that were a little agressive to their customers.\n\nin general, the people were very nice.\n\n## historical places\n\ni've been to the dom, a historical city wall thingy, a few old departs of the city, and i took a lot of pictures.\n\n## zoo\n\nof course, i also went to the \"Kolner Zoo\", and there were my favorite animals! monkeys and pinguins! also there were giraffes, rhino's, a lot of fish, some bears, some other typical animals and even see lions :)\n\n## overal thoughts\n\neven thought i stayed in a hotel in a little worse depart of the city, it was very nice to see a big city once again, and going out of my little hometown.\n\npros: a lot of historical stuff, a lot of nice places and people to go to, a lot of nice food (schnitzels :]), overal quite a safe city afaik\n\ncons: smoking is popular, not as clean in every depart, quite slow mobile connectivity (4g, is not really a con for me, but for some it might be), going somewhere is always expensive\n\nrating from me: 7/10\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"a-trip-to-cologne","text":"a trip to cologne"},{"depth":2,"slug":"chistmas-vibes","text":"chistmas vibes"},{"depth":2,"slug":"environmental-stuff","text":"environmental stuff"},{"depth":2,"slug":"people","text":"people"},{"depth":2,"slug":"historical-places","text":"historical places"},{"depth":2,"slug":"zoo","text":"zoo"},{"depth":2,"slug":"overal-thoughts","text":"overal thoughts"}];
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
