---
title: CCSPlayer_ActionTrackingServices
index: true
order: 2
category:
  - Guide
---

# CCSPlayer_ActionTrackingServices

::: tabs
@tab Lua
# Constructor
```lua
CCSPlayer_ActionTrackingServices(ptr --[[ string ]])
```
# Properties
## LastWeaponBeforeC4AutoSwitch (Read-Only)
```lua
@type CBasePlayerWeapon
Read: ccsplayer_actiontrackingservices.LastWeaponBeforeC4AutoSwitch
```
## IsRescuing 
```lua
@type boolean
Read: ccsplayer_actiontrackingservices.IsRescuing
Write: ccsplayer_actiontrackingservices.IsRescuing = value
```
## WeaponPurchasesThisMatch 
```lua
@type WeaponPurchaseTracker_t
Read: ccsplayer_actiontrackingservices.WeaponPurchasesThisMatch
Write: ccsplayer_actiontrackingservices.WeaponPurchasesThisMatch = value
```
## WeaponPurchasesThisRound 
```lua
@type WeaponPurchaseTracker_t
Read: ccsplayer_actiontrackingservices.WeaponPurchasesThisRound
Write: ccsplayer_actiontrackingservices.WeaponPurchasesThisRound = value
```
## Parent 
```lua
@type CPlayerPawnComponent
Read: ccsplayer_actiontrackingservices.Parent
Write: ccsplayer_actiontrackingservices.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
ccsplayer_actiontrackingservices:ToPtr()
```
## IsValid
```lua
@returns bool
ccsplayer_actiontrackingservices:IsValid()
```

:::