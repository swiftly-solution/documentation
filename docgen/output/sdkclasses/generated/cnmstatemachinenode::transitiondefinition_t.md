---
title: CNmStateMachineNode::TransitionDefinition_t
index: true
order: 2
category:
  - Guide
---

# CNmStateMachineNode::TransitionDefinition_t

::: tabs
@tab Lua
# Constructor
```lua
CNmStateMachineNode::TransitionDefinition_t(ptr --[[ string ]])
```
# Properties
## TargetStateIdx 
```lua
@type number
Read: cnmstatemachinenode::transitiondefinition_t.TargetStateIdx
Write: cnmstatemachinenode::transitiondefinition_t.TargetStateIdx = value
```
## ConditionNodeIdx 
```lua
@type number
Read: cnmstatemachinenode::transitiondefinition_t.ConditionNodeIdx
Write: cnmstatemachinenode::transitiondefinition_t.ConditionNodeIdx = value
```
## TransitionNodeIdx 
```lua
@type number
Read: cnmstatemachinenode::transitiondefinition_t.TransitionNodeIdx
Write: cnmstatemachinenode::transitiondefinition_t.TransitionNodeIdx = value
```
## CanBeForced 
```lua
@type boolean
Read: cnmstatemachinenode::transitiondefinition_t.CanBeForced
Write: cnmstatemachinenode::transitiondefinition_t.CanBeForced = value
```
# Functions
## ToPtr
```lua
@returns string
cnmstatemachinenode::transitiondefinition_t:ToPtr()
```
## IsValid
```lua
@returns bool
cnmstatemachinenode::transitiondefinition_t:IsValid()
```

:::