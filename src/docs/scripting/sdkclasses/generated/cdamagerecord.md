---
title: CDamageRecord
index: true
order: 2
category:
  - Guide
---

# CDamageRecord

::: tabs
@tab Lua
# Constructor
```lua
CDamageRecord(ptr)
```
# Properties
## PlayerDamager (Read-Only)
```lua
--- @type CCSPlayerPawn
Read: cdamagerecord.PlayerDamager
```
## PlayerRecipient (Read-Only)
```lua
--- @type CCSPlayerPawn
Read: cdamagerecord.PlayerRecipient
```
## PlayerControllerDamager (Read-Only)
```lua
--- @type CCSPlayerController
Read: cdamagerecord.PlayerControllerDamager
```
## PlayerControllerRecipient (Read-Only)
```lua
--- @type CCSPlayerController
Read: cdamagerecord.PlayerControllerRecipient
```
## PlayerDamagerName 
```lua
--- @type string
Read: cdamagerecord.PlayerDamagerName
Write: cdamagerecord.PlayerDamagerName = value
```
## PlayerRecipientName 
```lua
--- @type string
Read: cdamagerecord.PlayerRecipientName
Write: cdamagerecord.PlayerRecipientName = value
```
## DamagerXuid 
```lua
--- @type number
Read: cdamagerecord.DamagerXuid
Write: cdamagerecord.DamagerXuid = value
```
## RecipientXuid 
```lua
--- @type number
Read: cdamagerecord.RecipientXuid
Write: cdamagerecord.RecipientXuid = value
```
## BulletsDamage 
```lua
--- @type number
Read: cdamagerecord.BulletsDamage
Write: cdamagerecord.BulletsDamage = value
```
## Damage 
```lua
--- @type number
Read: cdamagerecord.Damage
Write: cdamagerecord.Damage = value
```
## ActualHealthRemoved 
```lua
--- @type number
Read: cdamagerecord.ActualHealthRemoved
Write: cdamagerecord.ActualHealthRemoved = value
```
## NumHits 
```lua
--- @type number
Read: cdamagerecord.NumHits
Write: cdamagerecord.NumHits = value
```
## LastBulletUpdate 
```lua
--- @type number
Read: cdamagerecord.LastBulletUpdate
Write: cdamagerecord.LastBulletUpdate = value
```
## IsOtherEnemy 
```lua
--- @type boolean
Read: cdamagerecord.IsOtherEnemy
Write: cdamagerecord.IsOtherEnemy = value
```
## KillType 
```lua
--- @type number
Read: cdamagerecord.KillType
Write: cdamagerecord.KillType = value
```
# Functions
## ToPtr
```lua
@returns string
cdamagerecord:ToPtr()
```
## IsValid
```lua
@returns bool
cdamagerecord:IsValid()
```

:::