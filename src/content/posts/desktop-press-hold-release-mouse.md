---
pubDate: 2020-10-20
title: New Desktop mouse control methods (version 6.7.2)
lead: New press, hold and release mouse methods have been added to the Desktop API. These now enable to implementation of drag and drop methods.
---

A kind donation (thanks) on [BuyMeACoffee](https://www.buymeacoffee.com/je) reminded me that the Desktop API had no methods for holding or releasing mouse buttons. Thus it was impossible to create drag and drop functionality.

I put my 3 donated coffees to good use and added three new methods to the Desktop API and turned its boring documentation into a guide with many examples. The following three new methods have been added: `Desktop.pressMouse`, `Desktop.holdMouse` and `Desktop.releaseMouse`.

Previously only `leftClick`, `middleClick` and `rightClick` were available. These are now deprecated but will stay in Botfather until version 7 for backwards compatibility. Note that the deprecated methods are equvalent to `Desktop.pressMouse(pos, "left")`, `Desktop.pressMouse(pos, "middle")` and `Desktop.pressMouse(pos, "right")`.
