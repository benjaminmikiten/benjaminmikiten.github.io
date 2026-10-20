---
title: "MuOS Syncthing Sync Conflicts"
layout: page
permalink: /guides/muos-syncthing-sync-conflicts/
redirect_from:
  - /Guides/MuOS+Syncthing+Sync+Conflicts
  - /Guides/MuOS Syncthing Sync Conflicts
---

I recently troubleshooted an issue with sync conflicts when trying to use Syncthing across multiple Anbernic handhelds running MuOS. 

I was ending up with a `sync-conflict` file for every instance of a ROM on each device.

The issue ended up being that one of my handhelds’ date and time was set to 1970.
