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
## BonesHash (Read-Only)
```lua
@type table
Read: vphysxaggregatedata_t.BonesHash
```
## BoneNames (Read-Only)
```lua
@type table
Read: vphysxaggregatedata_t.BoneNames
```
## IndexNames (Read-Only)
```lua
@type table
Read: vphysxaggregatedata_t.IndexNames
```
## IndexHash (Read-Only)
```lua
@type table
Read: vphysxaggregatedata_t.IndexHash
```
## Parts (Read-Only)
```lua
@type table
Read: vphysxaggregatedata_t.Parts
```
## Constraints2 (Read-Only)
```lua
@type table
Read: vphysxaggregatedata_t.Constraints2
```
## Joints (Read-Only)
```lua
@type table
Read: vphysxaggregatedata_t.Joints
```
## FeModel (Read-Only)
```lua
@type PhysFeModelDesc_t
Read: vphysxaggregatedata_t.FeModel
```
## BoneParents (Read-Only)
```lua
@type table
Read: vphysxaggregatedata_t.BoneParents
```
## SurfacePropertyHashes (Read-Only)
```lua
@type table
Read: vphysxaggregatedata_t.SurfacePropertyHashes
```
## CollisionAttributes (Read-Only)
```lua
@type table
Read: vphysxaggregatedata_t.CollisionAttributes
```
## DebugPartNames (Read-Only)
```lua
@type table
Read: vphysxaggregatedata_t.DebugPartNames
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