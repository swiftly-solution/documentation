---
title: CSmartPropRoot
index: true
order: 2
category:
  - Guide
---

# CSmartPropRoot

::: tabs
@tab Lua
# Constructor
```lua
CSmartPropRoot(ptr --[[ string ]])
```
# Properties
## ContentVersion 
```lua
@type number
Read: csmartproproot.ContentVersion
Write: csmartproproot.ContentVersion = value
```
## MaxDepth 
```lua
@type CSmartPropAttributeInt
Read: csmartproproot.MaxDepth
Write: csmartproproot.MaxDepth = value
```
## Variables (Read-Only)
```lua
@type table
Read: csmartproproot.Variables
```
## Choices (Read-Only)
```lua
@type table
Read: csmartproproot.Choices
```
## Children (Read-Only)
```lua
@type table
Read: csmartproproot.Children
```
# Functions
## ToPtr
```lua
@returns string
csmartproproot:ToPtr()
```
## IsValid
```lua
@returns bool
csmartproproot:IsValid()
```

:::