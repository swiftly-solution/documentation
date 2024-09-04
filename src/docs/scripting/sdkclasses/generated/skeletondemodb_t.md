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
## AnimCaptures (Read-Only)
```lua
@type table
Read: skeletondemodb_t.AnimCaptures
```
## CameraTrack (Read-Only)
```lua
@type table
Read: skeletondemodb_t.CameraTrack
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