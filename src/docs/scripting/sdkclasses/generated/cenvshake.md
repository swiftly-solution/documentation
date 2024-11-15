---
title: CEnvShake
index: true
order: 2
category:
  - Guide
---

# CEnvShake

::: tabs
@tab Lua
# Constructor
```lua
CEnvShake(ptr)
```
# Properties
## LimitToEntity 
```lua
--- @type string
Read: cenvshake.LimitToEntity
Write: cenvshake.LimitToEntity = value
```
## Amplitude 
```lua
--- @type number
Read: cenvshake.Amplitude
Write: cenvshake.Amplitude = value
```
## Frequency 
```lua
--- @type number
Read: cenvshake.Frequency
Write: cenvshake.Frequency = value
```
## Duration 
```lua
--- @type number
Read: cenvshake.Duration
Write: cenvshake.Duration = value
```
## Radius 
```lua
--- @type number
Read: cenvshake.Radius
Write: cenvshake.Radius = value
```
## StopTime 
```lua
--- @type number
Read: cenvshake.StopTime
Write: cenvshake.StopTime = value
```
## NextShake 
```lua
--- @type number
Read: cenvshake.NextShake
Write: cenvshake.NextShake = value
```
## CurrentAmp 
```lua
--- @type number
Read: cenvshake.CurrentAmp
Write: cenvshake.CurrentAmp = value
```
## MaxForce 
```lua
--- @type Vector
Read: cenvshake.MaxForce
Write: cenvshake.MaxForce = value
```
## ShakeCallback (Read-Only)
```lua
--- @type CPhysicsShake
Read: cenvshake.ShakeCallback
```
## Parent (Read-Only)
```lua
--- @type CPointEntity
Read: cenvshake.Parent
```
# Functions
## ToPtr
```lua
@returns string
cenvshake:ToPtr()
```
## IsValid
```lua
@returns bool
cenvshake:IsValid()
```

:::