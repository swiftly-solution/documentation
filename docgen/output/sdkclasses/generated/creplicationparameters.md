---
title: CReplicationParameters
index: true
order: 2
category:
  - Guide
---

# CReplicationParameters

::: tabs
@tab Lua
# Constructor
```lua
CReplicationParameters(ptr --[[ string ]])
```
# Properties
## ReplicationMode 
```lua
@type number
Read: creplicationparameters.ReplicationMode
Write: creplicationparameters.ReplicationMode = value
```
## ScaleChildParticleRadii 
```lua
@type boolean
Read: creplicationparameters.ScaleChildParticleRadii
Write: creplicationparameters.ScaleChildParticleRadii = value
```
## MinRandomRadiusScale 
```lua
@type CParticleCollectionFloatInput
Read: creplicationparameters.MinRandomRadiusScale
Write: creplicationparameters.MinRandomRadiusScale = value
```
## MaxRandomRadiusScale 
```lua
@type CParticleCollectionFloatInput
Read: creplicationparameters.MaxRandomRadiusScale
Write: creplicationparameters.MaxRandomRadiusScale = value
```
## ModellingScale 
```lua
@type CParticleCollectionFloatInput
Read: creplicationparameters.ModellingScale
Write: creplicationparameters.ModellingScale = value
```
# Functions
## ToPtr
```lua
@returns string
creplicationparameters:ToPtr()
```
## IsValid
```lua
@returns bool
creplicationparameters:IsValid()
```

:::