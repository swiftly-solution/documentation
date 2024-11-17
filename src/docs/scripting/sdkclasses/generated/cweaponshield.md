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
--- @param ptr string
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
--- @return string
cweaponshield:ToPtr()
```
## IsValid
```lua
--- @return bool
cweaponshield:IsValid()
```

:::