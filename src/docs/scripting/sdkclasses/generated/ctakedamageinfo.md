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
--- @param ptr string
CTakeDamageInfo(ptr)
```
# Properties
## DamageForce 
```lua
--- @type Vector
Read: ctakedamageinfo.DamageForce
Write: ctakedamageinfo.DamageForce = value
```
## DamagePosition 
```lua
--- @type Vector
Read: ctakedamageinfo.DamagePosition
Write: ctakedamageinfo.DamagePosition = value
```
## ReportedPosition 
```lua
--- @type Vector
Read: ctakedamageinfo.ReportedPosition
Write: ctakedamageinfo.ReportedPosition = value
```
## DamageDirection 
```lua
--- @type Vector
Read: ctakedamageinfo.DamageDirection
Write: ctakedamageinfo.DamageDirection = value
```
## Damage 
```lua
--- @type number
Read: ctakedamageinfo.Damage
Write: ctakedamageinfo.Damage = value
```
## TotalledDamage 
```lua
--- @type number
Read: ctakedamageinfo.TotalledDamage
Write: ctakedamageinfo.TotalledDamage = value
```
## TotalledDamageAbsorbed 
```lua
--- @type number
Read: ctakedamageinfo.TotalledDamageAbsorbed
Write: ctakedamageinfo.TotalledDamageAbsorbed = value
```
## BitsDamageType 
```lua
--- @type number
Read: ctakedamageinfo.BitsDamageType
Write: ctakedamageinfo.BitsDamageType = value
```
## DamageCustom 
```lua
--- @type number
Read: ctakedamageinfo.DamageCustom
Write: ctakedamageinfo.DamageCustom = value
```
## AmmoType 
```lua
--- @type number
Read: ctakedamageinfo.AmmoType
Write: ctakedamageinfo.AmmoType = value
```
## OriginalDamage 
```lua
--- @type number
Read: ctakedamageinfo.OriginalDamage
Write: ctakedamageinfo.OriginalDamage = value
```
## ShouldBleed 
```lua
--- @type boolean
Read: ctakedamageinfo.ShouldBleed
Write: ctakedamageinfo.ShouldBleed = value
```
## ShouldSpark 
```lua
--- @type boolean
Read: ctakedamageinfo.ShouldSpark
Write: ctakedamageinfo.ShouldSpark = value
```
## DamageAbsorbed 
```lua
--- @type number
Read: ctakedamageinfo.DamageAbsorbed
Write: ctakedamageinfo.DamageAbsorbed = value
```
## DamageFlags 
```lua
--- @type number
Read: ctakedamageinfo.DamageFlags
Write: ctakedamageinfo.DamageFlags = value
```
## NumObjectsPenetrated 
```lua
--- @type number
Read: ctakedamageinfo.NumObjectsPenetrated
Write: ctakedamageinfo.NumObjectsPenetrated = value
```
## FriendlyFireDamageReductionRatio 
```lua
--- @type number
Read: ctakedamageinfo.FriendlyFireDamageReductionRatio
Write: ctakedamageinfo.FriendlyFireDamageReductionRatio = value
```
## InTakeDamageFlow 
```lua
--- @type boolean
Read: ctakedamageinfo.InTakeDamageFlow
Write: ctakedamageinfo.InTakeDamageFlow = value
```
# Functions
## ToPtr
```lua
--- @return string
ctakedamageinfo:ToPtr()
```
## IsValid
```lua
--- @return bool
ctakedamageinfo:IsValid()
```

:::