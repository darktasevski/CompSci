# Code snippets

## Git

### Reset branch to the origin master

```shell
git fetch origin
git reset --hard origin/master
```

### Fix last commit message:

```bash
git commit --amend
```

### Change branch name:

```bash
git branch -m relaese release
```

But if you have already pushed this branch, then there are a couple of extra steps required. The solution for then will be, you need to delete the old branch from the remote and push up the new one.

```bash
### git push origin --delete relaese
### git push origin release
```

### Added a wrong file in the repo?

```bash
git reset ./src/.env
```

If you have gone committing that change, you just need to run an extra step before:

```bash
git reset --soft HEAD~1
git reset ./src/.env
rm ./src/.env
git commit
```

## String ops

### Replace spaces with underscores

```js
str.replace(/ /g, '_');
```

## Shell/Bash

### Find processes at wanted port and kill em all

```bash
# for linux
netstat -vanp tcp | grep 3000
# For mac
sudo lsof -i tcp:3000

kill -9 <PID>
```

### Some command line shortcuts

```
Ctrl+a go to beginning of line
Ctrl+k delete from cursor to end of line
Ctrl+e go to end of line
CTRL U to kill (cut) the whole whole
CTRL Y to paste from kill-ring

```

## JS

### Check what device is used:

```js
const userAgent = (window.navigator && window.navigator.userAgent) || '';
const isMobile = /mobile/i.test(window.navigator.userAgent);
const isFirefox = /firefox/i.test(window.navigator.userAgent);
const isChrome = /chrome/i.test(window.navigator.userAgent);
const isSafari = /safari/i.test(userAgent) && userAgent.indexOf('Chrome') === -1;
const isEdge = /edge/i.test(userAgent);
const isIE = Boolean(window.ActiveXObject) || /trident.*rv:1\d/i.test(userAgent);
const isIOS = /iPad|iPhone|iPod/i.test(userAgent);
```

### getScrollPosition:

```js
  getScrollPosition () {
        return {
            left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0,
            top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
        };
    }
```

### Set scroll position:

```js
 setScrollPosition ({left = 0, top = 0}) {
        if (this.isFirefox) { // Check if FF
            document.documentElement.scrollLeft = left;
            document.documentElement.scrollTop = top;
        }
        else {
            window.scrollTo(left, top);
        }
    }
```

### Get number from RGB color:

```js
color2Number = color => {
	if (color[0] === '#') {
		color = color.substr(1);
	}

	if (color.length === 3) {
		color = `${color[0]}${color[0]}${color[1]}${color[1]}${color[2]}${color[2]}`;
	}
	return (parseInt(color, 16) + 0x000000) & 0xffffff;
};
```

### And number to color:

```js
number2Color = number => '#' + ('00000' + number.toString(16)).slice(-6);
```

### Conditionally add properties to an object literal/

```js
// spreads `{ prop }` obj over outer obj if conditional check passes
const obj = {
	...(prop && { prop }),
};
```

Obviously this syntax fails for falsy values, so more specific conditional check would be needed.

### Flatten array

```js
function flatten(arrayOfArrays) {
	return arrayOfArrays.reduce((acc, cur) => [...acc, ...cur]);
}
```

Flattens arrays one level deep, make recursive to flatten n-levels deep.

### Initialize new array

```js
const NEW_ARRAY_LENGTH = 4;
const array = [...new Array(NEW_ARRAY_LENGTH)];
```

### partialApplication

```js
const partialApplication = (fn, ...initialArguments) => {
	return (...remainingArguments) => {
		fn(...initialArguments, ...remainingArguments);
	};
};
```
