---
title: CSmartPropElement_PlaceMultiple
index: true
order: 2
category:
  - Guide
---

# CSmartPropElement_PlaceMultiple

::: tabs
@tab Lua
# Constructor
```lua
CSmartPropElement_PlaceMultiple(ptr --[[ string ]])
```
# Properties
## Count 
```lua
@type CSmartPropAttributeInt
Read: csmartpropelement_placemultiple.Count
Write: csmartpropelement_placemultiple.Count = value
```
## Expression 
```lua
@type string
Read: csmartpropelement_placemultiple.Expression
Write: csmartpropelement_placemultiple.Expression = value
```
## Parent (Read-Only)
```lua
@type CSmartPropElement_Group
Read: csmartpropelement_placemultiple.Parent
```
# Functions
## ToPtr
```lua
@returns string
csmartpropelement_placemultiple:ToPtr()
```
## IsValid
```lua
@returns bool
csmartpropelement_placemultiple:IsValid()
```

:::