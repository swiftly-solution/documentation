---
title: CSmartPropElement_Group
index: true
order: 2
category:
  - Guide
---

# CSmartPropElement_Group

::: tabs
@tab Lua
# Constructor
```lua
CSmartPropElement_Group(ptr --[[ string ]])
```
# Properties
## Children (Read-Only)
```lua
@type table
Read: csmartpropelement_group.Children
```
## Label 
```lua
@type string
Read: csmartpropelement_group.Label
Write: csmartpropelement_group.Label = value
```
## Parent (Read-Only)
```lua
@type CSmartPropElement
Read: csmartpropelement_group.Parent
```
# Functions
## ToPtr
```lua
@returns string
csmartpropelement_group:ToPtr()
```
## IsValid
```lua
@returns bool
csmartpropelement_group:IsValid()
```

:::