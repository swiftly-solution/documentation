---
title: FetchTranslation
index: true
order: 2
category:
  - Guide
---

# FetchTranslation
Returns the translation for the specified key.
> [!warning]
> the translation key is non-existent for the specified language in core.json, it returns the the translation key.

> [!info]
> Key Format: MAIN_TRANSLATION_KEY.TRANSLATION_KEY

> Example: test_plugin.core.started


::: tabs
@tab Lua
```lua
--- @param key string
--- @param playerid number|nil
--- @return string
FetchTranslation(key, playerid)
```

:::