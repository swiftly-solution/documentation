---
title: CFists
index: true
order: 2
category:
  - Guide
---

# CFists

::: tabs
@tab Lua
# Constructor
```lua
CFists(ptr --[[ string ]])
```
# Properties
## PlayingUninterruptableAct 
```lua
@type boolean
Read: cfists.PlayingUninterruptableAct
Write: cfists.PlayingUninterruptableAct = value
```
## UninterruptableActivity 
```lua
@type number
Read: cfists.UninterruptableActivity
Write: cfists.UninterruptableActivity = value
```
## RestorePrevWep 
```lua
@type boolean
Read: cfists.RestorePrevWep
Write: cfists.RestorePrevWep = value
```
## WeaponBeforePrevious (Read-Only)
```lua
@type CBasePlayerWeapon
Read: cfists.WeaponBeforePrevious
```
## WeaponPrevious (Read-Only)
```lua
@type CBasePlayerWeapon
Read: cfists.WeaponPrevious
```
## DelayedHardPunchIncoming 
```lua
@type boolean
Read: cfists.DelayedHardPunchIncoming
Write: cfists.DelayedHardPunchIncoming = value
```
## DestroyAfterTaunt 
```lua
@type boolean
Read: cfists.DestroyAfterTaunt
Write: cfists.DestroyAfterTaunt = value
```
## Parent 
```lua
@type CCSWeaponBase
Read: cfists.Parent
Write: cfists.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cfists:ToPtr()
```
## IsValid
```lua
@returns bool
cfists:IsValid()
```

:::