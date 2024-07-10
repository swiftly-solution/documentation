---
title: Getting Started
index: true
order: 1
category:
  - Guide
---

# Getting Started
To use Swiftly Translation system you need to create a `JSON` file in `translations` folder with the following schema:
::: tabs
@tab Lua
#### File Name
```
translation.MAIN_TRANSLATION_KEY.json
```

#### File Content
```json
{
    "key1.key2": {
        "en": "English Translation",
        "ro": "Traducere Română"
    },
    ...
}
```
:::