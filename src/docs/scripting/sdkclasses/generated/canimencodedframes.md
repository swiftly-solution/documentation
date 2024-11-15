---
title: CAnimEncodedFrames
index: true
order: 2
category:
  - Guide
---

# CAnimEncodedFrames

::: tabs
@tab Lua
# Constructor
```lua
CAnimEncodedFrames(ptr)
```
# Properties
## Frames 
```lua
--- @type number
Read: canimencodedframes.Frames
Write: canimencodedframes.Frames = value
```
## FramesPerBlock 
```lua
--- @type number
Read: canimencodedframes.FramesPerBlock
Write: canimencodedframes.FramesPerBlock = value
```
## FrameblockArray (Read-Only)
```lua
--- @type table
Read: canimencodedframes.FrameblockArray
```
## UsageDifferences (Read-Only)
```lua
--- @type CAnimEncodeDifference
Read: canimencodedframes.UsageDifferences
```
# Functions
## ToPtr
```lua
@returns string
canimencodedframes:ToPtr()
```
## IsValid
```lua
@returns bool
canimencodedframes:IsValid()
```

:::