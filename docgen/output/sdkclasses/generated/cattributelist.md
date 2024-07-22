---
title: CAttributeList
index: true
order: 2
category:
  - Guide
---

# CAttributeList

::: tabs
@tab Lua
# Constructor
```lua
CAttributeList(ptr --[[ string ]])
```
# Properties
## Attributes 
```lua
@type table
Read: cattributelist.Attributes
Write: cattributelist.Attributes = value
```
## Manager 
```lua
@type CAttributeManager
Read: cattributelist.Manager
Write: cattributelist.Manager = value
```
# Functions
## ToPtr
```lua
@returns string
cattributelist:ToPtr()
```
## IsValid
```lua
@returns bool
cattributelist:IsValid()
```

:::