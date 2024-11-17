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
--- @param ptr string
CModelConfigElement(ptr)
```
# Properties
## ElementName 
```lua
--- @type string
Read: cmodelconfigelement.ElementName
Write: cmodelconfigelement.ElementName = value
```
## NestedElements (Read-Only)
```lua
--- @type table
Read: cmodelconfigelement.NestedElements
```
# Functions
## ToPtr
```lua
--- @return string
cmodelconfigelement:ToPtr()
```
## IsValid
```lua
--- @return bool
cmodelconfigelement:IsValid()
```

:::