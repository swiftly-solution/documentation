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
--- @param ptr string
CCSPlayer_ActionTrackingServices(ptr)
```
# Properties
## LastWeaponBeforeC4AutoSwitch (Read-Only)
```lua
--- @type CBasePlayerWeapon
Read: ccsplayer_actiontrackingservices.LastWeaponBeforeC4AutoSwitch
```
## IsRescuing 
```lua
--- @type boolean
Read: ccsplayer_actiontrackingservices.IsRescuing
Write: ccsplayer_actiontrackingservices.IsRescuing = value
```
## WeaponPurchasesThisMatch (Read-Only)
```lua
--- @type WeaponPurchaseTracker_t
Read: ccsplayer_actiontrackingservices.WeaponPurchasesThisMatch
```
## WeaponPurchasesThisRound (Read-Only)
```lua
--- @type WeaponPurchaseTracker_t
Read: ccsplayer_actiontrackingservices.WeaponPurchasesThisRound
```
## Parent (Read-Only)
```lua
--- @type CPlayerPawnComponent
Read: ccsplayer_actiontrackingservices.Parent
```
# Functions
## ToPtr
```lua
--- @return string
ccsplayer_actiontrackingservices:ToPtr()
```
## IsValid
```lua
--- @return bool
ccsplayer_actiontrackingservices:IsValid()
```

:::