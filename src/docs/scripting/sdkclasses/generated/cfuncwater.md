---
title: CFuncWater
index: true
order: 2
category:
  - Guide
---

# CFuncWater

::: tabs
@tab Lua
# Constructor
```lua
CFuncWater(ptr --[[ string ]])
```
# Properties
## BuoyancyHelper (Read-Only)
```lua
@type CBuoyancyHelper
Read: cfuncwater.BuoyancyHelper
```
## Parent 
```lua
@type CBaseModelEntity
Read: cfuncwater.Parent
Write: cfuncwater.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cfuncwater:ToPtr()
```
## IsValid
```lua
@returns bool
cfuncwater:IsValid()
```

:::