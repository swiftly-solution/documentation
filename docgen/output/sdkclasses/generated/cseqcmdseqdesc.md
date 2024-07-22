---
title: CSeqCmdSeqDesc
index: true
order: 2
category:
  - Guide
---

# CSeqCmdSeqDesc

::: tabs
@tab Lua
# Constructor
```lua
CSeqCmdSeqDesc(ptr --[[ string ]])
```
# Properties
## Flags (Read-Only)
```lua
@type CSeqSeqDescFlag
Read: cseqcmdseqdesc.Flags
```
## Transition (Read-Only)
```lua
@type CSeqTransition
Read: cseqcmdseqdesc.Transition
```
## FrameRangeSequence 
```lua
@type number
Read: cseqcmdseqdesc.FrameRangeSequence
Write: cseqcmdseqdesc.FrameRangeSequence = value
```
## FrameCount 
```lua
@type number
Read: cseqcmdseqdesc.FrameCount
Write: cseqcmdseqdesc.FrameCount = value
```
## FPS 
```lua
@type number
Read: cseqcmdseqdesc.FPS
Write: cseqcmdseqdesc.FPS = value
```
## SubCycles 
```lua
@type number
Read: cseqcmdseqdesc.SubCycles
Write: cseqcmdseqdesc.SubCycles = value
```
## NumLocalResults 
```lua
@type number
Read: cseqcmdseqdesc.NumLocalResults
Write: cseqcmdseqdesc.NumLocalResults = value
```
## CmdLayerArray 
```lua
@type table
Read: cseqcmdseqdesc.CmdLayerArray
Write: cseqcmdseqdesc.CmdLayerArray = value
```
## EventArray 
```lua
@type table
Read: cseqcmdseqdesc.EventArray
Write: cseqcmdseqdesc.EventArray = value
```
## ActivityArray 
```lua
@type table
Read: cseqcmdseqdesc.ActivityArray
Write: cseqcmdseqdesc.ActivityArray = value
```
## PoseSettingArray 
```lua
@type table
Read: cseqcmdseqdesc.PoseSettingArray
Write: cseqcmdseqdesc.PoseSettingArray = value
```
# Functions
## ToPtr
```lua
@returns string
cseqcmdseqdesc:ToPtr()
```
## IsValid
```lua
@returns bool
cseqcmdseqdesc:IsValid()
```

:::