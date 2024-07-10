---
title: CParticleSystemDefinition
index: true
order: 2
category:
  - Guide
---

# CParticleSystemDefinition

::: tabs
@tab Lua
# Constructor
```lua
CParticleSystemDefinition(ptr --[[ string ]])
```
# Properties
## BehaviorVersion 
```lua
@type number
Read: cparticlesystemdefinition.BehaviorVersion
Write: cparticlesystemdefinition.BehaviorVersion = value
```
## PreEmissionOperators 
```lua
@type table
Read: cparticlesystemdefinition.PreEmissionOperators
Write: cparticlesystemdefinition.PreEmissionOperators = value
```
## Emitters 
```lua
@type table
Read: cparticlesystemdefinition.Emitters
Write: cparticlesystemdefinition.Emitters = value
```
## Initializers 
```lua
@type table
Read: cparticlesystemdefinition.Initializers
Write: cparticlesystemdefinition.Initializers = value
```
## Operators 
```lua
@type table
Read: cparticlesystemdefinition.Operators
Write: cparticlesystemdefinition.Operators = value
```
## ForceGenerators 
```lua
@type table
Read: cparticlesystemdefinition.ForceGenerators
Write: cparticlesystemdefinition.ForceGenerators = value
```
## Constraints 
```lua
@type table
Read: cparticlesystemdefinition.Constraints
Write: cparticlesystemdefinition.Constraints = value
```
## Renderers 
```lua
@type table
Read: cparticlesystemdefinition.Renderers
Write: cparticlesystemdefinition.Renderers = value
```
## Children 
```lua
@type table
Read: cparticlesystemdefinition.Children
Write: cparticlesystemdefinition.Children = value
```
## FirstMultipleOverride_BackwardCompat 
```lua
@type number
Read: cparticlesystemdefinition.FirstMultipleOverride_BackwardCompat
Write: cparticlesystemdefinition.FirstMultipleOverride_BackwardCompat = value
```
## InitialParticles 
```lua
@type number
Read: cparticlesystemdefinition.InitialParticles
Write: cparticlesystemdefinition.InitialParticles = value
```
## MaxParticles 
```lua
@type number
Read: cparticlesystemdefinition.MaxParticles
Write: cparticlesystemdefinition.MaxParticles = value
```
## GroupID 
```lua
@type number
Read: cparticlesystemdefinition.GroupID
Write: cparticlesystemdefinition.GroupID = value
```
## BoundingBoxMin 
```lua
@type Vector
Read: cparticlesystemdefinition.BoundingBoxMin
Write: cparticlesystemdefinition.BoundingBoxMin = value
```
## BoundingBoxMax 
```lua
@type Vector
Read: cparticlesystemdefinition.BoundingBoxMax
Write: cparticlesystemdefinition.BoundingBoxMax = value
```
## DepthSortBias 
```lua
@type number
Read: cparticlesystemdefinition.DepthSortBias
Write: cparticlesystemdefinition.DepthSortBias = value
```
## SortOverridePositionCP 
```lua
@type number
Read: cparticlesystemdefinition.SortOverridePositionCP
Write: cparticlesystemdefinition.SortOverridePositionCP = value
```
## InfiniteBounds 
```lua
@type boolean
Read: cparticlesystemdefinition.InfiniteBounds
Write: cparticlesystemdefinition.InfiniteBounds = value
```
## EnableNamedValues 
```lua
@type boolean
Read: cparticlesystemdefinition.EnableNamedValues
Write: cparticlesystemdefinition.EnableNamedValues = value
```
## NamedValueDomain 
```lua
@type string
Read: cparticlesystemdefinition.NamedValueDomain
Write: cparticlesystemdefinition.NamedValueDomain = value
```
## NamedValueLocals 
```lua
@type table
Read: cparticlesystemdefinition.NamedValueLocals
Write: cparticlesystemdefinition.NamedValueLocals = value
```
## ConstantColor 
```lua
@type Color
Read: cparticlesystemdefinition.ConstantColor
Write: cparticlesystemdefinition.ConstantColor = value
```
## ConstantNormal 
```lua
@type Vector
Read: cparticlesystemdefinition.ConstantNormal
Write: cparticlesystemdefinition.ConstantNormal = value
```
## ConstantRadius 
```lua
@type number
Read: cparticlesystemdefinition.ConstantRadius
Write: cparticlesystemdefinition.ConstantRadius = value
```
## ConstantRotation 
```lua
@type number
Read: cparticlesystemdefinition.ConstantRotation
Write: cparticlesystemdefinition.ConstantRotation = value
```
## ConstantRotationSpeed 
```lua
@type number
Read: cparticlesystemdefinition.ConstantRotationSpeed
Write: cparticlesystemdefinition.ConstantRotationSpeed = value
```
## ConstantLifespan 
```lua
@type number
Read: cparticlesystemdefinition.ConstantLifespan
Write: cparticlesystemdefinition.ConstantLifespan = value
```
## ConstantSequenceNumber 
```lua
@type number
Read: cparticlesystemdefinition.ConstantSequenceNumber
Write: cparticlesystemdefinition.ConstantSequenceNumber = value
```
## ConstantSequenceNumber1 
```lua
@type number
Read: cparticlesystemdefinition.ConstantSequenceNumber1
Write: cparticlesystemdefinition.ConstantSequenceNumber1 = value
```
## SnapshotControlPoint 
```lua
@type number
Read: cparticlesystemdefinition.SnapshotControlPoint
Write: cparticlesystemdefinition.SnapshotControlPoint = value
```
## CullRadius 
```lua
@type number
Read: cparticlesystemdefinition.CullRadius
Write: cparticlesystemdefinition.CullRadius = value
```
## CullFillCost 
```lua
@type number
Read: cparticlesystemdefinition.CullFillCost
Write: cparticlesystemdefinition.CullFillCost = value
```
## CullControlPoint 
```lua
@type number
Read: cparticlesystemdefinition.CullControlPoint
Write: cparticlesystemdefinition.CullControlPoint = value
```
## FallbackMaxCount 
```lua
@type number
Read: cparticlesystemdefinition.FallbackMaxCount
Write: cparticlesystemdefinition.FallbackMaxCount = value
```
## PreSimulationTime 
```lua
@type number
Read: cparticlesystemdefinition.PreSimulationTime
Write: cparticlesystemdefinition.PreSimulationTime = value
```
## StopSimulationAfterTime 
```lua
@type number
Read: cparticlesystemdefinition.StopSimulationAfterTime
Write: cparticlesystemdefinition.StopSimulationAfterTime = value
```
## MaximumTimeStep 
```lua
@type number
Read: cparticlesystemdefinition.MaximumTimeStep
Write: cparticlesystemdefinition.MaximumTimeStep = value
```
## MaximumSimTime 
```lua
@type number
Read: cparticlesystemdefinition.MaximumSimTime
Write: cparticlesystemdefinition.MaximumSimTime = value
```
## MinimumSimTime 
```lua
@type number
Read: cparticlesystemdefinition.MinimumSimTime
Write: cparticlesystemdefinition.MinimumSimTime = value
```
## MinimumTimeStep 
```lua
@type number
Read: cparticlesystemdefinition.MinimumTimeStep
Write: cparticlesystemdefinition.MinimumTimeStep = value
```
## MinimumFrames 
```lua
@type number
Read: cparticlesystemdefinition.MinimumFrames
Write: cparticlesystemdefinition.MinimumFrames = value
```
## MinCPULevel 
```lua
@type number
Read: cparticlesystemdefinition.MinCPULevel
Write: cparticlesystemdefinition.MinCPULevel = value
```
## MinGPULevel 
```lua
@type number
Read: cparticlesystemdefinition.MinGPULevel
Write: cparticlesystemdefinition.MinGPULevel = value
```
## NoDrawTimeToGoToSleep 
```lua
@type number
Read: cparticlesystemdefinition.NoDrawTimeToGoToSleep
Write: cparticlesystemdefinition.NoDrawTimeToGoToSleep = value
```
## MaxDrawDistance 
```lua
@type number
Read: cparticlesystemdefinition.MaxDrawDistance
Write: cparticlesystemdefinition.MaxDrawDistance = value
```
## StartFadeDistance 
```lua
@type number
Read: cparticlesystemdefinition.StartFadeDistance
Write: cparticlesystemdefinition.StartFadeDistance = value
```
## MaxCreationDistance 
```lua
@type number
Read: cparticlesystemdefinition.MaxCreationDistance
Write: cparticlesystemdefinition.MaxCreationDistance = value
```
## AggregationMinAvailableParticles 
```lua
@type number
Read: cparticlesystemdefinition.AggregationMinAvailableParticles
Write: cparticlesystemdefinition.AggregationMinAvailableParticles = value
```
## AggregateRadius 
```lua
@type number
Read: cparticlesystemdefinition.AggregateRadius
Write: cparticlesystemdefinition.AggregateRadius = value
```
## ShouldBatch 
```lua
@type boolean
Read: cparticlesystemdefinition.ShouldBatch
Write: cparticlesystemdefinition.ShouldBatch = value
```
## ShouldHitboxesFallbackToRenderBounds 
```lua
@type boolean
Read: cparticlesystemdefinition.ShouldHitboxesFallbackToRenderBounds
Write: cparticlesystemdefinition.ShouldHitboxesFallbackToRenderBounds = value
```
## ShouldHitboxesFallbackToSnapshot 
```lua
@type boolean
Read: cparticlesystemdefinition.ShouldHitboxesFallbackToSnapshot
Write: cparticlesystemdefinition.ShouldHitboxesFallbackToSnapshot = value
```
## ShouldHitboxesFallbackToCollisionHulls 
```lua
@type boolean
Read: cparticlesystemdefinition.ShouldHitboxesFallbackToCollisionHulls
Write: cparticlesystemdefinition.ShouldHitboxesFallbackToCollisionHulls = value
```
## ViewModelEffect 
```lua
@type number
Read: cparticlesystemdefinition.ViewModelEffect
Write: cparticlesystemdefinition.ViewModelEffect = value
```
## ScreenSpaceEffect 
```lua
@type boolean
Read: cparticlesystemdefinition.ScreenSpaceEffect
Write: cparticlesystemdefinition.ScreenSpaceEffect = value
```
## TargetLayerID 
```lua
@type string
Read: cparticlesystemdefinition.TargetLayerID
Write: cparticlesystemdefinition.TargetLayerID = value
```
## SkipRenderControlPoint 
```lua
@type number
Read: cparticlesystemdefinition.SkipRenderControlPoint
Write: cparticlesystemdefinition.SkipRenderControlPoint = value
```
## AllowRenderControlPoint 
```lua
@type number
Read: cparticlesystemdefinition.AllowRenderControlPoint
Write: cparticlesystemdefinition.AllowRenderControlPoint = value
```
## ShouldSort 
```lua
@type boolean
Read: cparticlesystemdefinition.ShouldSort
Write: cparticlesystemdefinition.ShouldSort = value
```
## ControlPointConfigurations 
```lua
@type table
Read: cparticlesystemdefinition.ControlPointConfigurations
Write: cparticlesystemdefinition.ControlPointConfigurations = value
```
# Functions
## ToPtr
```lua
@returns string
cparticlesystemdefinition:ToPtr()
```
## IsValid
```lua
@returns bool
cparticlesystemdefinition:IsValid()
```

:::