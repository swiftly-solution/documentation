---
title: CAttributeContainer
index: true
order: 2
category:
  - Guide
---

# CAttributeContainer

::: tabs
@tab Lua
# Constructor
```lua
CAttributeContainer(ptr --[[ string ]])
```
# Properties
## Item (Read-Only)
```lua
@type CEconItemView
Read: cattributecontainer.Item
```
## Parent 
```lua
@type CAttributeManager
Read: cattributecontainer.Parent
Write: cattributecontainer.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cattributecontainer:ToPtr()
```
## IsValid
```lua
@returns bool
cattributecontainer:IsValid()
```

:::