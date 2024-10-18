---
pubDate: 2018-09-16
title: Type Update released (version 4.1.0)
lead: Today Botfather version 4.1.0, better known as the Type Update released. 9 different types have been added to botfahters script engine and the APIs methods have been updated to take some of them as parameters.
---

From now on it's best pratice to use the new inbuild types [Point](/docs/apiref/point), [Size](/docs/apiref/size), [Rect](/docs/apiref/rect), [Image](/docs/apiref/image), [Margins](/docs/apiref/margins), [Color](/docs/apiref/color), [Url](/docs/apiref/url), [Match](/docs/apiref/match) and [BlobTpl](/docs/apiref/blobtpl) instead of custom Javascript types.

The inbuild types come with a lot of methods. For instance one can get a random point from within a rectangle or create an image providing a color and a size.
Check out botfathers [documentation](/docs/) to learn about more than 100 handy methods and how to use them.

Botfather 3.x.x scripts are not compatible with botfather 4.1.0. Some API methods have been deleted and others have been moved to types.
Obviously patching old scripts is possible though. Keep an eye open where you may replace custom types with unbuild types and replace two variables such as _x and y_ with a [point](/docs/apiref/point/).

In addition to all the new types a new API has been added. With the [PathFinder](/docs/apiref/pathfinder-api) API one can find the fastest path from one node to another in a graph.
The graph can represent anything like website sitemaps or a games complex map system.

And now the boring changes: We fixed a lot of bugs and even memory leaks (woops) and prepared our codebase for the upcoming 5.0 update.
Not hyped for 5.0 yet? Men, we will improve the GUI by a lot, allow multiple browser and even multiple bots running at the same time.
