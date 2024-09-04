---
title: CSmartPropVariable
index: true
order: 2
category:
  - Guide
---

# CSmartPropVariable

::: tabs
@tab Lua
# Constructor
```lua
CSmartPropVariable(ptr --[[ string ]])
```
# Properties
## VariableName 
```lua
@type string
Read: csmartpropvariable.VariableName
Write: csmartpropvariable.VariableName = value
```
## ExposeAsParameter 
```lua
@type boolean
Read: csmartpropvariable.ExposeAsParameter
Write: csmartpropvariable.ExposeAsParameter = value
```
## DisplayName 
```lua
@type string
Read: csmartpropvariable.DisplayName
Write: csmartpropvariable.DisplayName = value
```
## Parent (Read-Only)
```lua
@type CSmartPropParameter
Read: csmartpropvariable.Parent
```
# Functions
## ToPtr
```lua
@returns string
csmartpropvariable:ToPtr()
```
## IsValid
```lua
@returns bool
csmartpropvariable:IsValid()
```

:::