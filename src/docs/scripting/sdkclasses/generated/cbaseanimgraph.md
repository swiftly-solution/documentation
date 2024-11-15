---
title: CBaseAnimGraph
index: true
order: 2
category:
  - Guide
---

# CBaseAnimGraph

::: tabs
@tab Lua
# Constructor
```lua
CBaseAnimGraph(ptr)
```
# Properties
## InitiallyPopulateInterpHistory 
```lua
--- @type boolean
Read: cbaseanimgraph.InitiallyPopulateInterpHistory
Write: cbaseanimgraph.InitiallyPopulateInterpHistory = value
```
## ChoreoServices (Read-Only)
```lua
--- @type IChoreoServices
Read: cbaseanimgraph.ChoreoServices
```
## AnimGraphUpdateEnabled 
```lua
--- @type boolean
Read: cbaseanimgraph.AnimGraphUpdateEnabled
Write: cbaseanimgraph.AnimGraphUpdateEnabled = value
```
## MaxSlopeDistance 
```lua
--- @type number
Read: cbaseanimgraph.MaxSlopeDistance
Write: cbaseanimgraph.MaxSlopeDistance = value
```
## LastSlopeCheckPos 
```lua
--- @type Vector
Read: cbaseanimgraph.LastSlopeCheckPos
Write: cbaseanimgraph.LastSlopeCheckPos = value
```
## AnimationUpdateScheduled 
```lua
--- @type boolean
Read: cbaseanimgraph.AnimationUpdateScheduled
Write: cbaseanimgraph.AnimationUpdateScheduled = value
```
## Force 
```lua
--- @type Vector
Read: cbaseanimgraph.Force
Write: cbaseanimgraph.Force = value
```
## ForceBone 
```lua
--- @type number
Read: cbaseanimgraph.ForceBone
Write: cbaseanimgraph.ForceBone = value
```
## RagdollPose (Read-Only)
```lua
--- @type PhysicsRagdollPose_t
Read: cbaseanimgraph.RagdollPose
```
## RagdollClientSide 
```lua
--- @type boolean
Read: cbaseanimgraph.RagdollClientSide
Write: cbaseanimgraph.RagdollClientSide = value
```
## LastDestructiblePartDestroyedAnimgraphSetTick 
```lua
--- @type number
Read: cbaseanimgraph.LastDestructiblePartDestroyedAnimgraphSetTick
Write: cbaseanimgraph.LastDestructiblePartDestroyedAnimgraphSetTick = value
```
## Parent (Read-Only)
```lua
--- @type CBaseModelEntity
Read: cbaseanimgraph.Parent
```
# Functions
## ToPtr
```lua
@returns string
cbaseanimgraph:ToPtr()
```
## IsValid
```lua
@returns bool
cbaseanimgraph:IsValid()
```

:::