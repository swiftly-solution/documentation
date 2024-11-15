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
CStateMachineUpdateNode(ptr)
```
# Properties
## StateMachine (Read-Only)
```lua
--- @type CAnimStateMachineUpdater
Read: cstatemachineupdatenode.StateMachine
```
## StateData (Read-Only)
```lua
--- @type table
Read: cstatemachineupdatenode.StateData
```
## TransitionData (Read-Only)
```lua
--- @type table
Read: cstatemachineupdatenode.TransitionData
```
## BlockWaningTags 
```lua
--- @type boolean
Read: cstatemachineupdatenode.BlockWaningTags
Write: cstatemachineupdatenode.BlockWaningTags = value
```
## LockStateWhenWaning 
```lua
--- @type boolean
Read: cstatemachineupdatenode.LockStateWhenWaning
Write: cstatemachineupdatenode.LockStateWhenWaning = value
```
## Parent (Read-Only)
```lua
--- @type CAnimUpdateNodeBase
Read: cstatemachineupdatenode.Parent
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