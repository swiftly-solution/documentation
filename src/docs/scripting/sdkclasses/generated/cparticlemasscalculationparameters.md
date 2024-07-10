---
title: CParticleMassCalculationParameters
index: true
order: 2
category:
  - Guide
---

# CParticleMassCalculationParameters

::: tabs
@tab Lua
# Constructor
```lua
CParticleMassCalculationParameters(ptr --[[ string ]])
```
# Properties
## MassMode 
```lua
@type number
Read: cparticlemasscalculationparameters.MassMode
Write: cparticlemasscalculationparameters.MassMode = value
```
## Radius 
```lua
@type CPerParticleFloatInput
Read: cparticlemasscalculationparameters.Radius
Write: cparticlemasscalculationparameters.Radius = value
```
## NominalRadius 
```lua
@type CPerParticleFloatInput
Read: cparticlemasscalculationparameters.NominalRadius
Write: cparticlemasscalculationparameters.NominalRadius = value
```
## Scale 
```lua
@type CPerParticleFloatInput
Read: cparticlemasscalculationparameters.Scale
Write: cparticlemasscalculationparameters.Scale = value
```
# Functions
## ToPtr
```lua
@returns string
cparticlemasscalculationparameters:ToPtr()
```
## IsValid
```lua
@returns bool
cparticlemasscalculationparameters:IsValid()
```

:::