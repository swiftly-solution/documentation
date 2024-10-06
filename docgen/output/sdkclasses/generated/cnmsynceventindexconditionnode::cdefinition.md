---
title: CNmSyncEventIndexConditionNode::CDefinition
index: true
order: 2
category:
  - Guide
---

# CNmSyncEventIndexConditionNode::CDefinition

::: tabs
@tab Lua
# Constructor
```lua
CNmSyncEventIndexConditionNode::CDefinition(ptr --[[ string ]])
```
# Properties
## SourceStateNodeIdx 
```lua
@type number
Read: cnmsynceventindexconditionnode::cdefinition.SourceStateNodeIdx
Write: cnmsynceventindexconditionnode::cdefinition.SourceStateNodeIdx = value
```
## TriggerMode 
```lua
@type number
Read: cnmsynceventindexconditionnode::cdefinition.TriggerMode
Write: cnmsynceventindexconditionnode::cdefinition.TriggerMode = value
```
## SyncEventIdx 
```lua
@type number
Read: cnmsynceventindexconditionnode::cdefinition.SyncEventIdx
Write: cnmsynceventindexconditionnode::cdefinition.SyncEventIdx = value
```
## Parent (Read-Only)
```lua
@type CNmBoolValueNode::CDefinition
Read: cnmsynceventindexconditionnode::cdefinition.Parent
```
# Functions
## ToPtr
```lua
@returns string
cnmsynceventindexconditionnode::cdefinition:ToPtr()
```
## IsValid
```lua
@returns bool
cnmsynceventindexconditionnode::cdefinition:IsValid()
```

:::