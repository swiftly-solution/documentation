---
title: PhysFeModelDesc_t
index: true
order: 2
category:
  - Guide
---

# PhysFeModelDesc_t

::: tabs
@tab Lua
# Constructor
```lua
PhysFeModelDesc_t(ptr --[[ string ]])
```
# Properties
## CtrlHash 
```lua
@type table
Read: physfemodeldesc_t.CtrlHash
Write: physfemodeldesc_t.CtrlHash = value
```
## CtrlName 
```lua
@type table
Read: physfemodeldesc_t.CtrlName
Write: physfemodeldesc_t.CtrlName = value
```
## StaticNodeFlags 
```lua
@type number
Read: physfemodeldesc_t.StaticNodeFlags
Write: physfemodeldesc_t.StaticNodeFlags = value
```
## DynamicNodeFlags 
```lua
@type number
Read: physfemodeldesc_t.DynamicNodeFlags
Write: physfemodeldesc_t.DynamicNodeFlags = value
```
## LocalForce 
```lua
@type number
Read: physfemodeldesc_t.LocalForce
Write: physfemodeldesc_t.LocalForce = value
```
## LocalRotation 
```lua
@type number
Read: physfemodeldesc_t.LocalRotation
Write: physfemodeldesc_t.LocalRotation = value
```
## NodeCount 
```lua
@type number
Read: physfemodeldesc_t.NodeCount
Write: physfemodeldesc_t.NodeCount = value
```
## StaticNodes 
```lua
@type number
Read: physfemodeldesc_t.StaticNodes
Write: physfemodeldesc_t.StaticNodes = value
```
## RotLockStaticNodes 
```lua
@type number
Read: physfemodeldesc_t.RotLockStaticNodes
Write: physfemodeldesc_t.RotLockStaticNodes = value
```
## FirstPositionDrivenNode 
```lua
@type number
Read: physfemodeldesc_t.FirstPositionDrivenNode
Write: physfemodeldesc_t.FirstPositionDrivenNode = value
```
## SimdTriCount1 
```lua
@type number
Read: physfemodeldesc_t.SimdTriCount1
Write: physfemodeldesc_t.SimdTriCount1 = value
```
## SimdTriCount2 
```lua
@type number
Read: physfemodeldesc_t.SimdTriCount2
Write: physfemodeldesc_t.SimdTriCount2 = value
```
## SimdQuadCount1 
```lua
@type number
Read: physfemodeldesc_t.SimdQuadCount1
Write: physfemodeldesc_t.SimdQuadCount1 = value
```
## SimdQuadCount2 
```lua
@type number
Read: physfemodeldesc_t.SimdQuadCount2
Write: physfemodeldesc_t.SimdQuadCount2 = value
```
## QuadCount1 
```lua
@type number
Read: physfemodeldesc_t.QuadCount1
Write: physfemodeldesc_t.QuadCount1 = value
```
## QuadCount2 
```lua
@type number
Read: physfemodeldesc_t.QuadCount2
Write: physfemodeldesc_t.QuadCount2 = value
```
## TreeDepth 
```lua
@type number
Read: physfemodeldesc_t.TreeDepth
Write: physfemodeldesc_t.TreeDepth = value
```
## NodeBaseJiggleboneDependsCount 
```lua
@type number
Read: physfemodeldesc_t.NodeBaseJiggleboneDependsCount
Write: physfemodeldesc_t.NodeBaseJiggleboneDependsCount = value
```
## RopeCount 
```lua
@type number
Read: physfemodeldesc_t.RopeCount
Write: physfemodeldesc_t.RopeCount = value
```
## Ropes 
```lua
@type table
Read: physfemodeldesc_t.Ropes
Write: physfemodeldesc_t.Ropes = value
```
## NodeBases 
```lua
@type table
Read: physfemodeldesc_t.NodeBases
Write: physfemodeldesc_t.NodeBases = value
```
## SimdNodeBases 
```lua
@type table
Read: physfemodeldesc_t.SimdNodeBases
Write: physfemodeldesc_t.SimdNodeBases = value
```
## Quads 
```lua
@type table
Read: physfemodeldesc_t.Quads
Write: physfemodeldesc_t.Quads = value
```
## SimdQuads 
```lua
@type table
Read: physfemodeldesc_t.SimdQuads
Write: physfemodeldesc_t.SimdQuads = value
```
## SimdTris 
```lua
@type table
Read: physfemodeldesc_t.SimdTris
Write: physfemodeldesc_t.SimdTris = value
```
## SimdRods 
```lua
@type table
Read: physfemodeldesc_t.SimdRods
Write: physfemodeldesc_t.SimdRods = value
```
## SimdRodsAnim 
```lua
@type table
Read: physfemodeldesc_t.SimdRodsAnim
Write: physfemodeldesc_t.SimdRodsAnim = value
```
## Rods 
```lua
@type table
Read: physfemodeldesc_t.Rods
Write: physfemodeldesc_t.Rods = value
```
## Twists 
```lua
@type table
Read: physfemodeldesc_t.Twists
Write: physfemodeldesc_t.Twists = value
```
## AxialEdges 
```lua
@type table
Read: physfemodeldesc_t.AxialEdges
Write: physfemodeldesc_t.AxialEdges = value
```
## NodeInvMasses 
```lua
@type table
Read: physfemodeldesc_t.NodeInvMasses
Write: physfemodeldesc_t.NodeInvMasses = value
```
## CtrlOffsets 
```lua
@type table
Read: physfemodeldesc_t.CtrlOffsets
Write: physfemodeldesc_t.CtrlOffsets = value
```
## CtrlOsOffsets 
```lua
@type table
Read: physfemodeldesc_t.CtrlOsOffsets
Write: physfemodeldesc_t.CtrlOsOffsets = value
```
## FollowNodes 
```lua
@type table
Read: physfemodeldesc_t.FollowNodes
Write: physfemodeldesc_t.FollowNodes = value
```
## CollisionPlanes 
```lua
@type table
Read: physfemodeldesc_t.CollisionPlanes
Write: physfemodeldesc_t.CollisionPlanes = value
```
## NodeIntegrator 
```lua
@type table
Read: physfemodeldesc_t.NodeIntegrator
Write: physfemodeldesc_t.NodeIntegrator = value
```
## SpringIntegrator 
```lua
@type table
Read: physfemodeldesc_t.SpringIntegrator
Write: physfemodeldesc_t.SpringIntegrator = value
```
## SimdSpringIntegrator 
```lua
@type table
Read: physfemodeldesc_t.SimdSpringIntegrator
Write: physfemodeldesc_t.SimdSpringIntegrator = value
```
## WorldCollisionParams 
```lua
@type table
Read: physfemodeldesc_t.WorldCollisionParams
Write: physfemodeldesc_t.WorldCollisionParams = value
```
## LegacyStretchForce 
```lua
@type table
Read: physfemodeldesc_t.LegacyStretchForce
Write: physfemodeldesc_t.LegacyStretchForce = value
```
## NodeCollisionRadii 
```lua
@type table
Read: physfemodeldesc_t.NodeCollisionRadii
Write: physfemodeldesc_t.NodeCollisionRadii = value
```
## DynNodeFriction 
```lua
@type table
Read: physfemodeldesc_t.DynNodeFriction
Write: physfemodeldesc_t.DynNodeFriction = value
```
## LocalRotation1 
```lua
@type table
Read: physfemodeldesc_t.LocalRotation1
Write: physfemodeldesc_t.LocalRotation1 = value
```
## LocalForce1 
```lua
@type table
Read: physfemodeldesc_t.LocalForce1
Write: physfemodeldesc_t.LocalForce1 = value
```
## TaperedCapsuleStretches 
```lua
@type table
Read: physfemodeldesc_t.TaperedCapsuleStretches
Write: physfemodeldesc_t.TaperedCapsuleStretches = value
```
## TaperedCapsuleRigids 
```lua
@type table
Read: physfemodeldesc_t.TaperedCapsuleRigids
Write: physfemodeldesc_t.TaperedCapsuleRigids = value
```
## SphereRigids 
```lua
@type table
Read: physfemodeldesc_t.SphereRigids
Write: physfemodeldesc_t.SphereRigids = value
```
## WorldCollisionNodes 
```lua
@type table
Read: physfemodeldesc_t.WorldCollisionNodes
Write: physfemodeldesc_t.WorldCollisionNodes = value
```
## TreeParents 
```lua
@type table
Read: physfemodeldesc_t.TreeParents
Write: physfemodeldesc_t.TreeParents = value
```
## TreeCollisionMasks 
```lua
@type table
Read: physfemodeldesc_t.TreeCollisionMasks
Write: physfemodeldesc_t.TreeCollisionMasks = value
```
## TreeChildren 
```lua
@type table
Read: physfemodeldesc_t.TreeChildren
Write: physfemodeldesc_t.TreeChildren = value
```
## FreeNodes 
```lua
@type table
Read: physfemodeldesc_t.FreeNodes
Write: physfemodeldesc_t.FreeNodes = value
```
## FitMatrices 
```lua
@type table
Read: physfemodeldesc_t.FitMatrices
Write: physfemodeldesc_t.FitMatrices = value
```
## FitWeights 
```lua
@type table
Read: physfemodeldesc_t.FitWeights
Write: physfemodeldesc_t.FitWeights = value
```
## ReverseOffsets 
```lua
@type table
Read: physfemodeldesc_t.ReverseOffsets
Write: physfemodeldesc_t.ReverseOffsets = value
```
## AnimStrayRadii 
```lua
@type table
Read: physfemodeldesc_t.AnimStrayRadii
Write: physfemodeldesc_t.AnimStrayRadii = value
```
## SimdAnimStrayRadii 
```lua
@type table
Read: physfemodeldesc_t.SimdAnimStrayRadii
Write: physfemodeldesc_t.SimdAnimStrayRadii = value
```
## KelagerBends 
```lua
@type table
Read: physfemodeldesc_t.KelagerBends
Write: physfemodeldesc_t.KelagerBends = value
```
## CtrlSoftOffsets 
```lua
@type table
Read: physfemodeldesc_t.CtrlSoftOffsets
Write: physfemodeldesc_t.CtrlSoftOffsets = value
```
## JiggleBones 
```lua
@type table
Read: physfemodeldesc_t.JiggleBones
Write: physfemodeldesc_t.JiggleBones = value
```
## SourceElems 
```lua
@type table
Read: physfemodeldesc_t.SourceElems
Write: physfemodeldesc_t.SourceElems = value
```
## GoalDampedSpringIntegrators 
```lua
@type table
Read: physfemodeldesc_t.GoalDampedSpringIntegrators
Write: physfemodeldesc_t.GoalDampedSpringIntegrators = value
```
## Tris 
```lua
@type table
Read: physfemodeldesc_t.Tris
Write: physfemodeldesc_t.Tris = value
```
## TriCount1 
```lua
@type number
Read: physfemodeldesc_t.TriCount1
Write: physfemodeldesc_t.TriCount1 = value
```
## TriCount2 
```lua
@type number
Read: physfemodeldesc_t.TriCount2
Write: physfemodeldesc_t.TriCount2 = value
```
## ReservedUint8 
```lua
@type number
Read: physfemodeldesc_t.ReservedUint8
Write: physfemodeldesc_t.ReservedUint8 = value
```
## ExtraPressureIterations 
```lua
@type number
Read: physfemodeldesc_t.ExtraPressureIterations
Write: physfemodeldesc_t.ExtraPressureIterations = value
```
## ExtraGoalIterations 
```lua
@type number
Read: physfemodeldesc_t.ExtraGoalIterations
Write: physfemodeldesc_t.ExtraGoalIterations = value
```
## ExtraIterations 
```lua
@type number
Read: physfemodeldesc_t.ExtraIterations
Write: physfemodeldesc_t.ExtraIterations = value
```
## BoxRigids 
```lua
@type table
Read: physfemodeldesc_t.BoxRigids
Write: physfemodeldesc_t.BoxRigids = value
```
## DynNodeVertexSet 
```lua
@type table
Read: physfemodeldesc_t.DynNodeVertexSet
Write: physfemodeldesc_t.DynNodeVertexSet = value
```
## VertexSetNames 
```lua
@type table
Read: physfemodeldesc_t.VertexSetNames
Write: physfemodeldesc_t.VertexSetNames = value
```
## RigidColliderPriorities 
```lua
@type table
Read: physfemodeldesc_t.RigidColliderPriorities
Write: physfemodeldesc_t.RigidColliderPriorities = value
```
## MorphLayers 
```lua
@type table
Read: physfemodeldesc_t.MorphLayers
Write: physfemodeldesc_t.MorphLayers = value
```
## MorphSetData 
```lua
@type table
Read: physfemodeldesc_t.MorphSetData
Write: physfemodeldesc_t.MorphSetData = value
```
## VertexMaps 
```lua
@type table
Read: physfemodeldesc_t.VertexMaps
Write: physfemodeldesc_t.VertexMaps = value
```
## VertexMapValues 
```lua
@type table
Read: physfemodeldesc_t.VertexMapValues
Write: physfemodeldesc_t.VertexMapValues = value
```
## Effects 
```lua
@type table
Read: physfemodeldesc_t.Effects
Write: physfemodeldesc_t.Effects = value
```
## LockToParent 
```lua
@type table
Read: physfemodeldesc_t.LockToParent
Write: physfemodeldesc_t.LockToParent = value
```
## LockToGoal 
```lua
@type table
Read: physfemodeldesc_t.LockToGoal
Write: physfemodeldesc_t.LockToGoal = value
```
## SkelParents 
```lua
@type table
Read: physfemodeldesc_t.SkelParents
Write: physfemodeldesc_t.SkelParents = value
```
## DynNodeWindBases 
```lua
@type table
Read: physfemodeldesc_t.DynNodeWindBases
Write: physfemodeldesc_t.DynNodeWindBases = value
```
## InternalPressure 
```lua
@type number
Read: physfemodeldesc_t.InternalPressure
Write: physfemodeldesc_t.InternalPressure = value
```
## DefaultTimeDilation 
```lua
@type number
Read: physfemodeldesc_t.DefaultTimeDilation
Write: physfemodeldesc_t.DefaultTimeDilation = value
```
## Windage 
```lua
@type number
Read: physfemodeldesc_t.Windage
Write: physfemodeldesc_t.Windage = value
```
## WindDrag 
```lua
@type number
Read: physfemodeldesc_t.WindDrag
Write: physfemodeldesc_t.WindDrag = value
```
## DefaultSurfaceStretch 
```lua
@type number
Read: physfemodeldesc_t.DefaultSurfaceStretch
Write: physfemodeldesc_t.DefaultSurfaceStretch = value
```
## DefaultThreadStretch 
```lua
@type number
Read: physfemodeldesc_t.DefaultThreadStretch
Write: physfemodeldesc_t.DefaultThreadStretch = value
```
## DefaultGravityScale 
```lua
@type number
Read: physfemodeldesc_t.DefaultGravityScale
Write: physfemodeldesc_t.DefaultGravityScale = value
```
## DefaultVelAirDrag 
```lua
@type number
Read: physfemodeldesc_t.DefaultVelAirDrag
Write: physfemodeldesc_t.DefaultVelAirDrag = value
```
## DefaultExpAirDrag 
```lua
@type number
Read: physfemodeldesc_t.DefaultExpAirDrag
Write: physfemodeldesc_t.DefaultExpAirDrag = value
```
## DefaultVelQuadAirDrag 
```lua
@type number
Read: physfemodeldesc_t.DefaultVelQuadAirDrag
Write: physfemodeldesc_t.DefaultVelQuadAirDrag = value
```
## DefaultExpQuadAirDrag 
```lua
@type number
Read: physfemodeldesc_t.DefaultExpQuadAirDrag
Write: physfemodeldesc_t.DefaultExpQuadAirDrag = value
```
## RodVelocitySmoothRate 
```lua
@type number
Read: physfemodeldesc_t.RodVelocitySmoothRate
Write: physfemodeldesc_t.RodVelocitySmoothRate = value
```
## QuadVelocitySmoothRate 
```lua
@type number
Read: physfemodeldesc_t.QuadVelocitySmoothRate
Write: physfemodeldesc_t.QuadVelocitySmoothRate = value
```
## AddWorldCollisionRadius 
```lua
@type number
Read: physfemodeldesc_t.AddWorldCollisionRadius
Write: physfemodeldesc_t.AddWorldCollisionRadius = value
```
## DefaultVolumetricSolveAmount 
```lua
@type number
Read: physfemodeldesc_t.DefaultVolumetricSolveAmount
Write: physfemodeldesc_t.DefaultVolumetricSolveAmount = value
```
## MotionSmoothCDT 
```lua
@type number
Read: physfemodeldesc_t.MotionSmoothCDT
Write: physfemodeldesc_t.MotionSmoothCDT = value
```
## RodVelocitySmoothIterations 
```lua
@type number
Read: physfemodeldesc_t.RodVelocitySmoothIterations
Write: physfemodeldesc_t.RodVelocitySmoothIterations = value
```
## QuadVelocitySmoothIterations 
```lua
@type number
Read: physfemodeldesc_t.QuadVelocitySmoothIterations
Write: physfemodeldesc_t.QuadVelocitySmoothIterations = value
```
# Functions
## ToPtr
```lua
@returns string
physfemodeldesc_t:ToPtr()
```
## IsValid
```lua
@returns bool
physfemodeldesc_t:IsValid()
```

:::