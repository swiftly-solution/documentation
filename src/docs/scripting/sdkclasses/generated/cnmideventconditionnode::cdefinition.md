---
title: CNmIDEventConditionNode::CDefinition
index: true
order: 2
category:
  - Guide
---

# CNmIDEventConditionNode::CDefinition

::: tabs
@tab Lua
# Constructor
```lua
CNmIDEventConditionNode::CDefinition(ptr --[[ string ]])
```
# Properties
## SourceStateNodeIdx 
```lua
@type number
Read: cnmideventconditionnode::cdefinition.SourceStateNodeIdx
Write: cnmideventconditionnode::cdefinition.SourceStateNodeIdx = value
```
## EventConditionRules (Read-Only)
```lua
@type CNmBitFlags
Read: cnmideventconditionnode::cdefinition.EventConditionRules
```
## Parent (Read-Only)
```lua
@type CNmBoolValueNode::CDefinition
Read: cnmideventconditionnode::cdefinition.Parent
```
# Functions
## ToPtr
```lua
@returns string
cnmideventconditionnode::cdefinition:ToPtr()
```
## IsValid
```lua
@returns bool
cnmideventconditionnode::cdefinition:IsValid()
```

:::