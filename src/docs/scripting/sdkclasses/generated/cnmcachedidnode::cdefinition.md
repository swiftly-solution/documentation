---
title: CNmCachedIDNode::CDefinition
index: true
order: 2
category:
  - Guide
---

# CNmCachedIDNode::CDefinition

::: tabs
@tab Lua
# Constructor
```lua
CNmCachedIDNode::CDefinition(ptr --[[ string ]])
```
# Properties
## InputValueNodeIdx 
```lua
@type number
Read: cnmcachedidnode::cdefinition.InputValueNodeIdx
Write: cnmcachedidnode::cdefinition.InputValueNodeIdx = value
```
## Mode 
```lua
@type number
Read: cnmcachedidnode::cdefinition.Mode
Write: cnmcachedidnode::cdefinition.Mode = value
```
## Parent (Read-Only)
```lua
@type CNmIDValueNode::CDefinition
Read: cnmcachedidnode::cdefinition.Parent
```
# Functions
## ToPtr
```lua
@returns string
cnmcachedidnode::cdefinition:ToPtr()
```
## IsValid
```lua
@returns bool
cnmcachedidnode::cdefinition:IsValid()
```

:::