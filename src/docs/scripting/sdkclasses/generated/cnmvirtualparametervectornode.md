---
title: CNmVirtualParameterVectorNode
index: true
order: 2
category:
  - Guide
---

# CNmVirtualParameterVectorNode

::: tabs
@tab Lua
# Constructor
```lua
CNmVirtualParameterVectorNode(ptr --[[ string ]])
```
# Properties
## ChildNodeIdx 
```lua
@type number
Read: cnmvirtualparametervectornode.ChildNodeIdx
Write: cnmvirtualparametervectornode.ChildNodeIdx = value
```
## Parent (Read-Only)
```lua
@type CNmVectorValueNode
Read: cnmvirtualparametervectornode.Parent
```
# Functions
## ToPtr
```lua
@returns string
cnmvirtualparametervectornode:ToPtr()
```
## IsValid
```lua
@returns bool
cnmvirtualparametervectornode:IsValid()
```

:::