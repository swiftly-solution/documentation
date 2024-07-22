---
title: CastSphereSATParams_t
index: true
order: 2
category:
  - Guide
---

# CastSphereSATParams_t

::: tabs
@tab Lua
# Constructor
```lua
CastSphereSATParams_t(ptr --[[ string ]])
```
# Properties
## RayStart 
```lua
@type Vector
Read: castspheresatparams_t.RayStart
Write: castspheresatparams_t.RayStart = value
```
## RayDelta 
```lua
@type Vector
Read: castspheresatparams_t.RayDelta
Write: castspheresatparams_t.RayDelta = value
```
## Radius 
```lua
@type number
Read: castspheresatparams_t.Radius
Write: castspheresatparams_t.Radius = value
```
## MaxFraction 
```lua
@type number
Read: castspheresatparams_t.MaxFraction
Write: castspheresatparams_t.MaxFraction = value
```
## Scale 
```lua
@type number
Read: castspheresatparams_t.Scale
Write: castspheresatparams_t.Scale = value
```
## Hull 
```lua
@type RnHull_t
Read: castspheresatparams_t.Hull
Write: castspheresatparams_t.Hull = value
```
# Functions
## ToPtr
```lua
@returns string
castspheresatparams_t:ToPtr()
```
## IsValid
```lua
@returns bool
castspheresatparams_t:IsValid()
```

:::