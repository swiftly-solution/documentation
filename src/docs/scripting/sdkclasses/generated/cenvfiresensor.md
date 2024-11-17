---
title: CEnvFireSensor
index: true
order: 2
category:
  - Guide
---

# CEnvFireSensor

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CEnvFireSensor(ptr)
```
# Properties
## Enabled 
```lua
--- @type boolean
Read: cenvfiresensor.Enabled
Write: cenvfiresensor.Enabled = value
```
## HeatAtLevel 
```lua
--- @type boolean
Read: cenvfiresensor.HeatAtLevel
Write: cenvfiresensor.HeatAtLevel = value
```
## Radius 
```lua
--- @type number
Read: cenvfiresensor.Radius
Write: cenvfiresensor.Radius = value
```
## TargetLevel 
```lua
--- @type number
Read: cenvfiresensor.TargetLevel
Write: cenvfiresensor.TargetLevel = value
```
## TargetTime 
```lua
--- @type number
Read: cenvfiresensor.TargetTime
Write: cenvfiresensor.TargetTime = value
```
## LevelTime 
```lua
--- @type number
Read: cenvfiresensor.LevelTime
Write: cenvfiresensor.LevelTime = value
```
## OnHeatLevelStart (Read-Only)
```lua
--- @type CEntityIOOutput
Read: cenvfiresensor.OnHeatLevelStart
```
## OnHeatLevelEnd (Read-Only)
```lua
--- @type CEntityIOOutput
Read: cenvfiresensor.OnHeatLevelEnd
```
## Parent (Read-Only)
```lua
--- @type CBaseEntity
Read: cenvfiresensor.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cenvfiresensor:ToPtr()
```
## IsValid
```lua
--- @return bool
cenvfiresensor:IsValid()
```

:::