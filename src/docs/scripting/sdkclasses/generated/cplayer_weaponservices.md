---
title: CPlayer_WeaponServices
index: true
order: 2
category:
  - Guide
---

# CPlayer_WeaponServices

::: tabs
@tab Lua
# Constructor
```lua
CPlayer_WeaponServices(ptr --[[ string ]])
```
# Properties
## MyWeapons 
```lua
@type table
Read: cplayer_weaponservices.MyWeapons
Write: cplayer_weaponservices.MyWeapons = value
```
## ActiveWeapon (Read-Only)
```lua
@type CBasePlayerWeapon
Read: cplayer_weaponservices.ActiveWeapon
```
## LastWeapon (Read-Only)
```lua
@type CBasePlayerWeapon
Read: cplayer_weaponservices.LastWeapon
```
## Ammo 
```lua
@type table
Read: cplayer_weaponservices.Ammo
Write: cplayer_weaponservices.Ammo = value
```
## PreventWeaponPickup 
```lua
@type boolean
Read: cplayer_weaponservices.PreventWeaponPickup
Write: cplayer_weaponservices.PreventWeaponPickup = value
```
## Parent 
```lua
@type CPlayerPawnComponent
Read: cplayer_weaponservices.Parent
Write: cplayer_weaponservices.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cplayer_weaponservices:ToPtr()
```
## IsValid
```lua
@returns bool
cplayer_weaponservices:IsValid()
```

:::