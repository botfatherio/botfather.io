---
pubDate: 2018-09-27
title: Roadmap to 5.0
lead: Botfather 5.0 will feature a reworked graphical user interface that allows the execution of multiple bots, bot-specific script settings, and script permissions.
---

EDIT: Originally, it was planned to release all those features at once with Botfather 5.0. Instead, they will be released as soon as they are ready. That means some features, such as the script browser, will already arrive in 4.x.

## Script manifest

In the future, bot scripts will have a manifest file. Manifest files allow us to add a proper script browser and a permission system to the Botfather client.

## Built-in script browser

With the script browser in place, one no longer has to head over to our website, pick a script, and download it from GitHub/Bitbucket/GitLab. Instead, one opens Botfather's built-in script browser and selects which script to run. It will then be downloaded and run automatically.

## Permission system

While no malicious scripts have been spotted so far, we want to introduce a script permission system. Scripts will then have to request permissions to do specific critical operations, such as opening specific websites or reading the Android package list.

## Script config

Currently, script configuration is done by asking the user to edit specific variables in script files. Thus, users incapable of editing JavaScript files are unable to configure their scripts. In order to have two or more different configurations, one has to copy the whole script file.

To change this, we'll introduce a script configuration system. Script developers will define allowed settings in the script's manifest file. Botfather will show those settings in its GUI, where the user can edit them easily. Configurations made by the users can then be used by scripts using a new Config API.

## What about 4.0 updates?

While Botfather 5.0 takes some time to develop, we want to keep Botfather 4.0 stable and accessible.

We'll fix as many bugs as possible, possibly add minor features, and work on Linux packaging.
