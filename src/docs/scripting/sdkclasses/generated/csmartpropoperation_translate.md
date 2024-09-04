---
title: CSmartPropOperation_Translate
index: true
order: 2
category:
  - Guide
---

# CSmartPropOperation_Translate

::: tabs
@tab Lua
# Constructor
```lua
CSmartPropOperation_Translate(ptr --[[ string ]])
```
# Properties
## Position 
```lua
@type CSmartPropAttributeVector
Read: csmartpropoperation_translate.Position
Write: csmartpropoperation_translate.Position = value
```
## CoordinateSpace (Read-Only)
```lua
@type CSmartPropAttributeCoordinateSpace
Read: csmartpropoperation_translate.CoordinateSpace
```
## Parent (Read-Only)
```lua
@type CSmartPropTransformOperation
Read: csmartpropoperation_translate.Parent
```
# Functions
## ToPtr
```lua
@returns string
csmartpropoperation_translate:ToPtr()
```
## IsValid
```lua
@returns bool
csmartpropoperation_translate:IsValid()
```

:::