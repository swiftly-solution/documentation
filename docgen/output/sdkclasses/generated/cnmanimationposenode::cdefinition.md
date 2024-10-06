---
title: CNmAnimationPoseNode::CDefinition
index: true
order: 2
category:
  - Guide
---

# CNmAnimationPoseNode::CDefinition

::: tabs
@tab Lua
# Constructor
```lua
CNmAnimationPoseNode::CDefinition(ptr --[[ string ]])
```
# Properties
## PoseTimeValueNodeIdx 
```lua
@type number
Read: cnmanimationposenode::cdefinition.PoseTimeValueNodeIdx
Write: cnmanimationposenode::cdefinition.PoseTimeValueNodeIdx = value
```
## DataSlotIdx 
```lua
@type number
Read: cnmanimationposenode::cdefinition.DataSlotIdx
Write: cnmanimationposenode::cdefinition.DataSlotIdx = value
```
## InputTimeRemapRange 
```lua
@type Range_t
Read: cnmanimationposenode::cdefinition.InputTimeRemapRange
Write: cnmanimationposenode::cdefinition.InputTimeRemapRange = value
```
## UserSpecifiedTime 
```lua
@type number
Read: cnmanimationposenode::cdefinition.UserSpecifiedTime
Write: cnmanimationposenode::cdefinition.UserSpecifiedTime = value
```
## UseFramesAsInput 
```lua
@type boolean
Read: cnmanimationposenode::cdefinition.UseFramesAsInput
Write: cnmanimationposenode::cdefinition.UseFramesAsInput = value
```
## Parent (Read-Only)
```lua
@type CNmPoseNode::CDefinition
Read: cnmanimationposenode::cdefinition.Parent
```
# Functions
## ToPtr
```lua
@returns string
cnmanimationposenode::cdefinition:ToPtr()
```
## IsValid
```lua
@returns bool
cnmanimationposenode::cdefinition:IsValid()
```

:::