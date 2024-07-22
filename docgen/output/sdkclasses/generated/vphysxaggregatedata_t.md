---
title: VPhysXAggregateData_t
index: true
order: 2
category:
  - Guide
---

# VPhysXAggregateData_t

::: tabs
@tab Lua
# Constructor
```lua
VPhysXAggregateData_t(ptr --[[ string ]])
```
# Properties
## Flags 
```lua
@type number
Read: vphysxaggregatedata_t.Flags
Write: vphysxaggregatedata_t.Flags = value
```
## RefCounter 
```lua
@type number
Read: vphysxaggregatedata_t.RefCounter
Write: vphysxaggregatedata_t.RefCounter = value
```
## BonesHash 
```lua
@type table
Read: vphysxaggregatedata_t.BonesHash
Write: vphysxaggregatedata_t.BonesHash = value
```
## BoneNames 
```lua
@type table
Read: vphysxaggregatedata_t.BoneNames
Write: vphysxaggregatedata_t.BoneNames = value
```
## IndexNames 
```lua
@type table
Read: vphysxaggregatedata_t.IndexNames
Write: vphysxaggregatedata_t.IndexNames = value
```
## IndexHash 
```lua
@type table
Read: vphysxaggregatedata_t.IndexHash
Write: vphysxaggregatedata_t.IndexHash = value
```
## Parts 
```lua
@type table
Read: vphysxaggregatedata_t.Parts
Write: vphysxaggregatedata_t.Parts = value
```
## Constraints2 
```lua
@type table
Read: vphysxaggregatedata_t.Constraints2
Write: vphysxaggregatedata_t.Constraints2 = value
```
## Joints 
```lua
@type table
Read: vphysxaggregatedata_t.Joints
Write: vphysxaggregatedata_t.Joints = value
```
## FeModel 
```lua
@type PhysFeModelDesc_t
Read: vphysxaggregatedata_t.FeModel
Write: vphysxaggregatedata_t.FeModel = value
```
## BoneParents 
```lua
@type table
Read: vphysxaggregatedata_t.BoneParents
Write: vphysxaggregatedata_t.BoneParents = value
```
## SurfacePropertyHashes 
```lua
@type table
Read: vphysxaggregatedata_t.SurfacePropertyHashes
Write: vphysxaggregatedata_t.SurfacePropertyHashes = value
```
## CollisionAttributes 
```lua
@type table
Read: vphysxaggregatedata_t.CollisionAttributes
Write: vphysxaggregatedata_t.CollisionAttributes = value
```
## DebugPartNames 
```lua
@type table
Read: vphysxaggregatedata_t.DebugPartNames
Write: vphysxaggregatedata_t.DebugPartNames = value
```
## EmbeddedKeyvalues 
```lua
@type string
Read: vphysxaggregatedata_t.EmbeddedKeyvalues
Write: vphysxaggregatedata_t.EmbeddedKeyvalues = value
```
# Functions
## ToPtr
```lua
@returns string
vphysxaggregatedata_t:ToPtr()
```
## IsValid
```lua
@returns bool
vphysxaggregatedata_t:IsValid()
```

:::