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
## CtrlHash (Read-Only)
```lua
@type table
Read: physfemodeldesc_t.CtrlHash
```
## CtrlName (Read-Only)
```lua
@type table
Read: physfemodeldesc_t.CtrlName
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
## Ropes (Read-Only)
```lua
@type table
Read: physfemodeldesc_t.Ropes
```
## NodeBases (Read-Only)
```lua
@type table
Read: physfemodeldesc_t.NodeBases
```
## SimdNodeBases (Read-Only)
```lua
@type table
Read: physfemodeldesc_t.SimdNodeBases
```
## Quads (Read-Only)
```lua
@type table
Read: physfemodeldesc_t.Quads
```
## SimdQuads (Read-Only)
```lua
@type table
Read: physfemodeldesc_t.SimdQuads
```
## SimdTris (Read-Only)
```lua
@type table
Read: physfemodeldesc_t.SimdTris
```
## SimdRods (Read-Only)
```lua
@type table
Read: physfemodeldesc_t.SimdRods
```
## SimdRodsAnim (Read-Only)
```lua
@type table
Read: physfemodeldesc_t.SimdRodsAnim
```
## Rods (Read-Only)
```lua
@type table
Read: physfemodeldesc_t.Rods
```
## Twists (Read-Only)
```lua
@type table
Read: physfemodeldesc_t.Twists
```
## HingeLimits (Read-Only)
```lua
@type table
Read: physfemodeldesc_t.HingeLimits
```
## AntiTunnelProbes (Read-Only)
```lua
@type table
Read: physfemodeldesc_t.AntiTunnelProbes
```
## AntiTunnelTargetNodes (Read-Only)
```lua
@type table
Read: physfemodeldesc_t.AntiTunnelTargetNodes
```
## AxialEdges (Read-Only)
```lua
@type table
Read: physfemodeldesc_t.AxialEdges
```
## NodeInvMasses (Read-Only)
```lua
@type table
Read: physfemodeldesc_t.NodeInvMasses
```
## CtrlOffsets (Read-Only)
```lua
@type table
Read: physfemodeldesc_t.CtrlOffsets
```
## CtrlOsOffsets (Read-Only)
```lua
@type table
Read: physfemodeldesc_t.CtrlOsOffsets
```
## FollowNodes (Read-Only)
```lua
@type table
Read: physfemodeldesc_t.FollowNodes
```
## CollisionPlanes (Read-Only)
```lua
@type table
Read: physfemodeldesc_t.CollisionPlanes
```
## NodeIntegrator (Read-Only)
```lua
@type table
Read: physfemodeldesc_t.NodeIntegrator
```
## SpringIntegrator (Read-Only)
```lua
@type table
Read: physfemodeldesc_t.SpringIntegrator
```
## SimdSpringIntegrator (Read-Only)
```lua
@type table
Read: physfemodeldesc_t.SimdSpringIntegrator
```
## WorldCollisionParams (Read-Only)
```lua
@type table
Read: physfemodeldesc_t.WorldCollisionParams
```
## LegacyStretchForce (Read-Only)
```lua
@type table
Read: physfemodeldesc_t.LegacyStretchForce
```
## NodeCollisionRadii (Read-Only)
```lua
@type table
Read: physfemodeldesc_t.NodeCollisionRadii
```
## DynNodeFriction (Read-Only)
```lua
@type table
Read: physfemodeldesc_t.DynNodeFriction
```
## LocalRotation1 (Read-Only)
```lua
@type table
Read: physfemodeldesc_t.LocalRotation1
```
## LocalForce1 (Read-Only)
```lua
@type table
Read: physfemodeldesc_t.LocalForce1
```
## TaperedCapsuleStretches (Read-Only)
```lua
@type table
Read: physfemodeldesc_t.TaperedCapsuleStretches
```
## TaperedCapsuleRigids (Read-Only)
```lua
@type table
Read: physfemodeldesc_t.TaperedCapsuleRigids
```
## SphereRigids (Read-Only)
```lua
@type table
Read: physfemodeldesc_t.SphereRigids
```
## WorldCollisionNodes (Read-Only)
```lua
@type table
Read: physfemodeldesc_t.WorldCollisionNodes
```
## TreeParents (Read-Only)
```lua
@type table
Read: physfemodeldesc_t.TreeParents
```
## TreeCollisionMasks (Read-Only)
```lua
@type table
Read: physfemodeldesc_t.TreeCollisionMasks
```
## TreeChildren (Read-Only)
```lua
@type table
Read: physfemodeldesc_t.TreeChildren
```
## FreeNodes (Read-Only)
```lua
@type table
Read: physfemodeldesc_t.FreeNodes
```
## FitMatrices (Read-Only)
```lua
@type table
Read: physfemodeldesc_t.FitMatrices
```
## FitWeights (Read-Only)
```lua
@type table
Read: physfemodeldesc_t.FitWeights
```
## ReverseOffsets (Read-Only)
```lua
@type table
Read: physfemodeldesc_t.ReverseOffsets
```
## AnimStrayRadii (Read-Only)
```lua
@type table
Read: physfemodeldesc_t.AnimStrayRadii
```
## SimdAnimStrayRadii (Read-Only)
```lua
@type table
Read: physfemodeldesc_t.SimdAnimStrayRadii
```
## KelagerBends (Read-Only)
```lua
@type table
Read: physfemodeldesc_t.KelagerBends
```
## CtrlSoftOffsets (Read-Only)
```lua
@type table
Read: physfemodeldesc_t.CtrlSoftOffsets
```
## JiggleBones (Read-Only)
```lua
@type table
Read: physfemodeldesc_t.JiggleBones
```
## SourceElems (Read-Only)
```lua
@type table
Read: physfemodeldesc_t.SourceElems
```
## GoalDampedSpringIntegrators (Read-Only)
```lua
@type table
Read: physfemodeldesc_t.GoalDampedSpringIntegrators
```
## Tris (Read-Only)
```lua
@type table
Read: physfemodeldesc_t.Tris
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
## SDFRigids (Read-Only)
```lua
@type table
Read: physfemodeldesc_t.SDFRigids
```
## BoxRigids (Read-Only)
```lua
@type table
Read: physfemodeldesc_t.BoxRigids
```
## DynNodeVertexSet (Read-Only)
```lua
@type table
Read: physfemodeldesc_t.DynNodeVertexSet
```
## VertexSetNames (Read-Only)
```lua
@type table
Read: physfemodeldesc_t.VertexSetNames
```
## RigidColliderPriorities (Read-Only)
```lua
@type table
Read: physfemodeldesc_t.RigidColliderPriorities
```
## MorphLayers (Read-Only)
```lua
@type table
Read: physfemodeldesc_t.MorphLayers
```
## MorphSetData (Read-Only)
```lua
@type table
Read: physfemodeldesc_t.MorphSetData
```
## VertexMaps (Read-Only)
```lua
@type table
Read: physfemodeldesc_t.VertexMaps
```
## VertexMapValues (Read-Only)
```lua
@type table
Read: physfemodeldesc_t.VertexMapValues
```
## Effects (Read-Only)
```lua
@type table
Read: physfemodeldesc_t.Effects
```
## LockToParent (Read-Only)
```lua
@type table
Read: physfemodeldesc_t.LockToParent
```
## LockToGoal (Read-Only)
```lua
@type table
Read: physfemodeldesc_t.LockToGoal
```
## SkelParents (Read-Only)
```lua
@type table
Read: physfemodeldesc_t.SkelParents
```
## DynNodeWindBases (Read-Only)
```lua
@type table
Read: physfemodeldesc_t.DynNodeWindBases
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
## LocalDrag1 
```lua
@type number
Read: physfemodeldesc_t.LocalDrag1
Write: physfemodeldesc_t.LocalDrag1 = value
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