---
title: CGeneralRandomRotation
index: true
order: 2
category:
  - Guide
---

# CGeneralRandomRotation

::: tabs
@tab Lua
# Constructor
```lua
CGeneralRandomRotation(ptr --[[ string ]])
```
# Properties
## FieldOutput (Read-Only)
```lua
@type ParticleAttributeIndex_t
Read: cgeneralrandomrotation.FieldOutput
```
## Degrees 
```lua
@type number
Read: cgeneralrandomrotation.Degrees
Write: cgeneralrandomrotation.Degrees = value
```
## DegreesMin 
```lua
@type number
Read: cgeneralrandomrotation.DegreesMin
Write: cgeneralrandomrotation.DegreesMin = value
```
## DegreesMax 
```lua
@type number
Read: cgeneralrandomrotation.DegreesMax
Write: cgeneralrandomrotation.DegreesMax = value
```
## RotationRandExponent 
```lua
@type number
Read: cgeneralrandomrotation.RotationRandExponent
Write: cgeneralrandomrotation.RotationRandExponent = value
```
## RandomlyFlipDirection 
```lua
@type boolean
Read: cgeneralrandomrotation.RandomlyFlipDirection
Write: cgeneralrandomrotation.RandomlyFlipDirection = value
```
## Parent (Read-Only)
```lua
@type CParticleFunctionInitializer
Read: cgeneralrandomrotation.Parent
```
# Functions
## ToPtr
```lua
@returns string
cgeneralrandomrotation:ToPtr()
```
## IsValid
```lua
@returns bool
cgeneralrandomrotation:IsValid()
```

:::