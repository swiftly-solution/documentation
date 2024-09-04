---
title: CEnvProjectedTexture
index: true
order: 2
category:
  - Guide
---

# CEnvProjectedTexture

::: tabs
@tab Lua
# Constructor
```lua
CEnvProjectedTexture(ptr --[[ string ]])
```
# Properties
## TargetEntity (Read-Only)
```lua
@type CBaseEntity
Read: cenvprojectedtexture.TargetEntity
```
## State 
```lua
@type boolean
Read: cenvprojectedtexture.State
Write: cenvprojectedtexture.State = value
```
## AlwaysUpdate 
```lua
@type boolean
Read: cenvprojectedtexture.AlwaysUpdate
Write: cenvprojectedtexture.AlwaysUpdate = value
```
## LightFOV 
```lua
@type number
Read: cenvprojectedtexture.LightFOV
Write: cenvprojectedtexture.LightFOV = value
```
## EnableShadows 
```lua
@type boolean
Read: cenvprojectedtexture.EnableShadows
Write: cenvprojectedtexture.EnableShadows = value
```
## SimpleProjection 
```lua
@type boolean
Read: cenvprojectedtexture.SimpleProjection
Write: cenvprojectedtexture.SimpleProjection = value
```
## LightOnlyTarget 
```lua
@type boolean
Read: cenvprojectedtexture.LightOnlyTarget
Write: cenvprojectedtexture.LightOnlyTarget = value
```
## LightWorld 
```lua
@type boolean
Read: cenvprojectedtexture.LightWorld
Write: cenvprojectedtexture.LightWorld = value
```
## CameraSpace 
```lua
@type boolean
Read: cenvprojectedtexture.CameraSpace
Write: cenvprojectedtexture.CameraSpace = value
```
## BrightnessScale 
```lua
@type number
Read: cenvprojectedtexture.BrightnessScale
Write: cenvprojectedtexture.BrightnessScale = value
```
## LightColor 
```lua
@type Color
Read: cenvprojectedtexture.LightColor
Write: cenvprojectedtexture.LightColor = value
```
## Intensity 
```lua
@type number
Read: cenvprojectedtexture.Intensity
Write: cenvprojectedtexture.Intensity = value
```
## LinearAttenuation 
```lua
@type number
Read: cenvprojectedtexture.LinearAttenuation
Write: cenvprojectedtexture.LinearAttenuation = value
```
## QuadraticAttenuation 
```lua
@type number
Read: cenvprojectedtexture.QuadraticAttenuation
Write: cenvprojectedtexture.QuadraticAttenuation = value
```
## Volumetric 
```lua
@type boolean
Read: cenvprojectedtexture.Volumetric
Write: cenvprojectedtexture.Volumetric = value
```
## NoiseStrength 
```lua
@type number
Read: cenvprojectedtexture.NoiseStrength
Write: cenvprojectedtexture.NoiseStrength = value
```
## FlashlightTime 
```lua
@type number
Read: cenvprojectedtexture.FlashlightTime
Write: cenvprojectedtexture.FlashlightTime = value
```
## NumPlanes 
```lua
@type number
Read: cenvprojectedtexture.NumPlanes
Write: cenvprojectedtexture.NumPlanes = value
```
## PlaneOffset 
```lua
@type number
Read: cenvprojectedtexture.PlaneOffset
Write: cenvprojectedtexture.PlaneOffset = value
```
## VolumetricIntensity 
```lua
@type number
Read: cenvprojectedtexture.VolumetricIntensity
Write: cenvprojectedtexture.VolumetricIntensity = value
```
## ColorTransitionTime 
```lua
@type number
Read: cenvprojectedtexture.ColorTransitionTime
Write: cenvprojectedtexture.ColorTransitionTime = value
```
## Ambient 
```lua
@type number
Read: cenvprojectedtexture.Ambient
Write: cenvprojectedtexture.Ambient = value
```
## SpotlightTextureName 
```lua
@type string
Read: cenvprojectedtexture.SpotlightTextureName
Write: cenvprojectedtexture.SpotlightTextureName = value
```
## SpotlightTextureFrame 
```lua
@type number
Read: cenvprojectedtexture.SpotlightTextureFrame
Write: cenvprojectedtexture.SpotlightTextureFrame = value
```
## ShadowQuality 
```lua
@type number
Read: cenvprojectedtexture.ShadowQuality
Write: cenvprojectedtexture.ShadowQuality = value
```
## NearZ 
```lua
@type number
Read: cenvprojectedtexture.NearZ
Write: cenvprojectedtexture.NearZ = value
```
## FarZ 
```lua
@type number
Read: cenvprojectedtexture.FarZ
Write: cenvprojectedtexture.FarZ = value
```
## ProjectionSize 
```lua
@type number
Read: cenvprojectedtexture.ProjectionSize
Write: cenvprojectedtexture.ProjectionSize = value
```
## Rotation 
```lua
@type number
Read: cenvprojectedtexture.Rotation
Write: cenvprojectedtexture.Rotation = value
```
## FlipHorizontal 
```lua
@type boolean
Read: cenvprojectedtexture.FlipHorizontal
Write: cenvprojectedtexture.FlipHorizontal = value
```
## Parent (Read-Only)
```lua
@type CModelPointEntity
Read: cenvprojectedtexture.Parent
```
# Functions
## ToPtr
```lua
@returns string
cenvprojectedtexture:ToPtr()
```
## IsValid
```lua
@returns bool
cenvprojectedtexture:IsValid()
```

:::