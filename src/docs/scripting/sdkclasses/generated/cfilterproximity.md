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
--- @param ptr string
CFilterProximity(ptr)
```
# Properties
## Radius 
```lua
--- @type number
Read: cfilterproximity.Radius
Write: cfilterproximity.Radius = value
```
## Parent (Read-Only)
```lua
--- @type CBaseFilter
Read: cfilterproximity.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cfilterproximity:ToPtr()
```
## IsValid
```lua
--- @return bool
cfilterproximity:IsValid()
```

:::