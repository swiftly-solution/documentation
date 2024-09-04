---
title: CParticleFunctionRenderer
index: true
order: 2
category:
  - Guide
---

# CParticleFunctionRenderer

::: tabs
@tab Lua
# Constructor
```lua
CParticleFunctionRenderer(ptr --[[ string ]])
```
# Properties
## VisibilityInputs (Read-Only)
```lua
@type CParticleVisibilityInputs
Read: cparticlefunctionrenderer.VisibilityInputs
```
## CannotBeRefracted 
```lua
@type boolean
Read: cparticlefunctionrenderer.CannotBeRefracted
Write: cparticlefunctionrenderer.CannotBeRefracted = value
```
## SkipRenderingOnMobile 
```lua
@type boolean
Read: cparticlefunctionrenderer.SkipRenderingOnMobile
Write: cparticlefunctionrenderer.SkipRenderingOnMobile = value
```
## Parent (Read-Only)
```lua
@type CParticleFunction
Read: cparticlefunctionrenderer.Parent
```
# Functions
## ToPtr
```lua
@returns string
cparticlefunctionrenderer:ToPtr()
```
## IsValid
```lua
@returns bool
cparticlefunctionrenderer:IsValid()
```

:::