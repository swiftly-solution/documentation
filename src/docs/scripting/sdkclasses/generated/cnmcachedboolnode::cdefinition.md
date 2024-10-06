---
title: CNmCachedBoolNode::CDefinition
index: true
order: 2
category:
  - Guide
---

# CNmCachedBoolNode::CDefinition

::: tabs
@tab Lua
# Constructor
```lua
CNmCachedBoolNode::CDefinition(ptr --[[ string ]])
```
# Properties
## InputValueNodeIdx 
```lua
@type number
Read: cnmcachedboolnode::cdefinition.InputValueNodeIdx
Write: cnmcachedboolnode::cdefinition.InputValueNodeIdx = value
```
## Mode 
```lua
@type number
Read: cnmcachedboolnode::cdefinition.Mode
Write: cnmcachedboolnode::cdefinition.Mode = value
```
## Parent (Read-Only)
```lua
@type CNmBoolValueNode::CDefinition
Read: cnmcachedboolnode::cdefinition.Parent
```
# Functions
## ToPtr
```lua
@returns string
cnmcachedboolnode::cdefinition:ToPtr()
```
## IsValid
```lua
@returns bool
cnmcachedboolnode::cdefinition:IsValid()
```

:::