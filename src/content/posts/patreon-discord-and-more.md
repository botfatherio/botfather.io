---
pubDate: 2020-01-30
title: Patreon, Discord, and more
lead: There is now an official Botfather Discord server serving as a forum. And after testing a "Buy me a coffee" button for a while, we replaced it with Patreon. Furthermore, there are new plans for Botfather version 7.
---

## Patreon

On our ongoing quest of finding a way to fund Botfather, we recently tried a "Buy me a coffee" button on our website. Unfortunately, while hundreds of people clicked the button, just one person donated to us (ty btw). That's fine, but Botfather still needs some funding. However, we want to do it in a nice way. That's why we just added a Patreon button to our website.

To make Patreon a little more attractive, we added 3 affordable tiers. These have neat perks such as early access to upcoming versions, special Discord ranks, and voting power on certain design decisions.

## Discord

We have needed a board/forum of some kind for a while now. From time to time, we even get emails about it. Just recently, a nice French developer explicitly asked for Discord. We have had that option in mind for a while, and after finishing the integration with Patreon, our Discord server is now live. Feel free to discuss and chat there with us and other community members.

## New plans for Botfather 7

In our last post, we planned on completely refactoring Botfather and switching the scripting language to Python. Instead, we will improve our JavaScript engine and refactor parts of Botfather step by step. The next thing we want to support is **script code splitting** using JavaScript's `export` functionality and a newer ECMAScript specification.

We already switched our build system to CMake, a well-known build system that paves the way to eventually open-sourcing Botfather. We will start our open-source journey by turning individual parts of Botfather into standalone libraries, which will then be made available on GitHub. The next step would be to rewrite the Botfather GUI and release it to the public as well (given that we have enough funding at this point).

**Edit:**

_Unfortunately, I had no time to maintain either Patreon or Discord, so both links have been removed._
