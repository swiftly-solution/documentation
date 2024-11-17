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
--- @param ptr string
SkeletonDemoDb_t(ptr)
```
# Properties
## AnimCaptures (Read-Only)
```lua
--- @type table
Read: skeletondemodb_t.AnimCaptures
```
## CameraTrack (Read-Only)
```lua
--- @type table
Read: skeletondemodb_t.CameraTrack
```
## RecordingTime 
```lua
--- @type number
Read: skeletondemodb_t.RecordingTime
Write: skeletondemodb_t.RecordingTime = value
```
# Functions
## ToPtr
```lua
--- @return string
skeletondemodb_t:ToPtr()
```
## IsValid
```lua
--- @return bool
skeletondemodb_t:IsValid()
```

:::