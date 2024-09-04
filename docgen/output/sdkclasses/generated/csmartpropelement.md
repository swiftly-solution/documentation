---
title: CSmartPropElement
index: true
order: 2
category:
  - Guide
---

# CSmartPropElement

::: tabs
@tab Lua
# Constructor
```lua
CSmartPropElement(ptr --[[ string ]])
```
# Properties
## ElementID 
```lua
@type number
Read: csmartpropelement.ElementID
Write: csmartpropelement.ElementID = value
```
## Enabled 
```lua
@type CSmartPropAttributeBool
Read: csmartpropelement.Enabled
Write: csmartpropelement.Enabled = value
```
## SelectionCriteria (Read-Only)
```lua
@type table
Read: csmartpropelement.SelectionCriteria
```
## Modifiers (Read-Only)
```lua
@type table
Read: csmartpropelement.Modifiers
```
# Functions
## ToPtr
```lua
@returns string
csmartpropelement:ToPtr()
```
## IsValid
```lua
@returns bool
csmartpropelement:IsValid()
```

:::