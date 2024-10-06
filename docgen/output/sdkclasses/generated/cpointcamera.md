---
title: CPointCamera
index: true
order: 2
category:
  - Guide
---

# CPointCamera

::: tabs
@tab Lua
# Constructor
```lua
CPointCamera(ptr --[[ string ]])
```
# Properties
## FOV 
```lua
@type number
Read: cpointcamera.FOV
Write: cpointcamera.FOV = value
```
## Resolution 
```lua
@type number
Read: cpointcamera.Resolution
Write: cpointcamera.Resolution = value
```
## FogEnable 
```lua
@type boolean
Read: cpointcamera.FogEnable
Write: cpointcamera.FogEnable = value
```
## FogColor 
```lua
@type Color
Read: cpointcamera.FogColor
Write: cpointcamera.FogColor = value
```
## FogStart 
```lua
@type number
Read: cpointcamera.FogStart
Write: cpointcamera.FogStart = value
```
## FogEnd 
```lua
@type number
Read: cpointcamera.FogEnd
Write: cpointcamera.FogEnd = value
```
## FogMaxDensity 
```lua
@type number
Read: cpointcamera.FogMaxDensity
Write: cpointcamera.FogMaxDensity = value
```
## Active 
```lua
@type boolean
Read: cpointcamera.Active
Write: cpointcamera.Active = value
```
## UseScreenAspectRatio 
```lua
@type boolean
Read: cpointcamera.UseScreenAspectRatio
Write: cpointcamera.UseScreenAspectRatio = value
```
## AspectRatio 
```lua
@type number
Read: cpointcamera.AspectRatio
Write: cpointcamera.AspectRatio = value
```
## NoSky 
```lua
@type boolean
Read: cpointcamera.NoSky
Write: cpointcamera.NoSky = value
```
## Brightness 
```lua
@type number
Read: cpointcamera.Brightness
Write: cpointcamera.Brightness = value
```
## ZFar 
```lua
@type number
Read: cpointcamera.ZFar
Write: cpointcamera.ZFar = value
```
## ZNear 
```lua
@type number
Read: cpointcamera.ZNear
Write: cpointcamera.ZNear = value
```
## CanHLTVUse 
```lua
@type boolean
Read: cpointcamera.CanHLTVUse
Write: cpointcamera.CanHLTVUse = value
```
## AlignWithParent 
```lua
@type boolean
Read: cpointcamera.AlignWithParent
Write: cpointcamera.AlignWithParent = value
```
## DofEnabled 
```lua
@type boolean
Read: cpointcamera.DofEnabled
Write: cpointcamera.DofEnabled = value
```
## DofNearBlurry 
```lua
@type number
Read: cpointcamera.DofNearBlurry
Write: cpointcamera.DofNearBlurry = value
```
## DofNearCrisp 
```lua
@type number
Read: cpointcamera.DofNearCrisp
Write: cpointcamera.DofNearCrisp = value
```
## DofFarCrisp 
```lua
@type number
Read: cpointcamera.DofFarCrisp
Write: cpointcamera.DofFarCrisp = value
```
## DofFarBlurry 
```lua
@type number
Read: cpointcamera.DofFarBlurry
Write: cpointcamera.DofFarBlurry = value
```
## DofTiltToGround 
```lua
@type number
Read: cpointcamera.DofTiltToGround
Write: cpointcamera.DofTiltToGround = value
```
## TargetFOV 
```lua
@type number
Read: cpointcamera.TargetFOV
Write: cpointcamera.TargetFOV = value
```
## DegreesPerSecond 
```lua
@type number
Read: cpointcamera.DegreesPerSecond
Write: cpointcamera.DegreesPerSecond = value
```
## IsOn 
```lua
@type boolean
Read: cpointcamera.IsOn
Write: cpointcamera.IsOn = value
```
## Next (Read-Only)
```lua
@type CPointCamera
Read: cpointcamera.Next
```
## Parent (Read-Only)
```lua
@type CBaseEntity
Read: cpointcamera.Parent
```
# Functions
## ToPtr
```lua
@returns string
cpointcamera:ToPtr()
```
## IsValid
```lua
@returns bool
cpointcamera:IsValid()
```

:::