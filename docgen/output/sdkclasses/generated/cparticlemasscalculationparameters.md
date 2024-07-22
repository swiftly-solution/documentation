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
## Radius (Read-Only)
```lua
@type CPerParticleFloatInput
Read: cparticlemasscalculationparameters.Radius
```
## NominalRadius (Read-Only)
```lua
@type CPerParticleFloatInput
Read: cparticlemasscalculationparameters.NominalRadius
```
## Scale (Read-Only)
```lua
@type CPerParticleFloatInput
Read: cparticlemasscalculationparameters.Scale
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