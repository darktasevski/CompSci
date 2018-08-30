# React Native

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

Since the virtual keyboard can cover roughly half the device screen, this is a common problem that occurs when using text inputs in an application. Fortunately, React Native includes `KeyboardAvoidingView`, a component that solves this problem by allowing us to adjust where other components render in relation to the virtual keyboard. To be used instead of `View`.
KeyboardAvoidingView accepts a `behavior` prop with which we can customize how the keyboard adjusts. It can change its height, position or bottom padding in relation to the position of the virtual keyboard.

### Dimensions

The first thing we want to think about when understanding the layout of a screen is the dimensions of each component. A component must have both a non-zero width and height in order to render anything on the screen. If the width is 0, then nothing will render on the screen, no matter how large the height is. We're usually using `flex: 1` if we want for View to take up whole screen.

### Yoga

React Native uses the Yoga layout engine (also from Facebook). This is a cross-platform implementation of the flexbox algorithm. It matches the algorithm used by web browsers pretty closely, but with two important differences:

-   The default values are different
-   Yoga adds a couple new features that don’t exist in the browser (like aspectRatio)

### Flex

The flex style attribute gives us the ability to define layouts that can expand and shrink automatically based on screen size. The flex value is a number that represents the ratio of space that a component should take up, relative to its siblings.

If a component has no siblings, as in the case of the top-level View rendered by App, things are straightforward:

-   with a flex of 1, the component will expand to fill its parent entirely
-   with a flex value of 0, the component will shrink to the minimum space possible ( just large
    enough for the component’s children to be visible, if it has any)

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

Unlike the View component, Text components have an intrinsic size. In other words, if we don’t specify a width or height, a Text component will still show up on the screen. Specifying a width, height, or flex attribute as part of the style will override the intrinsic dimensions
of the Text. Text context will automatically wrap around by default when it fills the width of the component. This is configurable with the `numberOfLines` prop.

In addition, we use the following props frequently:

-   numberOfLines - The number of lines to allow before truncating the text.
-   ellipsizeMode - How text should be truncated when it exceeds numberOfLines. One of 'head',
    'middle', 'tail', 'clip' (iOS only).

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

We can use the resizeMode style (or prop – both work) to determine how the image is cropped in the case where the image data’s intrinsic dimensions are different than the dimensions of the Image component.
The options for resizeMode are:

-   cover: The image scales uniformly to fill the Image component. The image will be cropped by the bounding box of the component if they have different aspect ratios.
-   contain: The image scales uniformly to fit within the component. The component’s background color will show if they have different aspect ratios.
-   stretch: The image stretches to fill the component.
-   repeat: The image repeats itself at its intrinsic dimensions to fill the component (iOS-only).
-   center: The image maintains its intrinsic dimensions, and is centered within the component.

We can use the aspectRatio style to render the image at a specific aspect ratio, regardless of its intrinsic dimensions. We provide a number value which represents the ratio of width to height. For example, if we set aspectRatio: 2, this means the ratio of width to height is 2 to 1 – the image will render twice as wide as it is tall.
While most commonly used with images, the aspectRatio style can be used on any component, such as View or Text.

### ActivityIndicator

We can render a loading indicator using the ActivityIndicator component.

This component accepts all the same props as View, plus a few more:

-   animating: A bool indicating whether to show or hide the indicator (defaults to true).
-   color: The color of the spinner (defaults to gray).
-   size: One of 'small' or 'large' (defaults to small).

### FlatList

FlatList components are used for rendering large quantities of scrollable content. Instead of rendering a children prop, the FlatList renders each item in an input data array using the renderItem prop. The renderItem prop is a function which takes an item from the data array and maps it to a React Element. Each item in data should be an object with a unique id, so that React can determine when items have been rearranged.

The FlatList is generally performant: it only renders the content on screen (clipping offscreen content), and only updates rows that have changed. The FlatList is built using a more generic component, the ScrollView.

`inverted` -
In a messaging app, for example, we typically want new messages to appear at the bottom of the list. To accomplish this, we’ve have to add the inverted prop to our FlatList.

`keyboardShouldPersistTaps`
We use the keyboardShouldPersistTaps prop to configure what happens when we tap the FlatList. This prop has three possible options:

-   never - Tapping the list will dismiss the keyboard and blur any focused elements. This is the default behavior.
-   always - Tapping the list will have no effect on the keyboard or focus.
-   handled - Tapping the list will dismiss the keyboard, unless the tap is handled by a child element first (e.g. tapping a message within the list). We want handled, so that we enable tapping messages without dismissing the keyboard.

### TextInput

When working with TextInput, we’ll generally use the following props to capture user input:

-   value - The current text in the input field.
-   onChangeText - A function called each time the text changes. The new value is the first
    argument.
-   onSubmitEditing - A function called when the user presses the return/next key to submit/move
    to the next field.

