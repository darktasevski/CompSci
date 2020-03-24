const { fs, path } = require('@vuepress/shared-utils');

function getChildren(parent) {
	if (!parent) return [];

	return (
		fs
			.readdirSync(path.resolve(__dirname, '../', parent))
			// make sure we only include Markdown files
			.filter(filename => filename.indexOf('.md') >= 0)
			.map(filename => {
				if (filename.indexOf('index') >= 0 || filename.indexOf('README') >= 0) {
					// filter out readme.md and index.md files as those should be top level pages (parents) and not nested children
					return null;
				}

				return `/${parent}/${filename}`;
			})
			.filter(page => Boolean(page))
			.sort()
	);
}

console.log(getChildren('Books'));

module.exports = {
	title: 'Signal in the Static',
	description: 'Blog, notes and other stuff',
	base: '/CompSci/',
	head: [
		[
			'link',
			{
				rel: 'stylesheet',
				href: 'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css',
			},
		],
	],
	markdown: {
		extendMarkdown: md => {
			md.set({ breaks: true });
			md.use(require('markdown-it-katexx'), { throwOnError: true, errorColor: ' #cc0000' });
		},
	},
	theme: 'solarized',
	globalUIComponents: ['ThemeManager'],
	themeConfig: {
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Blog', link: '/blog/' },
			{ text: 'About', link: '/about/' },
		],
		sidebar: 'auto',
		dateFormat: 'YYYY-MM-DD',
		summary: true,
		summaryLength: 200,
		lastUpdated: 'Last Updated',
		nextLinks: false,
		prevLinks: false,
		// displayAllHeaders: true,
		smoothScroll: true,
		sidebarDepth: 1 /* Default sidebar depth */,
		sidebar: [
			{
				title: 'Blog',
				path: '/blog/',
				sidebar: false,
			},
			{
				title: 'Notes', // required
				collapsable: false,
				sidebarDepth: 3,
				children: [
					{
						title: 'Books',
						path: '/Books/',
						children: getChildren('Books'),
					},
					{
						title: 'CompSci',
						path: '/CompSci/',
						children: getChildren('CompSci'),
					},
					{
						title: 'Math',
						path: '/Math/',
						children: getChildren('Math'),
					},
					{
						title: 'Programming',
						path: '/Programming/',
						children: [...getChildren('Programming'), '/Programming/Shell/'],
					},
				],
			},
		],
		contact: [
			{
				type: 'github',
				link: 'https://github.com/Puritanic',
			},
			{
				type: 'twitter',
				link: 'https://twitter.com/puritanicdev',
			},
			{
				type: 'linkedin',
				link: 'https://www.linkedin.com/in/darktasevski/',
			},
		],
	},
};
