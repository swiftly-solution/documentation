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
--- @param ptr string
CEnvViewPunch(ptr)
```
# Properties
## Radius 
```lua
--- @type number
Read: cenvviewpunch.Radius
Write: cenvviewpunch.Radius = value
```
## ViewPunch 
```lua
--- @type QAngle
Read: cenvviewpunch.ViewPunch
Write: cenvviewpunch.ViewPunch = value
```
## Parent (Read-Only)
```lua
--- @type CPointEntity
Read: cenvviewpunch.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cenvviewpunch:ToPtr()
```
## IsValid
```lua
--- @return bool
cenvviewpunch:IsValid()
```

:::