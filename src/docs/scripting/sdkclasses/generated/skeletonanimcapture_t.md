---
title: SkeletonAnimCapture_t
index: true
order: 2
category:
  - Guide
---

# SkeletonAnimCapture_t

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
SkeletonAnimCapture_t(ptr)
```
# Properties
## EntIndex 
```lua
--- @type number
Read: skeletonanimcapture_t.EntIndex
Write: skeletonanimcapture_t.EntIndex = value
```
## EntParent 
```lua
--- @type number
Read: skeletonanimcapture_t.EntParent
Write: skeletonanimcapture_t.EntParent = value
```
## ImportedCollision (Read-Only)
```lua
--- @type table
Read: skeletonanimcapture_t.ImportedCollision
```
## ModelName 
```lua
--- @type string
Read: skeletonanimcapture_t.ModelName
Write: skeletonanimcapture_t.ModelName = value
```
## CaptureName 
```lua
--- @type string
Read: skeletonanimcapture_t.CaptureName
Write: skeletonanimcapture_t.CaptureName = value
```
## ModelBindPose (Read-Only)
```lua
--- @type table
Read: skeletonanimcapture_t.ModelBindPose
```
## FeModelInitPose (Read-Only)
```lua
--- @type table
Read: skeletonanimcapture_t.FeModelInitPose
```
## FlexControllers 
```lua
--- @type number
Read: skeletonanimcapture_t.FlexControllers
Write: skeletonanimcapture_t.FlexControllers = value
```
## Predicted 
```lua
--- @type boolean
Read: skeletonanimcapture_t.Predicted
Write: skeletonanimcapture_t.Predicted = value
```
## Frames (Read-Only)
```lua
--- @type table
Read: skeletonanimcapture_t.Frames
```
# Functions
## ToPtr
```lua
--- @return string
skeletonanimcapture_t:ToPtr()
```
## IsValid
```lua
--- @return bool
skeletonanimcapture_t:IsValid()
```

:::