---
title: CStateMachineUpdateNode
index: true
order: 2
category:
  - Guide
---

# CStateMachineUpdateNode

::: tabs
@tab Lua
# Constructor
```lua
CStateMachineUpdateNode(ptr --[[ string ]])
```
# Properties
## StateMachine 
```lua
@type CAnimStateMachineUpdater
Read: cstatemachineupdatenode.StateMachine
Write: cstatemachineupdatenode.StateMachine = value
```
## StateData 
```lua
@type table
Read: cstatemachineupdatenode.StateData
Write: cstatemachineupdatenode.StateData = value
```
## TransitionData 
```lua
@type table
Read: cstatemachineupdatenode.TransitionData
Write: cstatemachineupdatenode.TransitionData = value
```
## BlockWaningTags 
```lua
@type boolean
Read: cstatemachineupdatenode.BlockWaningTags
Write: cstatemachineupdatenode.BlockWaningTags = value
```
## LockStateWhenWaning 
```lua
@type boolean
Read: cstatemachineupdatenode.LockStateWhenWaning
Write: cstatemachineupdatenode.LockStateWhenWaning = value
```
## Parent 
```lua
@type CAnimUpdateNodeBase
Read: cstatemachineupdatenode.Parent
Write: cstatemachineupdatenode.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cstatemachineupdatenode:ToPtr()
```
## IsValid
```lua
@returns bool
cstatemachineupdatenode:IsValid()
```

:::