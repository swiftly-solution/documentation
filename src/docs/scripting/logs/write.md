---
title: Write
index: true
order: 2
category:
  - Guide
---

# Write
Writes a specific text in the plugin's log file.
::: tabs
@tab Lua
```lua
--- @param log_type number LogType_t
--- @param text string
--- @return nil
logger:Write(log_type, text)
```

:::