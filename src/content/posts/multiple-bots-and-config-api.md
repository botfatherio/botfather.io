---
pubDate: 2019-02-02
title: Multiple bots and in GUI script configuration (v5)
lead: Run multiple bots at once and let users configure scripts from the GUI. Botfather 5.1 is about to release, featuring a new GUI, per bot settings and the new Config API.
---

## The Config API

Currently scripts force users to install code editors to edit the scripts configuration code. Obviously that's confusing ome users and can result in syntax errors or wrong typed variables. The Config API will change this.

Script developers can define config options in a `manifest.json` file. Those options, if defined correctly, will be rendered in the GUI. The user can then set his preferences per bot from the GUI. The config option values set by the user can then be used by the script using the new Config API.

Script developers are encouraged to add a manifest file to their bot and make GUI configuration available to their users.

![Botfather 5.1 Config API Example](/blog/bf5_config_tab.png)

The config tab shown above is defined by the `manifest.json` file below. Make sure you validate your JSON markup. When there are errors Botfather will not show any config options for your script at all.

##### Example `manifest.json` file

```json
{
  "manifest_version": 1,
  "script": "demo.js",
  "config": {
    "groups": [
      {
        "name": "Test Config Options",
        "options": [
          {
            "id": "your_name",
            "type": "string",
            "label": "Whats your name?",
            "default": "John Smith"
          },
          {
            "id": "age",
            "type": "integer",
            "label": "Whats your age?",
            "min": 13,
            "max": 100
          },
          {
            "id": "search_engine_url",
            "type": "choice",
            "label": "What's your favorite search engine?",
            "default": "duckduckgo.com/",
            "choices": {
              "Google": "google.com/search",
              "DuckDuckGo": "duckduckgo.com/",
              "Bing": "bing.com/search"
            }
          },
          {
            "id": "look_me_up",
            "type": "boolean",
            "label": "Search me on the internet",
            "default": true
          }
        ]
      },
      {
        "name": "More options",
        "options": [
          {
            "id": "secret",
            "type": "password",
            "label": "What's the worst password you can think of?"
          },
          {
            "id": "math_result",
            "type": "number",
            "label": "What's 9 / 2 ?"
          }
        ]
      }
    ]
  }
}
```

When defining options only `id` and `type` are required. `label` and `default` are optional. The `type` defined which input widget the user will see in the GUI. The `id` can be used to access the config values using the Config API in bot scripts.

Thare are currently 6 different option `types` to choose from:

- `boolean`, rendered as checkbox
- `integer`, rendered as simple spinbox
- `number`, rendered as double spinbox
- `string`, rendered as line edit field
- `password`, rendered as line edit field with password echo mode
- `choice`, rendered as multiple choice dropdown menu

`Groups` are just eye candy and allow you to organise config options. You can have as many groups as you want, the config tab will show a scrollbar when more space is needed.

The script config values can then be accessed using the Config API:

```javascript
Config.getValue("your_name");
Config.getValue("age");
Config.getValue("search_engine_url");
Config.getValue("look_me_up");
Config.getValue("secret");
Config.getValue("math_result");
```

I'll release a full _Config API Demo_ script once the update released.

### One script per folder

Make sure you no longer put multiple bot scripts in the same folder. Create a dedicated folder per bot instead. Botfather stores bot settings (`.settings.ini`) and the users script configuration (`.config.ini`) in the bots folder.

## The new GUI

In a nutshell, the GUI has been rewritten to:

- allow multiple bots to be run at the same time
- allow per bot settings such as the global stop hotkey
- allow per bot script configuration using the new Config API

We also changed our icon theme, feel free to let us know what you think about it. You might find some old icons in the browser window, thats because we're about to replace it and thus no longer touch it.

#### Current multibot limitations

As earlier mentioned: the GUI now allows the user to start multiple bots at the same time. This is not the main feature of this update though and thus has some limitations:

_Currently_ all bots share the same browser. Thus running more than one browser bot will cause chaos. This problem is subject to the next planned updated called the _Browsanity_ update. It will feature a reworked Browser API that allows you to have multiple browsers at once.

The same goes for the Android API. _Currently_ all bots share the same android device. But this is aswell subject to change with the next planned update. A new Config API option type will be released that allows users to select which Android device or emulator they want the bot to control.
