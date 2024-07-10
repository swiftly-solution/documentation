---
title: CBaseButton
index: true
order: 2
category:
  - Guide
---

# CBaseButton

::: tabs
@tab Lua
# Constructor
```lua
CBaseButton(ptr --[[ string ]])
```
# Properties
## MoveEntitySpace 
```lua
@type QAngle
Read: cbasebutton.MoveEntitySpace
Write: cbasebutton.MoveEntitySpace = value
```
## StayPushed 
```lua
@type boolean
Read: cbasebutton.StayPushed
Write: cbasebutton.StayPushed = value
```
## Rotating 
```lua
@type boolean
Read: cbasebutton.Rotating
Write: cbasebutton.Rotating = value
```
## Ls 
```lua
@type locksound_t
Read: cbasebutton.Ls
Write: cbasebutton.Ls = value
```
## UseSound 
```lua
@type string
Read: cbasebutton.UseSound
Write: cbasebutton.UseSound = value
```
## LockedSound 
```lua
@type string
Read: cbasebutton.LockedSound
Write: cbasebutton.LockedSound = value
```
## UnlockedSound 
```lua
@type string
Read: cbasebutton.UnlockedSound
Write: cbasebutton.UnlockedSound = value
```
## OverrideAnticipationName 
```lua
@type string
Read: cbasebutton.OverrideAnticipationName
Write: cbasebutton.OverrideAnticipationName = value
```
## Locked 
```lua
@type boolean
Read: cbasebutton.Locked
Write: cbasebutton.Locked = value
```
## Disabled 
```lua
@type boolean
Read: cbasebutton.Disabled
Write: cbasebutton.Disabled = value
```
## UseLockedTime 
```lua
@type number
Read: cbasebutton.UseLockedTime
Write: cbasebutton.UseLockedTime = value
```
## SolidBsp 
```lua
@type boolean
Read: cbasebutton.SolidBsp
Write: cbasebutton.SolidBsp = value
```
## OnDamaged 
```lua
@type CEntityIOOutput
Read: cbasebutton.OnDamaged
Write: cbasebutton.OnDamaged = value
```
## OnPressed 
```lua
@type CEntityIOOutput
Read: cbasebutton.OnPressed
Write: cbasebutton.OnPressed = value
```
## OnUseLocked 
```lua
@type CEntityIOOutput
Read: cbasebutton.OnUseLocked
Write: cbasebutton.OnUseLocked = value
```
## OnIn 
```lua
@type CEntityIOOutput
Read: cbasebutton.OnIn
Write: cbasebutton.OnIn = value
```
## OnOut 
```lua
@type CEntityIOOutput
Read: cbasebutton.OnOut
Write: cbasebutton.OnOut = value
```
## State 
```lua
@type number
Read: cbasebutton.State
Write: cbasebutton.State = value
```
## Constraint (Read-Only)
```lua
@type CEntityInstance
Read: cbasebutton.Constraint
```
## ConstraintParent (Read-Only)
```lua
@type CEntityInstance
Read: cbasebutton.ConstraintParent
```
## ForceNpcExclude 
```lua
@type boolean
Read: cbasebutton.ForceNpcExclude
Write: cbasebutton.ForceNpcExclude = value
```
## GlowEntity 
```lua
@type string
Read: cbasebutton.GlowEntity
Write: cbasebutton.GlowEntity = value
```
## GlowEntity1 (Read-Only)
```lua
@type CBaseModelEntity
Read: cbasebutton.GlowEntity1
```
## Usable 
```lua
@type boolean
Read: cbasebutton.Usable
Write: cbasebutton.Usable = value
```
## DisplayText 
```lua
@type string
Read: cbasebutton.DisplayText
Write: cbasebutton.DisplayText = value
```
## Parent 
```lua
@type CBaseToggle
Read: cbasebutton.Parent
Write: cbasebutton.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cbasebutton:ToPtr()
```
## IsValid
```lua
@returns bool
cbasebutton:IsValid()
```

:::