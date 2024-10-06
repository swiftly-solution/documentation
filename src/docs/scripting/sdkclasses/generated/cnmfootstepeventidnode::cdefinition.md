---
title: CNmFootstepEventIDNode::CDefinition
index: true
order: 2
category:
  - Guide
---

# CNmFootstepEventIDNode::CDefinition

::: tabs
@tab Lua
# Constructor
```lua
CNmFootstepEventIDNode::CDefinition(ptr --[[ string ]])
```
# Properties
## SourceStateNodeIdx 
```lua
@type number
Read: cnmfootstepeventidnode::cdefinition.SourceStateNodeIdx
Write: cnmfootstepeventidnode::cdefinition.SourceStateNodeIdx = value
```
## EventConditionRules (Read-Only)
```lua
@type CNmBitFlags
Read: cnmfootstepeventidnode::cdefinition.EventConditionRules
```
## Parent (Read-Only)
```lua
@type CNmIDValueNode::CDefinition
Read: cnmfootstepeventidnode::cdefinition.Parent
```
# Functions
## ToPtr
```lua
@returns string
cnmfootstepeventidnode::cdefinition:ToPtr()
```
## IsValid
```lua
@returns bool
cnmfootstepeventidnode::cdefinition:IsValid()
```

:::