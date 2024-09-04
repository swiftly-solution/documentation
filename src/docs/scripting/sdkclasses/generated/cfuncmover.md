---
title: CFuncMover
index: true
order: 2
category:
  - Guide
---

# CFuncMover

::: tabs
@tab Lua
# Constructor
```lua
CFuncMover(ptr --[[ string ]])
```
# Properties
## PathName 
```lua
@type string
Read: cfuncmover.PathName
Write: cfuncmover.PathName = value
```
## PathMover (Read-Only)
```lua
@type CPathMover
Read: cfuncmover.PathMover
```
## PathNodeStart 
```lua
@type string
Read: cfuncmover.PathNodeStart
Write: cfuncmover.PathNodeStart = value
```
## MoveType (Read-Only)
```lua
@type CFuncMover
Read: cfuncmover.MoveType
```
## IsReversing 
```lua
@type boolean
Read: cfuncmover.IsReversing
Write: cfuncmover.IsReversing = value
```
## Target 
```lua
@type Vector
Read: cfuncmover.Target
Write: cfuncmover.Target = value
```
## StartSpeed 
```lua
@type number
Read: cfuncmover.StartSpeed
Write: cfuncmover.StartSpeed = value
```
## PathLocation 
```lua
@type number
Read: cfuncmover.PathLocation
Write: cfuncmover.PathLocation = value
```
## T 
```lua
@type number
Read: cfuncmover.T
Write: cfuncmover.T = value
```
## CurrentNodeIndex 
```lua
@type number
Read: cfuncmover.CurrentNodeIndex
Write: cfuncmover.CurrentNodeIndex = value
```
## PreviousNodeIndex 
```lua
@type number
Read: cfuncmover.PreviousNodeIndex
Write: cfuncmover.PreviousNodeIndex = value
```
## FixedOrientation 
```lua
@type boolean
Read: cfuncmover.FixedOrientation
Write: cfuncmover.FixedOrientation = value
```
## FixedPitch 
```lua
@type boolean
Read: cfuncmover.FixedPitch
Write: cfuncmover.FixedPitch = value
```
## SolidType 
```lua
@type number
Read: cfuncmover.SolidType
Write: cfuncmover.SolidType = value
```
## IsMoving 
```lua
@type boolean
Read: cfuncmover.IsMoving
Write: cfuncmover.IsMoving = value
```
## TimeToReachMaxSpeed 
```lua
@type number
Read: cfuncmover.TimeToReachMaxSpeed
Write: cfuncmover.TimeToReachMaxSpeed = value
```
## TimeToReachZeroSpeed 
```lua
@type number
Read: cfuncmover.TimeToReachZeroSpeed
Write: cfuncmover.TimeToReachZeroSpeed = value
```
## TimeMovementStart 
```lua
@type number
Read: cfuncmover.TimeMovementStart
Write: cfuncmover.TimeMovementStart = value
```
## TimeMovementStop 
```lua
@type number
Read: cfuncmover.TimeMovementStop
Write: cfuncmover.TimeMovementStop = value
```
## StopAtNode (Read-Only)
```lua
@type CMoverPathNode
Read: cfuncmover.StopAtNode
```
## PathLocationToBeginStop 
```lua
@type number
Read: cfuncmover.PathLocationToBeginStop
Write: cfuncmover.PathLocationToBeginStop = value
```
## MatchPathNodeUp 
```lua
@type boolean
Read: cfuncmover.MatchPathNodeUp
Write: cfuncmover.MatchPathNodeUp = value
```
## FacePlayer 
```lua
@type boolean
Read: cfuncmover.FacePlayer
Write: cfuncmover.FacePlayer = value
```
## TimeStartRoll 
```lua
@type number
Read: cfuncmover.TimeStartRoll
Write: cfuncmover.TimeStartRoll = value
```
## OriginalUp 
```lua
@type Vector
Read: cfuncmover.OriginalUp
Write: cfuncmover.OriginalUp = value
```
## TimeToRollToNewUp 
```lua
@type number
Read: cfuncmover.TimeToRollToNewUp
Write: cfuncmover.TimeToRollToNewUp = value
```
## Parent (Read-Only)
```lua
@type CBaseModelEntity
Read: cfuncmover.Parent
```
# Functions
## ToPtr
```lua
@returns string
cfuncmover:ToPtr()
```
## IsValid
```lua
@returns bool
cfuncmover:IsValid()
```

:::