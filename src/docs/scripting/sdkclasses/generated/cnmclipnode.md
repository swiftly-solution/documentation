---
title: CNmClipNode
index: true
order: 2
category:
  - Guide
---

# CNmClipNode

::: tabs
@tab Lua
# Constructor
```lua
CNmClipNode(ptr --[[ string ]])
```
# Properties
## PlayInReverseValueNodeIdx 
```lua
@type number
Read: cnmclipnode.PlayInReverseValueNodeIdx
Write: cnmclipnode.PlayInReverseValueNodeIdx = value
```
## ResetTimeValueNodeIdx 
```lua
@type number
Read: cnmclipnode.ResetTimeValueNodeIdx
Write: cnmclipnode.ResetTimeValueNodeIdx = value
```
## SampleRootMotion 
```lua
@type boolean
Read: cnmclipnode.SampleRootMotion
Write: cnmclipnode.SampleRootMotion = value
```
## AllowLooping 
```lua
@type boolean
Read: cnmclipnode.AllowLooping
Write: cnmclipnode.AllowLooping = value
```
## DataSlotIdx 
```lua
@type number
Read: cnmclipnode.DataSlotIdx
Write: cnmclipnode.DataSlotIdx = value
```
## Parent (Read-Only)
```lua
@type CNmPoseNode
Read: cnmclipnode.Parent
```
# Functions
## ToPtr
```lua
@returns string
cnmclipnode:ToPtr()
```
## IsValid
```lua
@returns bool
cnmclipnode:IsValid()
```

:::