---
title: CFollowPathUpdateNode
index: true
order: 2
category:
  - Guide
---

# CFollowPathUpdateNode

::: tabs
@tab Lua
# Constructor
```lua
CFollowPathUpdateNode(ptr)
```
# Properties
## BlendOutTime 
```lua
--- @type number
Read: cfollowpathupdatenode.BlendOutTime
Write: cfollowpathupdatenode.BlendOutTime = value
```
## BlockNonPathMovement 
```lua
--- @type boolean
Read: cfollowpathupdatenode.BlockNonPathMovement
Write: cfollowpathupdatenode.BlockNonPathMovement = value
```
## StopFeetAtGoal 
```lua
--- @type boolean
Read: cfollowpathupdatenode.StopFeetAtGoal
Write: cfollowpathupdatenode.StopFeetAtGoal = value
```
## ScaleSpeed 
```lua
--- @type boolean
Read: cfollowpathupdatenode.ScaleSpeed
Write: cfollowpathupdatenode.ScaleSpeed = value
```
## Scale 
```lua
--- @type number
Read: cfollowpathupdatenode.Scale
Write: cfollowpathupdatenode.Scale = value
```
## MinAngle 
```lua
--- @type number
Read: cfollowpathupdatenode.MinAngle
Write: cfollowpathupdatenode.MinAngle = value
```
## MaxAngle 
```lua
--- @type number
Read: cfollowpathupdatenode.MaxAngle
Write: cfollowpathupdatenode.MaxAngle = value
```
## SpeedScaleBlending 
```lua
--- @type number
Read: cfollowpathupdatenode.SpeedScaleBlending
Write: cfollowpathupdatenode.SpeedScaleBlending = value
```
## TurnDamping (Read-Only)
```lua
--- @type CAnimInputDamping
Read: cfollowpathupdatenode.TurnDamping
```
## FacingTarget 
```lua
--- @type number
Read: cfollowpathupdatenode.FacingTarget
Write: cfollowpathupdatenode.FacingTarget = value
```
## Param (Read-Only)
```lua
--- @type CAnimParamHandle
Read: cfollowpathupdatenode.Param
```
## TurnToFaceOffset 
```lua
--- @type number
Read: cfollowpathupdatenode.TurnToFaceOffset
Write: cfollowpathupdatenode.TurnToFaceOffset = value
```
## TurnToFace 
```lua
--- @type boolean
Read: cfollowpathupdatenode.TurnToFace
Write: cfollowpathupdatenode.TurnToFace = value
```
## Parent (Read-Only)
```lua
--- @type CUnaryUpdateNode
Read: cfollowpathupdatenode.Parent
```
# Functions
## ToPtr
```lua
@returns string
cfollowpathupdatenode:ToPtr()
```
## IsValid
```lua
@returns bool
cfollowpathupdatenode:IsValid()
```

:::