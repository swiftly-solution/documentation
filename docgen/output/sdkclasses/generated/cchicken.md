---
title: CChicken
index: true
order: 2
category:
  - Guide
---

# CChicken

::: tabs
@tab Lua
# Constructor
```lua
CChicken(ptr --[[ string ]])
```
# Properties
## AttributeManager (Read-Only)
```lua
@type CAttributeContainer
Read: cchicken.AttributeManager
```
## ActivityFinishedTag 
```lua
@type number
Read: cchicken.ActivityFinishedTag
Write: cchicken.ActivityFinishedTag = value
```
## UpdateTimer (Read-Only)
```lua
@type CountdownTimer
Read: cchicken.UpdateTimer
```
## StuckAnchor 
```lua
@type Vector
Read: cchicken.StuckAnchor
Write: cchicken.StuckAnchor = value
```
## StuckTimer (Read-Only)
```lua
@type CountdownTimer
Read: cchicken.StuckTimer
```
## CollisionStuckTimer (Read-Only)
```lua
@type CountdownTimer
Read: cchicken.CollisionStuckTimer
```
## IsOnGround 
```lua
@type boolean
Read: cchicken.IsOnGround
Write: cchicken.IsOnGround = value
```
## FallVelocity 
```lua
@type Vector
Read: cchicken.FallVelocity
Write: cchicken.FallVelocity = value
```
## DesiredActivity 
```lua
@type number
Read: cchicken.DesiredActivity
Write: cchicken.DesiredActivity = value
```
## CurrentActivity 
```lua
@type number
Read: cchicken.CurrentActivity
Write: cchicken.CurrentActivity = value
```
## ActivityTimer (Read-Only)
```lua
@type CountdownTimer
Read: cchicken.ActivityTimer
```
## TurnRate 
```lua
@type number
Read: cchicken.TurnRate
Write: cchicken.TurnRate = value
```
## FleeFrom (Read-Only)
```lua
@type CBaseEntity
Read: cchicken.FleeFrom
```
## MoveRateThrottleTimer (Read-Only)
```lua
@type CountdownTimer
Read: cchicken.MoveRateThrottleTimer
```
## StartleTimer (Read-Only)
```lua
@type CountdownTimer
Read: cchicken.StartleTimer
```
## VocalizeTimer (Read-Only)
```lua
@type CountdownTimer
Read: cchicken.VocalizeTimer
```
## WhenZombified 
```lua
@type number
Read: cchicken.WhenZombified
Write: cchicken.WhenZombified = value
```
## JumpedThisFrame 
```lua
@type boolean
Read: cchicken.JumpedThisFrame
Write: cchicken.JumpedThisFrame = value
```
## Leader (Read-Only)
```lua
@type CCSPlayerPawn
Read: cchicken.Leader
```
## ReuseTimer (Read-Only)
```lua
@type CountdownTimer
Read: cchicken.ReuseTimer
```
## HasBeenUsed 
```lua
@type boolean
Read: cchicken.HasBeenUsed
Write: cchicken.HasBeenUsed = value
```
## JumpTimer (Read-Only)
```lua
@type CountdownTimer
Read: cchicken.JumpTimer
```
## LastJumpTime 
```lua
@type number
Read: cchicken.LastJumpTime
Write: cchicken.LastJumpTime = value
```
## InJump 
```lua
@type boolean
Read: cchicken.InJump
Write: cchicken.InJump = value
```
## IsWaitingForLeader 
```lua
@type boolean
Read: cchicken.IsWaitingForLeader
Write: cchicken.IsWaitingForLeader = value
```
## RepathTimer (Read-Only)
```lua
@type CountdownTimer
Read: cchicken.RepathTimer
```
## InhibitDoorTimer (Read-Only)
```lua
@type CountdownTimer
Read: cchicken.InhibitDoorTimer
```
## InhibitObstacleAvoidanceTimer (Read-Only)
```lua
@type CountdownTimer
Read: cchicken.InhibitObstacleAvoidanceTimer
```
## PathGoal 
```lua
@type Vector
Read: cchicken.PathGoal
Write: cchicken.PathGoal = value
```
## ActiveFollowStartTime 
```lua
@type number
Read: cchicken.ActiveFollowStartTime
Write: cchicken.ActiveFollowStartTime = value
```
## FollowMinuteTimer (Read-Only)
```lua
@type CountdownTimer
Read: cchicken.FollowMinuteTimer
```
## LastEggPoopPosition 
```lua
@type Vector
Read: cchicken.LastEggPoopPosition
Write: cchicken.LastEggPoopPosition = value
```
## BlockDirectionTimer (Read-Only)
```lua
@type CountdownTimer
Read: cchicken.BlockDirectionTimer
```
## Parent (Read-Only)
```lua
@type CDynamicProp
Read: cchicken.Parent
```
# Functions
## ToPtr
```lua
@returns string
cchicken:ToPtr()
```
## IsValid
```lua
@returns bool
cchicken:IsValid()
```

:::