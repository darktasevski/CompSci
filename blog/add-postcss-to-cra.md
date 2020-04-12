---
title: Add PostCSS to Create-React-App
date: 2018-01-23
author: Darkø Tasevski
description: Learn a bit about PostCSS and how to add it to CreateReactApp. Without ejecting!
tags:
    - React
    - CSS
    - PostCSS
    - create-react-app
---

# Add PostCSS to Create-React-App

> Without ejecting!

![cover_image](https://postcss.org/_/web_modules/LayoutContainer/opengraph.jpg)

## A small introduction to PostCSS

Many of you are spending your time working with CSS, so I guess you are familiar with preprocessors such as Less, Sass, and Stylus. These tools are a vital part of the web development ecosystem nowadays, and I cannot imagine writing styles for a website without using features like nesting, variables, or mixins as it can be cumbersome, awkward and sometimes less intuitive.

But, there is a couple of problems with traditional preprocessors:

-   They don't follow CSS standards. You might say that each of the preprocessors has become a standard of its own. Regrettably, they don’t aim at being compatible with the W3C standards, which means that they cannot you cant use their features as polyfills for early testing of the newer W3C standards.
-   They are not extendable. Whichever preprocessor you choose, you are limited to the set of features that it provides. If you need anything on top of that, you’ll need to add it as a separate step in your build process. If you feel like writing your extension, you’re on your own. Good luck with that.

This is where PostCSS comes in.

In a nutshell, PostCSS does the same thing as LESS/SASS/SCSS... But enhance it with a few plugins, and it can do much more. _PostCSS is much like Babel for JavaScript._ It parses your CSS, using Javascript under the hood, turning it into the raw AST (abstract syntax tree) and then performs transformations to the CSS that today's browsers will understand and render. And a bonus is that JavaScript can transform our styles much more quickly than other processors.

Enough about PostCSS and let's focus on the purpose of this post. After some Googling, I've found out that for PostCss to work, you had to eject CRA to edit the underlying Webpack configuration, which deals with all the necessary loaders for different file types, which I've found as a bit of a drastic measure. In the end, after a bit of trial and error hacking together different solutions, I got it working. Here’s how!

You can find the final code here: <https://github.com/Puritanic/CRA-feat-PostCSS.>

> Edit: It seems that my google foo isn't good as I thought it was. Here's an [alternate method](https://github.com/csstools/react-app-rewire-postcss) for extending CRA with PostCSS created by @jonathantneal

First, create a new React app:

```shell
create-react-app postcss-cra
cd postcss-cra
```

And install postcss-cli and a few basic plugins

```shell
yarn add --dev autoprefixer postcss-nested postcss-cli npm-run-all
```

Then, at the root of the project, you need to create a file called `postcss.config.js` and add this code:

```javascript
module.exports = {
	plugins: [require('postcss-nested'), require('autoprefixer')]
};
```

Almost there! Now all that is left is to edit the scripts in `package.json` :

```JSON

    "scripts": {
        "build:css": "postcss src/styles/main.css -o src/index.css",
        "watch:css": "postcss src/styles/main.css -o src/index.css -w",
        "start": "npm-run-all -p watch:css start-js",
        "start-js": "react-scripts start",
        "build-js": "react-scripts build",
        "build": "npm-run-all build:css build-js",
        "test": "react-scripts test --env=jsdom",
        "eject": "react-scripts eject"
        },
```

Create a styles folder inside `src` where our CSS will live:

```shell
mkdir src/styles
mv src/App.css src/styles/main.css
```

And to test postcss, let's modify default CRA styles a bit:

```css
/* src/styles/main.css */
.App {
	text-align: center;

	&-logo {
		animation: App-logo-spin infinite 20s linear;
		height: 80px;
	}

	&-header {
		background-color: #222;
		height: 150px;
		padding: 20px;
		color: white;
	}

	&-title {
		font-size: 1.5em;
	}

	&-intro {
		font-size: large;
	}
}
@keyframes App-logo-spin {
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
}
```

> Don't forget to remove `import './App.css';'` from App.js, as we've moved that file to styles and renamed it to `main.css`.

Moment of truth! Now run: `yarn run start`. In the browser, you should see almost the same styles that CRA by default has. Now let's see output `index.css` file in `src/`:

```css
.App {
	text-align: center;
	display: flex;
	flex-direction: column;
}

.App-logo {
	-webkit-animation: App-logo-spin infinite 20s linear;
	animation: App-logo-spin infinite 20s linear;
	height: 80px;
}

.App-header {
	background-color: #222;
	height: 150px;
	padding: 20px;
	color: white;
}

.App-title {
	font-size: 1.5em;
}

.App-intro {
	font-size: large;
}

@-webkit-keyframes App-logo-spin {
	from {
		-webkit-transform: rotate(0deg);
		transform: rotate(0deg);
	}
	to {
		-webkit-transform: rotate(360deg);
		transform: rotate(360deg);
	}
}

@keyframes App-logo-spin {
	from {
		-webkit-transform: rotate(0deg);
		transform: rotate(0deg);
	}
	to {
		-webkit-transform: rotate(360deg);
		transform: rotate(360deg);
	}
}
```

Voila! As you can see, our styles are automatically auto-vendor-prefixed for better support, and our nested code is transformed to code that browser can understand.

Now let's do something more advanced:

```shell
yarn add -D postcss-import postcss-preset-env
```

After that, let's add those new plugins to `postcss.config.js`:

```javascript
module.exports = {
	plugins: [
		require('postcss-import'),
		require('postcss-preset-env')({
			stage: 1
		}),
		require('postcss-nested'),
		require('autoprefixer')
	]
};
```

Now, create a test files inside styles folder:

```shell
touch src/styles/styles.css src/styles/styles1.css
```

Move everything from `src/styles/main.css` to styles.css and add this:

```css
@import 'styles.css';
@import 'styles1.css';
```

Now, in `src/styles/styles1.css` add this weird mumbo-jumbo:

```css
@custom-media --viewport-medium (width <= 50rem);
@custom-selector :--heading h1, h2, h3, h4, h5, h6;

:root {
	--fontSize: 1rem;
	--mainColor: #12345678;
	--secondaryColor: lab(32.5 38.5 -47.6 / 90%);
}

html {
	overflow: hidden auto;
}

@media (--viewport-medium) {
	body {
		color: var(--mainColor);
		font-family: system-ui;
		font-size: var(--fontSize);
		line-height: calc(var(--fontSize) * 1.5);
		overflow-wrap: break-word;
		padding-inline: calc(var(--fontSize) / 2 + 1px);
	}
}

:--heading {
	margin-block: 0;
}

.App-header:matches(header, .main) {
	background-image: image-set('./img/background.jpg' 1x, './img/background-2x.jpg' 2x);
	background-size: contain;
}

a {
	color: rebeccapurple;

	&:hover {
		color: color-mod(var(--secondaryColor) b(15%) a(75%));
	}
}
```

Now restart CRA server. Everything should work as intended, except for several (obligatory) cats showing in the header now :D

This is just a scratch on the surface, PostCSS have enormous power in its plugins, and have a great community around it. What's the best is that the most of PostCSS plugins are using stuff that will be used as native CSS syntax in future, so your code is future-proof. In the end, I'm enjoying using it, and that's what matters, and I hope that you will too. Thanks for reading!

Some resources:

-   [Official PostCSS Github Repo](https://github.com/postcss/postcss) and [Page](https://postcss.org/)
-   [PostCSS-preset-env playground](https://preset-env.cssdb.org/)
-   [List of awesome PostCSS plugins](https://github.com/jdrgomes/awesome-postcss)