It’s common to store the current text in the state of the component that renders the TextInput. Each time the function we pass to onChangeText is called, we call setState to update the current text. When the user presses return, the function we passed to onSubmitEditing is called – we can then perform some action with the current text, and use setState to reset the current text to the empty string.

When working with TextInput, we can use most of the same styles as Text (which includes the styles for View). A few styles don’t work quite as well as they do on Text though: borders tend not to render correctly, and padding and line height can conflict in unusual ways. If you’re having trouble styling a TextInput, you may want to wrap the TextInput in a View and style the View instead.
A few other common props:

-   autoCapitalize - For capitalizing characters as they’re typed. One of 'none', 'sentences', 'words', 'characters'.
-   autoCorrect - Enable/disable auto-correct.
-   editable - Enable/disable the text field.
-   keyboardType - The type of keyboard to display. Cross-platform values are 'default',
    'numeric', 'email-address', 'phone-pad'.
-   multiline - Allow multiple lines of input text.
-   placeholder - The text to show when the text field is empty
-   placeholderTextColor - The color of the placeholder text
-   returnKeyType - The text of the return key on the keyboard. Cross-platform values are 'done', 'go', 'next', 'search', 'send'.

### ScrollView

The ScrollView is simpler than the FlatList: it will render all of its children in a vertically or horizontally scrollable list, without the additional complexity of the keyExtractor or renderItem props.
The ScrollView is well suited for scrolling through small quantities of content (fewer than 20 items or so). **Content within a ScrollView is rendered even when it isn’t visible on the screen.** For large quantities of items, or cases where many children of the ScrollView are offscreen, you will likely want to use a FlatList component for better performance.

You can think of a ScrollView as two separate views, one inside the other. The outer view has a bounded size, while the inner view can exceed the size of the outer view. If the inner view exceeds the size of the outer view, only a portion of it will be visible. When we pass children elements to the ScrollView, they are rendered inside this inner view. We call the inner view the “content container view”, and can style it separately from the outer view.

### Modal

The Modal component lets us transition to an entirely different screen. This is most useful for simple apps, since for complex apps you’ll likely be using a navigation library which will come with its own way of doing modals.
Common props include:

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
-   `NetInfo` - Returns network connectivity information, and emits events when the connectivity
    changes
-   `PixelRatio` - Translates from density-independent pixels to density-dependent pixels (more
    detail on the later)
-   `StatusBar` - Controls the visibility and color of the status bar

### StatusBar

The status bar works a little differently on iOS and Android. On iOS the status bar background is always transparent, so we can render content behind the status bar text. On Android, we can set the status bar background to transparent, or to a specific solid color. If we use a transparent status bar, we can render content behind it just like on iOS – unlike on iOS, by default the status bar text is white and there’s typically a semi-transparent black background. If we choose a solid color status bar, our app’s content renders below the status bar, and the height of our UI will be a little smaller. In our app, we’ll use a solid color status bar, since this will let us customize the color.

### NetInfo

The NetInfo APIs are a good example of React Native core APIs: these provide a uniform interface to the lower level native APIs on iOS and Android. React Native is essentially providing JavaScript bindings and smoothing out platform differences for us.
We can call NetInfo.getConnectionInfo() to get the network connectivity status. NetInfo.getConnectionInfo() returns a promise which resolves to a string. If the device is connected, the string value will be 'wifi'
or 'cellular' If the device isn’t connected, the promise will still resolve, but with the value 'none'.
NetInfo provides the method addEventListener, which we can call with a callback function, which it will invoke each time the network status changes.

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
-   buttons - An array of objects containing text (a string), onPress (a callback function), and
    optionally a style on iOS (styles can be one of default, cancel, or destructive).
-   options - An object for controlling the dialog dismissal behavior on Android. Tapping outside the dialog will normally exit the dialog. This can be prevented by setting { cancelable: false
    } or handled specially with { onDismiss: () => {} }.
-   type - Allows text entry on iOS using one of the following options: default, plain-text,
    secure-text, or login-password.

### BackHandler (Android only)

Like with NetInfo, we use the event listener pattern to handle back button press events:

`BackHandler.addEventListener('hardwareBackPress', handlerFunction);`

We can return true from our handlerFunction to indicate that we’ve handled the back button. By returning false, we indicate that we didn’t handle the event. Therefore, if any other functions have been registered, the next one registered should be called. These functions are called in the reverse of the order they were registered – the last handler registered will be called first. If no handler returns true, then the back button will exit to the home screen (the default back button behavior).

### Refs

React let’s us access the instance of any component we render using a ref prop. This is a special prop that we can supply a callback – the callback will be called with the instance as a parameter, after the component mounts (and before it unmounts). We can store a reference to the component instance.
You can think of a component instance as the “this” when we access this.props or any method that’s part of our class.
