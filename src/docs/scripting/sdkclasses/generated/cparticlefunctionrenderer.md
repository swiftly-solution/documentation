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
## VisibilityInputs 
```lua
@type CParticleVisibilityInputs
Read: cparticlefunctionrenderer.VisibilityInputs
Write: cparticlefunctionrenderer.VisibilityInputs = value
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
## Parent 
```lua
@type CParticleFunction
Read: cparticlefunctionrenderer.Parent
Write: cparticlefunctionrenderer.Parent = value
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