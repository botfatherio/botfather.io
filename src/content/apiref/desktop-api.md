---
title: The Desktop API
---

Botfathers Desktop API can be used for Windows and Linux desktop automation. The API provides methods to take screenshots and send fake keyboard and mouse input events. On Linux botfather registeres a fake hardware device to send input events, which can't be ignored by programs such as games. The Desktop API, like any other botfather API, is crossplatform. That means you can use the same code to automate both Windows and Linux desktops.

## Table of contents

## Taking screenshots

One can take screenshots of your desktop and save them to a file or analyze them.

A screenshot is an [Image](../image) object which can be analyzed using the [Vision API](../vision-api). For example, one could find elements (such as icons) on the screenshot and then use the found position to click there.

```javascript
var screenshot = Desktop.takeScreenshot();

// Now the screenshot can be saved or analyzed. eg:

screenshot.save("screenshot1.png");
```

## Getting the screen size

When writting bots which shall work on multiple screen sizes, its useful to query the current screen size.

Botfather provides two methods to do so. One returns the screen size as a [Size](../size) object, the other one as a [Rect](../rect) object.

The later one is useful if you want to get the center [Point](../point) of the screen.

```javascript
var screenSize = Desktop.getSize();
var screenRect = Desktop.getRect();

// Getting the center point of the screen:
var centerPoint = screenRect.getCenter();
```

## Using the mouse

Botfather provides methods which allow you to `press` (click), `hold` and `release` mouse buttons. The button can be specified. The default mouse button is "left".

### Moving the mouse

The mouse can be moved to any position on the screen.

"Warping" is actualy the more fitting term, as the mouse does not touch the pixels between its old and its new position. If you need to touch every pixel, you may write your own function for it, utalizing the `Desktop.warpCursor` method.

```javascript
// Warp the mourse cursor to the top left corner of your screen
Desktop.warpCursor(new Point(0, 0);
```

### Getting the mouse position

Botfather provides a method for getting the current mouse position as a [Point](../point) object. This may be useful when performing movement relative to the current mouse position.

```javascript
var mousePositionPoint = Desktop.getCursorPosition();
```

### A simple left click

By swapping out `left` with `right` or `middle`, right and middle mouse button presses, holds and releases can be performed.

```javascript
var position = new Point(300, 300);

// A simple left click
Desktop.pressMouse(position);

// This is equivalent to
Desktop.pressMouse(position, "left");

// And also equivalent to
Desktop.holdMouse(position, "left");
Desktop.releaseMouse(position, "left");
```

### Hold, Press, Release the mouse button

The `Desktop.pressMouse` method is for clicks. Internally its just the combination of `Desktop.holdMouse` and `Desktop.releaseMouse`.

```javascript
var position = new Point(150, 150);

// These are all the variations:

// ...left mouse button
Desktop.holdMouse(position, "left");
Desktop.releaseMouse(position, "left");
Desktop.pressMouse(position, "left");

// ...middle mouse button
Desktop.holdMouse(position, "middle");
Desktop.releaseMouse(position, "middle");
Desktop.pressMouse(position, "middle");

// ...right mouse button
Desktop.holdMouse(position, "right");
Desktop.releaseMouse(position, "right");
Desktop.pressMouse(position, "right");
```

### Drag and Drop

Drag and drop has many different implementations in operating systems and even individual programs. Thats the reason we haven't provided a method for it.

However, you can build your own drag and drop method. The following primitive code can be used as a blueprint:

```javascript
function dragAndDrop(from, to) {
  Desktop.holdMouse(from, "left");
  Helper.msleep(750);

  // Drag is triggered by first moving the element a little
  var dragTriggerOffset = from.pointAdded(new Point(25, 25));
  Desktop.warpCursor(dragTriggerOffset);

  Helper.msleep(750);
  Desktop.releaseMouse(to, "left");
}

// The function is then called like this:
dragAndDrop(new Point(60, 60), new Point(400, 60));
```

### Mouse scrolling

The `Desktop.scroll` method can be used to scroll the mouse wheel on the current mouse position. Note that mouse wheel scrolling is a relative movement. The distance is specified in a ralative unit which depends on the platform (Windows, Linux) and the programm receiving the scroll event.

The `Desktop.scroll` methods first parameter is the amount of `units` to scroll.

```javascript
Desktop.scroll(300);
```

The methods second parameter can be used to enable horizontal movement. The second parameter defaults to `false` (vertical movement).

```javascript
var horizontal = false;

Desktop.scroll(300, horizontal);
```

### Legacy mouse input

Before version `6.7.0` mouse input could only be done using the methods below. These still work(!) but we encourage you to use the methods show above.

```javascript
var position = new Point(50, 50);

// WARNING! These are deprecated methods, which only work for backwards compatibility.
Desktop.leftClick(position);
Desktop.middleClick(position);
Desktop.rightClick(position);

// USE THESE METHODS INSTEAD:
Desktop.pressMouse(position, "left");
Desktop.pressMouse(position, "middle");
Desktop.pressMouse(position, "right");
```

## Keyboard input

Similar to how the mouse may be controlled, keys can be pressed, hold and released. The key to press/hold/release must be specified.

A list of supported key codes can be found below the examples.

### Entering simple characters

```javascript
// Entering lowercase "a"
Desktop.press("a");

// Entering uppercase "A"
Desktop.holdKey("shift");
Desktop.pressKey("a");
Desktop.releaseKey("shift");
```

### Pressing Alt+F4 (because why not)

```javascript
Desktop.holdKey("alt");
Desktop.pressKey("f4");
Desktop.releaseKey("alt");
```

### Keycodes

These are all keycodes currently supported by Botfathers Desktop API:

#### Number keys

- "0"
- "1"
- "2"
- "3"
- "4"
- "5"
- "6"
- "7"
- "8"
- "9"

#### Character keys

- "a"
- "b"
- "c"
- "d"
- "e"
- "f"
- "g"
- "h"
- "i"
- "j"
- "k"
- "l"
- "m"
- "n"
- "o"
- "p"
- "q"
- "r"
- "s"
- "t"
- "u"
- "v"
- "w"
- "x"
- "y"
- "z"

#### F Keys

- "f1"
- "f2"
- "f3"
- "f4"
- "f5"
- "f6"
- "f7"
- "f8"
- "f9"
- "f10"
- "f11"
- "f12"
- "f13"
- "f14"
- "f15"
- "f16"
- "f17"
- "f18"
- "f19"
- "f20"
- "f21"
- "f22"
- "f23"
- "f24"

#### Arrow Keys

- "left"
- "right"
- "up"
- "down"

#### Modifier keys

- "alt"
- "shift"
- "lshift"
- "rshift"
- "control"
- "lcontrol"
- "rcontrol"
- "capital"
- "caps" (alias)
- "capslock" (alias)
- "caps_lock" (alias)

#### Special keys

- "space"
- "tab"
- "esc"
- "escape" (alias)
- "backspace"
- "del"
- "delete" (alias)
- "enter"
- "return"

#### Volume keys

- "volup"
- "volumeup" (alias)
- "volume_up" (alias)
- "voldown"
- "volumedown" (alias)
- "volume_down" (alias)
