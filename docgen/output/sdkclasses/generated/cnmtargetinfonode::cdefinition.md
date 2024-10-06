---
title: CNmTargetInfoNode::CDefinition
index: true
order: 2
category:
  - Guide
---

# CNmTargetInfoNode::CDefinition

::: tabs
@tab Lua
# Constructor
```lua
CNmTargetInfoNode::CDefinition(ptr --[[ string ]])
```
# Properties
## InputValueNodeIdx 
```lua
@type number
Read: cnmtargetinfonode::cdefinition.InputValueNodeIdx
Write: cnmtargetinfonode::cdefinition.InputValueNodeIdx = value
```
## InfoType (Read-Only)
```lua
@type uint32_t
Read: cnmtargetinfonode::cdefinition.InfoType
```
## IsWorldSpaceTarget 
```lua
@type boolean
Read: cnmtargetinfonode::cdefinition.IsWorldSpaceTarget
Write: cnmtargetinfonode::cdefinition.IsWorldSpaceTarget = value
```
## Parent (Read-Only)
```lua
@type CNmFloatValueNode::CDefinition
Read: cnmtargetinfonode::cdefinition.Parent
```
# Functions
## ToPtr
```lua
@returns string
cnmtargetinfonode::cdefinition:ToPtr()
```
## IsValid
```lua
@returns bool
cnmtargetinfonode::cdefinition:IsValid()
```

:::