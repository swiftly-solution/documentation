---
title: CParticleModelInput
index: true
order: 2
category:
  - Guide
---

# CParticleModelInput

::: tabs
@tab Lua
# Constructor
```lua
CParticleModelInput(ptr --[[ string ]])
```
# Properties
## Type 
```lua
@type number
Read: cparticlemodelinput.Type
Write: cparticlemodelinput.Type = value
```
## ControlPoint 
```lua
@type number
Read: cparticlemodelinput.ControlPoint
Write: cparticlemodelinput.ControlPoint = value
```
## Parent 
```lua
@type CParticleInput
Read: cparticlemodelinput.Parent
Write: cparticlemodelinput.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cparticlemodelinput:ToPtr()
```
## IsValid
```lua
@returns bool
cparticlemodelinput:IsValid()
```

:::