---
title: CNmPassthroughNode::CDefinition
index: true
order: 2
category:
  - Guide
---

# CNmPassthroughNode::CDefinition

::: tabs
@tab Lua
# Constructor
```lua
CNmPassthroughNode::CDefinition(ptr --[[ string ]])
```
# Properties
## ChildNodeIdx 
```lua
@type number
Read: cnmpassthroughnode::cdefinition.ChildNodeIdx
Write: cnmpassthroughnode::cdefinition.ChildNodeIdx = value
```
## Parent (Read-Only)
```lua
@type CNmPoseNode::CDefinition
Read: cnmpassthroughnode::cdefinition.Parent
```
# Functions
## ToPtr
```lua
@returns string
cnmpassthroughnode::cdefinition:ToPtr()
```
## IsValid
```lua
@returns bool
cnmpassthroughnode::cdefinition:IsValid()
```

:::