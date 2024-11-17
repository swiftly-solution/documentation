---
title: CFogTrigger
index: true
order: 2
category:
  - Guide
---

# CFogTrigger

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CFogTrigger(ptr)
```
# Properties
## Fog (Read-Only)
```lua
--- @type fogparams_t
Read: cfogtrigger.Fog
```
## Parent (Read-Only)
```lua
--- @type CBaseTrigger
Read: cfogtrigger.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cfogtrigger:ToPtr()
```
## IsValid
```lua
--- @return bool
cfogtrigger:IsValid()
```

:::