---
title: CEnvExplosion
index: true
order: 2
category:
  - Guide
---

# CEnvExplosion

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CEnvExplosion(ptr)
```
# Properties
## Magnitude 
```lua
--- @type number
Read: cenvexplosion.Magnitude
Write: cenvexplosion.Magnitude = value
```
## PlayerDamage 
```lua
--- @type number
Read: cenvexplosion.PlayerDamage
Write: cenvexplosion.PlayerDamage = value
```
## RadiusOverride 
```lua
--- @type number
Read: cenvexplosion.RadiusOverride
Write: cenvexplosion.RadiusOverride = value
```
## InnerRadius 
```lua
--- @type number
Read: cenvexplosion.InnerRadius
Write: cenvexplosion.InnerRadius = value
```
## SpriteScale 
```lua
--- @type number
Read: cenvexplosion.SpriteScale
Write: cenvexplosion.SpriteScale = value
```
## DamageForce 
```lua
--- @type number
Read: cenvexplosion.DamageForce
Write: cenvexplosion.DamageForce = value
```
## Inflictor (Read-Only)
```lua
--- @type CBaseEntity
Read: cenvexplosion.Inflictor
```
## CustomDamageType 
```lua
--- @type number
Read: cenvexplosion.CustomDamageType
Write: cenvexplosion.CustomDamageType = value
```
## CreateDebris 
```lua
--- @type boolean
Read: cenvexplosion.CreateDebris
Write: cenvexplosion.CreateDebris = value
```
## ExplosionType 
```lua
--- @type string
Read: cenvexplosion.ExplosionType
Write: cenvexplosion.ExplosionType = value
```
## CustomEffectName 
```lua
--- @type string
Read: cenvexplosion.CustomEffectName
Write: cenvexplosion.CustomEffectName = value
```
## CustomSoundName 
```lua
--- @type string
Read: cenvexplosion.CustomSoundName
Write: cenvexplosion.CustomSoundName = value
```
## ClassIgnore 
```lua
--- @type number
Read: cenvexplosion.ClassIgnore
Write: cenvexplosion.ClassIgnore = value
```
## ClassIgnore2 
```lua
--- @type number
Read: cenvexplosion.ClassIgnore2
Write: cenvexplosion.ClassIgnore2 = value
```
## EntityIgnoreName 
```lua
--- @type string
Read: cenvexplosion.EntityIgnoreName
Write: cenvexplosion.EntityIgnoreName = value
```
## EntityIgnore (Read-Only)
```lua
--- @type CBaseEntity
Read: cenvexplosion.EntityIgnore
```
## Parent (Read-Only)
```lua
--- @type CModelPointEntity
Read: cenvexplosion.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cenvexplosion:ToPtr()
```
## IsValid
```lua
--- @return bool
cenvexplosion:IsValid()
```

:::