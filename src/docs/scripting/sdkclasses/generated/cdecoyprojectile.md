---
title: CDecoyProjectile
index: true
order: 2
category:
  - Guide
---

# CDecoyProjectile

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CDecoyProjectile(ptr)
```
# Properties
## DecoyShotTick 
```lua
--- @type number
Read: cdecoyprojectile.DecoyShotTick
Write: cdecoyprojectile.DecoyShotTick = value
```
## ShotsRemaining 
```lua
--- @type number
Read: cdecoyprojectile.ShotsRemaining
Write: cdecoyprojectile.ShotsRemaining = value
```
## ExpireTime 
```lua
--- @type number
Read: cdecoyprojectile.ExpireTime
Write: cdecoyprojectile.ExpireTime = value
```
## DecoyWeaponDefIndex 
```lua
--- @type number
Read: cdecoyprojectile.DecoyWeaponDefIndex
Write: cdecoyprojectile.DecoyWeaponDefIndex = value
```
## Parent (Read-Only)
```lua
--- @type CBaseCSGrenadeProjectile
Read: cdecoyprojectile.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cdecoyprojectile:ToPtr()
```
## IsValid
```lua
--- @return bool
cdecoyprojectile:IsValid()
```

:::