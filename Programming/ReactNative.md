# React Native

[[toc]]

[TOC]

---

> While universal WebView-powered apps were built with the idea of build once, run anywhere, React Native was built with the goal of learn once, write anywhere.

At its core, React Native is composed of React components.

```js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class StyledText extends React.Component {
	render() {
		return (
			<View style={styles.text}>
				<Text style={[styles.largeText, styles.textStyle]}>San Francisco</Text>
				<Text style={[styles.smallText, styles.textStyle]}>Light Cloud</Text>
				<Text style={[styles.largeText, styles.textStyle]}>24°</Text>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	text: {
		color: 'red',
		fontWeight: 'bold',
	},
});
```

-   Our entire application is rendered with App as our top-level component. Although created automatically as part of setting up a new CRNA project, this component is a custom component responsible for rendering what we need in our application.
-   The View component is used as a layout container.
-   Within View, we use the Text component to display lines of text in our application. Unlike App, both View and Text are built-in React Native components that are imported and used in our custom component.

-   The Platform API allows us to conditionally apply different styles or properties in our component based on the device’s operating system. The OS attribute of the object returns either iOS or android depending on the user’s device.

We can also use the Platform.select method that takes the operating system as keys within an object and returns the correct result based on the device:

```js
textStyle:{ textAlign: 'center', ...Platform.select({
    ios: {
      fontFamily: 'AvenirNext-Regular',
}, android: {
      fontFamily: 'Roboto',
    },
}), },
```

Since the virtual keyboard can cover roughly half the device screen, this is a common problem that occurs when using text inputs in an application. Fortunately, React Native includes `KeyboardAvoidingView`, a component that solves this problem by allowing us to adjust where other components render in relation to the virtual keyboard. To be used instead of `View`. KeyboardAvoidingView accepts a `behavior` prop with which we can customize how the keyboard adjusts. It can change its height, position or bottom padding in relation to the position of the virtual keyboard.

### Dimensions

The first thing we want to think about when understanding the layout of a screen is the dimensions of each component. A component must have both a non-zero width and height in order to render anything on the screen. If the width is 0, then nothing will render on the screen, no matter how large the height is. We're usually using `flex: 1` if we want for View to take up whole screen.

In React Native, we specify dimensions in terms of logical pixels rather than physical pixels. There may be multiple physical pixels per logical pixels in a device with a high pixel density, e.g. retina display. When we make calculations that can result in non-integer dimensions, we should use PixelRatio to help us align to the nearest physical pixel - otherwise, there may be visual inconsistencies (e.g. some elements or margins appear larger than others).

### Yoga

React Native uses the Yoga layout engine (also from Facebook). This is a cross-platform implementation of the flexbox algorithm. It matches the algorithm used by web browsers pretty closely, but with two important differences:

-   The default values are different
-   Yoga adds a couple new features that don’t exist in the browser (like aspectRatio)

### Flex

The flex style attribute gives us the ability to define layouts that can expand and shrink automatically based on screen size. The flex value is a number that represents the ratio of space that a component should take up, relative to its siblings.

If a component has no siblings, as in the case of the top-level View rendered by App, things are straightforward:

-   with a flex of 1, the component will expand to fill its parent entirely
-   with a flex value of 0, the component will shrink to the minimum space possible ( just large enough for the component’s children to be visible, if it has any)

### Padding, margin, borders, and the box model

The React Native layout engine uses what’s known as the box model for customizing spacing. You might be familiar with the box model if you’ve developed for the web. There are three main style attributes we can use:

-   margin: This is the amount of space between a component and its siblings or the edge of its parent’s content area.
-   border: This is the border drawn around the component, which can vary in width, style (e.g. a dashed line), and color.
-   padding: this is the spacing within a component before its children components.

## Core Components

Components are an abstraction layer on top of the underlying native platform. On an iOS device, a React Native component is ultimately rendered as a `UIView`. On Android, the same component would be rendered as an `android.view`. As React Native expands to new platforms, the same code should be able to render correctly on more and more devices.

