---
title: CWeaponShield
index: true
order: 2
category:
  - Guide
---

# CWeaponShield

::: tabs
@tab Lua
# Constructor
```lua
CWeaponShield(ptr)
```
# Properties
## BulletDamageAbsorbed 
```lua
--- @type number
Read: cweaponshield.BulletDamageAbsorbed
Write: cweaponshield.BulletDamageAbsorbed = value
```
## LastBulletHitSoundTime 
```lua
--- @type number
Read: cweaponshield.LastBulletHitSoundTime
Write: cweaponshield.LastBulletHitSoundTime = value
```
## DisplayHealth 
```lua
--- @type number
Read: cweaponshield.DisplayHealth
Write: cweaponshield.DisplayHealth = value
```
## Parent (Read-Only)
```lua
--- @type CCSWeaponBaseGun
Read: cweaponshield.Parent
```
# Functions
## ToPtr
```lua
@returns string
cweaponshield:ToPtr()
```
## IsValid
```lua
@returns bool
cweaponshield:IsValid()
```

:::