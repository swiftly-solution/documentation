---
title: CSmartPropOperation_SetOrientation
index: true
order: 2
category:
  - Guide
---

# CSmartPropOperation_SetOrientation

::: tabs
@tab Lua
# Constructor
```lua
CSmartPropOperation_SetOrientation(ptr --[[ string ]])
```
# Properties
## ForwardVector 
```lua
@type CSmartPropAttributeVector
Read: csmartpropoperation_setorientation.ForwardVector
Write: csmartpropoperation_setorientation.ForwardVector = value
```
## ForwardDirectionSpace (Read-Only)
```lua
@type CSmartPropAttributeCoordinateSpace
Read: csmartpropoperation_setorientation.ForwardDirectionSpace
```
## UpVector 
```lua
@type CSmartPropAttributeVector
Read: csmartpropoperation_setorientation.UpVector
Write: csmartpropoperation_setorientation.UpVector = value
```
## UpDirectionSpace (Read-Only)
```lua
@type CSmartPropAttributeCoordinateSpace
Read: csmartpropoperation_setorientation.UpDirectionSpace
```
## PrioritizeUp 
```lua
@type CSmartPropAttributeBool
Read: csmartpropoperation_setorientation.PrioritizeUp
Write: csmartpropoperation_setorientation.PrioritizeUp = value
```
## Parent (Read-Only)
```lua
@type CSmartPropTransformOperation
Read: csmartpropoperation_setorientation.Parent
```
# Functions
## ToPtr
```lua
@returns string
csmartpropoperation_setorientation:ToPtr()
```
## IsValid
```lua
@returns bool
csmartpropoperation_setorientation:IsValid()
```

:::