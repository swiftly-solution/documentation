---
title: CNmStateMachineNode::StateDefinition_t
index: true
order: 2
category:
  - Guide
---

# CNmStateMachineNode::StateDefinition_t

::: tabs
@tab Lua
# Constructor
```lua
CNmStateMachineNode::StateDefinition_t(ptr --[[ string ]])
```
# Properties
## StateNodeIdx 
```lua
@type number
Read: cnmstatemachinenode::statedefinition_t.StateNodeIdx
Write: cnmstatemachinenode::statedefinition_t.StateNodeIdx = value
```
## EntryConditionNodeIdx 
```lua
@type number
Read: cnmstatemachinenode::statedefinition_t.EntryConditionNodeIdx
Write: cnmstatemachinenode::statedefinition_t.EntryConditionNodeIdx = value
```
# Functions
## ToPtr
```lua
@returns string
cnmstatemachinenode::statedefinition_t:ToPtr()
```
## IsValid
```lua
@returns bool
cnmstatemachinenode::statedefinition_t:IsValid()
```

:::