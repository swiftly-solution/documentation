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
--- @param ptr string
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
--- @param str string
--- @param value number
--- @return void
cattributelist:SetOrAddAttributeValueByName(str, value)
```
## ToPtr
```lua
--- @return string
cattributelist:ToPtr()
```
## IsValid
```lua
--- @return bool
cattributelist:IsValid()
```

:::