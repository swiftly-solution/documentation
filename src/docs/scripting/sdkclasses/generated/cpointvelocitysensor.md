---
title: CPointVelocitySensor
index: true
order: 2
category:
  - Guide
---

# CPointVelocitySensor

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CPointVelocitySensor(ptr)
```
# Properties
## TargetEntity (Read-Only)
```lua
--- @type CBaseEntity
Read: cpointvelocitysensor.TargetEntity
```
## Axis 
```lua
--- @type Vector
Read: cpointvelocitysensor.Axis
Write: cpointvelocitysensor.Axis = value
```
## Enabled 
```lua
--- @type boolean
Read: cpointvelocitysensor.Enabled
Write: cpointvelocitysensor.Enabled = value
```
## PrevVelocity 
```lua
--- @type number
Read: cpointvelocitysensor.PrevVelocity
Write: cpointvelocitysensor.PrevVelocity = value
```
## AvgInterval 
```lua
--- @type number
Read: cpointvelocitysensor.AvgInterval
Write: cpointvelocitysensor.AvgInterval = value
```
## Parent (Read-Only)
```lua
--- @type CPointEntity
Read: cpointvelocitysensor.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cpointvelocitysensor:ToPtr()
```
## IsValid
```lua
--- @return bool
cpointvelocitysensor:IsValid()
```

:::