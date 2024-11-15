---
title: CEnvTilt
index: true
order: 2
category:
  - Guide
---

# CEnvTilt

::: tabs
@tab Lua
# Constructor
```lua
CEnvTilt(ptr)
```
# Properties
## Duration 
```lua
--- @type number
Read: cenvtilt.Duration
Write: cenvtilt.Duration = value
```
## Radius 
```lua
--- @type number
Read: cenvtilt.Radius
Write: cenvtilt.Radius = value
```
## TiltTime 
```lua
--- @type number
Read: cenvtilt.TiltTime
Write: cenvtilt.TiltTime = value
```
## StopTime 
```lua
--- @type number
Read: cenvtilt.StopTime
Write: cenvtilt.StopTime = value
```
## Parent (Read-Only)
```lua
--- @type CPointEntity
Read: cenvtilt.Parent
```
# Functions
## ToPtr
```lua
@returns string
cenvtilt:ToPtr()
```
## IsValid
```lua
@returns bool
cenvtilt:IsValid()
```

:::