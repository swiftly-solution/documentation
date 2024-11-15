---
title: CPointPush
index: true
order: 2
category:
  - Guide
---

# CPointPush

::: tabs
@tab Lua
# Constructor
```lua
CPointPush(ptr)
```
# Properties
## Enabled 
```lua
--- @type boolean
Read: cpointpush.Enabled
Write: cpointpush.Enabled = value
```
## Magnitude 
```lua
--- @type number
Read: cpointpush.Magnitude
Write: cpointpush.Magnitude = value
```
## Radius 
```lua
--- @type number
Read: cpointpush.Radius
Write: cpointpush.Radius = value
```
## InnerRadius 
```lua
--- @type number
Read: cpointpush.InnerRadius
Write: cpointpush.InnerRadius = value
```
## ConeOfInfluence 
```lua
--- @type number
Read: cpointpush.ConeOfInfluence
Write: cpointpush.ConeOfInfluence = value
```
## FilterName 
```lua
--- @type string
Read: cpointpush.FilterName
Write: cpointpush.FilterName = value
```
## Filter (Read-Only)
```lua
--- @type CBaseFilter
Read: cpointpush.Filter
```
## Parent (Read-Only)
```lua
--- @type CPointEntity
Read: cpointpush.Parent
```
# Functions
## ToPtr
```lua
@returns string
cpointpush:ToPtr()
```
## IsValid
```lua
@returns bool
cpointpush:IsValid()
```

:::