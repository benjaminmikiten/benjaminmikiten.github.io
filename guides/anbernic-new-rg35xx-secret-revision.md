---
title: "Anbernic New RG35XX Secret Revision"
layout: page
section: guides
permalink: /guides/anbernic-new-rg35xx-secret-revision/
redirect_from:
  - /Guides/Anbernic+New+RG35XX+Secret+Revision
  - /Guides/Anbernic New RG35XX Secret Revision
---


## Different Devices
Anbernic launched the RG35XX, and then followed it up with two confusingly-named updates.

The **RG35XX Plus** and the **New RG35XX** (or **RG35XX 2024**) each upgraded the handheld to the H700 processor, while only the **Plus** added Wifi.

## Labelling
Anbernic chose to label these _extremely strangely_ on the devices themselves, listing `RG35XX +` on the back of the **New RG35XX/ RG35XX 2024**. 

| Device      | Label Title    |
| ----------- | -------------- |
| RG35XX Plus | `RG 35XX plus` |
| New RG35XX  | `RG 35xx +`    |

## Secret Revision
Several CFWs support the New RG35XX, but there is some evidence that there was a **secret revision** of the New RG35XX.

Flashing custom firmware to the New RG35XX will often leave it (temporarily) bricked, and it appears to only support the stock firmware.

## Anecdotal Evidence
This is not the case with _all_ New RG35XX models, however. I can anecdotally confirm that one bought on Amazon with the `+` sticker doesn't support either the muOS CFW prepared for that revision, or MinUI.

In both cases, flashing new firmware to the SD card left the device unresponsive. In both cases, reflashing the stock firmware brought it back to being functional.

On the muOS discord, this was corroborated. A maintainer suggested that the H firmware might work, and I was able to replicate that. This lead them to believe that there were two revisions of the New RG35XX released, one which was more similar to the H. 

### Troubleshooting
If you bricked your New RG35XX or RG35XX 2024 by putting new firmware on it, simply reflash your SD card with the stock firmware, which can be found on Anbernic's website.
