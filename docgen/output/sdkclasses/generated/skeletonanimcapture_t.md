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
SkeletonAnimCapture_t(ptr --[[ string ]])
```
# Properties
## EntIndex 
```lua
@type number
Read: skeletonanimcapture_t.EntIndex
Write: skeletonanimcapture_t.EntIndex = value
```
## EntParent 
```lua
@type number
Read: skeletonanimcapture_t.EntParent
Write: skeletonanimcapture_t.EntParent = value
```
## ImportedCollision 
```lua
@type table
Read: skeletonanimcapture_t.ImportedCollision
Write: skeletonanimcapture_t.ImportedCollision = value
```
## ModelName 
```lua
@type string
Read: skeletonanimcapture_t.ModelName
Write: skeletonanimcapture_t.ModelName = value
```
## CaptureName 
```lua
@type string
Read: skeletonanimcapture_t.CaptureName
Write: skeletonanimcapture_t.CaptureName = value
```
## ModelBindPose 
```lua
@type table
Read: skeletonanimcapture_t.ModelBindPose
Write: skeletonanimcapture_t.ModelBindPose = value
```
## FeModelInitPose 
```lua
@type table
Read: skeletonanimcapture_t.FeModelInitPose
Write: skeletonanimcapture_t.FeModelInitPose = value
```
## FlexControllers 
```lua
@type number
Read: skeletonanimcapture_t.FlexControllers
Write: skeletonanimcapture_t.FlexControllers = value
```
## Predicted 
```lua
@type boolean
Read: skeletonanimcapture_t.Predicted
Write: skeletonanimcapture_t.Predicted = value
```
## Frames 
```lua
@type table
Read: skeletonanimcapture_t.Frames
Write: skeletonanimcapture_t.Frames = value
```
# Functions
## ToPtr
```lua
@returns string
skeletonanimcapture_t:ToPtr()
```
## IsValid
```lua
@returns bool
skeletonanimcapture_t:IsValid()
```

:::