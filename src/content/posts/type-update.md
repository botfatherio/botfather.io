---
pubDate: 2018-09-16
title: Type Update released (version 4.1.0)
lead: Today, Botfather version 4.1.0, better known as the Type Update, has been released. Nine different types have been added to Botfather's script engine, and the APIs' methods have been updated to take some of them as parameters.
---

From now on, it's best practice to use the new built-in types [Point](/docs/apiref/point/), [Size](/docs/apiref/size/), [Rect](/docs/apiref/rect/), [Image](/docs/apiref/image/), [Margins](/docs/apiref/margins/), [Color](/docs/apiref/color/), [Url](/docs/apiref/url/), [Match](/docs/apiref/match/), and [BlobTpl](/docs/apiref/blobtpl/) instead of custom JavaScript types.

The built-in types come with a lot of methods. For instance, one can get a random point from within a rectangle or create an image by providing a color and a size.
Check out Botfather's [documentation](/docs/) to learn about more than 100 handy methods and how to use them.

Botfather 3.x.x scripts are not compatible with Botfather 4.1.0. Some API methods have been deleted and others have been moved to types.
Obviously, patching old scripts is possible, though. Keep an eye out for places where you can replace custom types with built-in types and replace two variables such as _x and y_ with a [Point](/docs/apiref/point/).

In addition to all the new types, a new API has been added. With the [PathFinder](/docs/apiref/algorithm-api/) API one can find the fastest path from one node to another in a graph.
The graph can represent anything, like website sitemaps or a game's complex map system.

And now the boring changes: We fixed a lot of bugs and even memory leaks (whoops) and prepared our codebase for the upcoming 5.0 update.
Not hyped for 5.0 yet? Man, we will improve the GUI by a lot and allow multiple browsers and even multiple bots running at the same time.
