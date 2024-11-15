---
title: CreateFake
index: true
order: 2
category:
  - Guide
---

# CreateFake
Creates a fake convar.
::: tabs
@tab Lua
```lua
--- @param name string
--- @param cvartype number EConVarType
--- @param defaultValue any
--- @param protected boolean
--- @return nil
convar:CreateFake(name, cvartype, defaultValue, protected)
```
If the protected is set to true, no data will be sent by the server to the client about this convar.
:::