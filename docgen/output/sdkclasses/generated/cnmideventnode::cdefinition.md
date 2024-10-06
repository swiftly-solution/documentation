---
title: CNmIDEventNode::CDefinition
index: true
order: 2
category:
  - Guide
---

# CNmIDEventNode::CDefinition

::: tabs
@tab Lua
# Constructor
```lua
CNmIDEventNode::CDefinition(ptr --[[ string ]])
```
# Properties
## SourceStateNodeIdx 
```lua
@type number
Read: cnmideventnode::cdefinition.SourceStateNodeIdx
Write: cnmideventnode::cdefinition.SourceStateNodeIdx = value
```
## EventConditionRules (Read-Only)
```lua
@type CNmBitFlags
Read: cnmideventnode::cdefinition.EventConditionRules
```
## Parent (Read-Only)
```lua
@type CNmIDValueNode::CDefinition
Read: cnmideventnode::cdefinition.Parent
```
# Functions
## ToPtr
```lua
@returns string
cnmideventnode::cdefinition:ToPtr()
```
## IsValid
```lua
@returns bool
cnmideventnode::cdefinition:IsValid()
```

:::