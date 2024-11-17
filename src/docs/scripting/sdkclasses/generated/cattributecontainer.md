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
--- @param ptr string
CAttributeContainer(ptr)
```
# Properties
## Item (Read-Only)
```lua
--- @type CEconItemView
Read: cattributecontainer.Item
```
## Parent (Read-Only)
```lua
--- @type CAttributeManager
Read: cattributecontainer.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cattributecontainer:ToPtr()
```
## IsValid
```lua
--- @return bool
cattributecontainer:IsValid()
```

:::