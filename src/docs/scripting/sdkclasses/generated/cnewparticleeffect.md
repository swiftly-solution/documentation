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
## Next 
```lua
@type CNewParticleEffect
Read: cnewparticleeffect.Next
Write: cnewparticleeffect.Next = value
```
## Prev 
```lua
@type CNewParticleEffect
Read: cnewparticleeffect.Prev
Write: cnewparticleeffect.Prev = value
```
## Particles 
```lua
@type IParticleCollection
Read: cnewparticleeffect.Particles
Write: cnewparticleeffect.Particles = value
```
## DebugName (Read-Only)
```lua
@type string
Read: cnewparticleeffect.DebugName
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
## Owner 
```lua
@type PARTICLE_EHANDLE__
Read: cnewparticleeffect.Owner
Write: cnewparticleeffect.Owner = value
```
## OwningParticleProperty 
```lua
@type CParticleProperty
Read: cnewparticleeffect.OwningParticleProperty
Write: cnewparticleeffect.OwningParticleProperty = value
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
## Parent (Read-Only)
```lua
@type IParticleEffect
Read: cnewparticleeffect.Parent
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