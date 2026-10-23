---
title: "Case Study: A General Exam Tutor"
layout: page
section: radio
permalink: /radio/general-study-tutor/
---

For General, I built myself a study tool. This is a short case study of what it does and why it's built the way it is. It's a work in progress.

## The problem

HamStudy is great for drilling, but its explanations tend to lean on memorization tricks or stay shallow. For Technician that was fine. For General, with more electronics and propagation theory, I wanted to know _why_ an answer is right.

## The split

The tool doesn't replace HamStudy. HamStudy handles drilling and spaced repetition. My tutor handles understanding. The bridge is the question ID: I bring the IDs I keep missing, and the tutor explains them.

## Accuracy first

The risk with an AI tutor is a confident wrong explanation. For study material, that's worse than no explanation, so most of the design is guardrails:

- **Answers come from a lookup.** Every explanation starts from the official answer key, parsed into data, never from the model's memory.
- **Claims are cited.** Rules claims quote Part 97. Theory claims cite the public-domain Navy electronics course (NEETS). Citations are checked by a script, so a made-up quote fails the check.
- **Math is computed in code**, not done in the model's head.
- **A separate audit.** A fresh agent that never saw the writing re-reads every source and flags unsupported claims.
- **It can say "I don't know."** If the sources don't cover something, it says so and points to what would settle it.
- **The answer key wins.** If the tutor's reasoning disagrees with the key, it flags the conflict instead of quietly "fixing" it.

## Where it stands

So far I've built out one section of the General pool (electrical principles) as a pilot, and the audit process is running on it. I'll update this page as it grows and once I've taken the exam.
