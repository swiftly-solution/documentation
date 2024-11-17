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
--- @param ptr string
CNewParticleEffect(ptr)
```
# Properties
## Next (Read-Only)
```lua
--- @type CNewParticleEffect
Read: cnewparticleeffect.Next
```
## Prev (Read-Only)
```lua
--- @type CNewParticleEffect
Read: cnewparticleeffect.Prev
```
## Particles (Read-Only)
```lua
--- @type IParticleCollection
Read: cnewparticleeffect.Particles
```
## DebugName 
```lua
--- @type string
Read: cnewparticleeffect.DebugName
Write: cnewparticleeffect.DebugName = value
```
## DontRemove 
```lua
--- @type bitfield:1
Read: cnewparticleeffect.DontRemove
Write: cnewparticleeffect.DontRemove = value
```
## Remove 
```lua
--- @type bitfield:1
Read: cnewparticleeffect.Remove
Write: cnewparticleeffect.Remove = value
```
## NeedsBBoxUpdate 
```lua
--- @type bitfield:1
Read: cnewparticleeffect.NeedsBBoxUpdate
Write: cnewparticleeffect.NeedsBBoxUpdate = value
```
## IsFirstFrame 
```lua
--- @type bitfield:1
Read: cnewparticleeffect.IsFirstFrame
Write: cnewparticleeffect.IsFirstFrame = value
```
## AutoUpdateBBox 
```lua
--- @type bitfield:1
Read: cnewparticleeffect.AutoUpdateBBox
Write: cnewparticleeffect.AutoUpdateBBox = value
```
## Allocated 
```lua
--- @type bitfield:1
Read: cnewparticleeffect.Allocated
Write: cnewparticleeffect.Allocated = value
```
## Simulate 
```lua
--- @type bitfield:1
Read: cnewparticleeffect.Simulate
Write: cnewparticleeffect.Simulate = value
```
## ShouldPerformCullCheck 
```lua
--- @type bitfield:1
Read: cnewparticleeffect.ShouldPerformCullCheck
Write: cnewparticleeffect.ShouldPerformCullCheck = value
```
## ForceNoDraw 
```lua
--- @type bitfield:1
Read: cnewparticleeffect.ForceNoDraw
Write: cnewparticleeffect.ForceNoDraw = value
```
## ShouldSave 
```lua
--- @type bitfield:1
Read: cnewparticleeffect.ShouldSave
Write: cnewparticleeffect.ShouldSave = value
```
## DisableAggregation 
```lua
--- @type bitfield:1
Read: cnewparticleeffect.DisableAggregation
Write: cnewparticleeffect.DisableAggregation = value
```
## ShouldSimulateDuringGamePaused 
```lua
--- @type bitfield:1
Read: cnewparticleeffect.ShouldSimulateDuringGamePaused
Write: cnewparticleeffect.ShouldSimulateDuringGamePaused = value
```
## ShouldCheckFoW 
```lua
--- @type bitfield:1
Read: cnewparticleeffect.ShouldCheckFoW
Write: cnewparticleeffect.ShouldCheckFoW = value
```
## SortOrigin 
```lua
--- @type Vector
Read: cnewparticleeffect.SortOrigin
Write: cnewparticleeffect.SortOrigin = value
```
## Scale 
```lua
--- @type number
Read: cnewparticleeffect.Scale
Write: cnewparticleeffect.Scale = value
```
## Owner (Read-Only)
```lua
--- @type PARTICLE_EHANDLE__
Read: cnewparticleeffect.Owner
```
## OwningParticleProperty (Read-Only)
```lua
--- @type CParticleProperty
Read: cnewparticleeffect.OwningParticleProperty
```
## FreezeTransitionStart 
```lua
--- @type number
Read: cnewparticleeffect.FreezeTransitionStart
Write: cnewparticleeffect.FreezeTransitionStart = value
```
## FreezeTransitionDuration 
```lua
--- @type number
Read: cnewparticleeffect.FreezeTransitionDuration
Write: cnewparticleeffect.FreezeTransitionDuration = value
```
## FreezeTransitionOverride 
```lua
--- @type number
Read: cnewparticleeffect.FreezeTransitionOverride
Write: cnewparticleeffect.FreezeTransitionOverride = value
```
## FreezeTransitionActive 
```lua
--- @type boolean
Read: cnewparticleeffect.FreezeTransitionActive
Write: cnewparticleeffect.FreezeTransitionActive = value
```
## FreezeTargetState 
```lua
--- @type boolean
Read: cnewparticleeffect.FreezeTargetState
Write: cnewparticleeffect.FreezeTargetState = value
```
## CanFreeze 
```lua
--- @type boolean
Read: cnewparticleeffect.CanFreeze
Write: cnewparticleeffect.CanFreeze = value
```
## LastMin 
```lua
--- @type Vector
Read: cnewparticleeffect.LastMin
Write: cnewparticleeffect.LastMin = value
```
## LastMax 
```lua
--- @type Vector
Read: cnewparticleeffect.LastMax
Write: cnewparticleeffect.LastMax = value
```
## SplitScreenUser 
```lua
--- @type number
Read: cnewparticleeffect.SplitScreenUser
Write: cnewparticleeffect.SplitScreenUser = value
```
## AggregationCenter 
```lua
--- @type Vector
Read: cnewparticleeffect.AggregationCenter
Write: cnewparticleeffect.AggregationCenter = value
```
## RefCount 
```lua
--- @type number
Read: cnewparticleeffect.RefCount
Write: cnewparticleeffect.RefCount = value
```
## Parent (Read-Only)
```lua
--- @type IParticleEffect
Read: cnewparticleeffect.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cnewparticleeffect:ToPtr()
```
## IsValid
```lua
--- @return bool
cnewparticleeffect:IsValid()
```

:::