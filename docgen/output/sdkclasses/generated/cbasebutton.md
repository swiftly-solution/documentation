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
## Ls (Read-Only)
```lua
@type locksound_t
Read: cbasebutton.Ls
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
## OnDamaged (Read-Only)
```lua
@type CEntityIOOutput
Read: cbasebutton.OnDamaged
```
## OnPressed (Read-Only)
```lua
@type CEntityIOOutput
Read: cbasebutton.OnPressed
```
## OnUseLocked (Read-Only)
```lua
@type CEntityIOOutput
Read: cbasebutton.OnUseLocked
```
## OnIn (Read-Only)
```lua
@type CEntityIOOutput
Read: cbasebutton.OnIn
```
## OnOut (Read-Only)
```lua
@type CEntityIOOutput
Read: cbasebutton.OnOut
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
## Parent (Read-Only)
```lua
@type CBaseToggle
Read: cbasebutton.Parent
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