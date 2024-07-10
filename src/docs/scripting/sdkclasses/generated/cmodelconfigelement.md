---
title: CModelConfigElement
index: true
order: 2
category:
  - Guide
---

# CModelConfigElement

::: tabs
@tab Lua
# Constructor
```lua
CModelConfigElement(ptr --[[ string ]])
```
# Properties
## ElementName 
```lua
@type string
Read: cmodelconfigelement.ElementName
Write: cmodelconfigelement.ElementName = value
```
## NestedElements 
```lua
@type table
Read: cmodelconfigelement.NestedElements
Write: cmodelconfigelement.NestedElements = value
```
# Functions
## ToPtr
```lua
@returns string
cmodelconfigelement:ToPtr()
```
## IsValid
```lua
@returns bool
cmodelconfigelement:IsValid()
```

:::