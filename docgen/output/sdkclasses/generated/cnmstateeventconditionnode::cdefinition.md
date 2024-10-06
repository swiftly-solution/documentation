---
title: CNmStateEventConditionNode::CDefinition
index: true
order: 2
category:
  - Guide
---

# CNmStateEventConditionNode::CDefinition

::: tabs
@tab Lua
# Constructor
```lua
CNmStateEventConditionNode::CDefinition(ptr --[[ string ]])
```
# Properties
## SourceStateNodeIdx 
```lua
@type number
Read: cnmstateeventconditionnode::cdefinition.SourceStateNodeIdx
Write: cnmstateeventconditionnode::cdefinition.SourceStateNodeIdx = value
```
## EventConditionRules (Read-Only)
```lua
@type CNmBitFlags
Read: cnmstateeventconditionnode::cdefinition.EventConditionRules
```
## Parent (Read-Only)
```lua
@type CNmBoolValueNode::CDefinition
Read: cnmstateeventconditionnode::cdefinition.Parent
```
# Functions
## ToPtr
```lua
@returns string
cnmstateeventconditionnode::cdefinition:ToPtr()
```
## IsValid
```lua
@returns bool
cnmstateeventconditionnode::cdefinition:IsValid()
```

:::