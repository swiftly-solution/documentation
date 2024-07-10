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
## BuilderParams 
```lua
@type WorldBuilderParams_t
Read: world_t.BuilderParams
Write: world_t.BuilderParams = value
```
## WorldNodes 
```lua
@type table
Read: world_t.WorldNodes
Write: world_t.WorldNodes = value
```
## WorldLightingInfo 
```lua
@type BakedLightingInfo_t
Read: world_t.WorldLightingInfo
Write: world_t.WorldLightingInfo = value
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