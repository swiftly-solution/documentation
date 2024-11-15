---
title: CRenderComponent
index: true
order: 2
category:
  - Guide
---

# CRenderComponent

::: tabs
@tab Lua
# Constructor
```lua
CRenderComponent(ptr)
```
# Properties
## __pChainEntity (Read-Only)
```lua
--- @type CNetworkVarChainer
Read: crendercomponent.__pChainEntity
```
## IsRenderingWithViewModels 
```lua
--- @type boolean
Read: crendercomponent.IsRenderingWithViewModels
Write: crendercomponent.IsRenderingWithViewModels = value
```
## SplitscreenFlags 
```lua
--- @type number
Read: crendercomponent.SplitscreenFlags
Write: crendercomponent.SplitscreenFlags = value
```
## EnableRendering 
```lua
--- @type boolean
Read: crendercomponent.EnableRendering
Write: crendercomponent.EnableRendering = value
```
## InterpolationReadyToDraw 
```lua
--- @type boolean
Read: crendercomponent.InterpolationReadyToDraw
Write: crendercomponent.InterpolationReadyToDraw = value
```
## Parent (Read-Only)
```lua
--- @type CEntityComponent
Read: crendercomponent.Parent
```
# Functions
## ToPtr
```lua
@returns string
crendercomponent:ToPtr()
```
## IsValid
```lua
@returns bool
crendercomponent:IsValid()
```

:::