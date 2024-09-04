---
title: CFireSmoke
index: true
order: 2
category:
  - Guide
---

# CFireSmoke

::: tabs
@tab Lua
# Constructor
```lua
CFireSmoke(ptr --[[ string ]])
```
# Properties
## FlameModelIndex 
```lua
@type number
Read: cfiresmoke.FlameModelIndex
Write: cfiresmoke.FlameModelIndex = value
```
## FlameFromAboveModelIndex 
```lua
@type number
Read: cfiresmoke.FlameFromAboveModelIndex
Write: cfiresmoke.FlameFromAboveModelIndex = value
```
## Parent (Read-Only)
```lua
@type CBaseFire
Read: cfiresmoke.Parent
```
# Functions
## ToPtr
```lua
@returns string
cfiresmoke:ToPtr()
```
## IsValid
```lua
@returns bool
cfiresmoke:IsValid()
```

:::