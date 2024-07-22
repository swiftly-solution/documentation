---
title: World_t
index: true
order: 2
category:
  - Guide
---

# World_t

::: tabs
@tab Lua
# Constructor
```lua
World_t(ptr --[[ string ]])
```
# Properties
## BuilderParams (Read-Only)
```lua
@type WorldBuilderParams_t
Read: world_t.BuilderParams
```
## WorldNodes 
```lua
@type table
Read: world_t.WorldNodes
Write: world_t.WorldNodes = value
```
## WorldLightingInfo (Read-Only)
```lua
@type BakedLightingInfo_t
Read: world_t.WorldLightingInfo
```
# Functions
## ToPtr
```lua
@returns string
world_t:ToPtr()
```
## IsValid
```lua
@returns bool
world_t:IsValid()
```

:::