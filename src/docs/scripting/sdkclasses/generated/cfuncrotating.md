---
title: CFuncRotating
index: true
order: 2
category:
  - Guide
---

# CFuncRotating

::: tabs
@tab Lua
# Constructor
```lua
CFuncRotating(ptr)
```
# Properties
## OnStopped (Read-Only)
```lua
--- @type CEntityIOOutput
Read: cfuncrotating.OnStopped
```
## OnStarted (Read-Only)
```lua
--- @type CEntityIOOutput
Read: cfuncrotating.OnStarted
```
## OnReachedStart (Read-Only)
```lua
--- @type CEntityIOOutput
Read: cfuncrotating.OnReachedStart
```
## LocalRotationVector 
```lua
--- @type Vector
Read: cfuncrotating.LocalRotationVector
Write: cfuncrotating.LocalRotationVector = value
```
## FanFriction 
```lua
--- @type number
Read: cfuncrotating.FanFriction
Write: cfuncrotating.FanFriction = value
```
## Attenuation 
```lua
--- @type number
Read: cfuncrotating.Attenuation
Write: cfuncrotating.Attenuation = value
```
## Volume 
```lua
--- @type number
Read: cfuncrotating.Volume
Write: cfuncrotating.Volume = value
```
## TargetSpeed 
```lua
--- @type number
Read: cfuncrotating.TargetSpeed
Write: cfuncrotating.TargetSpeed = value
```
## MaxSpeed 
```lua
--- @type number
Read: cfuncrotating.MaxSpeed
Write: cfuncrotating.MaxSpeed = value
```
## BlockDamage 
```lua
--- @type number
Read: cfuncrotating.BlockDamage
Write: cfuncrotating.BlockDamage = value
```
## NoiseRunning 
```lua
--- @type string
Read: cfuncrotating.NoiseRunning
Write: cfuncrotating.NoiseRunning = value
```
## Reversed 
```lua
--- @type boolean
Read: cfuncrotating.Reversed
Write: cfuncrotating.Reversed = value
```
## AccelDecel 
```lua
--- @type boolean
Read: cfuncrotating.AccelDecel
Write: cfuncrotating.AccelDecel = value
```
## PrevLocalAngles 
```lua
--- @type QAngle
Read: cfuncrotating.PrevLocalAngles
Write: cfuncrotating.PrevLocalAngles = value
```
## Start 
```lua
--- @type QAngle
Read: cfuncrotating.Start
Write: cfuncrotating.Start = value
```
## StopAtStartPos 
```lua
--- @type boolean
Read: cfuncrotating.StopAtStartPos
Write: cfuncrotating.StopAtStartPos = value
```
## ClientOrigin 
```lua
--- @type Vector
Read: cfuncrotating.ClientOrigin
Write: cfuncrotating.ClientOrigin = value
```
## ClientAngles 
```lua
--- @type QAngle
Read: cfuncrotating.ClientAngles
Write: cfuncrotating.ClientAngles = value
```
## Parent (Read-Only)
```lua
--- @type CBaseModelEntity
Read: cfuncrotating.Parent
```
# Functions
## ToPtr
```lua
@returns string
cfuncrotating:ToPtr()
```
## IsValid
```lua
@returns bool
cfuncrotating:IsValid()
```

:::