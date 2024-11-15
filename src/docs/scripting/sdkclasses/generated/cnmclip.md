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
CNmClip(ptr)
```
# Properties
## NumFrames 
```lua
--- @type number
Read: cnmclip.NumFrames
Write: cnmclip.NumFrames = value
```
## Duration 
```lua
--- @type number
Read: cnmclip.Duration
Write: cnmclip.Duration = value
```
## TrackCompressionSettings (Read-Only)
```lua
--- @type table
Read: cnmclip.TrackCompressionSettings
```
## CompressedPoseOffsets (Read-Only)
```lua
--- @type table
Read: cnmclip.CompressedPoseOffsets
```
## SyncTrack (Read-Only)
```lua
--- @type CNmSyncTrack
Read: cnmclip.SyncTrack
```
## RootMotion (Read-Only)
```lua
--- @type CNmRootMotionData
Read: cnmclip.RootMotion
```
## IsAdditive 
```lua
--- @type boolean
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