---
title: CBlend2DUpdateNode
index: true
order: 2
category:
  - Guide
---

# CBlend2DUpdateNode

::: tabs
@tab Lua
# Constructor
```lua
CBlend2DUpdateNode(ptr --[[ string ]])
```
# Properties
## Items 
```lua
@type table
Read: cblend2dupdatenode.Items
Write: cblend2dupdatenode.Items = value
```
## Tags 
```lua
@type table
Read: cblend2dupdatenode.Tags
Write: cblend2dupdatenode.Tags = value
```
## ParamSpans 
```lua
@type CParamSpanUpdater
Read: cblend2dupdatenode.ParamSpans
Write: cblend2dupdatenode.ParamSpans = value
```
## NodeItemIndices 
```lua
@type table
Read: cblend2dupdatenode.NodeItemIndices
Write: cblend2dupdatenode.NodeItemIndices = value
```
## Damping 
```lua
@type CAnimInputDamping
Read: cblend2dupdatenode.Damping
Write: cblend2dupdatenode.Damping = value
```
## BlendSourceX 
```lua
@type number
Read: cblend2dupdatenode.BlendSourceX
Write: cblend2dupdatenode.BlendSourceX = value
```
## ParamX 
```lua
@type CAnimParamHandle
Read: cblend2dupdatenode.ParamX
Write: cblend2dupdatenode.ParamX = value
```
## BlendSourceY 
```lua
@type number
Read: cblend2dupdatenode.BlendSourceY
Write: cblend2dupdatenode.BlendSourceY = value
```
## ParamY 
```lua
@type CAnimParamHandle
Read: cblend2dupdatenode.ParamY
Write: cblend2dupdatenode.ParamY = value
```
## BlendMode 
```lua
@type number
Read: cblend2dupdatenode.BlendMode
Write: cblend2dupdatenode.BlendMode = value
```
## PlaybackSpeed 
```lua
@type number
Read: cblend2dupdatenode.PlaybackSpeed
Write: cblend2dupdatenode.PlaybackSpeed = value
```
## Loop 
```lua
@type boolean
Read: cblend2dupdatenode.Loop
Write: cblend2dupdatenode.Loop = value
```
## LockBlendOnReset 
```lua
@type boolean
Read: cblend2dupdatenode.LockBlendOnReset
Write: cblend2dupdatenode.LockBlendOnReset = value
```
## LockWhenWaning 
```lua
@type boolean
Read: cblend2dupdatenode.LockWhenWaning
Write: cblend2dupdatenode.LockWhenWaning = value
```
## AnimEventsAndTagsOnMostWeightedOnly 
```lua
@type boolean
Read: cblend2dupdatenode.AnimEventsAndTagsOnMostWeightedOnly
Write: cblend2dupdatenode.AnimEventsAndTagsOnMostWeightedOnly = value
```
## Parent 
```lua
@type CAnimUpdateNodeBase
Read: cblend2dupdatenode.Parent
Write: cblend2dupdatenode.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cblend2dupdatenode:ToPtr()
```
## IsValid
```lua
@returns bool
cblend2dupdatenode:IsValid()
```

:::