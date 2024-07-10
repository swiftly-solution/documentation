---
title: CNmChildGraphNode
index: true
order: 2
category:
  - Guide
---

# CNmChildGraphNode

::: tabs
@tab Lua
# Constructor
```lua
CNmChildGraphNode(ptr --[[ string ]])
```
# Properties
## ChildGraphIdx 
```lua
@type number
Read: cnmchildgraphnode.ChildGraphIdx
Write: cnmchildgraphnode.ChildGraphIdx = value
```
## Parent 
```lua
@type CNmPoseNode
Read: cnmchildgraphnode.Parent
Write: cnmchildgraphnode.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cnmchildgraphnode:ToPtr()
```
## IsValid
```lua
@returns bool
cnmchildgraphnode:IsValid()
```

:::