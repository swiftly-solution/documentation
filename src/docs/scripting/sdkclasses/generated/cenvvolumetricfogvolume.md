---
title: CEnvVolumetricFogVolume
index: true
order: 2
category:
  - Guide
---

# CEnvVolumetricFogVolume

::: tabs
@tab Lua
# Constructor
```lua
CEnvVolumetricFogVolume(ptr --[[ string ]])
```
# Properties
## Active 
```lua
@type boolean
Read: cenvvolumetricfogvolume.Active
Write: cenvvolumetricfogvolume.Active = value
```
## BoxMins 
```lua
@type Vector
Read: cenvvolumetricfogvolume.BoxMins
Write: cenvvolumetricfogvolume.BoxMins = value
```
## BoxMaxs 
```lua
@type Vector
Read: cenvvolumetricfogvolume.BoxMaxs
Write: cenvvolumetricfogvolume.BoxMaxs = value
```
## StartDisabled 
```lua
@type boolean
Read: cenvvolumetricfogvolume.StartDisabled
Write: cenvvolumetricfogvolume.StartDisabled = value
```
## Strength 
```lua
@type number
Read: cenvvolumetricfogvolume.Strength
Write: cenvvolumetricfogvolume.Strength = value
```
## FalloffShape 
```lua
@type number
Read: cenvvolumetricfogvolume.FalloffShape
Write: cenvvolumetricfogvolume.FalloffShape = value
```
## FalloffExponent 
```lua
@type number
Read: cenvvolumetricfogvolume.FalloffExponent
Write: cenvvolumetricfogvolume.FalloffExponent = value
```
## HeightFogDepth 
```lua
@type number
Read: cenvvolumetricfogvolume.HeightFogDepth
Write: cenvvolumetricfogvolume.HeightFogDepth = value
```
## HeightFogEdgeWidth 
```lua
@type number
Read: cenvvolumetricfogvolume.HeightFogEdgeWidth
Write: cenvvolumetricfogvolume.HeightFogEdgeWidth = value
```
## IndirectLightStrength 
```lua
@type number
Read: cenvvolumetricfogvolume.IndirectLightStrength
Write: cenvvolumetricfogvolume.IndirectLightStrength = value
```
## SunLightStrength 
```lua
@type number
Read: cenvvolumetricfogvolume.SunLightStrength
Write: cenvvolumetricfogvolume.SunLightStrength = value
```
## NoiseStrength 
```lua
@type number
Read: cenvvolumetricfogvolume.NoiseStrength
Write: cenvvolumetricfogvolume.NoiseStrength = value
```
## OverrideIndirectLightStrength 
```lua
@type boolean
Read: cenvvolumetricfogvolume.OverrideIndirectLightStrength
Write: cenvvolumetricfogvolume.OverrideIndirectLightStrength = value
```
## OverrideSunLightStrength 
```lua
@type boolean
Read: cenvvolumetricfogvolume.OverrideSunLightStrength
Write: cenvvolumetricfogvolume.OverrideSunLightStrength = value
```
## OverrideNoiseStrength 
```lua
@type boolean
Read: cenvvolumetricfogvolume.OverrideNoiseStrength
Write: cenvvolumetricfogvolume.OverrideNoiseStrength = value
```
## Parent (Read-Only)
```lua
@type CBaseEntity
Read: cenvvolumetricfogvolume.Parent
```
# Functions
## ToPtr
```lua
@returns string
cenvvolumetricfogvolume:ToPtr()
```
## IsValid
```lua
@returns bool
cenvvolumetricfogvolume:IsValid()
```

:::