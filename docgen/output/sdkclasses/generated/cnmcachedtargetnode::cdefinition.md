---
title: CNmCachedTargetNode::CDefinition
index: true
order: 2
category:
  - Guide
---

# CNmCachedTargetNode::CDefinition

::: tabs
@tab Lua
# Constructor
```lua
CNmCachedTargetNode::CDefinition(ptr --[[ string ]])
```
# Properties
## InputValueNodeIdx 
```lua
@type number
Read: cnmcachedtargetnode::cdefinition.InputValueNodeIdx
Write: cnmcachedtargetnode::cdefinition.InputValueNodeIdx = value
```
## Mode 
```lua
@type number
Read: cnmcachedtargetnode::cdefinition.Mode
Write: cnmcachedtargetnode::cdefinition.Mode = value
```
## Parent (Read-Only)
```lua
@type CNmTargetValueNode::CDefinition
Read: cnmcachedtargetnode::cdefinition.Parent
```
# Functions
## ToPtr
```lua
@returns string
cnmcachedtargetnode::cdefinition:ToPtr()
```
## IsValid
```lua
@returns bool
cnmcachedtargetnode::cdefinition:IsValid()
```

:::