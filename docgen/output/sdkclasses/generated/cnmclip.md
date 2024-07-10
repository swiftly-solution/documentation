---
title: CNmClip
index: true
order: 2
category:
  - Guide
---

# CNmClip

::: tabs
@tab Lua
# Constructor
```lua
CNmClip(ptr --[[ string ]])
```
# Properties
## NumFrames 
```lua
@type number
Read: cnmclip.NumFrames
Write: cnmclip.NumFrames = value
```
## Duration 
```lua
@type number
Read: cnmclip.Duration
Write: cnmclip.Duration = value
```
## TrackCompressionSettings 
```lua
@type table
Read: cnmclip.TrackCompressionSettings
Write: cnmclip.TrackCompressionSettings = value
```
## CompressedPoseOffsets 
```lua
@type table
Read: cnmclip.CompressedPoseOffsets
Write: cnmclip.CompressedPoseOffsets = value
```
## SyncTrack 
```lua
@type CNmSyncTrack
Read: cnmclip.SyncTrack
Write: cnmclip.SyncTrack = value
```
## RootMotion 
```lua
@type CNmRootMotionData
Read: cnmclip.RootMotion
Write: cnmclip.RootMotion = value
```
## IsAdditive 
```lua
@type boolean
Read: cnmclip.IsAdditive
Write: cnmclip.IsAdditive = value
```
# Functions
## ToPtr
```lua
@returns string
cnmclip:ToPtr()
```
## IsValid
```lua
@returns bool
cnmclip:IsValid()
```

:::