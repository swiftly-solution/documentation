---
title: CParticleFunction
index: true
order: 2
category:
  - Guide
---

# CParticleFunction

::: tabs
@tab Lua
# Constructor
```lua
CParticleFunction(ptr --[[ string ]])
```
# Properties
## OpStrength 
```lua
@type CParticleCollectionFloatInput
Read: cparticlefunction.OpStrength
Write: cparticlefunction.OpStrength = value
```
## OpEndCapState 
```lua
@type number
Read: cparticlefunction.OpEndCapState
Write: cparticlefunction.OpEndCapState = value
```
## OpStartFadeInTime 
```lua
@type number
Read: cparticlefunction.OpStartFadeInTime
Write: cparticlefunction.OpStartFadeInTime = value
```
## OpEndFadeInTime 
```lua
@type number
Read: cparticlefunction.OpEndFadeInTime
Write: cparticlefunction.OpEndFadeInTime = value
```
## OpStartFadeOutTime 
```lua
@type number
Read: cparticlefunction.OpStartFadeOutTime
Write: cparticlefunction.OpStartFadeOutTime = value
```
## OpEndFadeOutTime 
```lua
@type number
Read: cparticlefunction.OpEndFadeOutTime
Write: cparticlefunction.OpEndFadeOutTime = value
```
## OpFadeOscillatePeriod 
```lua
@type number
Read: cparticlefunction.OpFadeOscillatePeriod
Write: cparticlefunction.OpFadeOscillatePeriod = value
```
## NormalizeToStopTime 
```lua
@type boolean
Read: cparticlefunction.NormalizeToStopTime
Write: cparticlefunction.NormalizeToStopTime = value
```
## OpTimeOffsetMin 
```lua
@type number
Read: cparticlefunction.OpTimeOffsetMin
Write: cparticlefunction.OpTimeOffsetMin = value
```
## OpTimeOffsetMax 
```lua
@type number
Read: cparticlefunction.OpTimeOffsetMax
Write: cparticlefunction.OpTimeOffsetMax = value
```
## OpTimeOffsetSeed 
```lua
@type number
Read: cparticlefunction.OpTimeOffsetSeed
Write: cparticlefunction.OpTimeOffsetSeed = value
```
## OpTimeScaleSeed 
```lua
@type number
Read: cparticlefunction.OpTimeScaleSeed
Write: cparticlefunction.OpTimeScaleSeed = value
```
## OpTimeScaleMin 
```lua
@type number
Read: cparticlefunction.OpTimeScaleMin
Write: cparticlefunction.OpTimeScaleMin = value
```
## OpTimeScaleMax 
```lua
@type number
Read: cparticlefunction.OpTimeScaleMax
Write: cparticlefunction.OpTimeScaleMax = value
```
## DisableOperator 
```lua
@type boolean
Read: cparticlefunction.DisableOperator
Write: cparticlefunction.DisableOperator = value
```
## Notes 
```lua
@type string
Read: cparticlefunction.Notes
Write: cparticlefunction.Notes = value
```
# Functions
## ToPtr
```lua
@returns string
cparticlefunction:ToPtr()
```
## IsValid
```lua
@returns bool
cparticlefunction:IsValid()
```

:::