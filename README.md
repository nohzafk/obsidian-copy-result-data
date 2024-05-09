# Copy Result Data Plugin for Obsidian

## Overview

This simple plugin copys the data passed through URL scheme to clipboard.

This is particularly useful for those who integrate their Obsidian workflow with other iOS apps and services using Shortcuts and x-callback-url.

## Usage

For example, an iOS Shortcut that opens the URL `obsidian://copy-result-data?result-data=your_text_here`, will open Obsidian and automatically copy the specified text to your clipboard.

This plugin is mainly used together with [Actions URL](https://github.com/czottmann/obsidian-actions-uri?tab=readme-ov-file), using a ios Shortcut to [get the data back](https://zottmann.dev/obsidian-actions-uri/callbacks/) after executing `/dataview` [query](https://zottmann.dev/obsidian-actions-uri/routes/dataview/#dataviewlist-query) to work with other workflow.

## Installation

### Manual Installation

1. Download the latest files from the [GitHub Releases page](https://github.com/nohzafk/obsidian-copy-result-data/releases).
2. add `main.js` `manifest.json` to your vault's `.obsidian/plugins/obsidian-copy-result-data` directory.
3. Reload Obsidian.
4. Go to `Settings` > `Community Plugins` and disable `Safe Mode`.
5. Enable the "Copy Result Data" plugin from the list of available plugins.

---

Happy noting!
