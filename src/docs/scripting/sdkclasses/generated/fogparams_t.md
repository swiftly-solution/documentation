---
title: fogparams_t
index: true
order: 2
category:
  - Guide
---

# fogparams_t

::: tabs
@tab Lua
# Constructor
```lua
fogparams_t(ptr)
```
# Properties
## DirPrimary 
```lua
--- @type Vector
Read: fogparams_t.DirPrimary
Write: fogparams_t.DirPrimary = value
```
## ColorPrimary 
```lua
--- @type Color
Read: fogparams_t.ColorPrimary
Write: fogparams_t.ColorPrimary = value
```
## ColorSecondary 
```lua
--- @type Color
Read: fogparams_t.ColorSecondary
Write: fogparams_t.ColorSecondary = value
```
## ColorPrimaryLerpTo 
```lua
--- @type Color
Read: fogparams_t.ColorPrimaryLerpTo
Write: fogparams_t.ColorPrimaryLerpTo = value
```
## ColorSecondaryLerpTo 
```lua
--- @type Color
Read: fogparams_t.ColorSecondaryLerpTo
Write: fogparams_t.ColorSecondaryLerpTo = value
```
## Start 
```lua
--- @type number
Read: fogparams_t.Start
Write: fogparams_t.Start = value
```
## End 
```lua
--- @type number
Read: fogparams_t.End
Write: fogparams_t.End = value
```
## Farz 
```lua
--- @type number
Read: fogparams_t.Farz
Write: fogparams_t.Farz = value
```
## Maxdensity 
```lua
--- @type number
Read: fogparams_t.Maxdensity
Write: fogparams_t.Maxdensity = value
```
## Exponent 
```lua
--- @type number
Read: fogparams_t.Exponent
Write: fogparams_t.Exponent = value
```
## HDRColorScale 
```lua
--- @type number
Read: fogparams_t.HDRColorScale
Write: fogparams_t.HDRColorScale = value
```
## SkyboxFogFactor 
```lua
--- @type number
Read: fogparams_t.SkyboxFogFactor
Write: fogparams_t.SkyboxFogFactor = value
```
## SkyboxFogFactorLerpTo 
```lua
--- @type number
Read: fogparams_t.SkyboxFogFactorLerpTo
Write: fogparams_t.SkyboxFogFactorLerpTo = value
```
## StartLerpTo 
```lua
--- @type number
Read: fogparams_t.StartLerpTo
Write: fogparams_t.StartLerpTo = value
```
## EndLerpTo 
```lua
--- @type number
Read: fogparams_t.EndLerpTo
Write: fogparams_t.EndLerpTo = value
```
## MaxdensityLerpTo 
```lua
--- @type number
Read: fogparams_t.MaxdensityLerpTo
Write: fogparams_t.MaxdensityLerpTo = value
```
## Lerptime 
```lua
--- @type number
Read: fogparams_t.Lerptime
Write: fogparams_t.Lerptime = value
```
## Duration 
```lua
--- @type number
Read: fogparams_t.Duration
Write: fogparams_t.Duration = value
```
## Blendtobackground 
```lua
--- @type number
Read: fogparams_t.Blendtobackground
Write: fogparams_t.Blendtobackground = value
```
## Scattering 
```lua
--- @type number
Read: fogparams_t.Scattering
Write: fogparams_t.Scattering = value
```
## Locallightscale 
```lua
--- @type number
Read: fogparams_t.Locallightscale
Write: fogparams_t.Locallightscale = value
```
## Enable 
```lua
--- @type boolean
Read: fogparams_t.Enable
Write: fogparams_t.Enable = value
```
## Blend 
```lua
--- @type boolean
Read: fogparams_t.Blend
Write: fogparams_t.Blend = value
```
## NoReflectionFog 
```lua
--- @type boolean
Read: fogparams_t.NoReflectionFog
Write: fogparams_t.NoReflectionFog = value
```
## Padding 
```lua
--- @type boolean
Read: fogparams_t.Padding
Write: fogparams_t.Padding = value
```
# Functions
## ToPtr
```lua
@returns string
fogparams_t:ToPtr()
```
## IsValid
```lua
@returns bool
fogparams_t:IsValid()
```

:::