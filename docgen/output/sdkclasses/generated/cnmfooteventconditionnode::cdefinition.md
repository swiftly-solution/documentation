---
title: CNmFootEventConditionNode::CDefinition
index: true
order: 2
category:
  - Guide
---

# CNmFootEventConditionNode::CDefinition

::: tabs
@tab Lua
# Constructor
```lua
CNmFootEventConditionNode::CDefinition(ptr --[[ string ]])
```
# Properties
## SourceStateNodeIdx 
```lua
@type number
Read: cnmfooteventconditionnode::cdefinition.SourceStateNodeIdx
Write: cnmfooteventconditionnode::cdefinition.SourceStateNodeIdx = value
```
## PhaseCondition 
```lua
@type number
Read: cnmfooteventconditionnode::cdefinition.PhaseCondition
Write: cnmfooteventconditionnode::cdefinition.PhaseCondition = value
```
## EventConditionRules (Read-Only)
```lua
@type CNmBitFlags
Read: cnmfooteventconditionnode::cdefinition.EventConditionRules
```
## Parent (Read-Only)
```lua
@type CNmBoolValueNode::CDefinition
Read: cnmfooteventconditionnode::cdefinition.Parent
```
# Functions
## ToPtr
```lua
@returns string
cnmfooteventconditionnode::cdefinition:ToPtr()
```
## IsValid
```lua
@returns bool
cnmfooteventconditionnode::cdefinition:IsValid()
```

:::