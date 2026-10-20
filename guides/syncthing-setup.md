---
title: "Syncthing Setup"
layout: page
section: guides
permalink: /guides/syncthing-setup/
redirect_from:
  - /Guides/Syncthing+Setup
  - /Guides/Syncthing Setup
---

If you've got multiple emulators that you want to sync saves between, you can use [Syncthing](https://syncthing.net/). This comes pre-installed in MuOS, but you'll need to set it up on your computer as well if you want to have your save backed up to your machine.

# Concepts
Syncthing keeps the contents of a folder across several devices in sync. Syncthing has an idea of a "Folder" which can be in multiple places across each devices' filesystem. That is, if you create a "Saves" folder in Syncthing, that folder might be at `/mnt/sdcard/MUOS/saves` on one device, `~/Emulation/SyncedSave` on another. 

Syncthing's folders are the first-order concept, where the locations that it should sync to on each device are secondary. 

Understanding this prevents you from making the main mistake I made the first time, which was to create a Syncthing Folder for each folder on each device. Don't do this.

# Instructions
## Installing

`brew install --cask syncthing` or https://syncthing.net/downloads/

## MuOS Setup

Connect your device to your internet, noting the IP, e.g. `192.168.0.123` once it connnects.

Then go to `Configuration > Web Services` and select `Syncthing` so that it says `Enabled` beside it.

You should now be able to access the Syncthing interface for your device at port `7070`. Got to `YOUR_DEVICE_IP:7070`, e.g. `192.168.0.123:7070`.

You'll see several exciting warnings about needing to set up a password, or using a normal user account. Syncthing can be used for much cooler, more important things than saving your game. If you're on your home WIFI, IMO you don't need to worry about setting any of this up.

## Device Saves Folder Setup

This is how I like to set up my folders, you can name yours other things and do this another way: YMMV.

### First Device

Click the `Add Folder` button, and label your folder `Saves`, and make the folder ID `saves`. If you're using the [Two Card Setup](/guides/muos-setup/#two-card-setup), set the folder path to `/mnt/sdcard/MUOS/saves`. Hit save.

### Successive Devices

On your next device, add your original device with the `Add Remote Device` button at the bottom left. You'll see a long string of characters. This is likely your first device's ID, and you can compare the first several characters of it with your first device's to be sure if you'd like.

Once you've added it to the next device, confirm on the first device that you'd like it to be added. Then, click on your Saves folder, and under the `Sharing` tab, add that you'd like to share that folder. Click add, then make sure you update the folder path to the same location (presuming you're using MuOS on both), `/mnt/sdcard/MUOS/saves`.


## PC Saves Folder Setup

Create a folder somewhere on your machine that you want your saves to go to. I keep mine at `~/Emulation/SyncedSaves`. 

Follow the `Successive Devices` instructions above, but use the folder you've picked on your PC instead of the `/mnt`... route.
