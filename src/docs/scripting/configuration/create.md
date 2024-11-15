---
title: Create
index: true
order: 2
category:
  - Guide
---

# Create
Creates the plugin configuration file.
::: tabs
@tab Lua
```lua
--- @param config_key string
--- @param value table
--- @return nil
config:Create(config_key, value)
```
> [!info]
> The config_key field supports nested configuration. Example: `folder1/folder2/config_key`, resulting in fetching to `folder1.folder2.config_key`.
The value needs to be a pair of key-values table in initial state, after it can also include lists and nested tables.
:::