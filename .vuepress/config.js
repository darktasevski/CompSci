module.exports = {
	title: 'Signal in the Static',
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
			md.use(require('markdown-it-katexx'), { throwOnError: false, errorColor: ' #cc0000' });
		},
	},
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
			},
			{
				title: 'Notes', // required
				collapsable: false,
				sidebarDepth: 3,
				children: [
					{
						title: 'Books',
						path: '/Books/',
						children: [
							'/Books/Art_of_problem_solving_Vol.1.md',
							'/Books/ydkjs_notes.md',
						],
					},
					{
						title: 'CompSci',
						path: '/CompSci/',
						children: [
							'/CompSci/bigO.md',
							'/CompSci/bigO_basics.md',
							'/CompSci/concepts.md',
							'/CompSci/cs_snippets.md',
							'/CompSci/dynamic_programming.md',
							'/CompSci/graphs.md',
							'/CompSci/heaps.md',
							'/CompSci/linked_lists.md',
							'/CompSci/networking.md',
						],
					},
					{
						title: 'Math',
						path: '/Math/',
						children: [
							'/Math/algebra.md',
							'/Math/division.md',
							'/Math/multiplication.md',
							'/Math/fractions_and_decimals.md',
							'/Math/factors_multiplies_patterns.md',
							'/Math/ratios_rates_percentages.md',
							'/Math/geometry.md',
							'/Math/square_roots.md',
							'/Math/negative_numbers.md',
							'/Math/units_and_conversions.md',
						],
					},
					{
						title: 'Programming',
						path: '/Programming/',
						children: [
							'/Programming/class_theory.md',
							'/Programming/Electron.md',
							'/Programming/Golang.md',
							'/Programming/Javascript.md',
							'/Programming/js_performance.md',
							'/Programming/Python.md',
							'/Programming/ReactNative.md',
							'/Programming/Ruby.md',
							'/Programming/video_engineering.md',
							'/Programming/Shell/',
						],
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
