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
@returns void
convar:CreateFake(name --[[ string ]], cvartype --[[ EConVarType ]], defaultValue --[[ Any* any ]], protected --[[ boolean ]])
```
If the protected is set to true, no data will be sent by the server to the client about this convar.
:::