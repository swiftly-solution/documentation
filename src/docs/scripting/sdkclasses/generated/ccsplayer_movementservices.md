---
title: CCSPlayer_MovementServices
index: true
order: 2
category:
  - Guide
---

# CCSPlayer_MovementServices

::: tabs
@tab Lua
# Constructor
```lua
CCSPlayer_MovementServices(ptr --[[ string ]])
```
# Properties
## LadderNormal 
```lua
@type Vector
Read: ccsplayer_movementservices.LadderNormal
Write: ccsplayer_movementservices.LadderNormal = value
```
## LadderSurfacePropIndex 
```lua
@type number
Read: ccsplayer_movementservices.LadderSurfacePropIndex
Write: ccsplayer_movementservices.LadderSurfacePropIndex = value
```
## DuckAmount 
```lua
@type number
Read: ccsplayer_movementservices.DuckAmount
Write: ccsplayer_movementservices.DuckAmount = value
```
## DuckSpeed 
```lua
@type number
Read: ccsplayer_movementservices.DuckSpeed
Write: ccsplayer_movementservices.DuckSpeed = value
```
## DuckOverride 
```lua
@type boolean
Read: ccsplayer_movementservices.DuckOverride
Write: ccsplayer_movementservices.DuckOverride = value
```
## DesiresDuck 
```lua
@type boolean
Read: ccsplayer_movementservices.DesiresDuck
Write: ccsplayer_movementservices.DesiresDuck = value
```
## DuckOffset 
```lua
@type number
Read: ccsplayer_movementservices.DuckOffset
Write: ccsplayer_movementservices.DuckOffset = value
```
## DuckTimeMsecs 
```lua
@type number
Read: ccsplayer_movementservices.DuckTimeMsecs
Write: ccsplayer_movementservices.DuckTimeMsecs = value
```
## DuckJumpTimeMsecs 
```lua
@type number
Read: ccsplayer_movementservices.DuckJumpTimeMsecs
Write: ccsplayer_movementservices.DuckJumpTimeMsecs = value
```
## JumpTimeMsecs 
```lua
@type number
Read: ccsplayer_movementservices.JumpTimeMsecs
Write: ccsplayer_movementservices.JumpTimeMsecs = value
```
## LastDuckTime 
```lua
@type number
Read: ccsplayer_movementservices.LastDuckTime
Write: ccsplayer_movementservices.LastDuckTime = value
```
## LastPositionAtFullCrouchSpeed 
```lua
@type Vector2D
Read: ccsplayer_movementservices.LastPositionAtFullCrouchSpeed
Write: ccsplayer_movementservices.LastPositionAtFullCrouchSpeed = value
```
## DuckUntilOnGround 
```lua
@type boolean
Read: ccsplayer_movementservices.DuckUntilOnGround
Write: ccsplayer_movementservices.DuckUntilOnGround = value
```
## HasWalkMovedSinceLastJump 
```lua
@type boolean
Read: ccsplayer_movementservices.HasWalkMovedSinceLastJump
Write: ccsplayer_movementservices.HasWalkMovedSinceLastJump = value
```
## InStuckTest 
```lua
@type boolean
Read: ccsplayer_movementservices.InStuckTest
Write: ccsplayer_movementservices.InStuckTest = value
```
## TraceCount 
```lua
@type number
Read: ccsplayer_movementservices.TraceCount
Write: ccsplayer_movementservices.TraceCount = value
```
## StuckLast 
```lua
@type number
Read: ccsplayer_movementservices.StuckLast
Write: ccsplayer_movementservices.StuckLast = value
```
## SpeedCropped 
```lua
@type boolean
Read: ccsplayer_movementservices.SpeedCropped
Write: ccsplayer_movementservices.SpeedCropped = value
```
## GroundMoveEfficiency 
```lua
@type number
Read: ccsplayer_movementservices.GroundMoveEfficiency
Write: ccsplayer_movementservices.GroundMoveEfficiency = value
```
## OldWaterLevel 
```lua
@type number
Read: ccsplayer_movementservices.OldWaterLevel
Write: ccsplayer_movementservices.OldWaterLevel = value
```
## WaterEntryTime 
```lua
@type number
Read: ccsplayer_movementservices.WaterEntryTime
Write: ccsplayer_movementservices.WaterEntryTime = value
```
## Forward 
```lua
@type Vector
Read: ccsplayer_movementservices.Forward
Write: ccsplayer_movementservices.Forward = value
```
## Left 
```lua
@type Vector
Read: ccsplayer_movementservices.Left
Write: ccsplayer_movementservices.Left = value
```
## Up 
```lua
@type Vector
Read: ccsplayer_movementservices.Up
Write: ccsplayer_movementservices.Up = value
```
## GameCodeHasMovedPlayerAfterCommand 
```lua
@type number
Read: ccsplayer_movementservices.GameCodeHasMovedPlayerAfterCommand
Write: ccsplayer_movementservices.GameCodeHasMovedPlayerAfterCommand = value
```
## MadeFootstepNoise 
```lua
@type boolean
Read: ccsplayer_movementservices.MadeFootstepNoise
Write: ccsplayer_movementservices.MadeFootstepNoise = value
```
## Footsteps 
```lua
@type number
Read: ccsplayer_movementservices.Footsteps
Write: ccsplayer_movementservices.Footsteps = value
```
## OldJumpPressed 
```lua
@type boolean
Read: ccsplayer_movementservices.OldJumpPressed
Write: ccsplayer_movementservices.OldJumpPressed = value
```
## JumpPressedTime 
```lua
@type number
Read: ccsplayer_movementservices.JumpPressedTime
Write: ccsplayer_movementservices.JumpPressedTime = value
```
## StashGrenadeParameterWhen 
```lua
@type number
Read: ccsplayer_movementservices.StashGrenadeParameterWhen
Write: ccsplayer_movementservices.StashGrenadeParameterWhen = value
```
## ButtonDownMaskPrev 
```lua
@type number
Read: ccsplayer_movementservices.ButtonDownMaskPrev
Write: ccsplayer_movementservices.ButtonDownMaskPrev = value
```
## OffsetTickCompleteTime 
```lua
@type number
Read: ccsplayer_movementservices.OffsetTickCompleteTime
Write: ccsplayer_movementservices.OffsetTickCompleteTime = value
```
## OffsetTickStashedSpeed 
```lua
@type number
Read: ccsplayer_movementservices.OffsetTickStashedSpeed
Write: ccsplayer_movementservices.OffsetTickStashedSpeed = value
```
## Stamina 
```lua
@type number
Read: ccsplayer_movementservices.Stamina
Write: ccsplayer_movementservices.Stamina = value
```
## HeightAtJumpStart 
```lua
@type number
Read: ccsplayer_movementservices.HeightAtJumpStart
Write: ccsplayer_movementservices.HeightAtJumpStart = value
```
## MaxJumpHeightThisJump 
```lua
@type number
Read: ccsplayer_movementservices.MaxJumpHeightThisJump
Write: ccsplayer_movementservices.MaxJumpHeightThisJump = value
```
## MaxJumpHeightLastJump 
```lua
@type number
Read: ccsplayer_movementservices.MaxJumpHeightLastJump
Write: ccsplayer_movementservices.MaxJumpHeightLastJump = value
```
## StaminaAtJumpStart 
```lua
@type number
Read: ccsplayer_movementservices.StaminaAtJumpStart
Write: ccsplayer_movementservices.StaminaAtJumpStart = value
```
## AccumulatedJumpError 
```lua
@type number
Read: ccsplayer_movementservices.AccumulatedJumpError
Write: ccsplayer_movementservices.AccumulatedJumpError = value
```
## Parent (Read-Only)
```lua
@type CPlayer_MovementServices_Humanoid
Read: ccsplayer_movementservices.Parent
```
# Functions
## ToPtr
```lua
@returns string
ccsplayer_movementservices:ToPtr()
```
## IsValid
```lua
@returns bool
ccsplayer_movementservices:IsValid()
```

:::