### View

There are two fairly distinct things we use View for:

-   First, we use View for layout. A View is commonly used as a container for other components. If we want to arrange a group of components vertically or horizontally, we will likely wrap those components in a View.
-   Second, we use View for styling our app. If we want to render a simple shape like a circle or rectangle, or if we want to render a border, a line, or a background color, we will likely use a View.

React Native components aim to be as consistent as possible – many components use similar props as the View, such as style. Because of this, if you learn how to work with View, you can reuse that knowledge with Text, Image, and nearly every other kind of component.

### Text

We use the Text component to render text on the screen. Text can be styled with font-specific attributes such as fontSize. It can use nearly all of the same styles as View, such as backgroundColor and width. However, Text has some key differences when it comes to layout.

Unlike the View component, Text components have an intrinsic size. In other words, if we don’t specify a width or height, a Text component will still show up on the screen. Specifying a width, height, or flex attribute as part of the style will override the intrinsic dimensions of the Text. Text context will automatically wrap around by default when it fills the width of the component. This is configurable with the `numberOfLines` prop.

In addition, we use the following props frequently:

-   numberOfLines - The number of lines to allow before truncating the text.
-   ellipsizeMode - How text should be truncated when it exceeds numberOfLines. One of 'head', 'middle', 'tail', 'clip' (iOS only).

Like View elements, Text elements can have children. This is useful when you want to have multiple styles of text within the same paragraph. The Text element will inherit styles from its parent. If the parent has a fontSize of 16 and color of blue, a child Text element will have the same styles by default. The child Text element can be styled to override its parent’s styles as needed.

### SafeAreaView

The purpose of SafeAreaView is to render content within the safe area boundaries of a device. It is currently only applicable to iOS devices.

SafeAreaView renders nested content and automatically applies paddings reflect the portion of the view that is not covered by navigation bars, tab bars, toolbars, and other ancestor views. Moreover, and most importantly, Safe Area's paddings reflect the physical limitation of the screen, such as rounded corners or camera notches (i.e. the sensor housing area on iPhone X).

### TouchableOpacity

The TouchableOpacity component is similar to View, but lets us easily respond to tap gestures in a performant way. The TouchableOpacity component fades out when pressed, and fades back in when released. The opacity animation happens on the native side (it doesn’t trigger a re-render), so the animation is extremely smooth and the interaction is low latency. The opacity value when pressed can be configured with the activeOpacity prop by providing a number from 0 to 1.

If you don’t like the opacity animation, you can instead use a TouchableHighlight for a background color changing animation.

One minor inconvenience with both TouchableOpacity and TouchableHighlight: these components can only have a single child element, so if we want multiple children, we will need to wrap them in a View.

### Image

We use the Image component to render images on the screen. There are two ways to include images in an app: we can bundle an image asset with our code (which will then get stored on the device), or we can download an image from a URI.

#### Common image styles

We can use the resizeMode style (or prop – both work) to determine how the image is cropped in the case where the image data’s intrinsic dimensions are different than the dimensions of the Image component. The options for resizeMode are:

-   cover: The image scales uniformly to fill the Image component. The image will be cropped by the bounding box of the component if they have different aspect ratios.
-   contain: The image scales uniformly to fit within the component. The component’s background color will show if they have different aspect ratios.
-   stretch: The image stretches to fill the component.
-   repeat: The image repeats itself at its intrinsic dimensions to fill the component (iOS-only).
-   center: The image maintains its intrinsic dimensions, and is centered within the component.

We can use the aspectRatio style to render the image at a specific aspect ratio, regardless of its intrinsic dimensions. We provide a number value which represents the ratio of width to height. For example, if we set aspectRatio: 2, this means the ratio of width to height is 2 to 1 – the image will render twice as wide as it is tall. While most commonly used with images, the aspectRatio style can be used on any component, such as View or Text.

### ActivityIndicator

