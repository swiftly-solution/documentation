---
title: CPostProcessingVolume
index: true
order: 2
category:
  - Guide
---

# CPostProcessingVolume

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CPostProcessingVolume(ptr)
```
# Properties
## FadeDuration 
```lua
--- @type number
Read: cpostprocessingvolume.FadeDuration
Write: cpostprocessingvolume.FadeDuration = value
```
## MinLogExposure 
```lua
--- @type number
Read: cpostprocessingvolume.MinLogExposure
Write: cpostprocessingvolume.MinLogExposure = value
```
## MaxLogExposure 
```lua
--- @type number
Read: cpostprocessingvolume.MaxLogExposure
Write: cpostprocessingvolume.MaxLogExposure = value
```
## MinExposure 
```lua
--- @type number
Read: cpostprocessingvolume.MinExposure
Write: cpostprocessingvolume.MinExposure = value
```
## MaxExposure 
```lua
--- @type number
Read: cpostprocessingvolume.MaxExposure
Write: cpostprocessingvolume.MaxExposure = value
```
## ExposureCompensation 
```lua
--- @type number
Read: cpostprocessingvolume.ExposureCompensation
Write: cpostprocessingvolume.ExposureCompensation = value
```
## ExposureFadeSpeedUp 
```lua
--- @type number
Read: cpostprocessingvolume.ExposureFadeSpeedUp
Write: cpostprocessingvolume.ExposureFadeSpeedUp = value
```
## ExposureFadeSpeedDown 
```lua
--- @type number
Read: cpostprocessingvolume.ExposureFadeSpeedDown
Write: cpostprocessingvolume.ExposureFadeSpeedDown = value
```
## TonemapEVSmoothingRange 
```lua
--- @type number
Read: cpostprocessingvolume.TonemapEVSmoothingRange
Write: cpostprocessingvolume.TonemapEVSmoothingRange = value
```
## Master 
```lua
--- @type boolean
Read: cpostprocessingvolume.Master
Write: cpostprocessingvolume.Master = value
```
## ExposureControl 
```lua
--- @type boolean
Read: cpostprocessingvolume.ExposureControl
Write: cpostprocessingvolume.ExposureControl = value
```
## Rate 
```lua
--- @type number
Read: cpostprocessingvolume.Rate
Write: cpostprocessingvolume.Rate = value
```
## TonemapPercentTarget 
```lua
--- @type number
Read: cpostprocessingvolume.TonemapPercentTarget
Write: cpostprocessingvolume.TonemapPercentTarget = value
```
## TonemapPercentBrightPixels 
```lua
--- @type number
Read: cpostprocessingvolume.TonemapPercentBrightPixels
Write: cpostprocessingvolume.TonemapPercentBrightPixels = value
```
## TonemapMinAvgLum 
```lua
--- @type number
Read: cpostprocessingvolume.TonemapMinAvgLum
Write: cpostprocessingvolume.TonemapMinAvgLum = value
```
## Parent (Read-Only)
```lua
--- @type CBaseTrigger
Read: cpostprocessingvolume.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cpostprocessingvolume:ToPtr()
```
## IsValid
```lua
--- @return bool
cpostprocessingvolume:IsValid()
```

:::