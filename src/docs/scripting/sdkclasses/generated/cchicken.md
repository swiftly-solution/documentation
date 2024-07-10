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
## AttributeManager 
```lua
@type CAttributeContainer
Read: cchicken.AttributeManager
Write: cchicken.AttributeManager = value
```
## ActivityFinishedTag 
```lua
@type string
Read: cchicken.ActivityFinishedTag
Write: cchicken.ActivityFinishedTag = value
```
## UpdateTimer 
```lua
@type CountdownTimer
Read: cchicken.UpdateTimer
Write: cchicken.UpdateTimer = value
```
## StuckAnchor 
```lua
@type Vector
Read: cchicken.StuckAnchor
Write: cchicken.StuckAnchor = value
```
## StuckTimer 
```lua
@type CountdownTimer
Read: cchicken.StuckTimer
Write: cchicken.StuckTimer = value
```
## CollisionStuckTimer 
```lua
@type CountdownTimer
Read: cchicken.CollisionStuckTimer
Write: cchicken.CollisionStuckTimer = value
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
## ActivityTimer 
```lua
@type CountdownTimer
Read: cchicken.ActivityTimer
Write: cchicken.ActivityTimer = value
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
## MoveRateThrottleTimer 
```lua
@type CountdownTimer
Read: cchicken.MoveRateThrottleTimer
Write: cchicken.MoveRateThrottleTimer = value
```
## StartleTimer 
```lua
@type CountdownTimer
Read: cchicken.StartleTimer
Write: cchicken.StartleTimer = value
```
## VocalizeTimer 
```lua
@type CountdownTimer
Read: cchicken.VocalizeTimer
Write: cchicken.VocalizeTimer = value
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
## ReuseTimer 
```lua
@type CountdownTimer
Read: cchicken.ReuseTimer
Write: cchicken.ReuseTimer = value
```
## HasBeenUsed 
```lua
@type boolean
Read: cchicken.HasBeenUsed
Write: cchicken.HasBeenUsed = value
```
## JumpTimer 
```lua
@type CountdownTimer
Read: cchicken.JumpTimer
Write: cchicken.JumpTimer = value
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
## RepathTimer 
```lua
@type CountdownTimer
Read: cchicken.RepathTimer
Write: cchicken.RepathTimer = value
```
## InhibitDoorTimer 
```lua
@type CountdownTimer
Read: cchicken.InhibitDoorTimer
Write: cchicken.InhibitDoorTimer = value
```
## InhibitObstacleAvoidanceTimer 
```lua
@type CountdownTimer
Read: cchicken.InhibitObstacleAvoidanceTimer
Write: cchicken.InhibitObstacleAvoidanceTimer = value
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
## FollowMinuteTimer 
```lua
@type CountdownTimer
Read: cchicken.FollowMinuteTimer
Write: cchicken.FollowMinuteTimer = value
```
## LastEggPoopPosition 
```lua
@type Vector
Read: cchicken.LastEggPoopPosition
Write: cchicken.LastEggPoopPosition = value
```
## BlockDirectionTimer 
```lua
@type CountdownTimer
Read: cchicken.BlockDirectionTimer
Write: cchicken.BlockDirectionTimer = value
```
## Parent 
```lua
@type CDynamicProp
Read: cchicken.Parent
Write: cchicken.Parent = value
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