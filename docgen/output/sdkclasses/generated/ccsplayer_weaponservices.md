---
title: CCSPlayer_WeaponServices
index: true
order: 2
category:
  - Guide
---

# CCSPlayer_WeaponServices

::: tabs
@tab Lua
# Constructor
```lua
CCSPlayer_WeaponServices(ptr --[[ string ]])
```
# Properties
## NextAttack 
```lua
@type number
Read: ccsplayer_weaponservices.NextAttack
Write: ccsplayer_weaponservices.NextAttack = value
```
## IsLookingAtWeapon 
```lua
@type boolean
Read: ccsplayer_weaponservices.IsLookingAtWeapon
Write: ccsplayer_weaponservices.IsLookingAtWeapon = value
```
## IsHoldingLookAtWeapon 
```lua
@type boolean
Read: ccsplayer_weaponservices.IsHoldingLookAtWeapon
Write: ccsplayer_weaponservices.IsHoldingLookAtWeapon = value
```
## SavedWeapon (Read-Only)
```lua
@type CBasePlayerWeapon
Read: ccsplayer_weaponservices.SavedWeapon
```
## TimeToMelee 
```lua
@type number
Read: ccsplayer_weaponservices.TimeToMelee
Write: ccsplayer_weaponservices.TimeToMelee = value
```
## TimeToSecondary 
```lua
@type number
Read: ccsplayer_weaponservices.TimeToSecondary
Write: ccsplayer_weaponservices.TimeToSecondary = value
```
## TimeToPrimary 
```lua
@type number
Read: ccsplayer_weaponservices.TimeToPrimary
Write: ccsplayer_weaponservices.TimeToPrimary = value
```
## TimeToSniperRifle 
```lua
@type number
Read: ccsplayer_weaponservices.TimeToSniperRifle
Write: ccsplayer_weaponservices.TimeToSniperRifle = value
```
## IsBeingGivenItem 
```lua
@type boolean
Read: ccsplayer_weaponservices.IsBeingGivenItem
Write: ccsplayer_weaponservices.IsBeingGivenItem = value
```
## IsPickingUpItemWithUse 
```lua
@type boolean
Read: ccsplayer_weaponservices.IsPickingUpItemWithUse
Write: ccsplayer_weaponservices.IsPickingUpItemWithUse = value
```
## PickedUpWeapon 
```lua
@type boolean
Read: ccsplayer_weaponservices.PickedUpWeapon
Write: ccsplayer_weaponservices.PickedUpWeapon = value
```
## DisableAutoDeploy 
```lua
@type boolean
Read: ccsplayer_weaponservices.DisableAutoDeploy
Write: ccsplayer_weaponservices.DisableAutoDeploy = value
```
## IsPickingUpGroundWeapon 
```lua
@type boolean
Read: ccsplayer_weaponservices.IsPickingUpGroundWeapon
Write: ccsplayer_weaponservices.IsPickingUpGroundWeapon = value
```
## OldShootPositionHistoryCount 
```lua
@type number
Read: ccsplayer_weaponservices.OldShootPositionHistoryCount
Write: ccsplayer_weaponservices.OldShootPositionHistoryCount = value
```
## OldInputHistoryCount 
```lua
@type number
Read: ccsplayer_weaponservices.OldInputHistoryCount
Write: ccsplayer_weaponservices.OldInputHistoryCount = value
```
## Parent 
```lua
@type CPlayer_WeaponServices
Read: ccsplayer_weaponservices.Parent
Write: ccsplayer_weaponservices.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
ccsplayer_weaponservices:ToPtr()
```
## IsValid
```lua
@returns bool
ccsplayer_weaponservices:IsValid()
```

:::