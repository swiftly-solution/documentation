---
title: CSmartPropElement_PickOne
index: true
order: 2
category:
  - Guide
---

# CSmartPropElement_PickOne

::: tabs
@tab Lua
# Constructor
```lua
CSmartPropElement_PickOne(ptr --[[ string ]])
```
# Properties
## SelectionMode (Read-Only)
```lua
@type CSmartPropAttributeChoiceSelectionMode
Read: csmartpropelement_pickone.SelectionMode
```
## Configurable 
```lua
@type CSmartPropAttributeBool
Read: csmartpropelement_pickone.Configurable
Write: csmartpropelement_pickone.Configurable = value
```
## HandleOffset 
```lua
@type CSmartPropAttributeVector
Read: csmartpropelement_pickone.HandleOffset
Write: csmartpropelement_pickone.HandleOffset = value
```
## HandleColor 
```lua
@type CSmartPropAttributeColor
Read: csmartpropelement_pickone.HandleColor
Write: csmartpropelement_pickone.HandleColor = value
```
## HandleSize 
```lua
@type CSmartPropAttributeInt
Read: csmartpropelement_pickone.HandleSize
Write: csmartpropelement_pickone.HandleSize = value
```
## HandleShape 
```lua
@type number
Read: csmartpropelement_pickone.HandleShape
Write: csmartpropelement_pickone.HandleShape = value
```
## Parent (Read-Only)
```lua
@type CSmartPropElement_Group
Read: csmartpropelement_pickone.Parent
```
# Functions
## ToPtr
```lua
@returns string
csmartpropelement_pickone:ToPtr()
```
## IsValid
```lua
@returns bool
csmartpropelement_pickone:IsValid()
```

:::