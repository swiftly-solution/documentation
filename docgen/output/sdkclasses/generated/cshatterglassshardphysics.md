---
title: CShatterGlassShardPhysics
index: true
order: 2
category:
  - Guide
---

# CShatterGlassShardPhysics

::: tabs
@tab Lua
# Constructor
```lua
CShatterGlassShardPhysics(ptr --[[ string ]])
```
# Properties
## Debris 
```lua
@type boolean
Read: cshatterglassshardphysics.Debris
Write: cshatterglassshardphysics.Debris = value
```
## ParentShard 
```lua
@type number
Read: cshatterglassshardphysics.ParentShard
Write: cshatterglassshardphysics.ParentShard = value
```
## ShardDesc (Read-Only)
```lua
@type shard_model_desc_t
Read: cshatterglassshardphysics.ShardDesc
```
## Parent (Read-Only)
```lua
@type CPhysicsProp
Read: cshatterglassshardphysics.Parent
```
# Functions
## ToPtr
```lua
@returns string
cshatterglassshardphysics:ToPtr()
```
## IsValid
```lua
@returns bool
cshatterglassshardphysics:IsValid()
```

:::