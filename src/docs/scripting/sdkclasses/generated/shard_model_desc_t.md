---
title: shard_model_desc_t
index: true
order: 2
category:
  - Guide
---

# shard_model_desc_t

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
shard_model_desc_t(ptr)
```
# Properties
## ModelID 
```lua
--- @type number
Read: shard_model_desc_t.ModelID
Write: shard_model_desc_t.ModelID = value
```
## Solid 
```lua
--- @type number
Read: shard_model_desc_t.Solid
Write: shard_model_desc_t.Solid = value
```
## PanelSize 
```lua
--- @type Vector2D
Read: shard_model_desc_t.PanelSize
Write: shard_model_desc_t.PanelSize = value
```
## StressPositionA 
```lua
--- @type Vector2D
Read: shard_model_desc_t.StressPositionA
Write: shard_model_desc_t.StressPositionA = value
```
## StressPositionB 
```lua
--- @type Vector2D
Read: shard_model_desc_t.StressPositionB
Write: shard_model_desc_t.StressPositionB = value
```
## PanelVertices (Read-Only)
```lua
--- @type table
Read: shard_model_desc_t.PanelVertices
```
## InitialPanelVertices (Read-Only)
```lua
--- @type table
Read: shard_model_desc_t.InitialPanelVertices
```
## GlassHalfThickness 
```lua
--- @type number
Read: shard_model_desc_t.GlassHalfThickness
Write: shard_model_desc_t.GlassHalfThickness = value
```
## HasParent 
```lua
--- @type boolean
Read: shard_model_desc_t.HasParent
Write: shard_model_desc_t.HasParent = value
```
## ParentFrozen 
```lua
--- @type boolean
Read: shard_model_desc_t.ParentFrozen
Write: shard_model_desc_t.ParentFrozen = value
```
## SurfacePropStringToken 
```lua
--- @type number
Read: shard_model_desc_t.SurfacePropStringToken
Write: shard_model_desc_t.SurfacePropStringToken = value
```
# Functions
## ToPtr
```lua
--- @return string
shard_model_desc_t:ToPtr()
```
## IsValid
```lua
--- @return bool
shard_model_desc_t:IsValid()
```

:::