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
## Manager (Read-Only)
```lua
@type CAttributeManager
Read: cattributelist.Manager
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