---
title: CNmStateMachineNode
index: true
order: 2
category:
  - Guide
---

# CNmStateMachineNode

::: tabs
@tab Lua
# Constructor
```lua
CNmStateMachineNode(ptr --[[ string ]])
```
# Properties
## DefaultStateIndex 
```lua
@type number
Read: cnmstatemachinenode.DefaultStateIndex
Write: cnmstatemachinenode.DefaultStateIndex = value
```
## Parent (Read-Only)
```lua
@type CNmPoseNode
Read: cnmstatemachinenode.Parent
```
# Functions
## ToPtr
```lua
@returns string
cnmstatemachinenode:ToPtr()
```
## IsValid
```lua
@returns bool
cnmstatemachinenode:IsValid()
```

:::