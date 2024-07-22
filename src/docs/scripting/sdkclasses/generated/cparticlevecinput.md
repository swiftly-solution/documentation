---
title: CParticleVecInput
index: true
order: 2
category:
  - Guide
---

# CParticleVecInput

::: tabs
@tab Lua
# Constructor
```lua
CParticleVecInput(ptr --[[ string ]])
```
# Properties
## Type 
```lua
@type number
Read: cparticlevecinput.Type
Write: cparticlevecinput.Type = value
```
## LiteralValue 
```lua
@type Vector
Read: cparticlevecinput.LiteralValue
Write: cparticlevecinput.LiteralValue = value
```
## LiteralColor 
```lua
@type Color
Read: cparticlevecinput.LiteralColor
Write: cparticlevecinput.LiteralColor = value
```
## FollowNamedValue 
```lua
@type boolean
Read: cparticlevecinput.FollowNamedValue
Write: cparticlevecinput.FollowNamedValue = value
```
## VectorAttribute (Read-Only)
```lua
@type ParticleAttributeIndex_t
Read: cparticlevecinput.VectorAttribute
```
## VectorAttributeScale 
```lua
@type Vector
Read: cparticlevecinput.VectorAttributeScale
Write: cparticlevecinput.VectorAttributeScale = value
```
## ControlPoint 
```lua
@type number
Read: cparticlevecinput.ControlPoint
Write: cparticlevecinput.ControlPoint = value
```
## DeltaControlPoint 
```lua
@type number
Read: cparticlevecinput.DeltaControlPoint
Write: cparticlevecinput.DeltaControlPoint = value
```
## CPValueScale 
```lua
@type Vector
Read: cparticlevecinput.CPValueScale
Write: cparticlevecinput.CPValueScale = value
```
## CPRelativePosition 
```lua
@type Vector
Read: cparticlevecinput.CPRelativePosition
Write: cparticlevecinput.CPRelativePosition = value
```
## CPRelativeDir 
```lua
@type Vector
Read: cparticlevecinput.CPRelativeDir
Write: cparticlevecinput.CPRelativeDir = value
```
## FloatComponentX (Read-Only)
```lua
@type CParticleFloatInput
Read: cparticlevecinput.FloatComponentX
```
## FloatComponentY (Read-Only)
```lua
@type CParticleFloatInput
Read: cparticlevecinput.FloatComponentY
```
## FloatComponentZ (Read-Only)
```lua
@type CParticleFloatInput
Read: cparticlevecinput.FloatComponentZ
```
## FloatInterp (Read-Only)
```lua
@type CParticleFloatInput
Read: cparticlevecinput.FloatInterp
```
## InterpInput0 
```lua
@type number
Read: cparticlevecinput.InterpInput0
Write: cparticlevecinput.InterpInput0 = value
```
## InterpInput1 
```lua
@type number
Read: cparticlevecinput.InterpInput1
Write: cparticlevecinput.InterpInput1 = value
```
## InterpOutput0 
```lua
@type Vector
Read: cparticlevecinput.InterpOutput0
Write: cparticlevecinput.InterpOutput0 = value
```
## InterpOutput1 
```lua
@type Vector
Read: cparticlevecinput.InterpOutput1
Write: cparticlevecinput.InterpOutput1 = value
```
## RandomMin 
```lua
@type Vector
Read: cparticlevecinput.RandomMin
Write: cparticlevecinput.RandomMin = value
```
## RandomMax 
```lua
@type Vector
Read: cparticlevecinput.RandomMax
Write: cparticlevecinput.RandomMax = value
```
## Parent 
```lua
@type CParticleInput
Read: cparticlevecinput.Parent
Write: cparticlevecinput.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cparticlevecinput:ToPtr()
```
## IsValid
```lua
@returns bool
cparticlevecinput:IsValid()
```

:::