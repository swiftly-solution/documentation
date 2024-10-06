---
title: CNmStateCompletedConditionNode::CDefinition
index: true
order: 2
category:
  - Guide
---

# CNmStateCompletedConditionNode::CDefinition

::: tabs
@tab Lua
# Constructor
```lua
CNmStateCompletedConditionNode::CDefinition(ptr --[[ string ]])
```
# Properties
## SourceStateNodeIdx 
```lua
@type number
Read: cnmstatecompletedconditionnode::cdefinition.SourceStateNodeIdx
Write: cnmstatecompletedconditionnode::cdefinition.SourceStateNodeIdx = value
```
## TransitionDurationOverrideNodeIdx 
```lua
@type number
Read: cnmstatecompletedconditionnode::cdefinition.TransitionDurationOverrideNodeIdx
Write: cnmstatecompletedconditionnode::cdefinition.TransitionDurationOverrideNodeIdx = value
```
## TransitionDurationSeconds 
```lua
@type number
Read: cnmstatecompletedconditionnode::cdefinition.TransitionDurationSeconds
Write: cnmstatecompletedconditionnode::cdefinition.TransitionDurationSeconds = value
```
## Parent (Read-Only)
```lua
@type CNmBoolValueNode::CDefinition
Read: cnmstatecompletedconditionnode::cdefinition.Parent
```
# Functions
## ToPtr
```lua
@returns string
cnmstatecompletedconditionnode::cdefinition:ToPtr()
```
## IsValid
```lua
@returns bool
cnmstatecompletedconditionnode::cdefinition:IsValid()
```

:::