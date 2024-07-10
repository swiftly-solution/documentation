---
title: PermModelData_t
index: true
order: 2
category:
  - Guide
---

# PermModelData_t

::: tabs
@tab Lua
# Constructor
```lua
PermModelData_t(ptr --[[ string ]])
```
# Properties
## Name 
```lua
@type string
Read: permmodeldata_t.Name
Write: permmodeldata_t.Name = value
```
## ModelInfo 
```lua
@type PermModelInfo_t
Read: permmodeldata_t.ModelInfo
Write: permmodeldata_t.ModelInfo = value
```
## ExtParts 
```lua
@type table
Read: permmodeldata_t.ExtParts
Write: permmodeldata_t.ExtParts = value
```
## RefMeshGroupMasks 
```lua
@type table
Read: permmodeldata_t.RefMeshGroupMasks
Write: permmodeldata_t.RefMeshGroupMasks = value
```
## RefPhysGroupMasks 
```lua
@type table
Read: permmodeldata_t.RefPhysGroupMasks
Write: permmodeldata_t.RefPhysGroupMasks = value
```
## RefLODGroupMasks 
```lua
@type table
Read: permmodeldata_t.RefLODGroupMasks
Write: permmodeldata_t.RefLODGroupMasks = value
```
## LodGroupSwitchDistances 
```lua
@type table
Read: permmodeldata_t.LodGroupSwitchDistances
Write: permmodeldata_t.LodGroupSwitchDistances = value
```
## MeshGroups 
```lua
@type table
Read: permmodeldata_t.MeshGroups
Write: permmodeldata_t.MeshGroups = value
```
## MaterialGroups 
```lua
@type table
Read: permmodeldata_t.MaterialGroups
Write: permmodeldata_t.MaterialGroups = value
```
## DefaultMeshGroupMask 
```lua
@type number
Read: permmodeldata_t.DefaultMeshGroupMask
Write: permmodeldata_t.DefaultMeshGroupMask = value
```
## ModelSkeleton 
```lua
@type ModelSkeletonData_t
Read: permmodeldata_t.ModelSkeleton
Write: permmodeldata_t.ModelSkeleton = value
```
## RemappingTable 
```lua
@type table
Read: permmodeldata_t.RemappingTable
Write: permmodeldata_t.RemappingTable = value
```
## RemappingTableStarts 
```lua
@type table
Read: permmodeldata_t.RemappingTableStarts
Write: permmodeldata_t.RemappingTableStarts = value
```
## BoneFlexDrivers 
```lua
@type table
Read: permmodeldata_t.BoneFlexDrivers
Write: permmodeldata_t.BoneFlexDrivers = value
```
## ModelConfigList (Read-Only)
```lua
@type CModelConfigList
Read: permmodeldata_t.ModelConfigList
```
## BodyGroupsHiddenInTools 
```lua
@type table
Read: permmodeldata_t.BodyGroupsHiddenInTools
Write: permmodeldata_t.BodyGroupsHiddenInTools = value
```
## AnimatedMaterialAttributes 
```lua
@type table
Read: permmodeldata_t.AnimatedMaterialAttributes
Write: permmodeldata_t.AnimatedMaterialAttributes = value
```
# Functions
## ToPtr
```lua
@returns string
permmodeldata_t:ToPtr()
```
## IsValid
```lua
@returns bool
permmodeldata_t:IsValid()
```

:::