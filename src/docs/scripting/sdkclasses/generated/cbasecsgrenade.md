---
title: CBaseCSGrenade
index: true
order: 2
category:
  - Guide
---

# CBaseCSGrenade

::: tabs
@tab Lua
# Constructor
```lua
CBaseCSGrenade(ptr --[[ string ]])
```
# Properties
## Redraw 
```lua
@type boolean
Read: cbasecsgrenade.Redraw
Write: cbasecsgrenade.Redraw = value
```
## IsHeldByPlayer 
```lua
@type boolean
Read: cbasecsgrenade.IsHeldByPlayer
Write: cbasecsgrenade.IsHeldByPlayer = value
```
## PinPulled 
```lua
@type boolean
Read: cbasecsgrenade.PinPulled
Write: cbasecsgrenade.PinPulled = value
```
## JumpThrow 
```lua
@type boolean
Read: cbasecsgrenade.JumpThrow
Write: cbasecsgrenade.JumpThrow = value
```
## ThrowAnimating 
```lua
@type boolean
Read: cbasecsgrenade.ThrowAnimating
Write: cbasecsgrenade.ThrowAnimating = value
```
## ThrowTime 
```lua
@type number
Read: cbasecsgrenade.ThrowTime
Write: cbasecsgrenade.ThrowTime = value
```
## ThrowStrength 
```lua
@type number
Read: cbasecsgrenade.ThrowStrength
Write: cbasecsgrenade.ThrowStrength = value
```
## ThrowStrengthApproach 
```lua
@type number
Read: cbasecsgrenade.ThrowStrengthApproach
Write: cbasecsgrenade.ThrowStrengthApproach = value
```
## DropTime 
```lua
@type number
Read: cbasecsgrenade.DropTime
Write: cbasecsgrenade.DropTime = value
```
## PinPullTime 
```lua
@type number
Read: cbasecsgrenade.PinPullTime
Write: cbasecsgrenade.PinPullTime = value
```
## JustPulledPin 
```lua
@type boolean
Read: cbasecsgrenade.JustPulledPin
Write: cbasecsgrenade.JustPulledPin = value
```
## NextHoldTick 
```lua
@type number
Read: cbasecsgrenade.NextHoldTick
Write: cbasecsgrenade.NextHoldTick = value
```
## NextHoldFrac 
```lua
@type number
Read: cbasecsgrenade.NextHoldFrac
Write: cbasecsgrenade.NextHoldFrac = value
```
## SwitchToWeaponAfterThrow (Read-Only)
```lua
@type CCSWeaponBase
Read: cbasecsgrenade.SwitchToWeaponAfterThrow
```
## Parent 
```lua
@type CCSWeaponBase
Read: cbasecsgrenade.Parent
Write: cbasecsgrenade.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cbasecsgrenade:ToPtr()
```
## IsValid
```lua
@returns bool
cbasecsgrenade:IsValid()
```

:::