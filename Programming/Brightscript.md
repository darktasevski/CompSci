# Roku Brightscipt and SceneGraph

SceneGraph apps are a mix of XML and BrightScript. BS is loosely typed, similar to JavaScript, but uses a syntax similar to Visual Basic. In general, the user interface elements are defined in XML files and the application logic is defined in the BrightScript `.brs` files.

One important thing to note about BrightScript: it is case-insensitive. For example, a function defined as function `getChild()` can be accessed using `getchild()` or `GetChild()` or `gEtChIlD()`.

---

1. Roku mostly only works with rectangles, images, videos and text and NOT triangles or curves :( Example of draw directly to a screen.

```vb
Sub Main()
	screen = CreateObject("roScreen")
	port = CreateObject("roMessagePort")
	screen.SetTitle('Graphics')
	screen.SetAlphaEnable(true)
	screen.SetMessagePort(port)
	screen.DrawRect(0, 0, 100, 200, &hFFFF00FF)
	screen.DrawLine(0, 0, 100, 200, &h808080FF)
	screen.DrawPoint(0, 0, 10, &h808080FF)
	screen.Finish()
	screen.Show()
	wait(0,screenGetMessagePort)
End Sub
```

2. For more complex graphics use images.

```vb
Sub Main()
	screen = CreateObject("roScreen")
	img = CreateObject("roBitmap", "pkg:/images/myimage.png")
	screen.DrawObject(0, 0, img)
	screen.Finish()
End Sub
```

3. Text can be drawn

```vb
Sub Main()
	fontRegistry = CreateObject("roFontRegistry")
	font = fontRegistry.GetDefaultFont()
	screen.DrawText("hi", 0, 0, &h00FFFFFF, font)
	screen.AddParagraph("hello")
	screen.Finish()
End Sub
```

4. There are options to draw scaled content and video with overlay ( video is draw on layer 0 when using roImageCanvas).

```vb
screen = CreateObject("roScreen")
player = CreateObject("roVideoPlayer")
port = CreateObject("roMessagePort")
player.Play()
screen.SwapBuffers()
```

5. BrightScript is a cut down version of BrightSign. BrightSign can do WebGL via roHtmlWidget , but less likely to be supported by Roku?

```vb
Sub Main()
	msgPort = CreateObject("roMessagePort")
	r = CreateObject("roRectangle", 0, 0, 1920, 1080)
	h = CreateObject("roHtmlWidget", r)
	h.SetPort(msgPort)
	h.SetURL("file:///testpage.html")
End Sub
```

6. this also works with external web pages but you need to add a delay see sleep.

```vb
Sub Main()
	msgPort = CreateObject("roMessagePort")
	r = CreateObject("roRectangle", 0, 0, 1920, 1080)
	h = CreateObject("roHtmlWidget", r)
	h.SetPort(msgPort)
	h.SetURL("http://www.brightsign.biz")
	sleep(10000)
End Sub
```

7. If you want to add comments use

```vb
' Rem comment add here
```

8. to trace use print with strings, number, variables, or expressions

```vb
print "trace"
```

9. Logic == is written as =

```vb
if a = b then
  print a
else if a > c then
  print c
elseif
  print b
if end
```

10. Loops for loop

```vb
For i = 1 To 5
  print i
For end
```

reverse for loop

```vb
For i=10 To 1 Step -1
    print i
End For
```

while

```vb
k = 0
while k = 0
    k = 1
    print "loop once".
end while
```

while true

```vb
while true
    print "loop once"
    if k <> 0 then exit while
end while
```

11. functions

```vb
Sub main()
  print add( 1, 2 )
  print myfunc( 3, 4 )
End sub
Function add(a, b)
    Return a+b
End Function
myfunc = Function (a, b)
    Return a+b
End Function
```

12. you can group functions (perhaps not sure)

```vb
group = { func1: Function( a )
print a
End function, func2: Function( a, b )
print a + b
End function
}
group.func1( "a" )
group.func2( 1, 2 )
```

13. There are lots of Utility, Math and String functions

```vb
text=ReadAsciiFile("tmp:/config.txt")
lowerCase = LCase("Hi")
y = Sin( x )
```

14. all built in types follow the form "roType" so for instance

```vb
date = CreateObject("roDateTime")
print "The date is now "; date.AsDateString("long-date")
```

15. epc input, this is how you recieve information from user

```vb
Sub Main ()
    inputObject = CreateObject ("roInput")
    port = CreateObject ("roMessagePort")
    inputObject.SetMessagePort (port)
    While True
        msg = Wait (0, port)
        If Type (msg) = "roInputEvent"
            info = msg.GetInfo ()
            Print info
        EndIf
    End While
End Sub
```

generic ones:

```vb
  Home
  Rev
  Fwd
  Play
  Select
  Left
  Right
  Down
  Up
  Back
  InstantReplay
  Info
  Backspace
  Search
  Enter
```

additional on some devices

```vb
  VolumeDown
  VolumeMute
  VolumeUp
  PowerOff
  ChannelUp
  ChannelDown
  InputTuner
  InputHDMI1
  InputHDMI2
  InputHDMI3
  InputHDMI4
  InputAV1
```

Normal keyboard letters are written "Lit_a","Lit_b" .... and support url encoding similar.

16. For a lot of API/UI Roku uses xml and a scene graph to supply aspects like Buttons, TextEditBox, RadioButtonLists etc...

```vb
<children >

  <Button
    id = "exampleButton"
    text = "Example Button"
    showFocusFootprint = "true"
    minWidth = "240" />

</children>
```

More samples... <https://sdkdocs.roku.com/display/sdkdoc/SceneGraph+Samples>

17. The xml is a bit like XAML and can be used for animation

```vb
<?xml version="1.0" encoding="utf-8" ?>
<component name="SimpleScaleAnimation" extends="Group" >
<script type="text/brightscript" uri="pkg:/xml/SimpleAnimation.brs" />

<children>

<Poster id="myPoster"
    opacity="1.0"
    uri="pkg:/images/myImage.jpg" />
<Animation id="scaleAnimation"
       duration="1"
       repeat="true"
       easeFunction="linear" >
    <Vector2DFieldInterpolator id = "myInterp"
    key="[0.0, 0.25, 0.5, 0.75, 1.0]"
    keyValue="[ [0.0, 0.0], [0.25, 0.25], [0.5, 0.5], [0.75, 0.75], [1.0, 1.0]]"
    fieldToInterp="myPoster.scale" />
</Animation>
<Animation id="transAnimation"
       duration="1"
       repeat="true"
       easeFunction="linear" >
    <Vector2DFieldInterpolator id = "myInterp2"
        key="[0.0, 1.0]"
        keyValue="[ [640.0, 320.0], [100.0, 100.0] ]"
    fieldToInterp="myPoster.translation" />
</Animation>

</children>

</component>
```

```vb
function init()
   scaleAnimation = m.top.FindNode("scaleAnimation")
   transAnimation = m.top.FindNode("transAnimation")
   scaleAnimation.control = "start"
   transAnimation.control = "start"
end function
```
