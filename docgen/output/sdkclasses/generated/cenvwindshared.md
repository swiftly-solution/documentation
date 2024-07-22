---
title: CEnvWindShared
index: true
order: 2
category:
  - Guide
---

# CEnvWindShared

::: tabs
@tab Lua
# Constructor
```lua
CEnvWindShared(ptr --[[ string ]])
```
# Properties
## StartTime 
```lua
@type number
Read: cenvwindshared.StartTime
Write: cenvwindshared.StartTime = value
```
## WindSeed 
```lua
@type number
Read: cenvwindshared.WindSeed
Write: cenvwindshared.WindSeed = value
```
## MinWind 
```lua
@type number
Read: cenvwindshared.MinWind
Write: cenvwindshared.MinWind = value
```
## MaxWind 
```lua
@type number
Read: cenvwindshared.MaxWind
Write: cenvwindshared.MaxWind = value
```
## WindRadius 
```lua
@type number
Read: cenvwindshared.WindRadius
Write: cenvwindshared.WindRadius = value
```
## MinGust 
```lua
@type number
Read: cenvwindshared.MinGust
Write: cenvwindshared.MinGust = value
```
## MaxGust 
```lua
@type number
Read: cenvwindshared.MaxGust
Write: cenvwindshared.MaxGust = value
```
## MinGustDelay 
```lua
@type number
Read: cenvwindshared.MinGustDelay
Write: cenvwindshared.MinGustDelay = value
```
## MaxGustDelay 
```lua
@type number
Read: cenvwindshared.MaxGustDelay
Write: cenvwindshared.MaxGustDelay = value
```
## GustDuration 
```lua
@type number
Read: cenvwindshared.GustDuration
Write: cenvwindshared.GustDuration = value
```
## GustDirChange 
```lua
@type number
Read: cenvwindshared.GustDirChange
Write: cenvwindshared.GustDirChange = value
```
## Location 
```lua
@type Vector
Read: cenvwindshared.Location
Write: cenvwindshared.Location = value
```
## GustSound 
```lua
@type number
Read: cenvwindshared.GustSound
Write: cenvwindshared.GustSound = value
```
## WindDir 
```lua
@type number
Read: cenvwindshared.WindDir
Write: cenvwindshared.WindDir = value
```
## WindSpeed 
```lua
@type number
Read: cenvwindshared.WindSpeed
Write: cenvwindshared.WindSpeed = value
```
## CurrentWindVector 
```lua
@type Vector
Read: cenvwindshared.CurrentWindVector
Write: cenvwindshared.CurrentWindVector = value
```
## CurrentSwayVector 
```lua
@type Vector
Read: cenvwindshared.CurrentSwayVector
Write: cenvwindshared.CurrentSwayVector = value
```
## PrevSwayVector 
```lua
@type Vector
Read: cenvwindshared.PrevSwayVector
Write: cenvwindshared.PrevSwayVector = value
```
## InitialWindDir 
```lua
@type number
Read: cenvwindshared.InitialWindDir
Write: cenvwindshared.InitialWindDir = value
```
## InitialWindSpeed 
```lua
@type number
Read: cenvwindshared.InitialWindSpeed
Write: cenvwindshared.InitialWindSpeed = value
```
## OnGustStart (Read-Only)
```lua
@type CEntityIOOutput
Read: cenvwindshared.OnGustStart
```
## OnGustEnd (Read-Only)
```lua
@type CEntityIOOutput
Read: cenvwindshared.OnGustEnd
```
## VariationTime 
```lua
@type number
Read: cenvwindshared.VariationTime
Write: cenvwindshared.VariationTime = value
```
## SwayTime 
```lua
@type number
Read: cenvwindshared.SwayTime
Write: cenvwindshared.SwayTime = value
```
## SimTime 
```lua
@type number
Read: cenvwindshared.SimTime
Write: cenvwindshared.SimTime = value
```
## SwitchTime 
```lua
@type number
Read: cenvwindshared.SwitchTime
Write: cenvwindshared.SwitchTime = value
```
## AveWindSpeed 
```lua
@type number
Read: cenvwindshared.AveWindSpeed
Write: cenvwindshared.AveWindSpeed = value
```
## Gusting 
```lua
@type boolean
Read: cenvwindshared.Gusting
Write: cenvwindshared.Gusting = value
```
## WindAngleVariation 
```lua
@type number
Read: cenvwindshared.WindAngleVariation
Write: cenvwindshared.WindAngleVariation = value
```
## WindSpeedVariation 
```lua
@type number
Read: cenvwindshared.WindSpeedVariation
Write: cenvwindshared.WindSpeedVariation = value
```
## EntIndex 
```lua
@type number
Read: cenvwindshared.EntIndex
Write: cenvwindshared.EntIndex = value
```
# Functions
## ToPtr
```lua
@returns string
cenvwindshared:ToPtr()
```
## IsValid
```lua
@returns bool
cenvwindshared:IsValid()
```

:::