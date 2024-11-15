---
title: FeNodeIntegrator_t
index: true
order: 2
category:
  - Guide
---

# FeNodeIntegrator_t

::: tabs
@tab Lua
# Constructor
```lua
FeNodeIntegrator_t(ptr)
```
# Properties
## PointDamping 
```lua
--- @type number
Read: fenodeintegrator_t.PointDamping
Write: fenodeintegrator_t.PointDamping = value
```
## AnimationForceAttraction 
```lua
--- @type number
Read: fenodeintegrator_t.AnimationForceAttraction
Write: fenodeintegrator_t.AnimationForceAttraction = value
```
## AnimationVertexAttraction 
```lua
--- @type number
Read: fenodeintegrator_t.AnimationVertexAttraction
Write: fenodeintegrator_t.AnimationVertexAttraction = value
```
## Gravity 
```lua
--- @type number
Read: fenodeintegrator_t.Gravity
Write: fenodeintegrator_t.Gravity = value
```
# Functions
## ToPtr
```lua
@returns string
fenodeintegrator_t:ToPtr()
```
## IsValid
```lua
@returns bool
fenodeintegrator_t:IsValid()
```

:::