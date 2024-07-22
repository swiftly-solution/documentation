---
title: CParticleFloatInput
index: true
order: 2
category:
  - Guide
---

# CParticleFloatInput

::: tabs
@tab Lua
# Constructor
```lua
CParticleFloatInput(ptr --[[ string ]])
```
# Properties
## Type 
```lua
@type number
Read: cparticlefloatinput.Type
Write: cparticlefloatinput.Type = value
```
## MapType 
```lua
@type number
Read: cparticlefloatinput.MapType
Write: cparticlefloatinput.MapType = value
```
## LiteralValue 
```lua
@type number
Read: cparticlefloatinput.LiteralValue
Write: cparticlefloatinput.LiteralValue = value
```
## ControlPoint 
```lua
@type number
Read: cparticlefloatinput.ControlPoint
Write: cparticlefloatinput.ControlPoint = value
```
## ScalarAttribute (Read-Only)
```lua
@type ParticleAttributeIndex_t
Read: cparticlefloatinput.ScalarAttribute
```
## VectorAttribute (Read-Only)
```lua
@type ParticleAttributeIndex_t
Read: cparticlefloatinput.VectorAttribute
```
## VectorComponent 
```lua
@type number
Read: cparticlefloatinput.VectorComponent
Write: cparticlefloatinput.VectorComponent = value
```
## RandomMin 
```lua
@type number
Read: cparticlefloatinput.RandomMin
Write: cparticlefloatinput.RandomMin = value
```
## RandomMax 
```lua
@type number
Read: cparticlefloatinput.RandomMax
Write: cparticlefloatinput.RandomMax = value
```
## HasRandomSignFlip 
```lua
@type boolean
Read: cparticlefloatinput.HasRandomSignFlip
Write: cparticlefloatinput.HasRandomSignFlip = value
```
## RandomSeed 
```lua
@type number
Read: cparticlefloatinput.RandomSeed
Write: cparticlefloatinput.RandomSeed = value
```
## RandomMode 
```lua
@type number
Read: cparticlefloatinput.RandomMode
Write: cparticlefloatinput.RandomMode = value
```
## LOD0 
```lua
@type number
Read: cparticlefloatinput.LOD0
Write: cparticlefloatinput.LOD0 = value
```
## LOD1 
```lua
@type number
Read: cparticlefloatinput.LOD1
Write: cparticlefloatinput.LOD1 = value
```
## LOD2 
```lua
@type number
Read: cparticlefloatinput.LOD2
Write: cparticlefloatinput.LOD2 = value
```
## LOD3 
```lua
@type number
Read: cparticlefloatinput.LOD3
Write: cparticlefloatinput.LOD3 = value
```
## NoiseInputVectorAttribute (Read-Only)
```lua
@type ParticleAttributeIndex_t
Read: cparticlefloatinput.NoiseInputVectorAttribute
```
## NoiseOutputMin 
```lua
@type number
Read: cparticlefloatinput.NoiseOutputMin
Write: cparticlefloatinput.NoiseOutputMin = value
```
## NoiseOutputMax 
```lua
@type number
Read: cparticlefloatinput.NoiseOutputMax
Write: cparticlefloatinput.NoiseOutputMax = value
```
## NoiseScale 
```lua
@type number
Read: cparticlefloatinput.NoiseScale
Write: cparticlefloatinput.NoiseScale = value
```
## NoiseOffsetRate 
```lua
@type Vector
Read: cparticlefloatinput.NoiseOffsetRate
Write: cparticlefloatinput.NoiseOffsetRate = value
```
## NoiseOffset 
```lua
@type number
Read: cparticlefloatinput.NoiseOffset
Write: cparticlefloatinput.NoiseOffset = value
```
## NoiseOctaves 
```lua
@type number
Read: cparticlefloatinput.NoiseOctaves
Write: cparticlefloatinput.NoiseOctaves = value
```
## NoiseTurbulence 
```lua
@type number
Read: cparticlefloatinput.NoiseTurbulence
Write: cparticlefloatinput.NoiseTurbulence = value
```
## NoiseType 
```lua
@type number
Read: cparticlefloatinput.NoiseType
Write: cparticlefloatinput.NoiseType = value
```
## NoiseModifier 
```lua
@type number
Read: cparticlefloatinput.NoiseModifier
Write: cparticlefloatinput.NoiseModifier = value
```
## NoiseTurbulenceScale 
```lua
@type number
Read: cparticlefloatinput.NoiseTurbulenceScale
Write: cparticlefloatinput.NoiseTurbulenceScale = value
```
## NoiseTurbulenceMix 
```lua
@type number
Read: cparticlefloatinput.NoiseTurbulenceMix
Write: cparticlefloatinput.NoiseTurbulenceMix = value
```
## NoiseImgPreviewScale 
```lua
@type number
Read: cparticlefloatinput.NoiseImgPreviewScale
Write: cparticlefloatinput.NoiseImgPreviewScale = value
```
## NoiseImgPreviewLive 
```lua
@type boolean
Read: cparticlefloatinput.NoiseImgPreviewLive
Write: cparticlefloatinput.NoiseImgPreviewLive = value
```
## NoCameraFallback 
```lua
@type number
Read: cparticlefloatinput.NoCameraFallback
Write: cparticlefloatinput.NoCameraFallback = value
```
## UseBoundsCenter 
```lua
@type boolean
Read: cparticlefloatinput.UseBoundsCenter
Write: cparticlefloatinput.UseBoundsCenter = value
```
## InputMode 
```lua
@type number
Read: cparticlefloatinput.InputMode
Write: cparticlefloatinput.InputMode = value
```
## MultFactor 
```lua
@type number
Read: cparticlefloatinput.MultFactor
Write: cparticlefloatinput.MultFactor = value
```
## Input0 
```lua
@type number
Read: cparticlefloatinput.Input0
Write: cparticlefloatinput.Input0 = value
```
## Input1 
```lua
@type number
Read: cparticlefloatinput.Input1
Write: cparticlefloatinput.Input1 = value
```
## Output0 
```lua
@type number
Read: cparticlefloatinput.Output0
Write: cparticlefloatinput.Output0 = value
```
## Output1 
```lua
@type number
Read: cparticlefloatinput.Output1
Write: cparticlefloatinput.Output1 = value
```
## NotchedRangeMin 
```lua
@type number
Read: cparticlefloatinput.NotchedRangeMin
Write: cparticlefloatinput.NotchedRangeMin = value
```
## NotchedRangeMax 
```lua
@type number
Read: cparticlefloatinput.NotchedRangeMax
Write: cparticlefloatinput.NotchedRangeMax = value
```
## NotchedOutputOutside 
```lua
@type number
Read: cparticlefloatinput.NotchedOutputOutside
Write: cparticlefloatinput.NotchedOutputOutside = value
```
## NotchedOutputInside 
```lua
@type number
Read: cparticlefloatinput.NotchedOutputInside
Write: cparticlefloatinput.NotchedOutputInside = value
```
## BiasType 
```lua
@type number
Read: cparticlefloatinput.BiasType
Write: cparticlefloatinput.BiasType = value
```
## BiasParameter 
```lua
@type number
Read: cparticlefloatinput.BiasParameter
Write: cparticlefloatinput.BiasParameter = value
```
## Parent 
```lua
@type CParticleInput
Read: cparticlefloatinput.Parent
Write: cparticlefloatinput.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cparticlefloatinput:ToPtr()
```
## IsValid
```lua
@returns bool
cparticlefloatinput:IsValid()
```

:::