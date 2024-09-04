---
title: CFire
index: true
order: 2
category:
  - Guide
---

# CFire

::: tabs
@tab Lua
# Constructor
```lua
CFire(ptr --[[ string ]])
```
# Properties
## Effect (Read-Only)
```lua
@type CBaseFire
Read: cfire.Effect
```
## Owner (Read-Only)
```lua
@type CBaseEntity
Read: cfire.Owner
```
## FireType 
```lua
@type number
Read: cfire.FireType
Write: cfire.FireType = value
```
## Fuel 
```lua
@type number
Read: cfire.Fuel
Write: cfire.Fuel = value
```
## DamageTime 
```lua
@type number
Read: cfire.DamageTime
Write: cfire.DamageTime = value
```
## LastDamage 
```lua
@type number
Read: cfire.LastDamage
Write: cfire.LastDamage = value
```
## FireSize 
```lua
@type number
Read: cfire.FireSize
Write: cfire.FireSize = value
```
## LastNavUpdateTime 
```lua
@type number
Read: cfire.LastNavUpdateTime
Write: cfire.LastNavUpdateTime = value
```
## HeatLevel 
```lua
@type number
Read: cfire.HeatLevel
Write: cfire.HeatLevel = value
```
## HeatAbsorb 
```lua
@type number
Read: cfire.HeatAbsorb
Write: cfire.HeatAbsorb = value
```
## DamageScale 
```lua
@type number
Read: cfire.DamageScale
Write: cfire.DamageScale = value
```
## MaxHeat 
```lua
@type number
Read: cfire.MaxHeat
Write: cfire.MaxHeat = value
```
## LastHeatLevel 
```lua
@type number
Read: cfire.LastHeatLevel
Write: cfire.LastHeatLevel = value
```
## AttackTime 
```lua
@type number
Read: cfire.AttackTime
Write: cfire.AttackTime = value
```
## Enabled 
```lua
@type boolean
Read: cfire.Enabled
Write: cfire.Enabled = value
```
## StartDisabled 
```lua
@type boolean
Read: cfire.StartDisabled
Write: cfire.StartDisabled = value
```
## DidActivate 
```lua
@type boolean
Read: cfire.DidActivate
Write: cfire.DidActivate = value
```
## OnIgnited (Read-Only)
```lua
@type CEntityIOOutput
Read: cfire.OnIgnited
```
## OnExtinguished (Read-Only)
```lua
@type CEntityIOOutput
Read: cfire.OnExtinguished
```
## Parent (Read-Only)
```lua
@type CBaseModelEntity
Read: cfire.Parent
```
# Functions
## ToPtr
```lua
@returns string
cfire:ToPtr()
```
## IsValid
```lua
@returns bool
cfire:IsValid()
```

:::