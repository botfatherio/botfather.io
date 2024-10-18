---
pubDate: 2018-09-27
title: Roadmap to 5.0
lead: Botfather 5.0 will feature a reworked graphical user interface that allows the execution of multiple bots, bot specific script settings and script permissions.
---

EDIT: Originaly it was planned to release all those features at once with Botfather 5.0. Instead they will be release as soon as they are ready. That means some features, such as the script browser, will already arrive in 4.x.

##### Script manifest

In the future bot scripts will have a manifest file. Manifest files allow us to add a proper script browser to the botfather client and a permission system.

##### Inbuild Script Browser

With the script browser in place one no longer has to head over to our website, pick a script and download it from Github/Bitbucket/Gitlab. Instead on opens botfathers buildin script browser and select which script to run. It then will be downlaoded and run automatically.

##### Permission system

While there have no malicious scripts been spotted so far, we want to introduce a script premission system. Scripts then have to request permissions to do specific critical operations such as opening specific websites or read the Android package list.

##### Script Config

Currently script configuration is done by asking the user to edit specific variables in script files. Thus users incabable of editing javascript files are unable to configurate their scripts. In order to have two or more different configurations one has to copy the whole script file.

To change this we'll introduce a script configuration system. Script developers will define allowed settings in the scripts manifest file. Botfather will show those settings in it's GUI where the user can edit them easily. Configurations made by the users can then be used by scripts using a new Config API.

##### What about 4.0 updates?

While botfather 5.0 takes some time to develop we want to keep botfather 4.0 stable and accessible.

We'll fix as much bugs as possible, eventually add minor features and work on linux packaging.
