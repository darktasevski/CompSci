# Electron

> Notes and examples on Electron.js

Electron is a runtime that allows you to create desktop applications with HTML5, CSS, and JavaScript.

Electron combines the Chromium Content Module and Node.js runtimes. It allows developers to build GUIs with web pages as well as access native operating system capabilities on Windows, macOS, and Linux through an OS-agnostic API.

> Chromium Content Module is a stripped-down version of the Chrome web browser with Node.

**Electron applications consist of two types of processes: the main process and zero or more renderer processes.** Each process plays a different role in the application. The Electron runtime includes different modules to assist you in building your application. Certain modules, such as the ability to read and write from the system’s clipboard, are available in both types of processes. Others, such as the ability to access an operating system’s APIs, are limited to the main process.

![processes](https://lh3.googleusercontent.com/xV2wFS2O2hczrizin4mIpxsT4QGIbZLSe8ZPugZKaRbV1flFtFc95AEyh5eqBq7E5B-OWPvLiRe69r-9HFrQHSY14oUy9pk7_NBpeivhy4BeYDeMVnQgZgTUEF99xf92e7-T4s8WpyZDW-_csIswlPtdhcopksnC6sOH6cQQl-NMhKItfutwIzB5qAU8qMosKdxh20HFLGzZvLT9PvEr9GWb4WMRTNl4vGbRRlPku1OWD_KNThF2Yvo3mlLqQ5PnvzHafJnoEg5K2vJ7FOcGEBkzv6pkcKQU-gDWPxlcfGcil3ptAQfBMduIETMaqsv8Q6t91jRT1fjWfSxqCgQ6AMULyIYV69AGkXkeqLeAoDJW7gvSVZn3qnFP1xJ2hHGUeIaWKZuX8Ix7yy8oGnbZhshaqHOfaEv2nokZMLYIgEzFV49i_XVONbjBk0PhiHVaMHTZdNxWJijUISx041cGyvCHCnml629BgIQSXPvzamYQpikvfGmudqFRD4QA2ZOhWST8g-O_m27r4BVEAjMB77R2F9n2wQYhX6BC7e_HCrb4q4jMCzRsnUoBcsGr_YNwwdbyDa3A5Ljd0iKof3jHzRfM-AjUCbb6Brma8JuLE8vb7Ehmv1WuW_3Pir4AMAfwQlJYc9b6xtNqeHmMeyHKI6q8aH0Jk2dpymQ1jHYKP0wB0LNA3GvKlrBF55ysXNLnVV-0sxUiH7op6JxgehuvfPk=w590-h404-no)

## The main process

> The main process handles OS integration, manages the lifecycle of the application, and creates renderer processes.

The main process has a few important responsibilities. It can respond to application lifecycle events such as starting up, quitting, preparing to quit, going to the background, coming to the foreground, and more. The main process is also responsible for communicating to native operating system APIs. If you want to display a dialog box to open or save a file, you do it from the main process.

## Renderer processes

> Renderer processes display the UI and respond to user events.

The main process can create and destroy renderer processes using Electron’s BrowserWindow module. Renderer processes can load web pages to display a GUI. Each process takes advantage of Chromium’s multiprocess architecture and runs on its own thread. These pages can then load in additional JavaScript files and execute code in this process. Unlike normal web pages, you have access to all the Node APIs in your renderer processes, allowing you to use native modules and lower-level system interactions.

_Renderer processes are isolated from each other and unable to access operating system integration APIs._ Electron includes the ability to facilitate communication between processes to allow renderer processes to communicate with the main process in the event that they need to trigger an Open or Save File dialog box or access any other OS-level integration.

## Electron VS. NW.js

NW.js uses a forked version of Chromium. Electron uses Chromium and Node.js but doesn’t modify them. This makes it easier for Electron to keep pace with the most recent versions of Chromium and Node. Electron also includes modules for automatically downloading updates and reporting crashes. NW.js doesn’t.

If backward compatibility is a concern, then NW.js might be a better choice because it supports Windows XP and Vista. Electron supports only Windows 7 and later. For multimedia-focused applications, Electron is typically a better choice because Chromium’s FFmpeg library is a statically linked dependency, so Electron supports more codecs out of the box. With NW.js, you need to manually link the FFmpeg library.

## Code samples and simple projects

https://github.com/Puritanic/Electron

---

## Facilitating Interprocess Communication (IPC)

Electron provides different modules to the main and renderer processes. These modules represent the code capabilities of Electron.

![processes 2](https://lh3.googleusercontent.com/HY9uywuphN9Oke-5GTlhvVKk4_AMdejo9dSIeFpFx2ONoJzwI8Uj3hsWziBiL7dSQ7Qvdx0zjK-Y_ogJaGDXIT0MUFjmpmt9NLBI4zWH5ZRESC0o3J0U4IC33j7PIFNP7t26lG9VTJq_ub8rKqTXEONT1450FmYieaX7_oaQokuIE41v4TIgrXtiZGiX4BqwxyOchZkfc0O6VzlwXHj1XbwSSwlqxKj6RYNzdGIUn2rXYUZx9eEUpgg4e4d571FDHtfah0kvpn6W2tJgP6schcJuhmmLSUms93NU6md8SV7iWq6QlEwEJV3HyeBRXIzxROydD9JAW3Jizw17Dd-Wk-XI1Wj_o0cF9UMTjZfeIRGhCa6wNqvFDJ3CFoZRUk1G9GBg1PCJOjhl1TMSEF13Mdg1xxCKuu35rG3fv4mIm0umleLu004ThchdPfGT12izH945KaQBS9Y36f2ezGfqeuZgQkWKualPBSuP3l7VxD9sF2z4NMnXQu8F1Oe1tueN5ibDCFfl3R2nxKsgIdnqJb0qhTteOKWMbXeKrG_rGX_NWEZBhPkjf_cHIOqCqqG-cjamUrHp7jfhSoIaykF_f6WnawTGHUKIy7ifSybnPWP6DlFKLzGd3xdECH59i6aNmgHTKrtVZTLGt070A8umNb6NPsnW0izmCm-zPFway2FN5FoI_qOL22GdYiXirk0z_yzdbIPNv69VLd4QSSAwUt8=w590-h397-no)

Electron provides only a subset of its modules to each process and doesn’t keep us from accessing Node APIs that are separate from Electron’s modules. We can access a database or the filesystem from the renderer process if we want, but there are compelling reasons to keep this kind of functionality in the main process. We could potentially have many renderer processes, but we will always have only one main process. Reading from and writing to the filesystem from one of our renderer processes could become problematic; we could end up in a situation where one or more processes try to write to the same file at the same time or read from a file while another renderer process is overwriting it.

A given process in JavaScript executes our code on a single thread and can do only one thing at a time. By delegating these tasks to the main process, we can be confident that only one process is performing reading or writing to a given file or database at a time. Other tasks follow the normal JavaScript protocol of patiently waiting in the event queue until the main process is done with its current task.

### `remote` module

`remote` module—a simple way to perform interprocess communication from the `renderer` process to the `main` process. The `remote` module, available only in the `renderer` process, works as a proxy to the `main` process by mirroring the modules that are accessible in the `main` process. The `remote` module also takes care of communication to and from the `main` process when we access any of those properties.

When we call a method or property on the remote object, it sends a _synchronous_ message to the main process, executes in the main process, and sends a message back to the renderer process with the results. The remote module allows us to define functionality in the main process and easily makes it available to our renderer processes.

> The remote module facilitates access to functionality from the main process in our renderer processes, but it doesn’t allow for the inverse. For doing that we need another approach.

### Sending content from the `main` process to the `renderer` process

The remote module facilitates access to functionality from the main process in our renderer processes, but it doesn’t allow for the inverse.

Each `BrowserWindow` instance has a property called `webContents`, which stores an object responsible for the web browser window that we create when we call `new Browser-Window()`. `webContents` is similar to `app` because it emits events based on the lifecycle of the web page in the renderer process.

`webContents` has a method called `send()` which sends information from the `main` process to a `renderer` process. `webContents.send()` takes a variable number of arguments. The first argument, which is an arbitrary string, is the name of the channel on which to send the message. An event listener in the renderer process listens on the same channel. All of the subsequent arguments after the first are passed along to the renderer process.

Electron comes with two basic modules for sending messages back and forth between processes: `ipcRenderer` and `ipcMain`. Each module is available only in the process type with which it shares a name.

`ipcRenderer` can send messages to the `main` process. More important to our immediate needs, it can also listen for messages that were sent from the `main` process using `webContents.send()`. It requires the `ipcRenderer` module in the `renderer` process.

```js
const { remote, ipcRenderer } = require('electron');
1;
const mainProcess = remote.require('./main.js');

ipcRenderer.on('file-opened', (event, file, content) => {
	markdownView.value = content;
	renderMarkdownToHtml(content);
});
```

`ipcRenderer.on()` takes two arguments: the channel to listen on and a callback function that defines an action to take when the renderer process receives a message on the channel on which you’re setting up the listener. The callback function is provided with a few arguments when it is called. The first is an event object, which is just like a normal event listener in the browser. It contains information about the event for which we set up the listener. The additional arguments are what were provided when using `webContents.send()` in the `main` process.
