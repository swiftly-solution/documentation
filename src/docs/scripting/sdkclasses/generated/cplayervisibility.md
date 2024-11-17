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
--- @param ptr string
CPlayerVisibility(ptr)
```
# Properties
## VisibilityStrength 
```lua
--- @type number
Read: cplayervisibility.VisibilityStrength
Write: cplayervisibility.VisibilityStrength = value
```
## FogDistanceMultiplier 
```lua
--- @type number
Read: cplayervisibility.FogDistanceMultiplier
Write: cplayervisibility.FogDistanceMultiplier = value
```
## FogMaxDensityMultiplier 
```lua
--- @type number
Read: cplayervisibility.FogMaxDensityMultiplier
Write: cplayervisibility.FogMaxDensityMultiplier = value
```
## FadeTime 
```lua
--- @type number
Read: cplayervisibility.FadeTime
Write: cplayervisibility.FadeTime = value
```
## StartDisabled 
```lua
--- @type boolean
Read: cplayervisibility.StartDisabled
Write: cplayervisibility.StartDisabled = value
```
## IsEnabled 
```lua
--- @type boolean
Read: cplayervisibility.IsEnabled
Write: cplayervisibility.IsEnabled = value
```
## Parent (Read-Only)
```lua
--- @type CBaseEntity
Read: cplayervisibility.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cplayervisibility:ToPtr()
```
## IsValid
```lua
--- @return bool
cplayervisibility:IsValid()
```

:::