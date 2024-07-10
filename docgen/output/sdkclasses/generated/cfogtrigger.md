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
CFogTrigger(ptr --[[ string ]])
```
# Properties
## Fog 
```lua
@type fogparams_t
Read: cfogtrigger.Fog
Write: cfogtrigger.Fog = value
```
## Parent 
```lua
@type CBaseTrigger
Read: cfogtrigger.Parent
Write: cfogtrigger.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cfogtrigger:ToPtr()
```
## IsValid
```lua
@returns bool
cfogtrigger:IsValid()
```

:::