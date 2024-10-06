---
title: CNmChildGraphNode::CDefinition
index: true
order: 2
category:
  - Guide
---

# CNmChildGraphNode::CDefinition

::: tabs
@tab Lua
# Constructor
```lua
CNmChildGraphNode::CDefinition(ptr --[[ string ]])
```
# Properties
## ChildGraphIdx 
```lua
@type number
Read: cnmchildgraphnode::cdefinition.ChildGraphIdx
Write: cnmchildgraphnode::cdefinition.ChildGraphIdx = value
```
## Parent (Read-Only)
```lua
@type CNmPoseNode::CDefinition
Read: cnmchildgraphnode::cdefinition.Parent
```
# Functions
## ToPtr
```lua
@returns string
cnmchildgraphnode::cdefinition:ToPtr()
```
## IsValid
```lua
@returns bool
cnmchildgraphnode::cdefinition:IsValid()
```

:::