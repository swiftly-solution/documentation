---
title: CSmartPropOperation_RandomRotation
index: true
order: 2
category:
  - Guide
---

# CSmartPropOperation_RandomRotation

::: tabs
@tab Lua
# Constructor
```lua
CSmartPropOperation_RandomRotation(ptr --[[ string ]])
```
# Properties
## RandomRotationMin 
```lua
@type CSmartPropAttributeAngles
Read: csmartpropoperation_randomrotation.RandomRotationMin
Write: csmartpropoperation_randomrotation.RandomRotationMin = value
```
## RandomRotationMax 
```lua
@type CSmartPropAttributeAngles
Read: csmartpropoperation_randomrotation.RandomRotationMax
Write: csmartpropoperation_randomrotation.RandomRotationMax = value
```
## Parent (Read-Only)
```lua
@type CSmartPropTransformOperation
Read: csmartpropoperation_randomrotation.Parent
```
# Functions
## ToPtr
```lua
@returns string
csmartpropoperation_randomrotation:ToPtr()
```
## IsValid
```lua
@returns bool
csmartpropoperation_randomrotation:IsValid()
```

:::