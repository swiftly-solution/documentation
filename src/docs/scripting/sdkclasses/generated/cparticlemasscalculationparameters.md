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
--- @param ptr string
CParticleMassCalculationParameters(ptr)
```
# Properties
## MassMode 
```lua
--- @type number
Read: cparticlemasscalculationparameters.MassMode
Write: cparticlemasscalculationparameters.MassMode = value
```
## Radius (Read-Only)
```lua
--- @type CPerParticleFloatInput
Read: cparticlemasscalculationparameters.Radius
```
## NominalRadius (Read-Only)
```lua
--- @type CPerParticleFloatInput
Read: cparticlemasscalculationparameters.NominalRadius
```
## Scale (Read-Only)
```lua
--- @type CPerParticleFloatInput
Read: cparticlemasscalculationparameters.Scale
```
# Functions
## ToPtr
```lua
--- @return string
cparticlemasscalculationparameters:ToPtr()
```
## IsValid
```lua
--- @return bool
cparticlemasscalculationparameters:IsValid()
```

:::