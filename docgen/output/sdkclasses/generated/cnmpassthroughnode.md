---
title: CNmPassthroughNode
index: true
order: 2
category:
  - Guide
---

# CNmPassthroughNode

::: tabs
@tab Lua
# Constructor
```lua
CNmPassthroughNode(ptr --[[ string ]])
```
# Properties
## ChildNodeIdx 
```lua
@type number
Read: cnmpassthroughnode.ChildNodeIdx
Write: cnmpassthroughnode.ChildNodeIdx = value
```
## Parent (Read-Only)
```lua
@type CNmPoseNode
Read: cnmpassthroughnode.Parent
```
# Functions
## ToPtr
```lua
@returns string
cnmpassthroughnode:ToPtr()
```
## IsValid
```lua
@returns bool
cnmpassthroughnode:IsValid()
```

:::