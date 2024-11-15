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
CBlend2DUpdateNode(ptr)
```
# Properties
## Items (Read-Only)
```lua
--- @type table
Read: cblend2dupdatenode.Items
```
## Tags (Read-Only)
```lua
--- @type table
Read: cblend2dupdatenode.Tags
```
## ParamSpans (Read-Only)
```lua
--- @type CParamSpanUpdater
Read: cblend2dupdatenode.ParamSpans
```
## NodeItemIndices (Read-Only)
```lua
--- @type table
Read: cblend2dupdatenode.NodeItemIndices
```
## Damping (Read-Only)
```lua
--- @type CAnimInputDamping
Read: cblend2dupdatenode.Damping
```
## BlendSourceX 
```lua
--- @type number
Read: cblend2dupdatenode.BlendSourceX
Write: cblend2dupdatenode.BlendSourceX = value
```
## ParamX (Read-Only)
```lua
--- @type CAnimParamHandle
Read: cblend2dupdatenode.ParamX
```
## BlendSourceY 
```lua
--- @type number
Read: cblend2dupdatenode.BlendSourceY
Write: cblend2dupdatenode.BlendSourceY = value
```
## ParamY (Read-Only)
```lua
--- @type CAnimParamHandle
Read: cblend2dupdatenode.ParamY
```
## BlendMode 
```lua
--- @type number
Read: cblend2dupdatenode.BlendMode
Write: cblend2dupdatenode.BlendMode = value
```
## PlaybackSpeed 
```lua
--- @type number
Read: cblend2dupdatenode.PlaybackSpeed
Write: cblend2dupdatenode.PlaybackSpeed = value
```
## Loop 
```lua
--- @type boolean
Read: cblend2dupdatenode.Loop
Write: cblend2dupdatenode.Loop = value
```
## LockBlendOnReset 
```lua
--- @type boolean
Read: cblend2dupdatenode.LockBlendOnReset
Write: cblend2dupdatenode.LockBlendOnReset = value
```
## LockWhenWaning 
```lua
--- @type boolean
Read: cblend2dupdatenode.LockWhenWaning
Write: cblend2dupdatenode.LockWhenWaning = value
```
## AnimEventsAndTagsOnMostWeightedOnly 
```lua
--- @type boolean
Read: cblend2dupdatenode.AnimEventsAndTagsOnMostWeightedOnly
Write: cblend2dupdatenode.AnimEventsAndTagsOnMostWeightedOnly = value
```
## Parent (Read-Only)
```lua
--- @type CAnimUpdateNodeBase
Read: cblend2dupdatenode.Parent
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