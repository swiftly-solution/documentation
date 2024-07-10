---
title: Language
icon: globe
order: 1
index: true
category:
  - Guide
---

# Language

To change the language for the plugins to use, you can modify the `addons/swiftly/configs/core.json`:

```json filename="core.json"
{
    ...
    "language": "en"
}
```

## Example

If you want to change the language to Romanian, you need to set the language field to `ro`:

```json title="core.json"
{
    ...
    "language": "ro"
}
```

> [!warning]
> If a specific message translation from a plugin translation file does not include the language specified in the core.json, the message will be the message key from it's translation file.