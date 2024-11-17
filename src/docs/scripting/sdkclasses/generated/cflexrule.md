---
title: CFlexRule
index: true
order: 2
category:
  - Guide
---

# CFlexRule

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CFlexRule(ptr)
```
# Properties
## Flex 
```lua
--- @type number
Read: cflexrule.Flex
Write: cflexrule.Flex = value
```
## FlexOps (Read-Only)
```lua
--- @type table
Read: cflexrule.FlexOps
```
# Functions
## ToPtr
```lua
--- @return string
cflexrule:ToPtr()
```
## IsValid
```lua
--- @return bool
cflexrule:IsValid()
```

:::