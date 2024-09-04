---
title: CSmartPropOperation_SaveDirection
index: true
order: 2
category:
  - Guide
---

# CSmartPropOperation_SaveDirection

::: tabs
@tab Lua
# Constructor
```lua
CSmartPropOperation_SaveDirection(ptr --[[ string ]])
```
# Properties
## DirectionVector (Read-Only)
```lua
@type CSmartPropAttributeDirection
Read: csmartpropoperation_savedirection.DirectionVector
```
## CoordinateSpace (Read-Only)
```lua
@type CSmartPropAttributeCoordinateSpace
Read: csmartpropoperation_savedirection.CoordinateSpace
```
## VariableName 
```lua
@type string
Read: csmartpropoperation_savedirection.VariableName
Write: csmartpropoperation_savedirection.VariableName = value
```
## Parent (Read-Only)
```lua
@type CSmartPropOperation
Read: csmartpropoperation_savedirection.Parent
```
# Functions
## ToPtr
```lua
@returns string
csmartpropoperation_savedirection:ToPtr()
```
## IsValid
```lua
@returns bool
csmartpropoperation_savedirection:IsValid()
```

:::