---
title: VelocitySampler
index: true
order: 2
category:
  - Guide
---

# VelocitySampler

::: tabs
@tab Lua
# Constructor
```lua
VelocitySampler(ptr)
```
# Properties
## PrevSample 
```lua
--- @type Vector
Read: velocitysampler.PrevSample
Write: velocitysampler.PrevSample = value
```
## PrevSampleTime 
```lua
--- @type number
Read: velocitysampler.PrevSampleTime
Write: velocitysampler.PrevSampleTime = value
```
## IdealSampleRate 
```lua
--- @type number
Read: velocitysampler.IdealSampleRate
Write: velocitysampler.IdealSampleRate = value
```
# Functions
## ToPtr
```lua
@returns string
velocitysampler:ToPtr()
```
## IsValid
```lua
@returns bool
velocitysampler:IsValid()
```

:::