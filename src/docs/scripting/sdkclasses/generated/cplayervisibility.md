---
title: CPlayerVisibility
index: true
order: 2
category:
  - Guide
---

# CPlayerVisibility

::: tabs
@tab Lua
# Constructor
```lua
CPlayerVisibility(ptr --[[ string ]])
```
# Properties
## VisibilityStrength 
```lua
@type number
Read: cplayervisibility.VisibilityStrength
Write: cplayervisibility.VisibilityStrength = value
```
## FogDistanceMultiplier 
```lua
@type number
Read: cplayervisibility.FogDistanceMultiplier
Write: cplayervisibility.FogDistanceMultiplier = value
```
## FogMaxDensityMultiplier 
```lua
@type number
Read: cplayervisibility.FogMaxDensityMultiplier
Write: cplayervisibility.FogMaxDensityMultiplier = value
```
## FadeTime 
```lua
@type number
Read: cplayervisibility.FadeTime
Write: cplayervisibility.FadeTime = value
```
## StartDisabled 
```lua
@type boolean
Read: cplayervisibility.StartDisabled
Write: cplayervisibility.StartDisabled = value
```
## IsEnabled 
```lua
@type boolean
Read: cplayervisibility.IsEnabled
Write: cplayervisibility.IsEnabled = value
```
## Parent 
```lua
@type CBaseEntity
Read: cplayervisibility.Parent
Write: cplayervisibility.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cplayervisibility:ToPtr()
```
## IsValid
```lua
@returns bool
cplayervisibility:IsValid()
```

:::