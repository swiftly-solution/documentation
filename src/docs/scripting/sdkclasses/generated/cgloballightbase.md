---
title: CGlobalLightBase
index: true
order: 2
category:
  - Guide
---

# CGlobalLightBase

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CGlobalLightBase(ptr)
```
# Properties
## SpotLight 
```lua
--- @type boolean
Read: cgloballightbase.SpotLight
Write: cgloballightbase.SpotLight = value
```
## SpotLightOrigin 
```lua
--- @type Vector
Read: cgloballightbase.SpotLightOrigin
Write: cgloballightbase.SpotLightOrigin = value
```
## SpotLightAngles 
```lua
--- @type QAngle
Read: cgloballightbase.SpotLightAngles
Write: cgloballightbase.SpotLightAngles = value
```
## ShadowDirection 
```lua
--- @type Vector
Read: cgloballightbase.ShadowDirection
Write: cgloballightbase.ShadowDirection = value
```
## AmbientDirection 
```lua
--- @type Vector
Read: cgloballightbase.AmbientDirection
Write: cgloballightbase.AmbientDirection = value
```
## SpecularDirection 
```lua
--- @type Vector
Read: cgloballightbase.SpecularDirection
Write: cgloballightbase.SpecularDirection = value
```
## InspectorSpecularDirection 
```lua
--- @type Vector
Read: cgloballightbase.InspectorSpecularDirection
Write: cgloballightbase.InspectorSpecularDirection = value
```
## SpecularPower 
```lua
--- @type number
Read: cgloballightbase.SpecularPower
Write: cgloballightbase.SpecularPower = value
```
## SpecularIndependence 
```lua
--- @type number
Read: cgloballightbase.SpecularIndependence
Write: cgloballightbase.SpecularIndependence = value
```
## SpecularColor 
```lua
--- @type Color
Read: cgloballightbase.SpecularColor
Write: cgloballightbase.SpecularColor = value
```
## StartDisabled 
```lua
--- @type boolean
Read: cgloballightbase.StartDisabled
Write: cgloballightbase.StartDisabled = value
```
## Enabled 
```lua
--- @type boolean
Read: cgloballightbase.Enabled
Write: cgloballightbase.Enabled = value
```
## LightColor 
```lua
--- @type Color
Read: cgloballightbase.LightColor
Write: cgloballightbase.LightColor = value
```
## AmbientColor1 
```lua
--- @type Color
Read: cgloballightbase.AmbientColor1
Write: cgloballightbase.AmbientColor1 = value
```
## AmbientColor2 
```lua
--- @type Color
Read: cgloballightbase.AmbientColor2
Write: cgloballightbase.AmbientColor2 = value
```
## AmbientColor3 
```lua
--- @type Color
Read: cgloballightbase.AmbientColor3
Write: cgloballightbase.AmbientColor3 = value
```
## SunDistance 
```lua
--- @type number
Read: cgloballightbase.SunDistance
Write: cgloballightbase.SunDistance = value
```
## FOV 
```lua
--- @type number
Read: cgloballightbase.FOV
Write: cgloballightbase.FOV = value
```
## NearZ 
```lua
--- @type number
Read: cgloballightbase.NearZ
Write: cgloballightbase.NearZ = value
```
## FarZ 
```lua
--- @type number
Read: cgloballightbase.FarZ
Write: cgloballightbase.FarZ = value
```
## EnableShadows 
```lua
--- @type boolean
Read: cgloballightbase.EnableShadows
Write: cgloballightbase.EnableShadows = value
```
## OldEnableShadows 
```lua
--- @type boolean
Read: cgloballightbase.OldEnableShadows
Write: cgloballightbase.OldEnableShadows = value
```
## BackgroundClearNotRequired 
```lua
--- @type boolean
Read: cgloballightbase.BackgroundClearNotRequired
Write: cgloballightbase.BackgroundClearNotRequired = value
```
## CloudScale 
```lua
--- @type number
Read: cgloballightbase.CloudScale
Write: cgloballightbase.CloudScale = value
```
## Cloud1Speed 
```lua
--- @type number
Read: cgloballightbase.Cloud1Speed
Write: cgloballightbase.Cloud1Speed = value
```
## Cloud1Direction 
```lua
--- @type number
Read: cgloballightbase.Cloud1Direction
Write: cgloballightbase.Cloud1Direction = value
```
## Cloud2Speed 
```lua
--- @type number
Read: cgloballightbase.Cloud2Speed
Write: cgloballightbase.Cloud2Speed = value
```
## Cloud2Direction 
```lua
--- @type number
Read: cgloballightbase.Cloud2Direction
Write: cgloballightbase.Cloud2Direction = value
```
## AmbientScale1 
```lua
--- @type number
Read: cgloballightbase.AmbientScale1
Write: cgloballightbase.AmbientScale1 = value
```
## AmbientScale2 
```lua
--- @type number
Read: cgloballightbase.AmbientScale2
Write: cgloballightbase.AmbientScale2 = value
```
## GroundScale 
```lua
--- @type number
Read: cgloballightbase.GroundScale
Write: cgloballightbase.GroundScale = value
```
## LightScale 
```lua
--- @type number
Read: cgloballightbase.LightScale
Write: cgloballightbase.LightScale = value
```
## FoWDarkness 
```lua
--- @type number
Read: cgloballightbase.FoWDarkness
Write: cgloballightbase.FoWDarkness = value
```
## EnableSeparateSkyboxFog 
```lua
--- @type boolean
Read: cgloballightbase.EnableSeparateSkyboxFog
Write: cgloballightbase.EnableSeparateSkyboxFog = value
```
## FowColor 
```lua
--- @type Vector
Read: cgloballightbase.FowColor
Write: cgloballightbase.FowColor = value
```
## ViewOrigin 
```lua
--- @type Vector
Read: cgloballightbase.ViewOrigin
Write: cgloballightbase.ViewOrigin = value
```
## ViewAngles 
```lua
--- @type QAngle
Read: cgloballightbase.ViewAngles
Write: cgloballightbase.ViewAngles = value
```
## ViewFoV 
```lua
--- @type number
Read: cgloballightbase.ViewFoV
Write: cgloballightbase.ViewFoV = value
```
## WorldPoints 
```lua
--- @type table
Read: cgloballightbase.WorldPoints
Write: cgloballightbase.WorldPoints = value
```
## FogOffsetLayer0 
```lua
--- @type Vector2D
Read: cgloballightbase.FogOffsetLayer0
Write: cgloballightbase.FogOffsetLayer0 = value
```
## FogOffsetLayer1 
```lua
--- @type Vector2D
Read: cgloballightbase.FogOffsetLayer1
Write: cgloballightbase.FogOffsetLayer1 = value
```
# Functions
## ToPtr
```lua
--- @return string
cgloballightbase:ToPtr()
```
## IsValid
```lua
--- @return bool
cgloballightbase:IsValid()
```

:::