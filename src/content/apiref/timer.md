---
title: The Timer Type
---

This Timer type provides an interface for creating timers. Warning: The Timer type API has no been finalized yet and is subject to change.

## Table of contents

## Timer usage

The Timer types constructor takes no arguments.

```javascript
var timer = new Timer();
timer.start();

// doHardWork();

Helper.log("The hard work took", timer.getElapsedTime(), "ms");
```

## Timer methods

---

##### `Timer.isRunning();`

Return true if the timer has been started. Returns false if the timer has never been started or stopped by a call to stop().

##### `Timer.start();`

Starts the timer.

##### `Timer.restart();`

Restarts the timer and returns the time elapsed since the previous start.

The return value is 0 if the timer was not running, the timer though will be started anyway.

##### `Timer.stop();`

Stops the timer.

##### `Timer.getElapsedTime();`

Returns the number of milliseconds since this timer was last started.

##### `Timer.hasExpired(timeout_in_ms);`

- `timeout_in_ms` (number): A timeout in milliseconds.

Returns true if more than timeout `timeout_in_ms` milliseconds have elapsed.

##### `Timer.msecsTo(other_timer);`

- `other_timer` ([Timer](../timer)): Another timer object.

Returns the number of milliseconds between this timer and `other_timer`.
