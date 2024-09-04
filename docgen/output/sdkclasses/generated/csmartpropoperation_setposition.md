---
title: CSmartPropOperation_SetPosition
index: true
order: 2
category:
  - Guide
---

# CSmartPropOperation_SetPosition

::: tabs
@tab Lua
# Constructor
```lua
CSmartPropOperation_SetPosition(ptr --[[ string ]])
```
# Properties
## Position 
```lua
@type CSmartPropAttributeVector
Read: csmartpropoperation_setposition.Position
Write: csmartpropoperation_setposition.Position = value
```
## CoordinateSpace (Read-Only)
```lua
@type CSmartPropAttributeCoordinateSpace
Read: csmartpropoperation_setposition.CoordinateSpace
```
## Parent (Read-Only)
```lua
@type CSmartPropTransformOperation
Read: csmartpropoperation_setposition.Parent
```
# Functions
## ToPtr
```lua
@returns string
csmartpropoperation_setposition:ToPtr()
```
## IsValid
```lua
@returns bool
csmartpropoperation_setposition:IsValid()
```

:::