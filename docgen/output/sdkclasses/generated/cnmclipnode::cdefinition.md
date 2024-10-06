---
title: CNmClipNode::CDefinition
index: true
order: 2
category:
  - Guide
---

# CNmClipNode::CDefinition

::: tabs
@tab Lua
# Constructor
```lua
CNmClipNode::CDefinition(ptr --[[ string ]])
```
# Properties
## PlayInReverseValueNodeIdx 
```lua
@type number
Read: cnmclipnode::cdefinition.PlayInReverseValueNodeIdx
Write: cnmclipnode::cdefinition.PlayInReverseValueNodeIdx = value
```
## ResetTimeValueNodeIdx 
```lua
@type number
Read: cnmclipnode::cdefinition.ResetTimeValueNodeIdx
Write: cnmclipnode::cdefinition.ResetTimeValueNodeIdx = value
```
## SampleRootMotion 
```lua
@type boolean
Read: cnmclipnode::cdefinition.SampleRootMotion
Write: cnmclipnode::cdefinition.SampleRootMotion = value
```
## AllowLooping 
```lua
@type boolean
Read: cnmclipnode::cdefinition.AllowLooping
Write: cnmclipnode::cdefinition.AllowLooping = value
```
## DataSlotIdx 
```lua
@type number
Read: cnmclipnode::cdefinition.DataSlotIdx
Write: cnmclipnode::cdefinition.DataSlotIdx = value
```
## Parent (Read-Only)
```lua
@type CNmPoseNode::CDefinition
Read: cnmclipnode::cdefinition.Parent
```
# Functions
## ToPtr
```lua
@returns string
cnmclipnode::cdefinition:ToPtr()
```
## IsValid
```lua
@returns bool
cnmclipnode::cdefinition:IsValid()
```

:::