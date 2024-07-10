---
title: CNmStateMachineNode__TransitionDefinition_t
index: true
order: 2
category:
  - Guide
---

# CNmStateMachineNode__TransitionDefinition_t

::: tabs
@tab Lua
# Constructor
```lua
CNmStateMachineNode__TransitionDefinition_t(ptr --[[ string ]])
```
# Properties
## TargetStateIdx 
```lua
@type number
Read: cnmstatemachinenode__transitiondefinition_t.TargetStateIdx
Write: cnmstatemachinenode__transitiondefinition_t.TargetStateIdx = value
```
## ConditionNodeIdx 
```lua
@type number
Read: cnmstatemachinenode__transitiondefinition_t.ConditionNodeIdx
Write: cnmstatemachinenode__transitiondefinition_t.ConditionNodeIdx = value
```
## TransitionNodeIdx 
```lua
@type number
Read: cnmstatemachinenode__transitiondefinition_t.TransitionNodeIdx
Write: cnmstatemachinenode__transitiondefinition_t.TransitionNodeIdx = value
```
## CanBeForced 
```lua
@type boolean
Read: cnmstatemachinenode__transitiondefinition_t.CanBeForced
Write: cnmstatemachinenode__transitiondefinition_t.CanBeForced = value
```
# Functions
## ToPtr
```lua
@returns string
cnmstatemachinenode__transitiondefinition_t:ToPtr()
```
## IsValid
```lua
@returns bool
cnmstatemachinenode__transitiondefinition_t:IsValid()
```

:::