---
title: CBaseRendererSource2
index: true
order: 2
category:
  - Guide
---

# CBaseRendererSource2

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CBaseRendererSource2(ptr)
```
# Properties
## RadiusScale (Read-Only)
```lua
--- @type CParticleCollectionRendererFloatInput
Read: cbaserenderersource2.RadiusScale
```
## AlphaScale (Read-Only)
```lua
--- @type CParticleCollectionRendererFloatInput
Read: cbaserenderersource2.AlphaScale
```
## RollScale (Read-Only)
```lua
--- @type CParticleCollectionRendererFloatInput
Read: cbaserenderersource2.RollScale
```
## Alpha2Field (Read-Only)
```lua
--- @type ParticleAttributeIndex_t
Read: cbaserenderersource2.Alpha2Field
```
## ColorScale (Read-Only)
```lua
--- @type CParticleCollectionRendererVecInput
Read: cbaserenderersource2.ColorScale
```
## ColorBlendType 
```lua
--- @type number
Read: cbaserenderersource2.ColorBlendType
Write: cbaserenderersource2.ColorBlendType = value
```
## ShaderType 
```lua
--- @type number
Read: cbaserenderersource2.ShaderType
Write: cbaserenderersource2.ShaderType = value
```
## StrShaderOverride 
```lua
--- @type string
Read: cbaserenderersource2.StrShaderOverride
Write: cbaserenderersource2.StrShaderOverride = value
```
## CenterXOffset (Read-Only)
```lua
--- @type CParticleCollectionRendererFloatInput
Read: cbaserenderersource2.CenterXOffset
```
## CenterYOffset (Read-Only)
```lua
--- @type CParticleCollectionRendererFloatInput
Read: cbaserenderersource2.CenterYOffset
```
## BumpStrength 
```lua
--- @type number
Read: cbaserenderersource2.BumpStrength
Write: cbaserenderersource2.BumpStrength = value
```
## CropTextureOverride 
```lua
--- @type number
Read: cbaserenderersource2.CropTextureOverride
Write: cbaserenderersource2.CropTextureOverride = value
```
## TexturesInput (Read-Only)
```lua
--- @type table
Read: cbaserenderersource2.TexturesInput
```
## AnimationRate 
```lua
--- @type number
Read: cbaserenderersource2.AnimationRate
Write: cbaserenderersource2.AnimationRate = value
```
## AnimationType 
```lua
--- @type number
Read: cbaserenderersource2.AnimationType
Write: cbaserenderersource2.AnimationType = value
```
## AnimateInFPS 
```lua
--- @type boolean
Read: cbaserenderersource2.AnimateInFPS
Write: cbaserenderersource2.AnimateInFPS = value
```
## MotionVectorScaleU (Read-Only)
```lua
--- @type CParticleCollectionRendererFloatInput
Read: cbaserenderersource2.MotionVectorScaleU
```
## MotionVectorScaleV (Read-Only)
```lua
--- @type CParticleCollectionRendererFloatInput
Read: cbaserenderersource2.MotionVectorScaleV
```
## SelfIllumAmount (Read-Only)
```lua
--- @type CParticleCollectionRendererFloatInput
Read: cbaserenderersource2.SelfIllumAmount
```
## DiffuseAmount (Read-Only)
```lua
--- @type CParticleCollectionRendererFloatInput
Read: cbaserenderersource2.DiffuseAmount
```
## DiffuseClamp (Read-Only)
```lua
--- @type CParticleCollectionRendererFloatInput
Read: cbaserenderersource2.DiffuseClamp
```
## LightingControlPoint 
```lua
--- @type number
Read: cbaserenderersource2.LightingControlPoint
Write: cbaserenderersource2.LightingControlPoint = value
```
## SelfIllumPerParticle (Read-Only)
```lua
--- @type ParticleAttributeIndex_t
Read: cbaserenderersource2.SelfIllumPerParticle
```
## OutputBlendMode 
```lua
--- @type number
Read: cbaserenderersource2.OutputBlendMode
Write: cbaserenderersource2.OutputBlendMode = value
```
## GammaCorrectVertexColors 
```lua
--- @type boolean
Read: cbaserenderersource2.GammaCorrectVertexColors
Write: cbaserenderersource2.GammaCorrectVertexColors = value
```
## SaturateColorPreAlphaBlend 
```lua
--- @type boolean
Read: cbaserenderersource2.SaturateColorPreAlphaBlend
Write: cbaserenderersource2.SaturateColorPreAlphaBlend = value
```
## AddSelfAmount (Read-Only)
```lua
--- @type CParticleCollectionRendererFloatInput
Read: cbaserenderersource2.AddSelfAmount
```
## Desaturation (Read-Only)
```lua
--- @type CParticleCollectionRendererFloatInput
Read: cbaserenderersource2.Desaturation
```
## OverbrightFactor (Read-Only)
```lua
--- @type CParticleCollectionRendererFloatInput
Read: cbaserenderersource2.OverbrightFactor
```
## HSVShiftControlPoint 
```lua
--- @type number
Read: cbaserenderersource2.HSVShiftControlPoint
Write: cbaserenderersource2.HSVShiftControlPoint = value
```
## FogType 
```lua
--- @type number
Read: cbaserenderersource2.FogType
Write: cbaserenderersource2.FogType = value
```
## FogAmount (Read-Only)
```lua
--- @type CParticleCollectionRendererFloatInput
Read: cbaserenderersource2.FogAmount
```
## TintByFOW 
```lua
--- @type boolean
Read: cbaserenderersource2.TintByFOW
Write: cbaserenderersource2.TintByFOW = value
```
## TintByGlobalLight 
```lua
--- @type boolean
Read: cbaserenderersource2.TintByGlobalLight
Write: cbaserenderersource2.TintByGlobalLight = value
```
## PerParticleAlphaReference 
```lua
--- @type number
Read: cbaserenderersource2.PerParticleAlphaReference
Write: cbaserenderersource2.PerParticleAlphaReference = value
```
## PerParticleAlphaRefWindow 
```lua
--- @type number
Read: cbaserenderersource2.PerParticleAlphaRefWindow
Write: cbaserenderersource2.PerParticleAlphaRefWindow = value
```
## AlphaReferenceType 
```lua
--- @type number
Read: cbaserenderersource2.AlphaReferenceType
Write: cbaserenderersource2.AlphaReferenceType = value
```
## AlphaReferenceSoftness (Read-Only)
```lua
--- @type CParticleCollectionRendererFloatInput
Read: cbaserenderersource2.AlphaReferenceSoftness
```
## SourceAlphaValueToMapToZero (Read-Only)
```lua
--- @type CParticleCollectionRendererFloatInput
Read: cbaserenderersource2.SourceAlphaValueToMapToZero
```
## SourceAlphaValueToMapToOne (Read-Only)
```lua
--- @type CParticleCollectionRendererFloatInput
Read: cbaserenderersource2.SourceAlphaValueToMapToOne
```
## Refract 
```lua
--- @type boolean
Read: cbaserenderersource2.Refract
Write: cbaserenderersource2.Refract = value
```
## RefractSolid 
```lua
--- @type boolean
Read: cbaserenderersource2.RefractSolid
Write: cbaserenderersource2.RefractSolid = value
```
## RefractAmount (Read-Only)
```lua
--- @type CParticleCollectionRendererFloatInput
Read: cbaserenderersource2.RefractAmount
```
## RefractBlurRadius 
```lua
--- @type number
Read: cbaserenderersource2.RefractBlurRadius
Write: cbaserenderersource2.RefractBlurRadius = value
```
## RefractBlurType 
```lua
--- @type number
Read: cbaserenderersource2.RefractBlurType
Write: cbaserenderersource2.RefractBlurType = value
```
## OnlyRenderInEffectsBloomPass 
```lua
--- @type boolean
Read: cbaserenderersource2.OnlyRenderInEffectsBloomPass
Write: cbaserenderersource2.OnlyRenderInEffectsBloomPass = value
```
## OnlyRenderInEffectsWaterPass 
```lua
--- @type boolean
Read: cbaserenderersource2.OnlyRenderInEffectsWaterPass
Write: cbaserenderersource2.OnlyRenderInEffectsWaterPass = value
```
## UseMixedResolutionRendering 
```lua
--- @type boolean
Read: cbaserenderersource2.UseMixedResolutionRendering
Write: cbaserenderersource2.UseMixedResolutionRendering = value
```
## OnlyRenderInEffecsGameOverlay 
```lua
--- @type boolean
Read: cbaserenderersource2.OnlyRenderInEffecsGameOverlay
Write: cbaserenderersource2.OnlyRenderInEffecsGameOverlay = value
```
## StencilTestID 
```lua
--- @type string
Read: cbaserenderersource2.StencilTestID
Write: cbaserenderersource2.StencilTestID = value
```
## StencilTestExclude 
```lua
--- @type boolean
Read: cbaserenderersource2.StencilTestExclude
Write: cbaserenderersource2.StencilTestExclude = value
```
## StencilWriteID 
```lua
--- @type string
Read: cbaserenderersource2.StencilWriteID
Write: cbaserenderersource2.StencilWriteID = value
```
## WriteStencilOnDepthPass 
```lua
--- @type boolean
Read: cbaserenderersource2.WriteStencilOnDepthPass
Write: cbaserenderersource2.WriteStencilOnDepthPass = value
```
## WriteStencilOnDepthFail 
```lua
--- @type boolean
Read: cbaserenderersource2.WriteStencilOnDepthFail
Write: cbaserenderersource2.WriteStencilOnDepthFail = value
```
## ReverseZBuffering 
```lua
--- @type boolean
Read: cbaserenderersource2.ReverseZBuffering
Write: cbaserenderersource2.ReverseZBuffering = value
```
## DisableZBuffering 
```lua
--- @type boolean
Read: cbaserenderersource2.DisableZBuffering
Write: cbaserenderersource2.DisableZBuffering = value
```
## FeatheringMode 
```lua
--- @type number
Read: cbaserenderersource2.FeatheringMode
Write: cbaserenderersource2.FeatheringMode = value
```
## FeatheringMinDist (Read-Only)
```lua
--- @type CParticleCollectionRendererFloatInput
Read: cbaserenderersource2.FeatheringMinDist
```
## FeatheringMaxDist (Read-Only)
```lua
--- @type CParticleCollectionRendererFloatInput
Read: cbaserenderersource2.FeatheringMaxDist
```
## FeatheringFilter (Read-Only)
```lua
--- @type CParticleCollectionRendererFloatInput
Read: cbaserenderersource2.FeatheringFilter
```
## DepthBias (Read-Only)
```lua
--- @type CParticleCollectionRendererFloatInput
Read: cbaserenderersource2.DepthBias
```
## SortMethod 
```lua
--- @type number
Read: cbaserenderersource2.SortMethod
Write: cbaserenderersource2.SortMethod = value
```
## BlendFramesSeq0 
```lua
--- @type boolean
Read: cbaserenderersource2.BlendFramesSeq0
Write: cbaserenderersource2.BlendFramesSeq0 = value
```
## MaxLuminanceBlendingSequence0 
```lua
--- @type boolean
Read: cbaserenderersource2.MaxLuminanceBlendingSequence0
Write: cbaserenderersource2.MaxLuminanceBlendingSequence0 = value
```
## Parent (Read-Only)
```lua
--- @type CParticleFunctionRenderer
Read: cbaserenderersource2.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cbaserenderersource2:ToPtr()
```
## IsValid
```lua
--- @return bool
cbaserenderersource2:IsValid()
```

:::