We can render a loading indicator using the ActivityIndicator component.

This component accepts all the same props as View, plus a few more:

-   animating: A bool indicating whether to show or hide the indicator (defaults to true).
-   color: The color of the spinner (defaults to gray).
-   size: One of 'small' or 'large' (defaults to small).

### FlatList

FlatList components are used for rendering large quantities of scrollable content. Instead of rendering a children prop, the FlatList renders each item in an input data array using the renderItem prop. The renderItem prop is a function which takes an item from the data array and maps it to a React Element. Each item in data should be an object with a unique id, so that React can determine when items have been rearranged.

The FlatList is generally performant: it only renders the content on screen (clipping offscreen content), and only updates rows that have changed. The FlatList is built using a more generic component, the ScrollView.

`inverted` - In a messaging app, for example, we typically want new messages to appear at the bottom of the list. To accomplish this, we’ve have to add the inverted prop to our FlatList.

`keyboardShouldPersistTaps` We use the keyboardShouldPersistTaps prop to configure what happens when we tap the FlatList. This prop has three possible options:

-   never - Tapping the list will dismiss the keyboard and blur any focused elements. This is the default behavior.
-   always - Tapping the list will have no effect on the keyboard or focus.
-   handled - Tapping the list will dismiss the keyboard, unless the tap is handled by a child element first (e.g. tapping a message within the list). We want handled, so that we enable tapping messages without dismissing the keyboard.

### TextInput

When working with TextInput, we’ll generally use the following props to capture user input:

-   value - The current text in the input field.
-   onChangeText - A function called each time the text changes. The new value is the first argument.
-   onSubmitEditing - A function called when the user presses the return/next key to submit/move to the next field.

It’s common to store the current text in the state of the component that renders the TextInput. Each time the function we pass to onChangeText is called, we call setState to update the current text. When the user presses return, the function we passed to onSubmitEditing is called – we can then perform some action with the current text, and use setState to reset the current text to the empty string.

When working with TextInput, we can use most of the same styles as Text (which includes the styles for View). A few styles don’t work quite as well as they do on Text though: borders tend not to render correctly, and padding and line height can conflict in unusual ways. If you’re having trouble styling a TextInput, you may want to wrap the TextInput in a View and style the View instead. A few other common props:

-   autoCapitalize - For capitalizing characters as they’re typed. One of 'none', 'sentences', 'words', 'characters'.
-   autoCorrect - Enable/disable auto-correct.
-   editable - Enable/disable the text field.
-   keyboardType - The type of keyboard to display. Cross-platform values are 'default', 'numeric', 'email-address', 'phone-pad'.
-   multiline - Allow multiple lines of input text.
-   placeholder - The text to show when the text field is empty
-   placeholderTextColor - The color of the placeholder text
-   returnKeyType - The text of the return key on the keyboard. Cross-platform values are 'done', 'go', 'next', 'search', 'send'.

### ScrollView

The ScrollView is simpler than the FlatList: it will render all of its children in a vertically or horizontally scrollable list, without the additional complexity of the keyExtractor or renderItem props. The ScrollView is well suited for scrolling through small quantities of content (fewer than 20 items or so). **Content within a ScrollView is rendered even when it isn’t visible on the screen.** For large quantities of items, or cases where many children of the ScrollView are offscreen, you will likely want to use a FlatList component for better performance.

You can think of a ScrollView as two separate views, one inside the other. The outer view has a bounded size, while the inner view can exceed the size of the outer view. If the inner view exceeds the size of the outer view, only a portion of it will be visible. When we pass children elements to the ScrollView, they are rendered inside this inner view. We call the inner view the “content container view”, and can style it separately from the outer view.

### Modal

The Modal component lets us transition to an entirely different screen. This is most useful for simple apps, since for complex apps you’ll likely be using a navigation library which will come with its own way of doing modals. Common props include:

