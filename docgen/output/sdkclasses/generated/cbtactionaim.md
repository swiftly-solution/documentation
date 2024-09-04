---
title: CBtActionAim
index: true
order: 2
category:
  - Guide
---

# CBtActionAim

::: tabs
@tab Lua
# Constructor
```lua
CBtActionAim(ptr --[[ string ]])
```
# Properties
## SensorInputKey 
```lua
@type string
Read: cbtactionaim.SensorInputKey
Write: cbtactionaim.SensorInputKey = value
```
## AimReadyKey 
```lua
@type string
Read: cbtactionaim.AimReadyKey
Write: cbtactionaim.AimReadyKey = value
```
## ZoomCooldownTimestamp 
```lua
@type number
Read: cbtactionaim.ZoomCooldownTimestamp
Write: cbtactionaim.ZoomCooldownTimestamp = value
```
## DoneAiming 
```lua
@type boolean
Read: cbtactionaim.DoneAiming
Write: cbtactionaim.DoneAiming = value
```
## LerpStartTime 
```lua
@type number
Read: cbtactionaim.LerpStartTime
Write: cbtactionaim.LerpStartTime = value
```
## NextLookTargetLerpTime 
```lua
@type number
Read: cbtactionaim.NextLookTargetLerpTime
Write: cbtactionaim.NextLookTargetLerpTime = value
```
## PenaltyReductionRatio 
```lua
@type number
Read: cbtactionaim.PenaltyReductionRatio
Write: cbtactionaim.PenaltyReductionRatio = value
```
## NextLookTarget 
```lua
@type QAngle
Read: cbtactionaim.NextLookTarget
Write: cbtactionaim.NextLookTarget = value
```
## AimTimer (Read-Only)
```lua
@type CountdownTimer
Read: cbtactionaim.AimTimer
```
## SniperHoldTimer (Read-Only)
```lua
@type CountdownTimer
Read: cbtactionaim.SniperHoldTimer
```
## FocusIntervalTimer (Read-Only)
```lua
@type CountdownTimer
Read: cbtactionaim.FocusIntervalTimer
```
## Acquired 
```lua
@type boolean
Read: cbtactionaim.Acquired
Write: cbtactionaim.Acquired = value
```
## Parent (Read-Only)
```lua
@type CBtNode
Read: cbtactionaim.Parent
```
# Functions
## ToPtr
```lua
@returns string
cbtactionaim:ToPtr()
```
## IsValid
```lua
@returns bool
cbtactionaim:IsValid()
```

:::