---
title: CRagdollProp
index: true
order: 2
category:
  - Guide
---

# CRagdollProp

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CRagdollProp(ptr)
```
# Properties
## Ragdoll (Read-Only)
```lua
--- @type ragdoll_t
Read: cragdollprop.Ragdoll
```
## StartDisabled 
```lua
--- @type boolean
Read: cragdollprop.StartDisabled
Write: cragdollprop.StartDisabled = value
```
## RagPos (Read-Only)
```lua
--- @type table
Read: cragdollprop.RagPos
```
## RagAngles (Read-Only)
```lua
--- @type table
Read: cragdollprop.RagAngles
```
## RagdollSource (Read-Only)
```lua
--- @type CBaseEntity
Read: cragdollprop.RagdollSource
```
## LastUpdateTickCount 
```lua
--- @type number
Read: cragdollprop.LastUpdateTickCount
Write: cragdollprop.LastUpdateTickCount = value
```
## AllAsleep 
```lua
--- @type boolean
Read: cragdollprop.AllAsleep
Write: cragdollprop.AllAsleep = value
```
## FirstCollisionAfterLaunch 
```lua
--- @type boolean
Read: cragdollprop.FirstCollisionAfterLaunch
Write: cragdollprop.FirstCollisionAfterLaunch = value
```
## DamageEntity (Read-Only)
```lua
--- @type CBaseEntity
Read: cragdollprop.DamageEntity
```
## Killer (Read-Only)
```lua
--- @type CBaseEntity
Read: cragdollprop.Killer
```
## PhysicsAttacker (Read-Only)
```lua
--- @type CBasePlayerPawn
Read: cragdollprop.PhysicsAttacker
```
## LastPhysicsInfluenceTime 
```lua
--- @type number
Read: cragdollprop.LastPhysicsInfluenceTime
Write: cragdollprop.LastPhysicsInfluenceTime = value
```
## FadeOutStartTime 
```lua
--- @type number
Read: cragdollprop.FadeOutStartTime
Write: cragdollprop.FadeOutStartTime = value
```
## FadeTime 
```lua
--- @type number
Read: cragdollprop.FadeTime
Write: cragdollprop.FadeTime = value
```
## LastOrigin 
```lua
--- @type Vector
Read: cragdollprop.LastOrigin
Write: cragdollprop.LastOrigin = value
```
## AwakeTime 
```lua
--- @type number
Read: cragdollprop.AwakeTime
Write: cragdollprop.AwakeTime = value
```
## LastOriginChangeTime 
```lua
--- @type number
Read: cragdollprop.LastOriginChangeTime
Write: cragdollprop.LastOriginChangeTime = value
```
## StrOriginClassName 
```lua
--- @type string
Read: cragdollprop.StrOriginClassName
Write: cragdollprop.StrOriginClassName = value
```
## StrSourceClassName 
```lua
--- @type string
Read: cragdollprop.StrSourceClassName
Write: cragdollprop.StrSourceClassName = value
```
## HasBeenPhysgunned 
```lua
--- @type boolean
Read: cragdollprop.HasBeenPhysgunned
Write: cragdollprop.HasBeenPhysgunned = value
```
## ShouldTeleportPhysics 
```lua
--- @type boolean
Read: cragdollprop.ShouldTeleportPhysics
Write: cragdollprop.ShouldTeleportPhysics = value
```
## BlendWeight 
```lua
--- @type number
Read: cragdollprop.BlendWeight
Write: cragdollprop.BlendWeight = value
```
## DefaultFadeScale 
```lua
--- @type number
Read: cragdollprop.DefaultFadeScale
Write: cragdollprop.DefaultFadeScale = value
```
## RagdollMins (Read-Only)
```lua
--- @type table
Read: cragdollprop.RagdollMins
```
## RagdollMaxs (Read-Only)
```lua
--- @type table
Read: cragdollprop.RagdollMaxs
```
## ShouldDeleteActivationRecord 
```lua
--- @type boolean
Read: cragdollprop.ShouldDeleteActivationRecord
Write: cragdollprop.ShouldDeleteActivationRecord = value
```
## ValidatePoweredRagdollPose 
```lua
--- @type boolean
Read: cragdollprop.ValidatePoweredRagdollPose
Write: cragdollprop.ValidatePoweredRagdollPose = value
```
## Parent (Read-Only)
```lua
--- @type CBaseAnimGraph
Read: cragdollprop.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cragdollprop:ToPtr()
```
## IsValid
```lua
--- @return bool
cragdollprop:IsValid()
```

:::