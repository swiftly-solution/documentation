---
title: CMoverUpdateNode
index: true
order: 2
category:
  - Guide
---

# CMoverUpdateNode

::: tabs
@tab Lua
# Constructor
```lua
CMoverUpdateNode(ptr --[[ string ]])
```
# Properties
## Damping (Read-Only)
```lua
@type CAnimInputDamping
Read: cmoverupdatenode.Damping
```
## FacingTarget 
```lua
@type number
Read: cmoverupdatenode.FacingTarget
Write: cmoverupdatenode.FacingTarget = value
```
## MoveVecParam (Read-Only)
```lua
@type CAnimParamHandle
Read: cmoverupdatenode.MoveVecParam
```
## MoveHeadingParam (Read-Only)
```lua
@type CAnimParamHandle
Read: cmoverupdatenode.MoveHeadingParam
```
## TurnToFaceParam (Read-Only)
```lua
@type CAnimParamHandle
Read: cmoverupdatenode.TurnToFaceParam
```
## TurnToFaceOffset 
```lua
@type number
Read: cmoverupdatenode.TurnToFaceOffset
Write: cmoverupdatenode.TurnToFaceOffset = value
```
## TurnToFaceLimit 
```lua
@type number
Read: cmoverupdatenode.TurnToFaceLimit
Write: cmoverupdatenode.TurnToFaceLimit = value
```
## Additive 
```lua
@type boolean
Read: cmoverupdatenode.Additive
Write: cmoverupdatenode.Additive = value
```
## ApplyMovement 
```lua
@type boolean
Read: cmoverupdatenode.ApplyMovement
Write: cmoverupdatenode.ApplyMovement = value
```
## OrientMovement 
```lua
@type boolean
Read: cmoverupdatenode.OrientMovement
Write: cmoverupdatenode.OrientMovement = value
```
## ApplyRotation 
```lua
@type boolean
Read: cmoverupdatenode.ApplyRotation
Write: cmoverupdatenode.ApplyRotation = value
```
## LimitOnly 
```lua
@type boolean
Read: cmoverupdatenode.LimitOnly
Write: cmoverupdatenode.LimitOnly = value
```
## Parent (Read-Only)
```lua
@type CUnaryUpdateNode
Read: cmoverupdatenode.Parent
```
# Functions
## ToPtr
```lua
@returns string
cmoverupdatenode:ToPtr()
```
## IsValid
```lua
@returns bool
cmoverupdatenode:IsValid()
```

:::