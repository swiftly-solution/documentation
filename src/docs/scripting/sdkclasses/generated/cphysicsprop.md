---
title: CPhysicsProp
index: true
order: 2
category:
  - Guide
---

# CPhysicsProp

::: tabs
@tab Lua
# Constructor
```lua
CPhysicsProp(ptr --[[ string ]])
```
# Properties
## MotionEnabled (Read-Only)
```lua
@type CEntityIOOutput
Read: cphysicsprop.MotionEnabled
```
## OnAwakened (Read-Only)
```lua
@type CEntityIOOutput
Read: cphysicsprop.OnAwakened
```
## OnAwake (Read-Only)
```lua
@type CEntityIOOutput
Read: cphysicsprop.OnAwake
```
## OnAsleep (Read-Only)
```lua
@type CEntityIOOutput
Read: cphysicsprop.OnAsleep
```
## OnPlayerUse (Read-Only)
```lua
@type CEntityIOOutput
Read: cphysicsprop.OnPlayerUse
```
## OnOutOfWorld (Read-Only)
```lua
@type CEntityIOOutput
Read: cphysicsprop.OnOutOfWorld
```
## OnPlayerPickup (Read-Only)
```lua
@type CEntityIOOutput
Read: cphysicsprop.OnPlayerPickup
```
## ForceNavIgnore 
```lua
@type boolean
Read: cphysicsprop.ForceNavIgnore
Write: cphysicsprop.ForceNavIgnore = value
```
## NoNavmeshBlocker 
```lua
@type boolean
Read: cphysicsprop.NoNavmeshBlocker
Write: cphysicsprop.NoNavmeshBlocker = value
```
## ForceNpcExclude 
```lua
@type boolean
Read: cphysicsprop.ForceNpcExclude
Write: cphysicsprop.ForceNpcExclude = value
```
## MassScale 
```lua
@type number
Read: cphysicsprop.MassScale
Write: cphysicsprop.MassScale = value
```
## InertiaScale 
```lua
@type number
Read: cphysicsprop.InertiaScale
Write: cphysicsprop.InertiaScale = value
```
## BuoyancyScale 
```lua
@type number
Read: cphysicsprop.BuoyancyScale
Write: cphysicsprop.BuoyancyScale = value
```
## DamageType 
```lua
@type number
Read: cphysicsprop.DamageType
Write: cphysicsprop.DamageType = value
```
## DamageToEnableMotion 
```lua
@type number
Read: cphysicsprop.DamageToEnableMotion
Write: cphysicsprop.DamageToEnableMotion = value
```
## ForceToEnableMotion 
```lua
@type number
Read: cphysicsprop.ForceToEnableMotion
Write: cphysicsprop.ForceToEnableMotion = value
```
## ThrownByPlayer 
```lua
@type boolean
Read: cphysicsprop.ThrownByPlayer
Write: cphysicsprop.ThrownByPlayer = value
```
## DroppedByPlayer 
```lua
@type boolean
Read: cphysicsprop.DroppedByPlayer
Write: cphysicsprop.DroppedByPlayer = value
```
## TouchedByPlayer 
```lua
@type boolean
Read: cphysicsprop.TouchedByPlayer
Write: cphysicsprop.TouchedByPlayer = value
```
## FirstCollisionAfterLaunch 
```lua
@type boolean
Read: cphysicsprop.FirstCollisionAfterLaunch
Write: cphysicsprop.FirstCollisionAfterLaunch = value
```
## ExploitableByPlayer 
```lua
@type number
Read: cphysicsprop.ExploitableByPlayer
Write: cphysicsprop.ExploitableByPlayer = value
```
## HasBeenAwakened 
```lua
@type boolean
Read: cphysicsprop.HasBeenAwakened
Write: cphysicsprop.HasBeenAwakened = value
```
## IsOverrideProp 
```lua
@type boolean
Read: cphysicsprop.IsOverrideProp
Write: cphysicsprop.IsOverrideProp = value
```
## NextCheckDisableMotionContactsTime 
```lua
@type number
Read: cphysicsprop.NextCheckDisableMotionContactsTime
Write: cphysicsprop.NextCheckDisableMotionContactsTime = value
```
## InitialGlowState 
```lua
@type number
Read: cphysicsprop.InitialGlowState
Write: cphysicsprop.InitialGlowState = value
```
## GlowRange 
```lua
@type number
Read: cphysicsprop.GlowRange
Write: cphysicsprop.GlowRange = value
```
## GlowRangeMin 
```lua
@type number
Read: cphysicsprop.GlowRangeMin
Write: cphysicsprop.GlowRangeMin = value
```
## GlowColor 
```lua
@type Color
Read: cphysicsprop.GlowColor
Write: cphysicsprop.GlowColor = value
```
## ShouldAutoConvertBackFromDebris 
```lua
@type boolean
Read: cphysicsprop.ShouldAutoConvertBackFromDebris
Write: cphysicsprop.ShouldAutoConvertBackFromDebris = value
```
## MuteImpactEffects 
```lua
@type boolean
Read: cphysicsprop.MuteImpactEffects
Write: cphysicsprop.MuteImpactEffects = value
```
## AcceptDamageFromHeldObjects 
```lua
@type boolean
Read: cphysicsprop.AcceptDamageFromHeldObjects
Write: cphysicsprop.AcceptDamageFromHeldObjects = value
```
## EnableUseOutput 
```lua
@type boolean
Read: cphysicsprop.EnableUseOutput
Write: cphysicsprop.EnableUseOutput = value
```
## Awake 
```lua
@type boolean
Read: cphysicsprop.Awake
Write: cphysicsprop.Awake = value
```
## Parent 
```lua
@type CBreakableProp
Read: cphysicsprop.Parent
Write: cphysicsprop.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cphysicsprop:ToPtr()
```
## IsValid
```lua
@returns bool
cphysicsprop:IsValid()
```

:::