-   animationType - This controls how the modal animates in and out. One of 'none', 'slide', or 'fade' (defaults to 'none').
-   onRequestClose - A function called when the user taps the Android back button.
-   onShow - A function called after the modal is fully visible.
-   transparent - A bool determining whether the background of the modal is transparent.
-   visible - A bool determining whether the modal is visible or not.

The visible prop is the most important, since this lets us show and hide the Modal.

### AsyncStorage

AsyncStorage is a simple key-value store provided by React Native for storing small quan- tities of string data (which we usually serialize as JSON). Like the name implies, saving and reading from this store both happen asynchronously. We can call AsyncStorage.getItem(key) and AsyncStorage.setItem(key, value) to store and retrieve a string value using a string key.

## Core APIs

-   `Alert` - Displays modal dialog windows for simple user input
-   `BackHandler` - Controls the back button on Android
-   `CameraRoll` - Returns images and videos stored on the device
-   `Dimensions` - Returns the dimensions of the screen
-   `Geolocation` - Returns the location of the device, and emits events when the location changes
-   `Keyboard` - Emits events when the keyboard appears or disappears
-   `NetInfo` - Returns network connectivity information, and emits events when the connectivity changes
-   `PixelRatio` - Translates from density-independent pixels to density-dependent pixels (more detail on the later)
-   `StatusBar` - Controls the visibility and color of the status bar

### StatusBar

The status bar works a little differently on iOS and Android. On iOS the status bar background is always transparent, so we can render content behind the status bar text. On Android, we can set the status bar background to transparent, or to a specific solid color. If we use a transparent status bar, we can render content behind it just like on iOS – unlike on iOS, by default the status bar text is white and there’s typically a semi-transparent black background. If we choose a solid color status bar, our app’s content renders below the status bar, and the height of our UI will be a little smaller. In our app, we’ll use a solid color status bar, since this will let us customize the color.

### NetInfo

The NetInfo APIs are a good example of React Native core APIs: these provide a uniform interface to the lower level native APIs on iOS and Android. React Native is essentially providing JavaScript bindings and smoothing out platform differences for us. We can call NetInfo.getConnectionInfo() to get the network connectivity status. NetInfo.getConnectionInfo() returns a promise which resolves to a string. If the device is connected, the string value will be 'wifi' or 'cellular' If the device isn’t connected, the promise will still resolve, but with the value 'none'. NetInfo provides the method addEventListener, which we can call with a callback function, which it will invoke each time the network status changes.

```js
const subscription = NetInfo.addEventListener('connectionChange', status => {
	console.log('Network status changed', status);
});
```

This example would log a new status each time the network connectivity changes. We can call subscription.remove() when we want to stop listening for changes – most of the time, we’ll do this when our component unmounts.

### Alert

The full method signature is Alert.alert(title, message?, buttons?, options?, type?):

-   title - A string, shown in a large bold font, at the top of the dialog
-   message - A string, typically longer, shown in a normal weight font below the title
-   buttons - An array of objects containing text (a string), onPress (a callback function), and optionally a style on iOS (styles can be one of default, cancel, or destructive).
-   options - An object for controlling the dialog dismissal behavior on Android. Tapping outside the dialog will normally exit the dialog. This can be prevented by setting { cancelable: false } or handled specially with { onDismiss: () => {} }.
-   type - Allows text entry on iOS using one of the following options: default, plain-text, secure-text, or login-password.

### BackHandler (Android only)

Like with NetInfo, we use the event listener pattern to handle back button press events:

`BackHandler.addEventListener('hardwareBackPress', handlerFunction);`

We can return true from our handlerFunction to indicate that we’ve handled the back button. By returning false, we indicate that we didn’t handle the event. Therefore, if any other functions have been registered, the next one registered should be called. These functions are called in the reverse of the order they were registered – the last handler registered will be called first. If no handler returns true, then the back button will exit to the home screen (the default back button behavior).

### Refs

React let’s us access the instance of any component we render using a ref prop. This is a special prop that we can supply a callback – the callback will be called with the instance as a parameter, after the component mounts (and before it unmounts). We can store a reference to the component instance. You can think of a component instance as the “this” when we access this.props or any method that’s part of our class.

