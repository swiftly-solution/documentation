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
CAttributeList(ptr)
```
# Properties
## Attributes (Read-Only)
```lua
--- @type table
Read: cattributelist.Attributes
```
## Manager (Read-Only)
```lua
--- @type CAttributeManager
Read: cattributelist.Manager
```
# Functions
## SetOrAddAttributeValueByName
```lua
@returns void
cattributelist:SetOrAddAttributeValueByName(str, value)
```
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