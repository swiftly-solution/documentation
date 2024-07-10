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
CFlexRule(ptr --[[ string ]])
```
# Properties
## Flex 
```lua
@type number
Read: cflexrule.Flex
Write: cflexrule.Flex = value
```
## FlexOps 
```lua
@type table
Read: cflexrule.FlexOps
Write: cflexrule.FlexOps = value
```
# Functions
## ToPtr
```lua
@returns string
cflexrule:ToPtr()
```
## IsValid
```lua
@returns bool
cflexrule:IsValid()
```

:::