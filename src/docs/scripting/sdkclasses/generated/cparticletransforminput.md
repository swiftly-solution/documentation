---
title: CParticleTransformInput
index: true
order: 2
category:
  - Guide
---

# CParticleTransformInput

::: tabs
@tab Lua
# Constructor
```lua
CParticleTransformInput(ptr)
```
# Properties
## Type 
```lua
--- @type number
Read: cparticletransforminput.Type
Write: cparticletransforminput.Type = value
```
## FollowNamedValue 
```lua
--- @type boolean
Read: cparticletransforminput.FollowNamedValue
Write: cparticletransforminput.FollowNamedValue = value
```
## SupportsDisabled 
```lua
--- @type boolean
Read: cparticletransforminput.SupportsDisabled
Write: cparticletransforminput.SupportsDisabled = value
```
## UseOrientation 
```lua
--- @type boolean
Read: cparticletransforminput.UseOrientation
Write: cparticletransforminput.UseOrientation = value
```
## ControlPoint 
```lua
--- @type number
Read: cparticletransforminput.ControlPoint
Write: cparticletransforminput.ControlPoint = value
```
## ControlPointRangeMax 
```lua
--- @type number
Read: cparticletransforminput.ControlPointRangeMax
Write: cparticletransforminput.ControlPointRangeMax = value
```
## EndCPGrowthTime 
```lua
--- @type number
Read: cparticletransforminput.EndCPGrowthTime
Write: cparticletransforminput.EndCPGrowthTime = value
```
## Parent (Read-Only)
```lua
--- @type CParticleInput
Read: cparticletransforminput.Parent
```
# Functions
## ToPtr
```lua
@returns string
cparticletransforminput:ToPtr()
```
## IsValid
```lua
@returns bool
cparticletransforminput:IsValid()
```

:::