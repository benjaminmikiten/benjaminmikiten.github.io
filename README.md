# benjaminmikiten.github.io

Personal site, served at https://b.mktn.io via GitHub Pages (Jekyll, `minima` theme, no build step).

## Adding a page

Create a markdown file with front matter in the right folder (`essays/`, `guides/`, `lists/`, `books/`, or the root for standalone pages):

```markdown
---
title: "My New Essay"
layout: page
permalink: /essays/my-new-essay/
---

Body goes here.
```

Then add a bullet for it to that folder's `index.md`. Links between pages use the `permalink`, e.g. `[On Failure](/essays/on-failure/)`.

## Local preview

Needs Ruby 2.7+ and Bundler:

```sh
gem install jekyll bundler
jekyll serve
```
