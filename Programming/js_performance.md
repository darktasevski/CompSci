# Javascript Performance

> Some notes regarding JS performance

## Avoid interaction with host objects

THE PROBLEM:

Native JavaScript is compiled into machine code by most scripting engines offering incredible performance boost, however interaction with host (browser) objects outside the JavaScript native environment raises unpredictability and considerable performance lag, particularly when dealing with screen-rendered DOM objects or objects which cause Disk I/O (such as WebSQL).

THE SOLUTION(S):

> You can’t really get away from them, but keep your interaction with host objects to an absolute minimum.

-   Use CSS classes instead of JavaScript for DOM animation.
-   Use fast DOM traversal with document.getElementById()
-   Store pointer references to in-browser objects.
-   Keep your HTML super-lean (get rid of all those useless DIV and SPAN tags)
-   Batch your DOM changes, especially when updating styles. When making calls to modify DOM make sure you batch them up so as to avoid repeated screen rendering, for example when applying styling changes. The ideal approach here is to make many styling changes in one go by adding or removing a class, rather than apply each individual style separately. This is because every DOM change prompts the browser to re-render the whole UI using the boxing model. If you need to move an item across the page using X+Y coordinates, make sure that these two are applied at the same time rather than separately.
-   Build DOM separately before adding it to the page.
-   Use buffered DOM inside scrollable DIVs. You can use this technique to remove items from DOM that are not being visually rendered on screen, such as the area outside the viewport of a scrollable DIV, and append the nodes again when they are needed. This will reduce memory usage and DOM traversal speeds. [Sencha \| Grid with Buffered Store](https://examples.sencha.com/extjs/6.7.0/examples/classic/grid/buffered-store.html) [Sencha \| Buffer Rendered Grid](https://examples.sencha.com/extjs/6.7.0/examples/classic/grid/buffer-grid.html)

## Manage and Actively reduce your Dependencies

THE PROBLEM:

On-screen visual rendering and user experience is usually delayed while waiting for script dependencies load onto the browser. This is particularly bad for mobile users who have limited bandwidth capacity.

THE SOLUTION(S):

> Actively manage and reduce dependency payload in your code.

-   Write code that reduces library dependencies to an absolute minimum.
-   Minimize and combine your code into modules.
-   Use a post-load dependency manager for your libraries and modules.
-   Maximise use of caching (eTags, .js files, etc).

## Be disciplined with event binding

THE PROBLEM:

Browser and custom event handlers are an incredible tool for improving user experience and reducing the depth of the call stack (so you avoid having a function calling a function which calls another function etc), but since they are hard to track due to their ‘hidden’ execution they can fire many times repeatedly and quickly get out of hand, causing performance degradation.

THE SOLUTION(S):

> Be mindful and disciplined when creating event handlers. Get to know your weapons too, if you are using a framework then find out what’s going on underneath the hood.

-   Pay special attention event handlers that fire in quick succession (ie, ‘mousemove’).
-   Remember to unbind events when they are not needed.
-   Use ‘mouseup’ instead of ‘click’.

## Maximise the efficiency of your iterations
