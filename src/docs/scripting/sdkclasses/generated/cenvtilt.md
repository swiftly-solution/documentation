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
--- @param ptr string
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
--- @return string
cenvtilt:ToPtr()
```
## IsValid
```lua
--- @return bool
cenvtilt:IsValid()
```

:::