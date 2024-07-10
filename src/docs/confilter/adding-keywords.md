---
title: Adding Keywords
icon: keyboard
order: 2
index: true
category:
  - Guide
---


# Adding Keywords

To add new keywords to block texts in console you need to add a new entry in `addons/swiftly/configs/console_filter.json`:

```json title="console_filter.json"
{
    "KEY": "KEYWORD"
}
```

The key represents a unique identifier for your keyword to block. It's gonna be used in seeing statistics about the console filtering.

## Example

```json title="console_filter.json"
{
    "BotProfile": "botprofile"
}
```