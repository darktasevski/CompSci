# Code snippets

[[toc]]

---

## Git

### Reset branch to the origin master

```shell
git fetch origin
git reset --hard origin/master
```

### Fix last commit message

```bash
git commit --amend
```

### Change branch name

```bash
git branch -m relaese release
```

But if you have already pushed this branch, then there are a couple of extra steps required. The solution for then will be, you need to delete the old branch from the remote and push up the new one.

```bash
### git push origin --delete relaese
### git push origin release
```

### Added a wrong file in the repo

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

## Shell/Bash

### Find processes at wanted port and kill em all

```bash
# for linux
netstat -vanp tcp | grep 3000
# For mac
sudo lsof -i tcp:3000

kill -9 <PID>
```

### Copy your SSH public key on a remote machine for passwordless login - the easy way

```sh
ssh-copy-id username@hostname
```

### Some command line shortcuts

```
Ctrl+a go to beginning of line
Ctrl+k delete from cursor to end of line
Ctrl+e go to end of line
CTRL U to kill (cut) the whole whole
CTRL Y to paste from kill-ring

```

### Massive change of file extension (bash)

Change the file extension in batch. Useful to create output file names with same input name but distinct extension by including logic inside the loop:

```sh
for file in *.txt; do mv "$file" "${file%.txt}.xml"; done
```

### Quickly rename a file

```sh
mv filename.{old,new}
```

### Replace spaces in filenames with underscores

This command will replace all the spaces in all the filenames of the current directory with underscores. There are other commands that do this here, but this one is the easiest and shortest.

```sh
rename 'y/ /_/' *
```

### Delete all files in a folder that don't match a certain file extension

Deletes all files in a folder that are NOT _.foo, _.bar or \*.baz files. Edit the pattern inside the brackets as you like. Show Sample Output

```js

rm !(*.foo|*.bar|*.baz)
```

### Sharing file through http 80 port

From the other machine open a web navigator and go to ip from the machine who launch netcat, http://ip-address/ If you have some web server listening at 80 port then you would need stop them or select another port before launch net cat ;-) \* You need netcat tool installed

```sh
nc -v -l 80 < file.ext
```

### Copy a file using pv and watch its progress

`pv` allows a user to see the progress of data through a pipeline, by giving information such as time elapsed, percentage completed (with progress bar), current throughput rate, total data transferred, and ETA. (man pv) Show Sample Output

```sh
pv sourcefile > destfile
```

### Start COMMAND, and kill it if still running after 5 seconds

```sh
timeout 5s COMMAND
```

### Broadcast your shell thru ports 5000, 5001, 5002

run `nc yourip 5000`, `nc yourip 5001` or `nc yourip 5002` elsewhere will produce an exact same mirror of your shell. This is handy when you want to show someone else some amazing stuff in your shell without giving them control over it.

```sh
script -qf | tee >(nc -kl 5000) >(nc -kl 5001) >(nc -kl 5002)
```

## JS

### Replace spaces with underscores

```js
str.replace(/ /g, '_');
```

### Check what device is used

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

### getScrollPosition

```js
  getScrollPosition () {
        return {
            left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0,
            top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
        };
    }
```

### Set scroll position

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

### Get number from RGB color

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

### And number to color

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

### Create an array of the past seven days, inclusive

```js
[...Array(7).keys()].map(days => new Date(Date.now() - 86400000 * days));
```

If you swap the minus for a plus, it gives you the next seven days.

### ### Generate a random alphanumerical string of length 11

```js
Math.random()
	.toString(36)
	.substring(2);
```

### _Quines_

> A [quine](<https://en.wikipedia.org/wiki/Quine_(computing)>) is a program that outputs its own source code.

```js
// $=_=>`$=${$};$()`;$()
$ = _ => `$=${$};$()`;
$();

// eval(I="'eval(I='+JSON.stringify(I)+')'")
eval((I = "'eval(I='+JSON.stringify(I)+')'"))(
	// For those who like their quines via alert
	// (function a(){alert("("+a+")()")})()
	function a() {
		alert('(' + a + ')()');
	}
)();
```

### Get the current page’s query parameters as an object

```js
document.location.search
	.replace(/(^\?)/, '')
	.split('&')
	.reduce(function(o, n) {
		n = n.split('=');
		o[n[0]] = n[1];
		return o;
	}, {});
```

### _Working clock_

> it ticks every second, updating the page with the current time.

```html
<body
	onload="setInterval(()=>document.body.innerHTML=new Date().toGMTString().slice(17,25))"
></body>
```

### _Shuffle an array_

```js
// Return a shuffled copy of an Array-like
arr => arr.slice().sort(() => Math.random() - 0.5);
```

### _Generate random hex code_

```js
// Generate a random hex code such as `#c618b2`
'#' +
	Math.floor(Math.random() * 0xffffff)
		.toString(16)
		.padEnd(6, '0');
```

### Fizz Buzz

```js
for (i = 0; ++i < 101; console.log(i % 5 ? f || i : f + 'Buzz')) f = i % 3 ? '' : 'Fizz';
```

### _Remove duplicates from array_

```js
// Remove duplicates from the iterable `arr`
[...new Set(arr)];
```

### _Cancelable Promise util_

```js
const cancelable = promise => {
	let hasCancelled = false;

	return {
		promise: promise.then(v => {
			if (hasCancelled) {
				throw { isCancelled: true };
			}

			return v;
		}),
		cancel: () => (hasCancelled = true),
	};
};
```

When we call the cancelable function by giving it a promise we'll get an object that has a:

-   `promise` property: original promise extended with a single `.then` handler that is able to cancel out all the following `.then` handlers appended to it later on. Cancellation is based on a local variable hasCancelled. If the flag turns to true before the promise resolves it throws with additional information and bypasses all the latter `.then` handlers. We should use this property instead of our original promise and append any required `.then` handlers to it.
-   `cancel` method that changes the local hasCancelled flag to true

Usage example:

```js
// mocked fetch function to simulate waiting for a result 10 seconds
const fetchResult = () =>
	new Promise(resolve => {
		setTimeout(() => resolve('response'), 10000);
	});

const { promise: result, cancel } = cancelable(fetchResult());

result.catch(error => {
	if (error.isCancelled) console.log('Promise chain cancelled!');
});
result.then(res => console.log(`Handler 1: ${res}`));
result.then(res => console.log(`Handler 2: ${res}`)).then(res => console.log(`Handler 3: ${res}`));

// at any point in time we can cancel all of the above success handlers by using cancel function
// catch handler can verify if cancellation is the reason of failure and do something based on it, in this case log out "Promise chain cancelled!"
cancel();
```

It's important to note that by using this approach we can't cancel out any handlers that were attached directly to an original promise object passed to our util function. This mechanism is only able to cancel out .then handlers appended to the returned promise. A bit weird but it's not bad once you get used to it. You can still hold a reference to both the original and derived promise.

Another note is that error with isCancelled flag ends up in the catch handler only when the original Promise eventually resolves. All of this is essentially a way for us to say: once and if this Promise resolves, skip the success handlers because we are not interested in handling this data anymore.
