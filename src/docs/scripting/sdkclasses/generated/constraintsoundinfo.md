---
title: ConstraintSoundInfo
index: true
order: 2
category:
  - Guide
---

# ConstraintSoundInfo

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
ConstraintSoundInfo(ptr)
```
# Properties
## Sampler (Read-Only)
```lua
--- @type VelocitySampler
Read: constraintsoundinfo.Sampler
```
## SoundProfile (Read-Only)
```lua
--- @type SimpleConstraintSoundProfile
Read: constraintsoundinfo.SoundProfile
```
## ForwardAxis 
```lua
--- @type Vector
Read: constraintsoundinfo.ForwardAxis
Write: constraintsoundinfo.ForwardAxis = value
```
## TravelSoundFwd 
```lua
--- @type string
Read: constraintsoundinfo.TravelSoundFwd
Write: constraintsoundinfo.TravelSoundFwd = value
```
## TravelSoundBack 
```lua
--- @type string
Read: constraintsoundinfo.TravelSoundBack
Write: constraintsoundinfo.TravelSoundBack = value
```
## ReversalSounds 
```lua
--- @type table
Read: constraintsoundinfo.ReversalSounds
Write: constraintsoundinfo.ReversalSounds = value
```
## PlayTravelSound 
```lua
--- @type boolean
Read: constraintsoundinfo.PlayTravelSound
Write: constraintsoundinfo.PlayTravelSound = value
```
## PlayReversalSound 
```lua
--- @type boolean
Read: constraintsoundinfo.PlayReversalSound
Write: constraintsoundinfo.PlayReversalSound = value
```
# Functions
## ToPtr
```lua
--- @return string
constraintsoundinfo:ToPtr()
```
## IsValid
```lua
--- @return bool
constraintsoundinfo:IsValid()
```

:::