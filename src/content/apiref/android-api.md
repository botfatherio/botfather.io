---
title: The Android API
---

Using botfathers Android API any Android device connected to your PC can be automated. Also most Android emulators can be connected to botfather and automated. To do so botfather makes use of the [Android Debug Bridge](https://developer.android.com/studio/command-line/adb) (Adb for short). To use botfathers Android API one has to have Adb installed and eventually the Android **developer options** enabled on the connected Android device.

### Table of contents

### Android API methods

---

##### `Android.connected();`

Returns true if the Android device or emulator selected by the user is still connected to Adb server used by botfather.

##### `Android.listPackages();`

Returns an array of strings containing all packages (including apps) installed on the connected Android device.

##### `Android.startApp(package);`

- `package` (string): The package name of the app to start.

Starts the app identified by it's package name. This method returns true if starting the app succeeded; returns false otherwise. Use the `.listPackages` method to check whether an app is installed on the users device.

##### `Android.sendTap(location);`

- `location` ([Point](../point)): where to tap.

Sends an tap event to the specified `location` coordinates on the android devices screen. Returns true if sending the tap succeeded; returns false otherwise.

##### `Android.sendSwipe(start, end, duration_in_ms);`

- `start` ([Point](../point)): The start location of the swipe.
- `end` ([Point](../point)): The end location of the swipe.
- `duration_in_ms` (number): The duration of the swipe in milliseconds. Default: 500

Sends a swipe event from the `start` location to the `end` location. `duration_in_ms` specifies how long the swipe takes. Returns true if sending the swipe event succeeded; returns false otherwise.

##### `Android.sendKeyEvent(key_event_code);`

- `key_event_code` (string): The key event code to be send.

Sends the specified [KeyEvent](https://developer.android.com/reference/android/view/KeyEvent.html) to the android device.

Returns on success, false otherwise.

##### `Android.sendTextInput(text);`

Sends the specified `text` in a text input event to the connected android device.

Returns on success, false otherwise.

##### `Android.takeScreenshot();`

Creates and returns an screenshot [Image](../image) object.

##### `Android.getSize();`

Returns the Android devices screen size as a [Size](../size) object.

##### `Android.getRect();`

Returns the Android devices screen size as a [Rect](../rect) object.
