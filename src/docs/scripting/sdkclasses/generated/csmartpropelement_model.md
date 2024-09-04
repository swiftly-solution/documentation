---
title: CSmartPropElement_Model
index: true
order: 2
category:
  - Guide
---

# CSmartPropElement_Model

::: tabs
@tab Lua
# Constructor
```lua
CSmartPropElement_Model(ptr --[[ string ]])
```
# Properties
## ModelName 
```lua
@type CSmartPropAttributeModelName
Read: csmartpropelement_model.ModelName
Write: csmartpropelement_model.ModelName = value
```
## MaterialGroupName 
```lua
@type CSmartPropAttributeMaterialGroup
Read: csmartpropelement_model.MaterialGroupName
Write: csmartpropelement_model.MaterialGroupName = value
```
## ModelScale 
```lua
@type CSmartPropAttributeVector
Read: csmartpropelement_model.ModelScale
Write: csmartpropelement_model.ModelScale = value
```
## Parent (Read-Only)
```lua
@type CSmartPropElement
Read: csmartpropelement_model.Parent
```
# Functions
## ToPtr
```lua
@returns string
csmartpropelement_model:ToPtr()
```
## IsValid
```lua
@returns bool
csmartpropelement_model:IsValid()
```

:::