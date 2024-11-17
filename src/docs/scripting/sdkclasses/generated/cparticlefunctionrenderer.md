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
--- @param ptr string
CParticleFunctionRenderer(ptr)
```
# Properties
## VisibilityInputs (Read-Only)
```lua
--- @type CParticleVisibilityInputs
Read: cparticlefunctionrenderer.VisibilityInputs
```
## CannotBeRefracted 
```lua
--- @type boolean
Read: cparticlefunctionrenderer.CannotBeRefracted
Write: cparticlefunctionrenderer.CannotBeRefracted = value
```
## SkipRenderingOnMobile 
```lua
--- @type boolean
Read: cparticlefunctionrenderer.SkipRenderingOnMobile
Write: cparticlefunctionrenderer.SkipRenderingOnMobile = value
```
## Parent (Read-Only)
```lua
--- @type CParticleFunction
Read: cparticlefunctionrenderer.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cparticlefunctionrenderer:ToPtr()
```
## IsValid
```lua
--- @return bool
cparticlefunctionrenderer:IsValid()
```

:::