### Geolocation

The React Native geolocation API is slightly different than other APIs: we can access it directly from the global navigator object, rather than importing it at the top of the file.

> The geolocation API in React Native is the same as the one found in modern web browsers. This means better compatibility between libraries and a lower learning curve if you’re coming from web development. On the web, the navigator object contains a lot of useful metadata about your web browser. In React Native, it’s really just a container for geolocation and potentially a handful of other browser APIs. Accessing a global variable feels a bit unusual in React Native, but is necessary to provide the exact same API on web and mobile.

Depending on how we’re using geolocation, there are a few other APIs that might be useful:

-   watchPosition(success, error?, options?) and clearWatch(watchID) can be used to receive notifications when location changes. We can also pass the options timeout (number in ms), maximumAge (number in ms), and enableHighAccuracy (bool) for more granular control.
-   requestAuthorization() can be used to request access to device location. This can be a better experience than presenting an alert when a map is shown for the first time.
-   getCurrentPosition(geo_success, geo_error?, geo_options?) gets our current position.

### CameraRoll

We can use CameraRoll.getPhotos(options) to request an array of images from the device. We can specify the number of images we want to get with the first option. We can use a cursor to iterate through the list of images by passing an after option (more on this soon). This API is asynchronous and returns a promise containing the image metadata, along with pagination info.

Since this API is asynchronous, it may take some time for the first images to be returned. The more images we request, the longer it will take. It’s best to request just enough images to fill the entire screen: we want the API response as soon as we can, but we also want the screen to load all at once, rather than piecemeal. Calling CameraRoll.getPhotos(options) returns a promise, which resolves to an object containing:

-   edges - An array of items, each containing a node object. The node object contains metadata about the image, such as timestamp and location. The node object also contains an image object with the filename, width, height, and uri of the image.
-   page_info - An object containing a boolean has_next_page, a string end_cursor, and a string before_cursor.

Before we can access the camera roll on Android, we’ll need to request the user’s permission to do so. We can use the Expo Permissions API to do this. We can await a call to Permissions.askAsync containing the permission we want access to, and check the returned object for whether request was granted.

```js
await Permissions.askAsync(Permissions.CAMERA_ROLL);
if (status !== 'granted') {
	// Denied
} else {
	// Good to go!
}
```

## The keyboard

Keyboard handling can be challenging for many reasons:

-   The keyboard is enabled, rendered, and animated natively, so we have much less control over its behavior than if it were a component (where we control the lifecycle).
-   We have to handle a variety of asynchronous events when the keyboard is shown, hidden, or resized, and update our UI accordingly. These events are somewhat different on iOS and Android, and even slightly different in the simulator compared to a real device.
-   The keyboard works differently on iOS and Android at a fundamental level. On iOS, the keyboard appears on top of the existing UI; the existing UI doesn’t resize to avoid the keyboard. On Android, the keyboard resizes the UI above it; the existing UI will shrink to fit in the available space. We generally want interactions to feel similar on both platforms, despite this fundamental difference.
-   Keyboards interact specially with certain native elements e.g. ScrollView. On iOS, dragging downward on a ScrollView can dismiss the keyboard at the same rate of the pan gesture.
-   Keyboards are user-customizable on both platforms, meaning there’s an almost unlimited number of shapes and sizes our UI has to handle.

On iOS, the keyboard uses an animation with a special easing curve that’s hard to replicate in JavaScript, so we’ll hook into the native animation directly using the LayoutAnimation API. LayoutAnimation is one of the two main ways to animate our UI (the other being Animated).

> Most React Native components accept an onLayout function prop. This is conceptually similar to a React lifecycle method: the function we pass is called every time the component updates its dimensions. We need to be careful when calling setState within this function, since setState may cause the component to re-render, in which case onLayout will get called again... and now we’re stuck in an infinite loop!

### LayoutAnimation

