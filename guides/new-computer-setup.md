---
title: "New Computer Setup"
layout: page
permalink: /guides/new-computer-setup/
redirect_from:
  - /Guides/New+Computer+Setup
  - /Guides/New Computer Setup
---

These are the basic steps and tools I install on every machine. This isn't a comprehensive guide, it's just the major steps. YMMV.
# Basic Tools

Use `Terminal.app` to download `brew` https://brew.sh/

Use `brew` to install `tmux` and other handy CLI tools
```
brew install tmux awscli docker neovim
```

Use `brew` to install relevant apps
```
brew install --cask 1password alfred discord firefox iterm2 obsidian rectangle spotify visual-studio-code
```

Use `brew` to install fonts
```
brew install font-fira-code-nerd-font font-meslo-lg-nerd-font
```

# CLI Setup

Install `omz` https://ohmyz.sh/#install

Install `powerlevel10k` using the omz package manager https://ohmyz.sh/#install

> **Note:** On Zsh Plugin Managers
> 
> For _my purposes_ it's simplest to just use the `omz` package manager. I've tried other ones and they're all great, but this one comes with the box.


Configure `omz` to taste.

# `tmux` Setup

Install `tpm` https://github.com/tmux-plugins/tpm?tab=readme-ov-file#installation

Add `tmux.conf`, I like

```
set -g mouse on
# move status line top
set -g status-position top

bind h select-pane -L
bind j select-pane -D
bind k select-pane -U
bind l select-pane -R


unbind-key C-b
set-option -g prefix C-a
bind-key C-a send-prefix

bind R source-file '~/.config/tmux/tmux.conf'

# plugins

set -g @plugin 'tmux-plugins/tpm'
set -g @plugin 'catppuccin/tmux#v2.1.0'
set -g @catppuccin_flavor 'mocha'
set -g @plugin 'tmux-plugins/tmux-sensible'
set -g @plugin 'nhdaly/tmux-better-mouse-mode'
set -g @plugin 'tmux-plugins/tmux-open'
set -g @continuum-restore 'on'

run '~/.tmux/plugins/tpm/tpm'

```

# `neovim` Setup

Install LazyVim https://www.lazyvim.org/installation
