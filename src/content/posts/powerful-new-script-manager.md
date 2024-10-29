---
pubDate: 2024-10-29
title: Powerful New Script Manager (version 6.8)
lead: Botfather 6.8 features a new powerful script manager and removes the need for an account to run bots longer than two hours.
---

## New Script Manager

Before this update, the Botfather script manager enabled the installation of scripts users listed on the Botfather website.
Starting with this update, the script manager can clone scripts directly from any public Git repository branch.
This enables developers to host alternative versions of their scripts via different branches.
As before, Botfather can still automatically update scripts cloned from Git repositories.

This change made the script manager more powerful and flexible.
It also relieved us from having to worry about malicious scripts being listed on promoted on our website.

## Accounts are gone

Similar to how we disconnected the new script manager from our website, we also removed the requirement to have an account to run bots longer than two hours.
This was done to enable Botfather to be used offline and in preparation for making Botfather open-source.
Note that all existing accounts and all their data have been deleted.

## New Website

Disconnecting the script manager from the website and removing the account requirement also enabled us to simplify our website.
It's open-source and powered by Astro, simplifying hosting and enabling contributions from the community.