`LayoutAnimation` is the only way we can match the exact animation of the keyboard. It’s used internally by the built-in KeyboardAvoidingView component, so it’s safe for us to use despite being considered experimental. Currently `LayoutAnimation` is disabled by default on Android, so we need to enable it by calling `UIManager.setLayoutAnimationEnabledExperimental(true)`.

```js
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
	UIManager.setLayoutAnimationEnabledExperimental(true);
}
```

> The `UIManager` object contains a variety of APIs for getting access to native UI elements for measuring, but we won’t use it for anything else here.

`LayoutAnimation` automatically handles animating elements that should change size or appear/disappear between calls to render. We call `LayoutAnimation.create` to define an animation configuration, and then `LayoutAnimation.configureNext` to enqueue the animation to run the next time render is called.

The LayoutAnimation.create API takes three parameters:

-   duration - The duration of the animation
-   easing - The curve of the animation. We choose from a predefined set of curves: spring, linear, easeInEaseOut, easeIn, easeOut, keyboard. The keyboard curve is the key to matching the keyboard’s animation curve – although it only exists on iOS.
-   creationProp - The style to animate when a new element is added: opacity or scaleXY.

> If we want to call this every time the component will rerender, `componentWillReceiveProps` is the best place to do that.

## Navigation

Navigation is a major piece of any mobile application with multiple screens. With a navigation system in place, a user can access any part of an application. It also allows us to structure and separate how data is handled in the app.

Handling navigation in a mobile application is fundamentally different from a website. For a website, the state of a user’s location is usually kept in the browser’s URL. Although the browser maintains a history of pages visited in order to allow the user to move back and forth, the browser only stores page URLs and is otherwise stateless. On mobile, the entire history stack is maintained and can be accessed.

On mobile, we have more control and flexibility over history management. We can keep a **history stack** that includes details of each route including parameters and part of the application state.

### Navigation in React Native

One of the primary navigation patterns in a mobile app is a stack-based pattern. In this pattern, only one screen can be seen by the user at any given time. Navigating involves pushing the new screen onto the navigation stack.

It is important to realize that this pattern, among others, uses different native components for iOS and Android. For example, building a stack-based navigation flow between screens can be done using `UINavigationController` for iOS and connecting `Activities` for Android.

There are two primary approaches to navigation in React. We can either include actual native iOS/Android navigational elements or use JavaScript to create the required animations and components that we need.

#### Native navigation

The first way we can add navigation is to use native iOS/Android navigational components.

In an **iOS** application, views are used to build the UI and display content to the user. A view controller (or the UIViewController class) is used to control a set of views and allows us to connect our UI with our application data. By including multiple view controllers in our app, we can build different screens as well as transition between them.

In **Android**, activities are used to create single screens to define our UI. We can use tasks in order to define a stack of activities known as the back stack. The startActivity method can be used to start a new activity. When this happens, the activity is pushed onto the activity stack. In order to return to the previous screen, the physical back button on every Android device can be pressed in order to run the finish method on the activity. This closes the current activity, pops it off the stack and returns the user back to the previous activity.

In **React Native**, all of our component code executes on a JavaScript thread. These components then bridge to a separate main thread responsible for rendering native iOS and Android views.

##### Pros

The primary benefit of this approach is a smoother navigation experience for the user. This is because purely native iOS/Android navigation APIs can be used with all of our navigation happening within the native thread. This approach works well when including React Native in an existing native iOS or Android application. Using the same navigation components and transitions throughout the app means that different screens in the app will feel consistent regardless of whether they’re written natively or with React Native. Additionally, if an operating system update modifies the style or functionality of navigation components, you won’t have to wait for the same modifications to be made in your JavaScript- based navigation library.

##### Cons

One of the issues with this navigation approach is that it usually involves more work. This is because we need to ensure navigation works for both iOS and Android, using their respective native navigational components.

Moreover, we will also have to eject from Expo and take care of linking and bridging any native modules ourselves. This means we cannot build an application with native iOS navigation components if we do not own a Mac computer.

