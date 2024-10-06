---
title: FeHingeLimitBuild_t
index: true
order: 2
category:
  - Guide
---

# FeHingeLimitBuild_t

::: tabs
@tab Lua
# Constructor
```lua
FeHingeLimitBuild_t(ptr --[[ string ]])
```
# Properties
## Node 
```lua
@type table
Read: fehingelimitbuild_t.Node
Write: fehingelimitbuild_t.Node = value
```
## Flags 
```lua
@type number
Read: fehingelimitbuild_t.Flags
Write: fehingelimitbuild_t.Flags = value
```
## LimitCW 
```lua
@type number
Read: fehingelimitbuild_t.LimitCW
Write: fehingelimitbuild_t.LimitCW = value
```
## LimitCCW 
```lua
@type number
Read: fehingelimitbuild_t.LimitCCW
Write: fehingelimitbuild_t.LimitCCW = value
```
# Functions
## ToPtr
```lua
@returns string
fehingelimitbuild_t:ToPtr()
```
## IsValid
```lua
@returns bool
fehingelimitbuild_t:IsValid()
```

:::