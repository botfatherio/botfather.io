---
title: Android API
---

Using Botfather's Android API, any Android device connected to your PC can be automated. Most Android emulators can also be connected to Botfather and automated. To do so, Botfather makes use of the [Android Debug Bridge](https://developer.android.com/studio/command-line/adb) (ADB for short). To use Botfather's Android API, one has to have ADB installed and possibly the Android **developer options** enabled on the connected Android device.

## Table of contents

## Android API methods

---

### `Android.connected();`

Returns true if the Android device or emulator selected by the user is still connected to the ADB server used by Botfather.

### `Android.listPackages();`

Returns an array of strings containing all packages (including apps) installed on the connected Android device.

### `Android.startApp(package);`

- `package` (string): The package name of the app to start.

Starts the app identified by its package name. This method returns true if starting the app succeeded; returns false otherwise. Use the `.listPackages` method to check whether an app is installed on the user's device.

### `Android.sendTap(location);`

- `location` ([Point](/docs/apiref/point/)): Where to tap.

Sends a tap event to the specified `location` coordinates on the Android device's screen. Returns true if sending the tap succeeded; returns false otherwise.

### `Android.sendSwipe(start, end, duration_in_ms);`

- `start` ([Point](/docs/apiref/point/)): The start location of the swipe.
- `end` ([Point](/docs/apiref/point/)): The end location of the swipe.
- `duration_in_ms` (number): The duration of the swipe in milliseconds. Default: 500

Sends a swipe event from the `start` location to the `end` location. `duration_in_ms` specifies how long the swipe takes. Returns true if sending the swipe event succeeded; returns false otherwise.

### `Android.sendKeyEvent(key_event_code);`

- `key_event_code` (string): The key event code to be sent.

Sends the specified [KeyEvent](https://developer.android.com/reference/android/view/KeyEvent.html) to the Android device.

Returns true on success; false otherwise.

### `Android.sendTextInput(text);`

Sends the specified `text` in a text input event to the connected Android device.

Returns true on success; false otherwise.

### `Android.takeScreenshot();`

Creates and returns a screenshot [Image](/docs/apiref/image/) object.

### `Android.getSize();`

Returns the Android device's screen size as a [Size](/docs/apiref/size/) object.

### `Android.getRect();`

Returns the Android device's screen rect as a [Rect](/docs/apiref/rect/) object.
