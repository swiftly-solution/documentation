---
title: CNmTargetOffsetNode::CDefinition
index: true
order: 2
category:
  - Guide
---

# CNmTargetOffsetNode::CDefinition

::: tabs
@tab Lua
# Constructor
```lua
CNmTargetOffsetNode::CDefinition(ptr --[[ string ]])
```
# Properties
## InputValueNodeIdx 
```lua
@type number
Read: cnmtargetoffsetnode::cdefinition.InputValueNodeIdx
Write: cnmtargetoffsetnode::cdefinition.InputValueNodeIdx = value
```
## IsBoneSpaceOffset 
```lua
@type boolean
Read: cnmtargetoffsetnode::cdefinition.IsBoneSpaceOffset
Write: cnmtargetoffsetnode::cdefinition.IsBoneSpaceOffset = value
```
## TranslationOffset 
```lua
@type Vector
Read: cnmtargetoffsetnode::cdefinition.TranslationOffset
Write: cnmtargetoffsetnode::cdefinition.TranslationOffset = value
```
## Parent (Read-Only)
```lua
@type CNmTargetValueNode::CDefinition
Read: cnmtargetoffsetnode::cdefinition.Parent
```
# Functions
## ToPtr
```lua
@returns string
cnmtargetoffsetnode::cdefinition:ToPtr()
```
## IsValid
```lua
@returns bool
cnmtargetoffsetnode::cdefinition:IsValid()
```

:::