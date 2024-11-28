---
title: Weapon
index: true
order: 2
category:
  - Guide
---

# Weapon
A weapon is an object which stores informations about a player's weapon.
::: tabs
@tab Lua
# Constructor
```lua
--- @param playerid number
--- @param ptr string
Weapon(playerid, ptr)
```
# Properties
There are no properties available for this class.
# Functions
## CBasePlayerWeapon
```lua
--- @return CBasePlayerWeapon
weapon:CBasePlayerWeapon()
```
## CCSWeaponBase
```lua
--- @return CCSWeaponBase
weapon:CCSWeaponBase()
```
## CBasePlayerWeaponVData
```lua
--- @return CBasePlayerWeaponVData
weapon:CBasePlayerWeaponVData()
```
## CCSWeaponBaseVData
```lua
--- @return CCSWeaponBaseVData
weapon:CCSWeaponBaseVData()
```
## SetDefaultAttributes
```lua
--- @return void
weapon:SetDefaultAttributes()
```
## Remove
```lua
--- @return void
weapon:Remove()
```
## Drop
```lua
--- @return void
weapon:Drop()
```

:::