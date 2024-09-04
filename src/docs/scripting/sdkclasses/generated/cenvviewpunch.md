---
title: CEnvViewPunch
index: true
order: 2
category:
  - Guide
---

# CEnvViewPunch

::: tabs
@tab Lua
# Constructor
```lua
CEnvViewPunch(ptr --[[ string ]])
```
# Properties
## Radius 
```lua
@type number
Read: cenvviewpunch.Radius
Write: cenvviewpunch.Radius = value
```
## ViewPunch 
```lua
@type QAngle
Read: cenvviewpunch.ViewPunch
Write: cenvviewpunch.ViewPunch = value
```
## Parent (Read-Only)
```lua
@type CPointEntity
Read: cenvviewpunch.Parent
```
# Functions
## ToPtr
```lua
@returns string
cenvviewpunch:ToPtr()
```
## IsValid
```lua
@returns bool
cenvviewpunch:IsValid()
```

:::