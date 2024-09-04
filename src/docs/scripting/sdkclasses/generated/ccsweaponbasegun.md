---
title: CCSWeaponBaseGun
index: true
order: 2
category:
  - Guide
---

# CCSWeaponBaseGun

::: tabs
@tab Lua
# Constructor
```lua
CCSWeaponBaseGun(ptr --[[ string ]])
```
# Properties
## ZoomLevel 
```lua
@type number
Read: ccsweaponbasegun.ZoomLevel
Write: ccsweaponbasegun.ZoomLevel = value
```
## BurstShotsRemaining 
```lua
@type number
Read: ccsweaponbasegun.BurstShotsRemaining
Write: ccsweaponbasegun.BurstShotsRemaining = value
```
## SilencedModelIndex 
```lua
@type number
Read: ccsweaponbasegun.SilencedModelIndex
Write: ccsweaponbasegun.SilencedModelIndex = value
```
## InPrecache 
```lua
@type boolean
Read: ccsweaponbasegun.InPrecache
Write: ccsweaponbasegun.InPrecache = value
```
## NeedsBoltAction 
```lua
@type boolean
Read: ccsweaponbasegun.NeedsBoltAction
Write: ccsweaponbasegun.NeedsBoltAction = value
```
## SkillReloadAvailable 
```lua
@type boolean
Read: ccsweaponbasegun.SkillReloadAvailable
Write: ccsweaponbasegun.SkillReloadAvailable = value
```
## SkillReloadLiftedReloadKey 
```lua
@type boolean
Read: ccsweaponbasegun.SkillReloadLiftedReloadKey
Write: ccsweaponbasegun.SkillReloadLiftedReloadKey = value
```
## SkillBoltInterruptAvailable 
```lua
@type boolean
Read: ccsweaponbasegun.SkillBoltInterruptAvailable
Write: ccsweaponbasegun.SkillBoltInterruptAvailable = value
```
## SkillBoltLiftedFireKey 
```lua
@type boolean
Read: ccsweaponbasegun.SkillBoltLiftedFireKey
Write: ccsweaponbasegun.SkillBoltLiftedFireKey = value
```
## Parent (Read-Only)
```lua
@type CCSWeaponBase
Read: ccsweaponbasegun.Parent
```
# Functions
## ToPtr
```lua
@returns string
ccsweaponbasegun:ToPtr()
```
## IsValid
```lua
@returns bool
ccsweaponbasegun:IsValid()
```

:::