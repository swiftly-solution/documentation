---
title: CTakeDamageInfo
index: true
order: 2
category:
  - Guide
---

# CTakeDamageInfo

::: tabs
@tab Lua
# Constructor
```lua
CTakeDamageInfo(ptr --[[ string ]])
```
# Properties
## DamageForce 
```lua
@type Vector
Read: ctakedamageinfo.DamageForce
Write: ctakedamageinfo.DamageForce = value
```
## DamagePosition 
```lua
@type Vector
Read: ctakedamageinfo.DamagePosition
Write: ctakedamageinfo.DamagePosition = value
```
## ReportedPosition 
```lua
@type Vector
Read: ctakedamageinfo.ReportedPosition
Write: ctakedamageinfo.ReportedPosition = value
```
## DamageDirection 
```lua
@type Vector
Read: ctakedamageinfo.DamageDirection
Write: ctakedamageinfo.DamageDirection = value
```
## Inflictor (Read-Only)
```lua
@type CBaseEntity
Read: ctakedamageinfo.Inflictor
```
## Attacker (Read-Only)
```lua
@type CBaseEntity
Read: ctakedamageinfo.Attacker
```
## Ability (Read-Only)
```lua
@type CBaseEntity
Read: ctakedamageinfo.Ability
```
## Damage 
```lua
@type number
Read: ctakedamageinfo.Damage
Write: ctakedamageinfo.Damage = value
```
## TotalledDamage 
```lua
@type number
Read: ctakedamageinfo.TotalledDamage
Write: ctakedamageinfo.TotalledDamage = value
```
## BitsDamageType 
```lua
@type number
Read: ctakedamageinfo.BitsDamageType
Write: ctakedamageinfo.BitsDamageType = value
```
## DamageCustom 
```lua
@type number
Read: ctakedamageinfo.DamageCustom
Write: ctakedamageinfo.DamageCustom = value
```
## AmmoType 
```lua
@type number
Read: ctakedamageinfo.AmmoType
Write: ctakedamageinfo.AmmoType = value
```
## OriginalDamage 
```lua
@type number
Read: ctakedamageinfo.OriginalDamage
Write: ctakedamageinfo.OriginalDamage = value
```
## ShouldBleed 
```lua
@type boolean
Read: ctakedamageinfo.ShouldBleed
Write: ctakedamageinfo.ShouldBleed = value
```
## ShouldSpark 
```lua
@type boolean
Read: ctakedamageinfo.ShouldSpark
Write: ctakedamageinfo.ShouldSpark = value
```
## DamageFlags 
```lua
@type number
Read: ctakedamageinfo.DamageFlags
Write: ctakedamageinfo.DamageFlags = value
```
## NumObjectsPenetrated 
```lua
@type number
Read: ctakedamageinfo.NumObjectsPenetrated
Write: ctakedamageinfo.NumObjectsPenetrated = value
```
## InTakeDamageFlow 
```lua
@type boolean
Read: ctakedamageinfo.InTakeDamageFlow
Write: ctakedamageinfo.InTakeDamageFlow = value
```
# Functions
## ToPtr
```lua
@returns string
ctakedamageinfo:ToPtr()
```
## IsValid
```lua
@returns bool
ctakedamageinfo:IsValid()
```

:::