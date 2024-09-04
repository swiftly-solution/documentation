---
title: CSmartPropOperation_CreateLocator
index: true
order: 2
category:
  - Guide
---

# CSmartPropOperation_CreateLocator

::: tabs
@tab Lua
# Constructor
```lua
CSmartPropOperation_CreateLocator(ptr --[[ string ]])
```
# Properties
## LocatorName 
```lua
@type string
Read: csmartpropoperation_createlocator.LocatorName
Write: csmartpropoperation_createlocator.LocatorName = value
```
## Offset 
```lua
@type CSmartPropAttributeVector
Read: csmartpropoperation_createlocator.Offset
Write: csmartpropoperation_createlocator.Offset = value
```
## DisplayScale 
```lua
@type CSmartPropAttributeFloat
Read: csmartpropoperation_createlocator.DisplayScale
Write: csmartpropoperation_createlocator.DisplayScale = value
```
## Configurable 
```lua
@type CSmartPropAttributeBool
Read: csmartpropoperation_createlocator.Configurable
Write: csmartpropoperation_createlocator.Configurable = value
```
## AllowTranslation 
```lua
@type CSmartPropAttributeBool
Read: csmartpropoperation_createlocator.AllowTranslation
Write: csmartpropoperation_createlocator.AllowTranslation = value
```
## AllowRotation 
```lua
@type CSmartPropAttributeBool
Read: csmartpropoperation_createlocator.AllowRotation
Write: csmartpropoperation_createlocator.AllowRotation = value
```
## AllowScale 
```lua
@type CSmartPropAttributeBool
Read: csmartpropoperation_createlocator.AllowScale
Write: csmartpropoperation_createlocator.AllowScale = value
```
## Parent (Read-Only)
```lua
@type CSmartPropTransformOperation
Read: csmartpropoperation_createlocator.Parent
```
# Functions
## ToPtr
```lua
@returns string
csmartpropoperation_createlocator:ToPtr()
```
## IsValid
```lua
@returns bool
csmartpropoperation_createlocator:IsValid()
```

:::