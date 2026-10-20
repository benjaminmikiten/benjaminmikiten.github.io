---
title: "FunnyPlaying MidnightTrace V2 Troubleshooting"
layout: page
section: guides
permalink: /guides/funnyplaying-midnighttrace-v2-troubleshooting/
redirect_from:
  - /Guides/FunnyPlaying+MidnightTrace+V2+Troubleshooting
  - /Guides/FunnyPlaying MidnightTrace V2 Troubleshooting
---

FunnyPlaying seems to have had a bad batch of these cards distributed, as I've received dud cards both directly from FP, and a reseller.

# Verification Steps

In both cases, I needed to show that the issue was in fact with the card, and not with my device or my game. These are the steps I took to verify this.

1. Establish a first-party game and console that both work together, e.g. an original GBC and a real copy of Pokémon Blue. Make a record (e.g. take a photo) of these two working together. I recommend using original hardware, rather than something like an Analogue Pocket or even a [Funnyplaying FPGBC](#using-fpgbc).
2. Establish which mapper your game uses with a resource like [this](https://gbhwdb.gekkio.fi/cartridges/mbc1.html). 
3. With a trustworthy [cartridge dumper](/guides/dumping-gameboy-cartridges/), create a back up of your verified cartridge. 
4. Prepare the MidnightTrace card by ensuring the DIP switches are all set to line up under the `1` printed on the board. This prepares the cartridge to be flashed to.
5. Using your tool of choice, flash the backed-up ROM of your verified cartridge to the MidnightTrace flash cart. 
6. Change the DIP switches on the MidnightTrace card to use the correct Mapper for the ROM. Follow the table on the board itself.
7. Verify if the now-flashed MidnightTrace cartridge works like the initial verified ROM does. Make sure you play through the game a bit -- in my experience, I didn't see an issue until creating a new game in Link's Awakening, or the Oak monologue in Pokémon. Make a record of the issue you saw like you did initially.

# Issues
## Using FPGBC
The first time I ordered one of these, I got two. One worked, one didn't. My troubleshooting was made more complex by the fact that the MidnightTrace had some issues working on the FPGBC. This was muddying my diagnostic process, which is why I recommend only doing any verification to get a refund with original hardware.

## Professor Oak appearing as a black square
One of the devices I got had both the Nido and Gengar as well as Prof Oak appearing as black squares. 

## Link's Awakening DX graphics scrambled
That same device showed all the sprites in Link's Awakening DX scrambled.
