---
title: CBasePlayerWeapon
index: true
order: 2
category:
  - Guide
---

# CBasePlayerWeapon

::: tabs
@tab Lua
# Constructor
```lua
CBasePlayerWeapon(ptr)
```
# Properties
## NextPrimaryAttackTick 
```lua
--- @type number
Read: cbaseplayerweapon.NextPrimaryAttackTick
Write: cbaseplayerweapon.NextPrimaryAttackTick = value
```
## NextPrimaryAttackTickRatio 
```lua
--- @type number
Read: cbaseplayerweapon.NextPrimaryAttackTickRatio
Write: cbaseplayerweapon.NextPrimaryAttackTickRatio = value
```
## NextSecondaryAttackTick 
```lua
--- @type number
Read: cbaseplayerweapon.NextSecondaryAttackTick
Write: cbaseplayerweapon.NextSecondaryAttackTick = value
```
## NextSecondaryAttackTickRatio 
```lua
--- @type number
Read: cbaseplayerweapon.NextSecondaryAttackTickRatio
Write: cbaseplayerweapon.NextSecondaryAttackTickRatio = value
```
## Clip1 
```lua
--- @type number
Read: cbaseplayerweapon.Clip1
Write: cbaseplayerweapon.Clip1 = value
```
## Clip2 
```lua
--- @type number
Read: cbaseplayerweapon.Clip2
Write: cbaseplayerweapon.Clip2 = value
```
## ReserveAmmo 
```lua
--- @type table
Read: cbaseplayerweapon.ReserveAmmo
Write: cbaseplayerweapon.ReserveAmmo = value
```
## OnPlayerUse (Read-Only)
```lua
--- @type CEntityIOOutput
Read: cbaseplayerweapon.OnPlayerUse
```
## Parent (Read-Only)
```lua
--- @type CEconEntity
Read: cbaseplayerweapon.Parent
```
# Functions
## ToPtr
```lua
@returns string
cbaseplayerweapon:ToPtr()
```
## IsValid
```lua
@returns bool
cbaseplayerweapon:IsValid()
```

:::