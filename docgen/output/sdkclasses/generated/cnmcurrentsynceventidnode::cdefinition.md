---
title: CNmCurrentSyncEventIDNode::CDefinition
index: true
order: 2
category:
  - Guide
---

# CNmCurrentSyncEventIDNode::CDefinition

::: tabs
@tab Lua
# Constructor
```lua
CNmCurrentSyncEventIDNode::CDefinition(ptr --[[ string ]])
```
# Properties
## SourceStateNodeIdx 
```lua
@type number
Read: cnmcurrentsynceventidnode::cdefinition.SourceStateNodeIdx
Write: cnmcurrentsynceventidnode::cdefinition.SourceStateNodeIdx = value
```
## Parent (Read-Only)
```lua
@type CNmIDValueNode::CDefinition
Read: cnmcurrentsynceventidnode::cdefinition.Parent
```
# Functions
## ToPtr
```lua
@returns string
cnmcurrentsynceventidnode::cdefinition:ToPtr()
```
## IsValid
```lua
@returns bool
cnmcurrentsynceventidnode::cdefinition:IsValid()
```

:::