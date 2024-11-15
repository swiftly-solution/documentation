---
title: CHostage
index: true
order: 2
category:
  - Guide
---

# CHostage

::: tabs
@tab Lua
# Constructor
```lua
CHostage(ptr)
```
# Properties
## OnHostageBeginGrab (Read-Only)
```lua
--- @type CEntityIOOutput
Read: chostage.OnHostageBeginGrab
```
## OnFirstPickedUp (Read-Only)
```lua
--- @type CEntityIOOutput
Read: chostage.OnFirstPickedUp
```
## OnDroppedNotRescued (Read-Only)
```lua
--- @type CEntityIOOutput
Read: chostage.OnDroppedNotRescued
```
## OnRescued (Read-Only)
```lua
--- @type CEntityIOOutput
Read: chostage.OnRescued
```
## EntitySpottedState (Read-Only)
```lua
--- @type EntitySpottedState_t
Read: chostage.EntitySpottedState
```
## SpotRules 
```lua
--- @type number
Read: chostage.SpotRules
Write: chostage.SpotRules = value
```
## UiHostageSpawnExclusionGroupMask 
```lua
--- @type number
Read: chostage.UiHostageSpawnExclusionGroupMask
Write: chostage.UiHostageSpawnExclusionGroupMask = value
```
## HostageSpawnRandomFactor 
```lua
--- @type number
Read: chostage.HostageSpawnRandomFactor
Write: chostage.HostageSpawnRandomFactor = value
```
## Remove 
```lua
--- @type boolean
Read: chostage.Remove
Write: chostage.Remove = value
```
## Vel 
```lua
--- @type Vector
Read: chostage.Vel
Write: chostage.Vel = value
```
## IsRescued 
```lua
--- @type boolean
Read: chostage.IsRescued
Write: chostage.IsRescued = value
```
## JumpedThisFrame 
```lua
--- @type boolean
Read: chostage.JumpedThisFrame
Write: chostage.JumpedThisFrame = value
```
## HostageState 
```lua
--- @type number
Read: chostage.HostageState
Write: chostage.HostageState = value
```
## Leader (Read-Only)
```lua
--- @type CBaseEntity
Read: chostage.Leader
```
## LastLeader (Read-Only)
```lua
--- @type CCSPlayerPawnBase
Read: chostage.LastLeader
```
## ReuseTimer (Read-Only)
```lua
--- @type CountdownTimer
Read: chostage.ReuseTimer
```
## HasBeenUsed 
```lua
--- @type boolean
Read: chostage.HasBeenUsed
Write: chostage.HasBeenUsed = value
```
## Accel 
```lua
--- @type Vector
Read: chostage.Accel
Write: chostage.Accel = value
```
## IsRunning 
```lua
--- @type boolean
Read: chostage.IsRunning
Write: chostage.IsRunning = value
```
## IsCrouching 
```lua
--- @type boolean
Read: chostage.IsCrouching
Write: chostage.IsCrouching = value
```
## JumpTimer (Read-Only)
```lua
--- @type CountdownTimer
Read: chostage.JumpTimer
```
## IsWaitingForLeader 
```lua
--- @type boolean
Read: chostage.IsWaitingForLeader
Write: chostage.IsWaitingForLeader = value
```
## RepathTimer (Read-Only)
```lua
--- @type CountdownTimer
Read: chostage.RepathTimer
```
## InhibitDoorTimer (Read-Only)
```lua
--- @type CountdownTimer
Read: chostage.InhibitDoorTimer
```
## InhibitObstacleAvoidanceTimer (Read-Only)
```lua
--- @type CountdownTimer
Read: chostage.InhibitObstacleAvoidanceTimer
```
## WiggleTimer (Read-Only)
```lua
--- @type CountdownTimer
Read: chostage.WiggleTimer
```
## IsAdjusted 
```lua
--- @type boolean
Read: chostage.IsAdjusted
Write: chostage.IsAdjusted = value
```
## HandsHaveBeenCut 
```lua
--- @type boolean
Read: chostage.HandsHaveBeenCut
Write: chostage.HandsHaveBeenCut = value
```
## HostageGrabber (Read-Only)
```lua
--- @type CCSPlayerPawn
Read: chostage.HostageGrabber
```
## LastGrabTime 
```lua
--- @type number
Read: chostage.LastGrabTime
Write: chostage.LastGrabTime = value
```
## PositionWhenStartedDroppingToGround 
```lua
--- @type Vector
Read: chostage.PositionWhenStartedDroppingToGround
Write: chostage.PositionWhenStartedDroppingToGround = value
```
## GrabbedPos 
```lua
--- @type Vector
Read: chostage.GrabbedPos
Write: chostage.GrabbedPos = value
```
## RescueStartTime 
```lua
--- @type number
Read: chostage.RescueStartTime
Write: chostage.RescueStartTime = value
```
## GrabSuccessTime 
```lua
--- @type number
Read: chostage.GrabSuccessTime
Write: chostage.GrabSuccessTime = value
```
## DropStartTime 
```lua
--- @type number
Read: chostage.DropStartTime
Write: chostage.DropStartTime = value
```
## ApproachRewardPayouts 
```lua
--- @type number
Read: chostage.ApproachRewardPayouts
Write: chostage.ApproachRewardPayouts = value
```
## PickupEventCount 
```lua
--- @type number
Read: chostage.PickupEventCount
Write: chostage.PickupEventCount = value
```
## SpawnGroundPos 
```lua
--- @type Vector
Read: chostage.SpawnGroundPos
Write: chostage.SpawnGroundPos = value
```
## HostageResetPosition 
```lua
--- @type Vector
Read: chostage.HostageResetPosition
Write: chostage.HostageResetPosition = value
```
## Parent (Read-Only)
```lua
--- @type CHostageExpresserShim
Read: chostage.Parent
```
# Functions
## ToPtr
```lua
@returns string
chostage:ToPtr()
```
## IsValid
```lua
@returns bool
chostage:IsValid()
```

:::