Another potential problem with this solution is that it can be significantly harder to modify or create new navigation patterns. In order to customize how navigation is performed, we would have to dive in to the native code and understand how the underlying navigation APIs work before being able to change them.

#### Navigation with JavaScript

The second approach to adding navigation to a React Native app is to use JavaScript to create components and navigation patterns that look and feel like their native counterparts. This is done solely using React Native built-in components and the Animated API for animations.

With the Animated API, we can use animated versions of some built-in components such as View as well as create our own. We can create stack based navigation (as well as other navigation patterns) by nesting our screen components within an Animated component. We can then have our screens slide (or fade) in and out of our device when we need to allow the user to navigate throughout our application. We’ll have to maintain the hierarchy of screens entirely in JavaScript ourselves.

##### Pros

One of the advantages of using JavaScript-based navigation is that it can be simpler to build the components and animation mechanisms that can be used in both platforms instead of trying to create a bridge to all of the core native iOS/Android APIs that we would need. This also gives us more control and flexibility to customize specific navigation features instead of relying on what’s available in the native platforms. We can debug any issues we experience with navigation that is purely JavaScript-based without diving in to native code.

Most of the work during an animation using the React Native Animated API is on the JavaScript thread. This means that every frame needs to go over the bridge to the native thread to update the views during a transition. Fortunately, we have the option to use the API’s native driver option to render natively driven animations. These animations are performed with animation calculations happening on the native thread. By building navigation with this, navigation animations will perform smoothly.

Another benefit of keeping all of our navigation elements within the JavaScript thread means that we can take advantage of services such as `CodePush` to allow us to dynamically update the application’s JavaScript code (which includes our navigation) without rolling out a new build to our users.

##### Cons

There are also disadvantages with this approach. Firstly, the app can never feel exactly like a native application in terms of navigation. As much as we can try to mimic how navigation components and animations look like in the native layer, there may always be slight discrepancies. This can be a bigger problem if we happen to be including React Native components into an existing native iOS or Android application. Building transitions between screens built natively and screens built with React Native can be a challenge if we’re using only JavaScript for our navigation.

## Animation

To achieve animations that look smooth, we’ll want our UI to render at 60 frames-per-second (fps). In other words, we need to render 1 frame roughly every 16 milliseconds (1000 milliseconds / 60 frames). If we perform expensive computations that take longer than 16 milliseconds within a single frame, our animations may start to look choppy and uneven. Thus, we must constantly pay attention to performance when working with animation.

Performance issues tend to fall into a few specific categories:

-   Calculating new layouts during animation: When we change a style attribute that affects the size or position of a component, React Native usually re-calculates the entire layout of the UI. This calculation happens on a native thread, but is still an expensive calculation that can result in choppy animations.
-   Re-rendering components: When a component’s state or props change, React must de- termine how to reconcile these changes and update the UI to reflect them. React is fairly efficient by default, so components generally render quickly enough that we don’t optimize their performance. With animation, however, a large component that takes a few milliseconds to render may lead to choppy animations.
-   Communicating between native code and JavaScript: Since JavaScript runs asynchronously, JavaScript code won’t start executing in response to a gesture until the frame after the gesture happens on the native side. If React Native must pass values back and forth between the native thread and the JavaScript engine, We can use `useNativeDriver` with our animations to mitigate this.

When working with animations, we tend to write more asynchronous code than normal. We must often wait for an animation to complete before starting another animation (using an imperative API) or unmounting a component. The asynchronous control flow and imperative calls can quickly lead to confusing, buggy code. To keep our code clear and accurate, we should use a [state machine](https://en.wikipedia.org/wiki/Finite-state_machine) approach for our more complex components. We’ll define a set of named states for each component, and define transitions from one state to another. This is similar to the React component lifecycle: our component will transition through different states (similar to mounting, updating, unmounting, etc), and we can run a specific function every time the state changes.
