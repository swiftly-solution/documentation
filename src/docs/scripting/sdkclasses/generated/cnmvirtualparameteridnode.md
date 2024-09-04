---
title: CNmVirtualParameterIDNode
index: true
order: 2
category:
  - Guide
---

# CNmVirtualParameterIDNode

::: tabs
@tab Lua
# Constructor
```lua
CNmVirtualParameterIDNode(ptr --[[ string ]])
```
# Properties
## ChildNodeIdx 
```lua
@type number
Read: cnmvirtualparameteridnode.ChildNodeIdx
Write: cnmvirtualparameteridnode.ChildNodeIdx = value
```
## Parent (Read-Only)
```lua
@type CNmIDValueNode
Read: cnmvirtualparameteridnode.Parent
```
# Functions
## ToPtr
```lua
@returns string
cnmvirtualparameteridnode:ToPtr()
```
## IsValid
```lua
@returns bool
cnmvirtualparameteridnode:IsValid()
```

:::