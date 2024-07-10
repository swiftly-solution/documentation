---
title: CNewParticleEffect
index: true
order: 2
category:
  - Guide
---

# CNewParticleEffect

::: tabs
@tab Lua
# Constructor
```lua
CNewParticleEffect(ptr --[[ string ]])
```
# Properties
## Next (Read-Only)
```lua
@type CNewParticleEffect
Read: cnewparticleeffect.Next
```
## Prev (Read-Only)
```lua
@type CNewParticleEffect
Read: cnewparticleeffect.Prev
```
## Particles (Read-Only)
```lua
@type IParticleCollection
Read: cnewparticleeffect.Particles
```
## DebugName 
```lua
@type string
Read: cnewparticleeffect.DebugName
Write: cnewparticleeffect.DebugName = value
```
## SortOrigin 
```lua
@type Vector
Read: cnewparticleeffect.SortOrigin
Write: cnewparticleeffect.SortOrigin = value
```
## Scale 
```lua
@type number
Read: cnewparticleeffect.Scale
Write: cnewparticleeffect.Scale = value
```
## Owner (Read-Only)
```lua
@type PARTICLE_EHANDLE__
Read: cnewparticleeffect.Owner
```
## OwningParticleProperty (Read-Only)
```lua
@type CParticleProperty
Read: cnewparticleeffect.OwningParticleProperty
```
## FreezeTransitionStart 
```lua
@type number
Read: cnewparticleeffect.FreezeTransitionStart
Write: cnewparticleeffect.FreezeTransitionStart = value
```
## FreezeTransitionDuration 
```lua
@type number
Read: cnewparticleeffect.FreezeTransitionDuration
Write: cnewparticleeffect.FreezeTransitionDuration = value
```
## FreezeTransitionOverride 
```lua
@type number
Read: cnewparticleeffect.FreezeTransitionOverride
Write: cnewparticleeffect.FreezeTransitionOverride = value
```
## FreezeTransitionActive 
```lua
@type boolean
Read: cnewparticleeffect.FreezeTransitionActive
Write: cnewparticleeffect.FreezeTransitionActive = value
```
## FreezeTargetState 
```lua
@type boolean
Read: cnewparticleeffect.FreezeTargetState
Write: cnewparticleeffect.FreezeTargetState = value
```
## CanFreeze 
```lua
@type boolean
Read: cnewparticleeffect.CanFreeze
Write: cnewparticleeffect.CanFreeze = value
```
## LastMin 
```lua
@type Vector
Read: cnewparticleeffect.LastMin
Write: cnewparticleeffect.LastMin = value
```
## LastMax 
```lua
@type Vector
Read: cnewparticleeffect.LastMax
Write: cnewparticleeffect.LastMax = value
```
## SplitScreenUser 
```lua
@type number
Read: cnewparticleeffect.SplitScreenUser
Write: cnewparticleeffect.SplitScreenUser = value
```
## AggregationCenter 
```lua
@type Vector
Read: cnewparticleeffect.AggregationCenter
Write: cnewparticleeffect.AggregationCenter = value
```
## RefCount 
```lua
@type number
Read: cnewparticleeffect.RefCount
Write: cnewparticleeffect.RefCount = value
```
## Parent 
```lua
@type IParticleEffect
Read: cnewparticleeffect.Parent
Write: cnewparticleeffect.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cnewparticleeffect:ToPtr()
```
## IsValid
```lua
@returns bool
cnewparticleeffect:IsValid()
```

:::