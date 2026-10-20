---
title: "MuOS Setup"
layout: page
section: guides
permalink: /guides/muos-setup/
redirect_from:
  - /Guides/MuOS+Setup
  - /Guides/MuOS Setup
---

I like to use the wonderful MuOS CFW on my SBC emulators. These are the steps I take to get it up and running.

## Order a device
MuOS only works on the RG series of Anbernic devices. I recommend the [RG35XX SP](/lists/retro-handhelds/#rg35xx-sp) for new users. You can buy it on Amazon from a shady reseller for around $5 more and get it in 2 days, or you can order it right from Anbernic, who will ship it from China over the course of about a week.
## Replace the SD Cards
The SD cards that come with these, though loaded with illegal ROMs, are of questionable quality. The community seems to think that the newer "KIOXIA" cards they ship with are trustworthy, but when flash cards are so cheap now, I recommend finding one that costs as much as you'd spend to recover your precious Pokémon save when the stock card fails.

> **Tip:** **Order two cards!**

We'll be setting the device up in a way that uses [two cards](#two-card-setup) -- one that just has the OS on it, and one that has all the ROMs on it. 

>**Check:** I buy these [PNY 64GB MicroSD Cards](https://amzn.to/3OBCEPQ)

I find that a 32GB is fine for the first, and 64GB is enough for all the ROMs I want.

## Preparing Cards

Whether you're preparing the stock card that came with the device or a fresh new one, put it into your PC and use your disk formatting tool of choice to format it ExFat, using MBR Partitioning. 

Do this for _BOTH_ of the cards you're going to use.

## Downloading the CFW

You can download the latest version of MuOS at https://dl.muos.dev/. Navigate the folder structure through `RELEASE` and whichever the current version is until you get to a directory of `.img.gz` files.

Read the filenames carefully, and download the one that matches the device you've downloaded.

At the time of this writing, the current version of MuOS is `2410.1`. 

Once the file downloads, extract the archive. You should have a `.img` file waiting for you.

## Flashing the SD Card

Pick the SD card you'll put the OS onto, and use a tool like [Rufus](https://rufus.ie/en/) or [Raspberry Pi Imager](https://www.raspberrypi.com/software/) to flash the `.img` to that card. Once finished, put the card into your device and start it up.

## Installing MuOS

MuOS will go into a `Factory Reset` mode immediately. You'll be prompted to set the time, timezone, then watch a presentation of all the contributors to the project. This takes 5-10m. 

## Two Card Setup

Insert the second, probably larger, card you're going to use for SD2.

Once you're in the MuOS menu, go to `Applications > Task Toolkit > Migrate to SD2`. This will run a script that moves some files to that second SD card.

Once this is finished, you're done. 

## Adding ROMs

As a law-abiding citizen, your ROM collection will be made entirely out of dumps of cartridges that you actually own, of course. 

Put all of those into a `ROMS` folder in the root of your SD2 card. Consult the [muOS documentation on how to organize your ROMs folder](https://muos.dev/help/addcontent).
