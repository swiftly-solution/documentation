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
--- @param ptr string
CBarnLight(ptr)
```
# Properties
## Enabled 
```lua
--- @type boolean
Read: cbarnlight.Enabled
Write: cbarnlight.Enabled = value
```
## ColorMode 
```lua
--- @type number
Read: cbarnlight.ColorMode
Write: cbarnlight.ColorMode = value
```
## Color 
```lua
--- @type Color
Read: cbarnlight.Color
Write: cbarnlight.Color = value
```
## ColorTemperature 
```lua
--- @type number
Read: cbarnlight.ColorTemperature
Write: cbarnlight.ColorTemperature = value
```
## Brightness 
```lua
--- @type number
Read: cbarnlight.Brightness
Write: cbarnlight.Brightness = value
```
## BrightnessScale 
```lua
--- @type number
Read: cbarnlight.BrightnessScale
Write: cbarnlight.BrightnessScale = value
```
## DirectLight 
```lua
--- @type number
Read: cbarnlight.DirectLight
Write: cbarnlight.DirectLight = value
```
## BakedShadowIndex 
```lua
--- @type number
Read: cbarnlight.BakedShadowIndex
Write: cbarnlight.BakedShadowIndex = value
```
## LuminaireShape 
```lua
--- @type number
Read: cbarnlight.LuminaireShape
Write: cbarnlight.LuminaireShape = value
```
## LuminaireSize 
```lua
--- @type number
Read: cbarnlight.LuminaireSize
Write: cbarnlight.LuminaireSize = value
```
## LuminaireAnisotropy 
```lua
--- @type number
Read: cbarnlight.LuminaireAnisotropy
Write: cbarnlight.LuminaireAnisotropy = value
```
## LightStyleString 
```lua
--- @type string
Read: cbarnlight.LightStyleString
Write: cbarnlight.LightStyleString = value
```
## LightStyleStartTime 
```lua
--- @type number
Read: cbarnlight.LightStyleStartTime
Write: cbarnlight.LightStyleStartTime = value
```
## QueuedLightStyleStrings (Read-Only)
```lua
--- @type table
Read: cbarnlight.QueuedLightStyleStrings
```
## LightStyleEvents (Read-Only)
```lua
--- @type table
Read: cbarnlight.LightStyleEvents
```
## StyleEvent (Read-Only)
```lua
--- @type table
Read: cbarnlight.StyleEvent
```
## Shape 
```lua
--- @type number
Read: cbarnlight.Shape
Write: cbarnlight.Shape = value
```
## SoftX 
```lua
--- @type number
Read: cbarnlight.SoftX
Write: cbarnlight.SoftX = value
```
## SoftY 
```lua
--- @type number
Read: cbarnlight.SoftY
Write: cbarnlight.SoftY = value
```
## Skirt 
```lua
--- @type number
Read: cbarnlight.Skirt
Write: cbarnlight.Skirt = value
```
## SkirtNear 
```lua
--- @type number
Read: cbarnlight.SkirtNear
Write: cbarnlight.SkirtNear = value
```
## SizeParams 
```lua
--- @type Vector
Read: cbarnlight.SizeParams
Write: cbarnlight.SizeParams = value
```
## Range 
```lua
--- @type number
Read: cbarnlight.Range
Write: cbarnlight.Range = value
```
## Shear 
```lua
--- @type Vector
Read: cbarnlight.Shear
Write: cbarnlight.Shear = value
```
## BakeSpecularToCubemaps 
```lua
--- @type number
Read: cbarnlight.BakeSpecularToCubemaps
Write: cbarnlight.BakeSpecularToCubemaps = value
```
## BakeSpecularToCubemapsSize 
```lua
--- @type Vector
Read: cbarnlight.BakeSpecularToCubemapsSize
Write: cbarnlight.BakeSpecularToCubemapsSize = value
```
## CastShadows 
```lua
--- @type number
Read: cbarnlight.CastShadows
Write: cbarnlight.CastShadows = value
```
## ShadowMapSize 
```lua
--- @type number
Read: cbarnlight.ShadowMapSize
Write: cbarnlight.ShadowMapSize = value
```
## ShadowPriority 
```lua
--- @type number
Read: cbarnlight.ShadowPriority
Write: cbarnlight.ShadowPriority = value
```
## ContactShadow 
```lua
--- @type boolean
Read: cbarnlight.ContactShadow
Write: cbarnlight.ContactShadow = value
```
## BounceLight 
```lua
--- @type number
Read: cbarnlight.BounceLight
Write: cbarnlight.BounceLight = value
```
## BounceScale 
```lua
--- @type number
Read: cbarnlight.BounceScale
Write: cbarnlight.BounceScale = value
```
## MinRoughness 
```lua
--- @type number
Read: cbarnlight.MinRoughness
Write: cbarnlight.MinRoughness = value
```
## AlternateColor 
```lua
--- @type Vector
Read: cbarnlight.AlternateColor
Write: cbarnlight.AlternateColor = value
```
## AlternateColorBrightness 
```lua
--- @type number
Read: cbarnlight.AlternateColorBrightness
Write: cbarnlight.AlternateColorBrightness = value
```
## Fog 
```lua
--- @type number
Read: cbarnlight.Fog
Write: cbarnlight.Fog = value
```
## FogStrength 
```lua
--- @type number
Read: cbarnlight.FogStrength
Write: cbarnlight.FogStrength = value
```
## FogShadows 
```lua
--- @type number
Read: cbarnlight.FogShadows
Write: cbarnlight.FogShadows = value
```
## FogScale 
```lua
--- @type number
Read: cbarnlight.FogScale
Write: cbarnlight.FogScale = value
```
## FogMixedShadows 
```lua
--- @type boolean
Read: cbarnlight.FogMixedShadows
Write: cbarnlight.FogMixedShadows = value
```
## FadeSizeStart 
```lua
--- @type number
Read: cbarnlight.FadeSizeStart
Write: cbarnlight.FadeSizeStart = value
```
## FadeSizeEnd 
```lua
--- @type number
Read: cbarnlight.FadeSizeEnd
Write: cbarnlight.FadeSizeEnd = value
```
## ShadowFadeSizeStart 
```lua
--- @type number
Read: cbarnlight.ShadowFadeSizeStart
Write: cbarnlight.ShadowFadeSizeStart = value
```
## ShadowFadeSizeEnd 
```lua
--- @type number
Read: cbarnlight.ShadowFadeSizeEnd
Write: cbarnlight.ShadowFadeSizeEnd = value
```
## PrecomputedFieldsValid 
```lua
--- @type boolean
Read: cbarnlight.PrecomputedFieldsValid
Write: cbarnlight.PrecomputedFieldsValid = value
```
## PrecomputedBoundsMins 
```lua
--- @type Vector
Read: cbarnlight.PrecomputedBoundsMins
Write: cbarnlight.PrecomputedBoundsMins = value
```
## PrecomputedBoundsMaxs 
```lua
--- @type Vector
Read: cbarnlight.PrecomputedBoundsMaxs
Write: cbarnlight.PrecomputedBoundsMaxs = value
```
## PrecomputedOBBOrigin 
```lua
--- @type Vector
Read: cbarnlight.PrecomputedOBBOrigin
Write: cbarnlight.PrecomputedOBBOrigin = value
```
## PrecomputedOBBAngles 
```lua
--- @type QAngle
Read: cbarnlight.PrecomputedOBBAngles
Write: cbarnlight.PrecomputedOBBAngles = value
```
## PrecomputedOBBExtent 
```lua
--- @type Vector
Read: cbarnlight.PrecomputedOBBExtent
Write: cbarnlight.PrecomputedOBBExtent = value
```
## PrecomputedSubFrusta 
```lua
--- @type number
Read: cbarnlight.PrecomputedSubFrusta
Write: cbarnlight.PrecomputedSubFrusta = value
```
## PrecomputedOBBOrigin0 
```lua
--- @type Vector
Read: cbarnlight.PrecomputedOBBOrigin0
Write: cbarnlight.PrecomputedOBBOrigin0 = value
```
## PrecomputedOBBAngles0 
```lua
--- @type QAngle
Read: cbarnlight.PrecomputedOBBAngles0
Write: cbarnlight.PrecomputedOBBAngles0 = value
```
## PrecomputedOBBExtent0 
```lua
--- @type Vector
Read: cbarnlight.PrecomputedOBBExtent0
Write: cbarnlight.PrecomputedOBBExtent0 = value
```
## PrecomputedOBBOrigin1 
```lua
--- @type Vector
Read: cbarnlight.PrecomputedOBBOrigin1
Write: cbarnlight.PrecomputedOBBOrigin1 = value
```
## PrecomputedOBBAngles1 
```lua
--- @type QAngle
Read: cbarnlight.PrecomputedOBBAngles1
Write: cbarnlight.PrecomputedOBBAngles1 = value
```
## PrecomputedOBBExtent1 
```lua
--- @type Vector
Read: cbarnlight.PrecomputedOBBExtent1
Write: cbarnlight.PrecomputedOBBExtent1 = value
```
## PrecomputedOBBOrigin2 
```lua
--- @type Vector
Read: cbarnlight.PrecomputedOBBOrigin2
Write: cbarnlight.PrecomputedOBBOrigin2 = value
```
## PrecomputedOBBAngles2 
```lua
--- @type QAngle
Read: cbarnlight.PrecomputedOBBAngles2
Write: cbarnlight.PrecomputedOBBAngles2 = value
```
## PrecomputedOBBExtent2 
```lua
--- @type Vector
Read: cbarnlight.PrecomputedOBBExtent2
Write: cbarnlight.PrecomputedOBBExtent2 = value
```
## PrecomputedOBBOrigin3 
```lua
--- @type Vector
Read: cbarnlight.PrecomputedOBBOrigin3
Write: cbarnlight.PrecomputedOBBOrigin3 = value
```
## PrecomputedOBBAngles3 
```lua
--- @type QAngle
Read: cbarnlight.PrecomputedOBBAngles3
Write: cbarnlight.PrecomputedOBBAngles3 = value
```
## PrecomputedOBBExtent3 
```lua
--- @type Vector
Read: cbarnlight.PrecomputedOBBExtent3
Write: cbarnlight.PrecomputedOBBExtent3 = value
```
## PrecomputedOBBOrigin4 
```lua
--- @type Vector
Read: cbarnlight.PrecomputedOBBOrigin4
Write: cbarnlight.PrecomputedOBBOrigin4 = value
```
## PrecomputedOBBAngles4 
```lua
--- @type QAngle
Read: cbarnlight.PrecomputedOBBAngles4
Write: cbarnlight.PrecomputedOBBAngles4 = value
```
## PrecomputedOBBExtent4 
```lua
--- @type Vector
Read: cbarnlight.PrecomputedOBBExtent4
Write: cbarnlight.PrecomputedOBBExtent4 = value
```
## PrecomputedOBBOrigin5 
```lua
--- @type Vector
Read: cbarnlight.PrecomputedOBBOrigin5
Write: cbarnlight.PrecomputedOBBOrigin5 = value
```
## PrecomputedOBBAngles5 
```lua
--- @type QAngle
Read: cbarnlight.PrecomputedOBBAngles5
Write: cbarnlight.PrecomputedOBBAngles5 = value
```
## PrecomputedOBBExtent5 
```lua
--- @type Vector
Read: cbarnlight.PrecomputedOBBExtent5
Write: cbarnlight.PrecomputedOBBExtent5 = value
```
## PvsModifyEntity 
```lua
--- @type boolean
Read: cbarnlight.PvsModifyEntity
Write: cbarnlight.PvsModifyEntity = value
```
## VisClusters (Read-Only)
```lua
--- @type table
Read: cbarnlight.VisClusters
```
## Parent (Read-Only)
```lua
--- @type CBaseModelEntity
Read: cbarnlight.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cbarnlight:ToPtr()
```
## IsValid
```lua
--- @return bool
cbarnlight:IsValid()
```

:::