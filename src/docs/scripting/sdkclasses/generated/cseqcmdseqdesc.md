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
--- @param ptr string
CSeqCmdSeqDesc(ptr)
```
# Properties
## Flags (Read-Only)
```lua
--- @type CSeqSeqDescFlag
Read: cseqcmdseqdesc.Flags
```
## Transition (Read-Only)
```lua
--- @type CSeqTransition
Read: cseqcmdseqdesc.Transition
```
## FrameRangeSequence 
```lua
--- @type number
Read: cseqcmdseqdesc.FrameRangeSequence
Write: cseqcmdseqdesc.FrameRangeSequence = value
```
## FrameCount 
```lua
--- @type number
Read: cseqcmdseqdesc.FrameCount
Write: cseqcmdseqdesc.FrameCount = value
```
## FPS 
```lua
--- @type number
Read: cseqcmdseqdesc.FPS
Write: cseqcmdseqdesc.FPS = value
```
## SubCycles 
```lua
--- @type number
Read: cseqcmdseqdesc.SubCycles
Write: cseqcmdseqdesc.SubCycles = value
```
## NumLocalResults 
```lua
--- @type number
Read: cseqcmdseqdesc.NumLocalResults
Write: cseqcmdseqdesc.NumLocalResults = value
```
## CmdLayerArray (Read-Only)
```lua
--- @type table
Read: cseqcmdseqdesc.CmdLayerArray
```
## EventArray (Read-Only)
```lua
--- @type table
Read: cseqcmdseqdesc.EventArray
```
## ActivityArray (Read-Only)
```lua
--- @type table
Read: cseqcmdseqdesc.ActivityArray
```
## PoseSettingArray (Read-Only)
```lua
--- @type table
Read: cseqcmdseqdesc.PoseSettingArray
```
# Functions
## ToPtr
```lua
--- @return string
cseqcmdseqdesc:ToPtr()
```
## IsValid
```lua
--- @return bool
cseqcmdseqdesc:IsValid()
```

:::