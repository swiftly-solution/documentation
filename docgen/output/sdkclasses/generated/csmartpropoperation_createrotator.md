---
title: CSmartPropOperation_CreateRotator
index: true
order: 2
category:
  - Guide
---

# CSmartPropOperation_CreateRotator

::: tabs
@tab Lua
# Constructor
```lua
CSmartPropOperation_CreateRotator(ptr --[[ string ]])
```
# Properties
## Name 
```lua
@type string
Read: csmartpropoperation_createrotator.Name
Write: csmartpropoperation_createrotator.Name = value
```
## RotationAxis 
```lua
@type CSmartPropAttributeVector
Read: csmartpropoperation_createrotator.RotationAxis
Write: csmartpropoperation_createrotator.RotationAxis = value
```
## CoordinateSpace (Read-Only)
```lua
@type CSmartPropAttributeCoordinateSpace
Read: csmartpropoperation_createrotator.CoordinateSpace
```
## DisplayRadius 
```lua
@type CSmartPropAttributeFloat
Read: csmartpropoperation_createrotator.DisplayRadius
Write: csmartpropoperation_createrotator.DisplayRadius = value
```
## ApplyToCurrentTrasnform 
```lua
@type CSmartPropAttributeBool
Read: csmartpropoperation_createrotator.ApplyToCurrentTrasnform
Write: csmartpropoperation_createrotator.ApplyToCurrentTrasnform = value
```
## SnappingIncrement 
```lua
@type CSmartPropAttributeFloat
Read: csmartpropoperation_createrotator.SnappingIncrement
Write: csmartpropoperation_createrotator.SnappingIncrement = value
```
## EnforceLimits 
```lua
@type CSmartPropAttributeBool
Read: csmartpropoperation_createrotator.EnforceLimits
Write: csmartpropoperation_createrotator.EnforceLimits = value
```
## MinAngle 
```lua
@type CSmartPropAttributeFloat
Read: csmartpropoperation_createrotator.MinAngle
Write: csmartpropoperation_createrotator.MinAngle = value
```
## MaxAngle 
```lua
@type CSmartPropAttributeFloat
Read: csmartpropoperation_createrotator.MaxAngle
Write: csmartpropoperation_createrotator.MaxAngle = value
```
## OutputVariable 
```lua
@type string
Read: csmartpropoperation_createrotator.OutputVariable
Write: csmartpropoperation_createrotator.OutputVariable = value
```
## Parent (Read-Only)
```lua
@type CSmartPropTransformOperation
Read: csmartpropoperation_createrotator.Parent
```
# Functions
## ToPtr
```lua
@returns string
csmartpropoperation_createrotator:ToPtr()
```
## IsValid
```lua
@returns bool
csmartpropoperation_createrotator:IsValid()
```

:::