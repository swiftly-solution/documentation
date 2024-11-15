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
CFuncMover(ptr)
```
# Properties
## CreateMovableNavMesh 
```lua
--- @type boolean
Read: cfuncmover.CreateMovableNavMesh
Write: cfuncmover.CreateMovableNavMesh = value
```
## PathName 
```lua
--- @type string
Read: cfuncmover.PathName
Write: cfuncmover.PathName = value
```
## PathMover (Read-Only)
```lua
--- @type CPathMover
Read: cfuncmover.PathMover
```
## PathNodeStart 
```lua
--- @type string
Read: cfuncmover.PathNodeStart
Write: cfuncmover.PathNodeStart = value
```
## MoveType (Read-Only)
```lua
--- @type uint32_t
Read: cfuncmover.MoveType
```
## IsReversing 
```lua
--- @type boolean
Read: cfuncmover.IsReversing
Write: cfuncmover.IsReversing = value
```
## Target 
```lua
--- @type Vector
Read: cfuncmover.Target
Write: cfuncmover.Target = value
```
## StartSpeed 
```lua
--- @type number
Read: cfuncmover.StartSpeed
Write: cfuncmover.StartSpeed = value
```
## PathLocation 
```lua
--- @type number
Read: cfuncmover.PathLocation
Write: cfuncmover.PathLocation = value
```
## T 
```lua
--- @type number
Read: cfuncmover.T
Write: cfuncmover.T = value
```
## CurrentNodeIndex 
```lua
--- @type number
Read: cfuncmover.CurrentNodeIndex
Write: cfuncmover.CurrentNodeIndex = value
```
## PreviousNodeIndex 
```lua
--- @type number
Read: cfuncmover.PreviousNodeIndex
Write: cfuncmover.PreviousNodeIndex = value
```
## FixedOrientation 
```lua
--- @type boolean
Read: cfuncmover.FixedOrientation
Write: cfuncmover.FixedOrientation = value
```
## FixedPitch 
```lua
--- @type boolean
Read: cfuncmover.FixedPitch
Write: cfuncmover.FixedPitch = value
```
## SolidType 
```lua
--- @type number
Read: cfuncmover.SolidType
Write: cfuncmover.SolidType = value
```
## IsMoving 
```lua
--- @type boolean
Read: cfuncmover.IsMoving
Write: cfuncmover.IsMoving = value
```
## TimeToReachMaxSpeed 
```lua
--- @type number
Read: cfuncmover.TimeToReachMaxSpeed
Write: cfuncmover.TimeToReachMaxSpeed = value
```
## DistanceToReachMaxSpeed 
```lua
--- @type number
Read: cfuncmover.DistanceToReachMaxSpeed
Write: cfuncmover.DistanceToReachMaxSpeed = value
```
## TimeToReachZeroSpeed 
```lua
--- @type number
Read: cfuncmover.TimeToReachZeroSpeed
Write: cfuncmover.TimeToReachZeroSpeed = value
```
## DistanceToReachZeroSpeed 
```lua
--- @type number
Read: cfuncmover.DistanceToReachZeroSpeed
Write: cfuncmover.DistanceToReachZeroSpeed = value
```
## TimeMovementStart 
```lua
--- @type number
Read: cfuncmover.TimeMovementStart
Write: cfuncmover.TimeMovementStart = value
```
## TimeMovementStop 
```lua
--- @type number
Read: cfuncmover.TimeMovementStop
Write: cfuncmover.TimeMovementStop = value
```
## StopAtNode (Read-Only)
```lua
--- @type CMoverPathNode
Read: cfuncmover.StopAtNode
```
## PathLocationToBeginStop 
```lua
--- @type number
Read: cfuncmover.PathLocationToBeginStop
Write: cfuncmover.PathLocationToBeginStop = value
```
## StartForwardSound 
```lua
--- @type string
Read: cfuncmover.StartForwardSound
Write: cfuncmover.StartForwardSound = value
```
## LoopForwardSound 
```lua
--- @type string
Read: cfuncmover.LoopForwardSound
Write: cfuncmover.LoopForwardSound = value
```
## StopForwardSound 
```lua
--- @type string
Read: cfuncmover.StopForwardSound
Write: cfuncmover.StopForwardSound = value
```
## StartReverseSound 
```lua
--- @type string
Read: cfuncmover.StartReverseSound
Write: cfuncmover.StartReverseSound = value
```
## LoopReverseSound 
```lua
--- @type string
Read: cfuncmover.LoopReverseSound
Write: cfuncmover.LoopReverseSound = value
```
## StopReverseSound 
```lua
--- @type string
Read: cfuncmover.StopReverseSound
Write: cfuncmover.StopReverseSound = value
```
## ArriveAtDestinationSound 
```lua
--- @type string
Read: cfuncmover.ArriveAtDestinationSound
Write: cfuncmover.ArriveAtDestinationSound = value
```
## OnMovementEnd (Read-Only)
```lua
--- @type CEntityIOOutput
Read: cfuncmover.OnMovementEnd
```
## StartAtEnd 
```lua
--- @type boolean
Read: cfuncmover.StartAtEnd
Write: cfuncmover.StartAtEnd = value
```
## OrientationUpdate (Read-Only)
```lua
--- @type uint32_t
Read: cfuncmover.OrientationUpdate
```
## TimeStartOrientationChange 
```lua
--- @type number
Read: cfuncmover.TimeStartOrientationChange
Write: cfuncmover.TimeStartOrientationChange = value
```
## TimeToBlendToNewOrientation 
```lua
--- @type number
Read: cfuncmover.TimeToBlendToNewOrientation
Write: cfuncmover.TimeToBlendToNewOrientation = value
```
## DurationBlendToNewOrientationRan 
```lua
--- @type number
Read: cfuncmover.DurationBlendToNewOrientationRan
Write: cfuncmover.DurationBlendToNewOrientationRan = value
```
## Parent (Read-Only)
```lua
--- @type CBaseModelEntity
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