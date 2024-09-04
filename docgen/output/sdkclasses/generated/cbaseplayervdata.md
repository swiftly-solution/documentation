---
title: CBasePlayerVData
index: true
order: 2
category:
  - Guide
---

# CBasePlayerVData

::: tabs
@tab Lua
# Constructor
```lua
CBasePlayerVData(ptr --[[ string ]])
```
# Properties
## HeadDamageMultiplier (Read-Only)
```lua
@type CSkillFloat
Read: cbaseplayervdata.HeadDamageMultiplier
```
## ChestDamageMultiplier (Read-Only)
```lua
@type CSkillFloat
Read: cbaseplayervdata.ChestDamageMultiplier
```
## StomachDamageMultiplier (Read-Only)
```lua
@type CSkillFloat
Read: cbaseplayervdata.StomachDamageMultiplier
```
## ArmDamageMultiplier (Read-Only)
```lua
@type CSkillFloat
Read: cbaseplayervdata.ArmDamageMultiplier
```
## LegDamageMultiplier (Read-Only)
```lua
@type CSkillFloat
Read: cbaseplayervdata.LegDamageMultiplier
```
## HoldBreathTime 
```lua
@type number
Read: cbaseplayervdata.HoldBreathTime
Write: cbaseplayervdata.HoldBreathTime = value
```
## DrowningDamageInterval 
```lua
@type number
Read: cbaseplayervdata.DrowningDamageInterval
Write: cbaseplayervdata.DrowningDamageInterval = value
```
## DrowningDamageInitial 
```lua
@type number
Read: cbaseplayervdata.DrowningDamageInitial
Write: cbaseplayervdata.DrowningDamageInitial = value
```
## DrowningDamageMax 
```lua
@type number
Read: cbaseplayervdata.DrowningDamageMax
Write: cbaseplayervdata.DrowningDamageMax = value
```
## WaterSpeed 
```lua
@type number
Read: cbaseplayervdata.WaterSpeed
Write: cbaseplayervdata.WaterSpeed = value
```
## UseRange 
```lua
@type number
Read: cbaseplayervdata.UseRange
Write: cbaseplayervdata.UseRange = value
```
## UseAngleTolerance 
```lua
@type number
Read: cbaseplayervdata.UseAngleTolerance
Write: cbaseplayervdata.UseAngleTolerance = value
```
## CrouchTime 
```lua
@type number
Read: cbaseplayervdata.CrouchTime
Write: cbaseplayervdata.CrouchTime = value
```
## Parent (Read-Only)
```lua
@type CEntitySubclassVDataBase
Read: cbaseplayervdata.Parent
```
# Functions
## ToPtr
```lua
@returns string
cbaseplayervdata:ToPtr()
```
## IsValid
```lua
@returns bool
cbaseplayervdata:IsValid()
```

:::