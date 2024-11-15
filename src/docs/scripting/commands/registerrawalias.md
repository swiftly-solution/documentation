---
title: RegisterRawAlias
index: true
order: 2
category:
  - Guide
---

# RegisterRawAlias
Registers a raw alias (without sw_ in console) for a command registered through Swiftly Commands.
::: tabs
@tab Lua
```lua
--- @param commandName string
--- @param alias string
--- @return nil
commands:RegisterRawAlias(commandName, alias)
```

:::