---
title: CSmartPropOperation_Rotate
index: true
order: 2
category:
  - Guide
---

# CSmartPropOperation_Rotate

::: tabs
@tab Lua
# Constructor
```lua
CSmartPropOperation_Rotate(ptr --[[ string ]])
```
# Properties
## Rotation 
```lua
@type CSmartPropAttributeAngles
Read: csmartpropoperation_rotate.Rotation
Write: csmartpropoperation_rotate.Rotation = value
```
## Parent (Read-Only)
```lua
@type CSmartPropTransformOperation
Read: csmartpropoperation_rotate.Parent
```
# Functions
## ToPtr
```lua
@returns string
csmartpropoperation_rotate:ToPtr()
```
## IsValid
```lua
@returns bool
csmartpropoperation_rotate:IsValid()
```

:::