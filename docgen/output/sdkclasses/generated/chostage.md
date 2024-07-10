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
CHostage(ptr --[[ string ]])
```
# Properties
## OnHostageBeginGrab 
```lua
@type CEntityIOOutput
Read: chostage.OnHostageBeginGrab
Write: chostage.OnHostageBeginGrab = value
```
## OnFirstPickedUp 
```lua
@type CEntityIOOutput
Read: chostage.OnFirstPickedUp
Write: chostage.OnFirstPickedUp = value
```
## OnDroppedNotRescued 
```lua
@type CEntityIOOutput
Read: chostage.OnDroppedNotRescued
Write: chostage.OnDroppedNotRescued = value
```
## OnRescued 
```lua
@type CEntityIOOutput
Read: chostage.OnRescued
Write: chostage.OnRescued = value
```
## EntitySpottedState 
```lua
@type EntitySpottedState_t
Read: chostage.EntitySpottedState
Write: chostage.EntitySpottedState = value
```
## SpotRules 
```lua
@type number
Read: chostage.SpotRules
Write: chostage.SpotRules = value
```
## UiHostageSpawnExclusionGroupMask 
```lua
@type number
Read: chostage.UiHostageSpawnExclusionGroupMask
Write: chostage.UiHostageSpawnExclusionGroupMask = value
```
## HostageSpawnRandomFactor 
```lua
@type number
Read: chostage.HostageSpawnRandomFactor
Write: chostage.HostageSpawnRandomFactor = value
```
## Remove 
```lua
@type boolean
Read: chostage.Remove
Write: chostage.Remove = value
```
## Vel 
```lua
@type Vector
Read: chostage.Vel
Write: chostage.Vel = value
```
## IsRescued 
```lua
@type boolean
Read: chostage.IsRescued
Write: chostage.IsRescued = value
```
## JumpedThisFrame 
```lua
@type boolean
Read: chostage.JumpedThisFrame
Write: chostage.JumpedThisFrame = value
```
## HostageState 
```lua
@type number
Read: chostage.HostageState
Write: chostage.HostageState = value
```
## Leader (Read-Only)
```lua
@type CBaseEntity
Read: chostage.Leader
```
## LastLeader (Read-Only)
```lua
@type CCSPlayerPawnBase
Read: chostage.LastLeader
```
## ReuseTimer 
```lua
@type CountdownTimer
Read: chostage.ReuseTimer
Write: chostage.ReuseTimer = value
```
## HasBeenUsed 
```lua
@type boolean
Read: chostage.HasBeenUsed
Write: chostage.HasBeenUsed = value
```
## Accel 
```lua
@type Vector
Read: chostage.Accel
Write: chostage.Accel = value
```
## IsRunning 
```lua
@type boolean
Read: chostage.IsRunning
Write: chostage.IsRunning = value
```
## IsCrouching 
```lua
@type boolean
Read: chostage.IsCrouching
Write: chostage.IsCrouching = value
```
## JumpTimer 
```lua
@type CountdownTimer
Read: chostage.JumpTimer
Write: chostage.JumpTimer = value
```
## IsWaitingForLeader 
```lua
@type boolean
Read: chostage.IsWaitingForLeader
Write: chostage.IsWaitingForLeader = value
```
## RepathTimer 
```lua
@type CountdownTimer
Read: chostage.RepathTimer
Write: chostage.RepathTimer = value
```
## InhibitDoorTimer 
```lua
@type CountdownTimer
Read: chostage.InhibitDoorTimer
Write: chostage.InhibitDoorTimer = value
```
## InhibitObstacleAvoidanceTimer 
```lua
@type CountdownTimer
Read: chostage.InhibitObstacleAvoidanceTimer
Write: chostage.InhibitObstacleAvoidanceTimer = value
```
## WiggleTimer 
```lua
@type CountdownTimer
Read: chostage.WiggleTimer
Write: chostage.WiggleTimer = value
```
## IsAdjusted 
```lua
@type boolean
Read: chostage.IsAdjusted
Write: chostage.IsAdjusted = value
```
## HandsHaveBeenCut 
```lua
@type boolean
Read: chostage.HandsHaveBeenCut
Write: chostage.HandsHaveBeenCut = value
```
## HostageGrabber (Read-Only)
```lua
@type CCSPlayerPawn
Read: chostage.HostageGrabber
```
## LastGrabTime 
```lua
@type number
Read: chostage.LastGrabTime
Write: chostage.LastGrabTime = value
```
## PositionWhenStartedDroppingToGround 
```lua
@type Vector
Read: chostage.PositionWhenStartedDroppingToGround
Write: chostage.PositionWhenStartedDroppingToGround = value
```
## GrabbedPos 
```lua
@type Vector
Read: chostage.GrabbedPos
Write: chostage.GrabbedPos = value
```
## RescueStartTime 
```lua
@type number
Read: chostage.RescueStartTime
Write: chostage.RescueStartTime = value
```
## GrabSuccessTime 
```lua
@type number
Read: chostage.GrabSuccessTime
Write: chostage.GrabSuccessTime = value
```
## DropStartTime 
```lua
@type number
Read: chostage.DropStartTime
Write: chostage.DropStartTime = value
```
## ApproachRewardPayouts 
```lua
@type number
Read: chostage.ApproachRewardPayouts
Write: chostage.ApproachRewardPayouts = value
```
## PickupEventCount 
```lua
@type number
Read: chostage.PickupEventCount
Write: chostage.PickupEventCount = value
```
## SpawnGroundPos 
```lua
@type Vector
Read: chostage.SpawnGroundPos
Write: chostage.SpawnGroundPos = value
```
## HostageResetPosition 
```lua
@type Vector
Read: chostage.HostageResetPosition
Write: chostage.HostageResetPosition = value
```
## Parent 
```lua
@type CHostageExpresserShim
Read: chostage.Parent
Write: chostage.Parent = value
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