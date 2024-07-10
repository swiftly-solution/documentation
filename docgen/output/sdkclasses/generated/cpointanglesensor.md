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
CPointAngleSensor(ptr --[[ string ]])
```
# Properties
## Disabled 
```lua
@type boolean
Read: cpointanglesensor.Disabled
Write: cpointanglesensor.Disabled = value
```
## LookAtName 
```lua
@type string
Read: cpointanglesensor.LookAtName
Write: cpointanglesensor.LookAtName = value
```
## TargetEntity (Read-Only)
```lua
@type CBaseEntity
Read: cpointanglesensor.TargetEntity
```
## LookAtEntity (Read-Only)
```lua
@type CBaseEntity
Read: cpointanglesensor.LookAtEntity
```
## Duration 
```lua
@type number
Read: cpointanglesensor.Duration
Write: cpointanglesensor.Duration = value
```
## DotTolerance 
```lua
@type number
Read: cpointanglesensor.DotTolerance
Write: cpointanglesensor.DotTolerance = value
```
## FacingTime 
```lua
@type number
Read: cpointanglesensor.FacingTime
Write: cpointanglesensor.FacingTime = value
```
## Fired 
```lua
@type boolean
Read: cpointanglesensor.Fired
Write: cpointanglesensor.Fired = value
```
## OnFacingLookat 
```lua
@type CEntityIOOutput
Read: cpointanglesensor.OnFacingLookat
Write: cpointanglesensor.OnFacingLookat = value
```
## OnNotFacingLookat 
```lua
@type CEntityIOOutput
Read: cpointanglesensor.OnNotFacingLookat
Write: cpointanglesensor.OnNotFacingLookat = value
```
## Parent 
```lua
@type CPointEntity
Read: cpointanglesensor.Parent
Write: cpointanglesensor.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cpointanglesensor:ToPtr()
```
## IsValid
```lua
@returns bool
cpointanglesensor:IsValid()
```

:::