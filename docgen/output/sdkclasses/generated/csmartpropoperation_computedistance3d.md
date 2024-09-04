---
title: CSmartPropOperation_ComputeDistance3D
index: true
order: 2
category:
  - Guide
---

# CSmartPropOperation_ComputeDistance3D

::: tabs
@tab Lua
# Constructor
```lua
CSmartPropOperation_ComputeDistance3D(ptr --[[ string ]])
```
# Properties
## OutputVariableName 
```lua
@type string
Read: csmartpropoperation_computedistance3d.OutputVariableName
Write: csmartpropoperation_computedistance3d.OutputVariableName = value
```
## OutputCoordinateSpace (Read-Only)
```lua
@type CSmartPropAttributeCoordinateSpace
Read: csmartpropoperation_computedistance3d.OutputCoordinateSpace
```
## InputPositionA 
```lua
@type CSmartPropAttributeVector
Read: csmartpropoperation_computedistance3d.InputPositionA
Write: csmartpropoperation_computedistance3d.InputPositionA = value
```
## CoordinateSpaceA (Read-Only)
```lua
@type CSmartPropAttributeCoordinateSpace
Read: csmartpropoperation_computedistance3d.CoordinateSpaceA
```
## InputPositionB 
```lua
@type CSmartPropAttributeVector
Read: csmartpropoperation_computedistance3d.InputPositionB
Write: csmartpropoperation_computedistance3d.InputPositionB = value
```
## CoordinateSpaceB (Read-Only)
```lua
@type CSmartPropAttributeCoordinateSpace
Read: csmartpropoperation_computedistance3d.CoordinateSpaceB
```
## Parent (Read-Only)
```lua
@type CSmartPropOperation
Read: csmartpropoperation_computedistance3d.Parent
```
# Functions
## ToPtr
```lua
@returns string
csmartpropoperation_computedistance3d:ToPtr()
```
## IsValid
```lua
@returns bool
csmartpropoperation_computedistance3d:IsValid()
```

:::