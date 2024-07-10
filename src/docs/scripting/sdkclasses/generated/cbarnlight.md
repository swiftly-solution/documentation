---
title: CBarnLight
index: true
order: 2
category:
  - Guide
---

# CBarnLight

::: tabs
@tab Lua
# Constructor
```lua
CBarnLight(ptr --[[ string ]])
```
# Properties
## Enabled 
```lua
@type boolean
Read: cbarnlight.Enabled
Write: cbarnlight.Enabled = value
```
## ColorMode 
```lua
@type number
Read: cbarnlight.ColorMode
Write: cbarnlight.ColorMode = value
```
## Color 
```lua
@type Color
Read: cbarnlight.Color
Write: cbarnlight.Color = value
```
## ColorTemperature 
```lua
@type number
Read: cbarnlight.ColorTemperature
Write: cbarnlight.ColorTemperature = value
```
## Brightness 
```lua
@type number
Read: cbarnlight.Brightness
Write: cbarnlight.Brightness = value
```
## BrightnessScale 
```lua
@type number
Read: cbarnlight.BrightnessScale
Write: cbarnlight.BrightnessScale = value
```
## DirectLight 
```lua
@type number
Read: cbarnlight.DirectLight
Write: cbarnlight.DirectLight = value
```
## BakedShadowIndex 
```lua
@type number
Read: cbarnlight.BakedShadowIndex
Write: cbarnlight.BakedShadowIndex = value
```
## LuminaireShape 
```lua
@type number
Read: cbarnlight.LuminaireShape
Write: cbarnlight.LuminaireShape = value
```
## LuminaireSize 
```lua
@type number
Read: cbarnlight.LuminaireSize
Write: cbarnlight.LuminaireSize = value
```
## LuminaireAnisotropy 
```lua
@type number
Read: cbarnlight.LuminaireAnisotropy
Write: cbarnlight.LuminaireAnisotropy = value
```
## LightStyleString 
```lua
@type string
Read: cbarnlight.LightStyleString
Write: cbarnlight.LightStyleString = value
```
## LightStyleStartTime 
```lua
@type number
Read: cbarnlight.LightStyleStartTime
Write: cbarnlight.LightStyleStartTime = value
```
## QueuedLightStyleStrings 
```lua
@type table
Read: cbarnlight.QueuedLightStyleStrings
Write: cbarnlight.QueuedLightStyleStrings = value
```
## LightStyleEvents 
```lua
@type table
Read: cbarnlight.LightStyleEvents
Write: cbarnlight.LightStyleEvents = value
```
## LightStyleTargets 
```lua
@type table
Read: cbarnlight.LightStyleTargets
Write: cbarnlight.LightStyleTargets = value
```
## StyleEvent 
```lua
@type table
Read: cbarnlight.StyleEvent
Write: cbarnlight.StyleEvent = value
```
## Shape 
```lua
@type number
Read: cbarnlight.Shape
Write: cbarnlight.Shape = value
```
## SoftX 
```lua
@type number
Read: cbarnlight.SoftX
Write: cbarnlight.SoftX = value
```
## SoftY 
```lua
@type number
Read: cbarnlight.SoftY
Write: cbarnlight.SoftY = value
```
## Skirt 
```lua
@type number
Read: cbarnlight.Skirt
Write: cbarnlight.Skirt = value
```
## SkirtNear 
```lua
@type number
Read: cbarnlight.SkirtNear
Write: cbarnlight.SkirtNear = value
```
## SizeParams 
```lua
@type Vector
Read: cbarnlight.SizeParams
Write: cbarnlight.SizeParams = value
```
## Range 
```lua
@type number
Read: cbarnlight.Range
Write: cbarnlight.Range = value
```
## Shear 
```lua
@type Vector
Read: cbarnlight.Shear
Write: cbarnlight.Shear = value
```
## BakeSpecularToCubemaps 
```lua
@type number
Read: cbarnlight.BakeSpecularToCubemaps
Write: cbarnlight.BakeSpecularToCubemaps = value
```
## BakeSpecularToCubemapsSize 
```lua
@type Vector
Read: cbarnlight.BakeSpecularToCubemapsSize
Write: cbarnlight.BakeSpecularToCubemapsSize = value
```
## CastShadows 
```lua
@type number
Read: cbarnlight.CastShadows
Write: cbarnlight.CastShadows = value
```
## ShadowMapSize 
```lua
@type number
Read: cbarnlight.ShadowMapSize
Write: cbarnlight.ShadowMapSize = value
```
## ShadowPriority 
```lua
@type number
Read: cbarnlight.ShadowPriority
Write: cbarnlight.ShadowPriority = value
```
## ContactShadow 
```lua
@type boolean
Read: cbarnlight.ContactShadow
Write: cbarnlight.ContactShadow = value
```
## BounceLight 
```lua
@type number
Read: cbarnlight.BounceLight
Write: cbarnlight.BounceLight = value
```
## BounceScale 
```lua
@type number
Read: cbarnlight.BounceScale
Write: cbarnlight.BounceScale = value
```
## MinRoughness 
```lua
@type number
Read: cbarnlight.MinRoughness
Write: cbarnlight.MinRoughness = value
```
## AlternateColor 
```lua
@type Vector
Read: cbarnlight.AlternateColor
Write: cbarnlight.AlternateColor = value
```
## AlternateColorBrightness 
```lua
@type number
Read: cbarnlight.AlternateColorBrightness
Write: cbarnlight.AlternateColorBrightness = value
```
## Fog 
```lua
@type number
Read: cbarnlight.Fog
Write: cbarnlight.Fog = value
```
## FogStrength 
```lua
@type number
Read: cbarnlight.FogStrength
Write: cbarnlight.FogStrength = value
```
## FogShadows 
```lua
@type number
Read: cbarnlight.FogShadows
Write: cbarnlight.FogShadows = value
```
## FogScale 
```lua
@type number
Read: cbarnlight.FogScale
Write: cbarnlight.FogScale = value
```
## FadeSizeStart 
```lua
@type number
Read: cbarnlight.FadeSizeStart
Write: cbarnlight.FadeSizeStart = value
```
## FadeSizeEnd 
```lua
@type number
Read: cbarnlight.FadeSizeEnd
Write: cbarnlight.FadeSizeEnd = value
```
## ShadowFadeSizeStart 
```lua
@type number
Read: cbarnlight.ShadowFadeSizeStart
Write: cbarnlight.ShadowFadeSizeStart = value
```
## ShadowFadeSizeEnd 
```lua
@type number
Read: cbarnlight.ShadowFadeSizeEnd
Write: cbarnlight.ShadowFadeSizeEnd = value
```
## PrecomputedFieldsValid 
```lua
@type boolean
Read: cbarnlight.PrecomputedFieldsValid
Write: cbarnlight.PrecomputedFieldsValid = value
```
## PrecomputedBoundsMins 
```lua
@type Vector
Read: cbarnlight.PrecomputedBoundsMins
Write: cbarnlight.PrecomputedBoundsMins = value
```
## PrecomputedBoundsMaxs 
```lua
@type Vector
Read: cbarnlight.PrecomputedBoundsMaxs
Write: cbarnlight.PrecomputedBoundsMaxs = value
```
## PrecomputedOBBOrigin 
```lua
@type Vector
Read: cbarnlight.PrecomputedOBBOrigin
Write: cbarnlight.PrecomputedOBBOrigin = value
```
## PrecomputedOBBAngles 
```lua
@type QAngle
Read: cbarnlight.PrecomputedOBBAngles
Write: cbarnlight.PrecomputedOBBAngles = value
```
## PrecomputedOBBExtent 
```lua
@type Vector
Read: cbarnlight.PrecomputedOBBExtent
Write: cbarnlight.PrecomputedOBBExtent = value
```
## PvsModifyEntity 
```lua
@type boolean
Read: cbarnlight.PvsModifyEntity
Write: cbarnlight.PvsModifyEntity = value
```
## Parent 
```lua
@type CBaseModelEntity
Read: cbarnlight.Parent
Write: cbarnlight.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cbarnlight:ToPtr()
```
## IsValid
```lua
@returns bool
cbarnlight:IsValid()
```

:::