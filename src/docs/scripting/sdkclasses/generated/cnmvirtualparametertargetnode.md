---
title: CNmVirtualParameterTargetNode
index: true
order: 2
category:
  - Guide
---

# CNmVirtualParameterTargetNode

::: tabs
@tab Lua
# Constructor
```lua
CNmVirtualParameterTargetNode(ptr --[[ string ]])
```
# Properties
## ChildNodeIdx 
```lua
@type number
Read: cnmvirtualparametertargetnode.ChildNodeIdx
Write: cnmvirtualparametertargetnode.ChildNodeIdx = value
```
## Parent (Read-Only)
```lua
@type CNmTargetValueNode
Read: cnmvirtualparametertargetnode.Parent
```
# Functions
## ToPtr
```lua
@returns string
cnmvirtualparametertargetnode:ToPtr()
```
## IsValid
```lua
@returns bool
cnmvirtualparametertargetnode:IsValid()
```

:::