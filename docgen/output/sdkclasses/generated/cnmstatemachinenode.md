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
## Parent 
```lua
@type CNmPoseNode
Read: cnmstatemachinenode.Parent
Write: cnmstatemachinenode.Parent = value
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