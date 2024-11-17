---
title: CShatterGlassShard
index: true
order: 2
category:
  - Guide
---

# CShatterGlassShard

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CShatterGlassShard(ptr)
```
# Properties
## ShardHandle 
```lua
--- @type number
Read: cshatterglassshard.ShardHandle
Write: cshatterglassshard.ShardHandle = value
```
## PanelVertices (Read-Only)
```lua
--- @type table
Read: cshatterglassshard.PanelVertices
```
## LocalPanelSpaceOrigin 
```lua
--- @type Vector2D
Read: cshatterglassshard.LocalPanelSpaceOrigin
Write: cshatterglassshard.LocalPanelSpaceOrigin = value
```
## PhysicsEntity (Read-Only)
```lua
--- @type CShatterGlassShardPhysics
Read: cshatterglassshard.PhysicsEntity
```
## ParentPanel (Read-Only)
```lua
--- @type CFuncShatterglass
Read: cshatterglassshard.ParentPanel
```
## ParentShard 
```lua
--- @type number
Read: cshatterglassshard.ParentShard
Write: cshatterglassshard.ParentShard = value
```
## ShatterStressType 
```lua
--- @type number
Read: cshatterglassshard.ShatterStressType
Write: cshatterglassshard.ShatterStressType = value
```
## StressVelocity 
```lua
--- @type Vector
Read: cshatterglassshard.StressVelocity
Write: cshatterglassshard.StressVelocity = value
```
## CreatedModel 
```lua
--- @type boolean
Read: cshatterglassshard.CreatedModel
Write: cshatterglassshard.CreatedModel = value
```
## LongestEdge 
```lua
--- @type number
Read: cshatterglassshard.LongestEdge
Write: cshatterglassshard.LongestEdge = value
```
## ShortestEdge 
```lua
--- @type number
Read: cshatterglassshard.ShortestEdge
Write: cshatterglassshard.ShortestEdge = value
```
## LongestAcross 
```lua
--- @type number
Read: cshatterglassshard.LongestAcross
Write: cshatterglassshard.LongestAcross = value
```
## ShortestAcross 
```lua
--- @type number
Read: cshatterglassshard.ShortestAcross
Write: cshatterglassshard.ShortestAcross = value
```
## SumOfAllEdges 
```lua
--- @type number
Read: cshatterglassshard.SumOfAllEdges
Write: cshatterglassshard.SumOfAllEdges = value
```
## Area 
```lua
--- @type number
Read: cshatterglassshard.Area
Write: cshatterglassshard.Area = value
```
## OnFrameEdge 
```lua
--- @type number
Read: cshatterglassshard.OnFrameEdge
Write: cshatterglassshard.OnFrameEdge = value
```
## SubShardGeneration 
```lua
--- @type number
Read: cshatterglassshard.SubShardGeneration
Write: cshatterglassshard.SubShardGeneration = value
```
## AverageVertPosition 
```lua
--- @type Vector2D
Read: cshatterglassshard.AverageVertPosition
Write: cshatterglassshard.AverageVertPosition = value
```
## AverageVertPositionIsValid 
```lua
--- @type boolean
Read: cshatterglassshard.AverageVertPositionIsValid
Write: cshatterglassshard.AverageVertPositionIsValid = value
```
## PanelSpaceStressPositionA 
```lua
--- @type Vector2D
Read: cshatterglassshard.PanelSpaceStressPositionA
Write: cshatterglassshard.PanelSpaceStressPositionA = value
```
## PanelSpaceStressPositionB 
```lua
--- @type Vector2D
Read: cshatterglassshard.PanelSpaceStressPositionB
Write: cshatterglassshard.PanelSpaceStressPositionB = value
```
## StressPositionAIsValid 
```lua
--- @type boolean
Read: cshatterglassshard.StressPositionAIsValid
Write: cshatterglassshard.StressPositionAIsValid = value
```
## StressPositionBIsValid 
```lua
--- @type boolean
Read: cshatterglassshard.StressPositionBIsValid
Write: cshatterglassshard.StressPositionBIsValid = value
```
## FlaggedForRemoval 
```lua
--- @type boolean
Read: cshatterglassshard.FlaggedForRemoval
Write: cshatterglassshard.FlaggedForRemoval = value
```
## PhysicsEntitySpawnedAtTime 
```lua
--- @type number
Read: cshatterglassshard.PhysicsEntitySpawnedAtTime
Write: cshatterglassshard.PhysicsEntitySpawnedAtTime = value
```
## EntityHittingMe (Read-Only)
```lua
--- @type CBaseEntity
Read: cshatterglassshard.EntityHittingMe
```
## Neighbors (Read-Only)
```lua
--- @type table
Read: cshatterglassshard.Neighbors
```
# Functions
## ToPtr
```lua
--- @return string
cshatterglassshard:ToPtr()
```
## IsValid
```lua
--- @return bool
cshatterglassshard:IsValid()
```

:::