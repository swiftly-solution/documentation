---
title: CSoundEventParameter
index: true
order: 2
category:
  - Guide
---

# CSoundEventParameter

::: tabs
@tab Lua
# Constructor
```lua
CSoundEventParameter(ptr)
```
# Properties
## ParamName 
```lua
--- @type string
Read: csoundeventparameter.ParamName
Write: csoundeventparameter.ParamName = value
```
## FloatValue 
```lua
--- @type number
Read: csoundeventparameter.FloatValue
Write: csoundeventparameter.FloatValue = value
```
## Parent (Read-Only)
```lua
--- @type CBaseEntity
Read: csoundeventparameter.Parent
```
# Functions
## ToPtr
```lua
@returns string
csoundeventparameter:ToPtr()
```
## IsValid
```lua
@returns bool
csoundeventparameter:IsValid()
```

:::