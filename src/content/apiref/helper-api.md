---
title: Helper API
---

## Table of contents

## Helper API methods

---

### `Helper.sleep(seconds);`

- `seconds` (number): How many seconds to sleep for.

Makes the bot sleep/wait/do nothing for a specified amount of `seconds`.

### `Helper.msleep(milliseconds);`

- `milliseconds` (number): How many milliseconds to sleep for.

Makes the bot sleep/wait/do nothing for a specified amount of `milliseconds`.

### `Helper.playWavSound(path_to_wav_file, blocking);`

- `path_to_wav_file` (string): Path to the .wav sound file to play.
- `blocking` (boolean): Default: true.

Plays the WAV sound file provided by `path_to_wav_file` either `blocking` (waiting) or not.

### `Helper.stopWavSound();`

Stops all playing WAV sounds started by any bot.

### `Helper.log(a, b, c...);`

- `a, b, c...`: Any number of comma-separated variables.

The log method tries to convert all its parameters to strings. Those strings are then joined, separated by a space, and appended to the bot's log field.

This method is useful both for debugging and for informing the script user about what currently happens or what actions to take.
