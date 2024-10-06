---
title: SkeletonAnimCapture_t::Frame_t
index: true
order: 2
category:
  - Guide
---

# SkeletonAnimCapture_t::Frame_t

::: tabs
@tab Lua
# Constructor
```lua
SkeletonAnimCapture_t::Frame_t(ptr --[[ string ]])
```
# Properties
## Time 
```lua
@type number
Read: skeletonanimcapture_t::frame_t.Time
Write: skeletonanimcapture_t::frame_t.Time = value
```
## Stamp (Read-Only)
```lua
@type SkeletonAnimCapture_t::FrameStamp_t
Read: skeletonanimcapture_t::frame_t.Stamp
```
## Teleport 
```lua
@type boolean
Read: skeletonanimcapture_t::frame_t.Teleport
Write: skeletonanimcapture_t::frame_t.Teleport = value
```
## FeModelPos (Read-Only)
```lua
@type table
Read: skeletonanimcapture_t::frame_t.FeModelPos
```
## FlexControllerWeights (Read-Only)
```lua
@type table
Read: skeletonanimcapture_t::frame_t.FlexControllerWeights
```
# Functions
## ToPtr
```lua
@returns string
skeletonanimcapture_t::frame_t:ToPtr()
```
## IsValid
```lua
@returns bool
skeletonanimcapture_t::frame_t:IsValid()
```

:::