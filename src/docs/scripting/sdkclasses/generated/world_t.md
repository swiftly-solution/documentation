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
--- @param ptr string
World_t(ptr)
```
# Properties
## BuilderParams (Read-Only)
```lua
--- @type WorldBuilderParams_t
Read: world_t.BuilderParams
```
## WorldNodes (Read-Only)
```lua
--- @type table
Read: world_t.WorldNodes
```
## WorldLightingInfo (Read-Only)
```lua
--- @type BakedLightingInfo_t
Read: world_t.WorldLightingInfo
```
# Functions
## ToPtr
```lua
--- @return string
world_t:ToPtr()
```
## IsValid
```lua
--- @return bool
world_t:IsValid()
```

:::