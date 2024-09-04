---
title: CSmartPropOperation_RotateTowards
index: true
order: 2
category:
  - Guide
---

# CSmartPropOperation_RotateTowards

::: tabs
@tab Lua
# Constructor
```lua
CSmartPropOperation_RotateTowards(ptr --[[ string ]])
```
# Properties
## OriginPos 
```lua
@type CSmartPropAttributeVector
Read: csmartpropoperation_rotatetowards.OriginPos
Write: csmartpropoperation_rotatetowards.OriginPos = value
```
## TargetPos 
```lua
@type CSmartPropAttributeVector
Read: csmartpropoperation_rotatetowards.TargetPos
Write: csmartpropoperation_rotatetowards.TargetPos = value
```
## UpPos 
```lua
@type CSmartPropAttributeVector
Read: csmartpropoperation_rotatetowards.UpPos
Write: csmartpropoperation_rotatetowards.UpPos = value
```
## Weight 
```lua
@type CSmartPropAttributeFloat
Read: csmartpropoperation_rotatetowards.Weight
Write: csmartpropoperation_rotatetowards.Weight = value
```
## OriginSpace (Read-Only)
```lua
@type CSmartPropAttributeCoordinateSpace
Read: csmartpropoperation_rotatetowards.OriginSpace
```
## TargetSpace (Read-Only)
```lua
@type CSmartPropAttributeCoordinateSpace
Read: csmartpropoperation_rotatetowards.TargetSpace
```
## UpSpace (Read-Only)
```lua
@type CSmartPropAttributeCoordinateSpace
Read: csmartpropoperation_rotatetowards.UpSpace
```
## Parent (Read-Only)
```lua
@type CSmartPropTransformOperation
Read: csmartpropoperation_rotatetowards.Parent
```
# Functions
## ToPtr
```lua
@returns string
csmartpropoperation_rotatetowards:ToPtr()
```
## IsValid
```lua
@returns bool
csmartpropoperation_rotatetowards:IsValid()
```

:::