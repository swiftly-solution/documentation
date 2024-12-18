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
--- @param ptr string
CReplicationParameters(ptr)
```
# Properties
## ReplicationMode 
```lua
--- @type number
Read: creplicationparameters.ReplicationMode
Write: creplicationparameters.ReplicationMode = value
```
## ScaleChildParticleRadii 
```lua
--- @type boolean
Read: creplicationparameters.ScaleChildParticleRadii
Write: creplicationparameters.ScaleChildParticleRadii = value
```
## MinRandomRadiusScale (Read-Only)
```lua
--- @type CParticleCollectionFloatInput
Read: creplicationparameters.MinRandomRadiusScale
```
## MaxRandomRadiusScale (Read-Only)
```lua
--- @type CParticleCollectionFloatInput
Read: creplicationparameters.MaxRandomRadiusScale
```
## ModellingScale (Read-Only)
```lua
--- @type CParticleCollectionFloatInput
Read: creplicationparameters.ModellingScale
```
# Functions
## ToPtr
```lua
--- @return string
creplicationparameters:ToPtr()
```
## IsValid
```lua
--- @return bool
creplicationparameters:IsValid()
```

:::