---
title: CPointAngleSensor
index: true
order: 2
category:
  - Guide
---

# CPointAngleSensor

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CPointAngleSensor(ptr)
```
# Properties
## Disabled 
```lua
--- @type boolean
Read: cpointanglesensor.Disabled
Write: cpointanglesensor.Disabled = value
```
## LookAtName 
```lua
--- @type string
Read: cpointanglesensor.LookAtName
Write: cpointanglesensor.LookAtName = value
```
## TargetEntity (Read-Only)
```lua
--- @type CBaseEntity
Read: cpointanglesensor.TargetEntity
```
## LookAtEntity (Read-Only)
```lua
--- @type CBaseEntity
Read: cpointanglesensor.LookAtEntity
```
## Duration 
```lua
--- @type number
Read: cpointanglesensor.Duration
Write: cpointanglesensor.Duration = value
```
## DotTolerance 
```lua
--- @type number
Read: cpointanglesensor.DotTolerance
Write: cpointanglesensor.DotTolerance = value
```
## FacingTime 
```lua
--- @type number
Read: cpointanglesensor.FacingTime
Write: cpointanglesensor.FacingTime = value
```
## Fired 
```lua
--- @type boolean
Read: cpointanglesensor.Fired
Write: cpointanglesensor.Fired = value
```
## OnFacingLookat (Read-Only)
```lua
--- @type CEntityIOOutput
Read: cpointanglesensor.OnFacingLookat
```
## OnNotFacingLookat (Read-Only)
```lua
--- @type CEntityIOOutput
Read: cpointanglesensor.OnNotFacingLookat
```
## Parent (Read-Only)
```lua
--- @type CPointEntity
Read: cpointanglesensor.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cpointanglesensor:ToPtr()
```
## IsValid
```lua
--- @return bool
cpointanglesensor:IsValid()
```

:::