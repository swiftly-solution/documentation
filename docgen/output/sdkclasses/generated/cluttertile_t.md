---
title: ClutterTile_t
index: true
order: 2
category:
  - Guide
---

# ClutterTile_t

::: tabs
@tab Lua
# Constructor
```lua
ClutterTile_t(ptr --[[ string ]])
```
# Properties
## FirstInstance 
```lua
@type number
Read: cluttertile_t.FirstInstance
Write: cluttertile_t.FirstInstance = value
```
## LastInstance 
```lua
@type number
Read: cluttertile_t.LastInstance
Write: cluttertile_t.LastInstance = value
```
## BoundsWs (Read-Only)
```lua
@type AABB_t
Read: cluttertile_t.BoundsWs
```
# Functions
## ToPtr
```lua
@returns string
cluttertile_t:ToPtr()
```
## IsValid
```lua
@returns bool
cluttertile_t:IsValid()
```

:::