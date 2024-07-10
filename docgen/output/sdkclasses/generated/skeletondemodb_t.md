---
title: SkeletonDemoDb_t
index: true
order: 2
category:
  - Guide
---

# SkeletonDemoDb_t

::: tabs
@tab Lua
# Constructor
```lua
SkeletonDemoDb_t(ptr --[[ string ]])
```
# Properties
## AnimCaptures 
```lua
@type table
Read: skeletondemodb_t.AnimCaptures
Write: skeletondemodb_t.AnimCaptures = value
```
## CameraTrack 
```lua
@type table
Read: skeletondemodb_t.CameraTrack
Write: skeletondemodb_t.CameraTrack = value
```
## RecordingTime 
```lua
@type number
Read: skeletondemodb_t.RecordingTime
Write: skeletondemodb_t.RecordingTime = value
```
# Functions
## ToPtr
```lua
@returns string
skeletondemodb_t:ToPtr()
```
## IsValid
```lua
@returns bool
skeletondemodb_t:IsValid()
```

:::