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
CParticleModelInput(ptr)
```
# Properties
## Type 
```lua
--- @type number
Read: cparticlemodelinput.Type
Write: cparticlemodelinput.Type = value
```
## ControlPoint 
```lua
--- @type number
Read: cparticlemodelinput.ControlPoint
Write: cparticlemodelinput.ControlPoint = value
```
## Parent (Read-Only)
```lua
--- @type CParticleInput
Read: cparticlemodelinput.Parent
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