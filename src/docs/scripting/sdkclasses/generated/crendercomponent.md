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
CRenderComponent(ptr --[[ string ]])
```
# Properties
## __pChainEntity 
```lua
@type CNetworkVarChainer
Read: crendercomponent.__pChainEntity
Write: crendercomponent.__pChainEntity = value
```
## IsRenderingWithViewModels 
```lua
@type boolean
Read: crendercomponent.IsRenderingWithViewModels
Write: crendercomponent.IsRenderingWithViewModels = value
```
## SplitscreenFlags 
```lua
@type number
Read: crendercomponent.SplitscreenFlags
Write: crendercomponent.SplitscreenFlags = value
```
## EnableRendering 
```lua
@type boolean
Read: crendercomponent.EnableRendering
Write: crendercomponent.EnableRendering = value
```
## InterpolationReadyToDraw 
```lua
@type boolean
Read: crendercomponent.InterpolationReadyToDraw
Write: crendercomponent.InterpolationReadyToDraw = value
```
## Parent 
```lua
@type CEntityComponent
Read: crendercomponent.Parent
Write: crendercomponent.Parent = value
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