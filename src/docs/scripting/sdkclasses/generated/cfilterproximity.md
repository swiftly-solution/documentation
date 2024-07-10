---
title: CFilterProximity
index: true
order: 2
category:
  - Guide
---

# CFilterProximity

::: tabs
@tab Lua
# Constructor
```lua
CFilterProximity(ptr --[[ string ]])
```
# Properties
## Radius 
```lua
@type number
Read: cfilterproximity.Radius
Write: cfilterproximity.Radius = value
```
## Parent 
```lua
@type CBaseFilter
Read: cfilterproximity.Parent
Write: cfilterproximity.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cfilterproximity:ToPtr()
```
## IsValid
```lua
@returns bool
cfilterproximity:IsValid()
```

:::