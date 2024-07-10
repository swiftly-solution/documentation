---
title: CLightComponent
index: true
order: 2
category:
  - Guide
---

# CLightComponent

::: tabs
@tab Lua
# Constructor
```lua
CLightComponent(ptr --[[ string ]])
```
# Properties
## __pChainEntity 
```lua
@type CNetworkVarChainer
Read: clightcomponent.__pChainEntity
Write: clightcomponent.__pChainEntity = value
```
## Color 
```lua
@type Color
Read: clightcomponent.Color
Write: clightcomponent.Color = value
```
## SecondaryColor 
```lua
@type Color
Read: clightcomponent.SecondaryColor
Write: clightcomponent.SecondaryColor = value
```
## Brightness 
```lua
@type number
Read: clightcomponent.Brightness
Write: clightcomponent.Brightness = value
```
## BrightnessScale 
```lua
@type number
Read: clightcomponent.BrightnessScale
Write: clightcomponent.BrightnessScale = value
```
## BrightnessMult 
```lua
@type number
Read: clightcomponent.BrightnessMult
Write: clightcomponent.BrightnessMult = value
```
## Range 
```lua
@type number
Read: clightcomponent.Range
Write: clightcomponent.Range = value
```
## Falloff 
```lua
@type number
Read: clightcomponent.Falloff
Write: clightcomponent.Falloff = value
```
## Attenuation0 
```lua
@type number
Read: clightcomponent.Attenuation0
Write: clightcomponent.Attenuation0 = value
```
## Attenuation1 
```lua
@type number
Read: clightcomponent.Attenuation1
Write: clightcomponent.Attenuation1 = value
```
## Attenuation2 
```lua
@type number
Read: clightcomponent.Attenuation2
Write: clightcomponent.Attenuation2 = value
```
## Theta 
```lua
@type number
Read: clightcomponent.Theta
Write: clightcomponent.Theta = value
```
## Phi 
```lua
@type number
Read: clightcomponent.Phi
Write: clightcomponent.Phi = value
```
## Cascades 
```lua
@type number
Read: clightcomponent.Cascades
Write: clightcomponent.Cascades = value
```
## CastShadows 
```lua
@type number
Read: clightcomponent.CastShadows
Write: clightcomponent.CastShadows = value
```
## ShadowWidth 
```lua
@type number
Read: clightcomponent.ShadowWidth
Write: clightcomponent.ShadowWidth = value
```
## ShadowHeight 
```lua
@type number
Read: clightcomponent.ShadowHeight
Write: clightcomponent.ShadowHeight = value
```
## RenderDiffuse 
```lua
@type boolean
Read: clightcomponent.RenderDiffuse
Write: clightcomponent.RenderDiffuse = value
```
## RenderSpecular 
```lua
@type number
Read: clightcomponent.RenderSpecular
Write: clightcomponent.RenderSpecular = value
```
## RenderTransmissive 
```lua
@type boolean
Read: clightcomponent.RenderTransmissive
Write: clightcomponent.RenderTransmissive = value
```
## OrthoLightWidth 
```lua
@type number
Read: clightcomponent.OrthoLightWidth
Write: clightcomponent.OrthoLightWidth = value
```
## OrthoLightHeight 
```lua
@type number
Read: clightcomponent.OrthoLightHeight
Write: clightcomponent.OrthoLightHeight = value
```
## Style 
```lua
@type number
Read: clightcomponent.Style
Write: clightcomponent.Style = value
```
## Pattern 
```lua
@type string
Read: clightcomponent.Pattern
Write: clightcomponent.Pattern = value
```
## CascadeRenderStaticObjects 
```lua
@type number
Read: clightcomponent.CascadeRenderStaticObjects
Write: clightcomponent.CascadeRenderStaticObjects = value
```
## ShadowCascadeCrossFade 
```lua
@type number
Read: clightcomponent.ShadowCascadeCrossFade
Write: clightcomponent.ShadowCascadeCrossFade = value
```
## ShadowCascadeDistanceFade 
```lua
@type number
Read: clightcomponent.ShadowCascadeDistanceFade
Write: clightcomponent.ShadowCascadeDistanceFade = value
```
## ShadowCascadeDistance0 
```lua
@type number
Read: clightcomponent.ShadowCascadeDistance0
Write: clightcomponent.ShadowCascadeDistance0 = value
```
## ShadowCascadeDistance1 
```lua
@type number
Read: clightcomponent.ShadowCascadeDistance1
Write: clightcomponent.ShadowCascadeDistance1 = value
```
## ShadowCascadeDistance2 
```lua
@type number
Read: clightcomponent.ShadowCascadeDistance2
Write: clightcomponent.ShadowCascadeDistance2 = value
```
## ShadowCascadeDistance3 
```lua
@type number
Read: clightcomponent.ShadowCascadeDistance3
Write: clightcomponent.ShadowCascadeDistance3 = value
```
## ShadowCascadeResolution0 
```lua
@type number
Read: clightcomponent.ShadowCascadeResolution0
Write: clightcomponent.ShadowCascadeResolution0 = value
```
## ShadowCascadeResolution1 
```lua
@type number
Read: clightcomponent.ShadowCascadeResolution1
Write: clightcomponent.ShadowCascadeResolution1 = value
```
## ShadowCascadeResolution2 
```lua
@type number
Read: clightcomponent.ShadowCascadeResolution2
Write: clightcomponent.ShadowCascadeResolution2 = value
```
## ShadowCascadeResolution3 
```lua
@type number
Read: clightcomponent.ShadowCascadeResolution3
Write: clightcomponent.ShadowCascadeResolution3 = value
```
## UsesBakedShadowing 
```lua
@type boolean
Read: clightcomponent.UsesBakedShadowing
Write: clightcomponent.UsesBakedShadowing = value
```
## ShadowPriority 
```lua
@type number
Read: clightcomponent.ShadowPriority
Write: clightcomponent.ShadowPriority = value
```
## BakedShadowIndex 
```lua
@type number
Read: clightcomponent.BakedShadowIndex
Write: clightcomponent.BakedShadowIndex = value
```
## RenderToCubemaps 
```lua
@type boolean
Read: clightcomponent.RenderToCubemaps
Write: clightcomponent.RenderToCubemaps = value
```
## DirectLight 
```lua
@type number
Read: clightcomponent.DirectLight
Write: clightcomponent.DirectLight = value
```
## IndirectLight 
```lua
@type number
Read: clightcomponent.IndirectLight
Write: clightcomponent.IndirectLight = value
```
## FadeMinDist 
```lua
@type number
Read: clightcomponent.FadeMinDist
Write: clightcomponent.FadeMinDist = value
```
## FadeMaxDist 
```lua
@type number
Read: clightcomponent.FadeMaxDist
Write: clightcomponent.FadeMaxDist = value
```
## ShadowFadeMinDist 
```lua
@type number
Read: clightcomponent.ShadowFadeMinDist
Write: clightcomponent.ShadowFadeMinDist = value
```
## ShadowFadeMaxDist 
```lua
@type number
Read: clightcomponent.ShadowFadeMaxDist
Write: clightcomponent.ShadowFadeMaxDist = value
```
## Enabled 
```lua
@type boolean
Read: clightcomponent.Enabled
Write: clightcomponent.Enabled = value
```
## Flicker 
```lua
@type boolean
Read: clightcomponent.Flicker
Write: clightcomponent.Flicker = value
```
## PrecomputedFieldsValid 
```lua
@type boolean
Read: clightcomponent.PrecomputedFieldsValid
Write: clightcomponent.PrecomputedFieldsValid = value
```
## PrecomputedBoundsMins 
```lua
@type Vector
Read: clightcomponent.PrecomputedBoundsMins
Write: clightcomponent.PrecomputedBoundsMins = value
```
## PrecomputedBoundsMaxs 
```lua
@type Vector
Read: clightcomponent.PrecomputedBoundsMaxs
Write: clightcomponent.PrecomputedBoundsMaxs = value
```
## PrecomputedOBBOrigin 
```lua
@type Vector
Read: clightcomponent.PrecomputedOBBOrigin
Write: clightcomponent.PrecomputedOBBOrigin = value
```
## PrecomputedOBBAngles 
```lua
@type QAngle
Read: clightcomponent.PrecomputedOBBAngles
Write: clightcomponent.PrecomputedOBBAngles = value
```
## PrecomputedOBBExtent 
```lua
@type Vector
Read: clightcomponent.PrecomputedOBBExtent
Write: clightcomponent.PrecomputedOBBExtent = value
```
## PrecomputedMaxRange 
```lua
@type number
Read: clightcomponent.PrecomputedMaxRange
Write: clightcomponent.PrecomputedMaxRange = value
```
## FogLightingMode 
```lua
@type number
Read: clightcomponent.FogLightingMode
Write: clightcomponent.FogLightingMode = value
```
## FogContributionStength 
```lua
@type number
Read: clightcomponent.FogContributionStength
Write: clightcomponent.FogContributionStength = value
```
## NearClipPlane 
```lua
@type number
Read: clightcomponent.NearClipPlane
Write: clightcomponent.NearClipPlane = value
```
## SkyColor 
```lua
@type Color
Read: clightcomponent.SkyColor
Write: clightcomponent.SkyColor = value
```
## SkyIntensity 
```lua
@type number
Read: clightcomponent.SkyIntensity
Write: clightcomponent.SkyIntensity = value
```
## SkyAmbientBounce 
```lua
@type Color
Read: clightcomponent.SkyAmbientBounce
Write: clightcomponent.SkyAmbientBounce = value
```
## UseSecondaryColor 
```lua
@type boolean
Read: clightcomponent.UseSecondaryColor
Write: clightcomponent.UseSecondaryColor = value
```
## MixedShadows 
```lua
@type boolean
Read: clightcomponent.MixedShadows
Write: clightcomponent.MixedShadows = value
```
## LightStyleStartTime 
```lua
@type number
Read: clightcomponent.LightStyleStartTime
Write: clightcomponent.LightStyleStartTime = value
```
## CapsuleLength 
```lua
@type number
Read: clightcomponent.CapsuleLength
Write: clightcomponent.CapsuleLength = value
```
## MinRoughness 
```lua
@type number
Read: clightcomponent.MinRoughness
Write: clightcomponent.MinRoughness = value
```
## PvsModifyEntity 
```lua
@type boolean
Read: clightcomponent.PvsModifyEntity
Write: clightcomponent.PvsModifyEntity = value
```
## Parent 
```lua
@type CEntityComponent
Read: clightcomponent.Parent
Write: clightcomponent.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
clightcomponent:ToPtr()
```
## IsValid
```lua
@returns bool
clightcomponent:IsValid()
```

:::