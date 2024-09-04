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
## ModelInfo (Read-Only)
```lua
@type PermModelInfo_t
Read: permmodeldata_t.ModelInfo
```
## ExtParts (Read-Only)
```lua
@type table
Read: permmodeldata_t.ExtParts
```
## RefMeshGroupMasks (Read-Only)
```lua
@type table
Read: permmodeldata_t.RefMeshGroupMasks
```
## RefPhysGroupMasks (Read-Only)
```lua
@type table
Read: permmodeldata_t.RefPhysGroupMasks
```
## RefLODGroupMasks (Read-Only)
```lua
@type table
Read: permmodeldata_t.RefLODGroupMasks
```
## LodGroupSwitchDistances (Read-Only)
```lua
@type table
Read: permmodeldata_t.LodGroupSwitchDistances
```
## MeshGroups (Read-Only)
```lua
@type table
Read: permmodeldata_t.MeshGroups
```
## MaterialGroups (Read-Only)
```lua
@type table
Read: permmodeldata_t.MaterialGroups
```
## DefaultMeshGroupMask 
```lua
@type number
Read: permmodeldata_t.DefaultMeshGroupMask
Write: permmodeldata_t.DefaultMeshGroupMask = value
```
## ModelSkeleton (Read-Only)
```lua
@type ModelSkeletonData_t
Read: permmodeldata_t.ModelSkeleton
```
## RemappingTable (Read-Only)
```lua
@type table
Read: permmodeldata_t.RemappingTable
```
## RemappingTableStarts (Read-Only)
```lua
@type table
Read: permmodeldata_t.RemappingTableStarts
```
## BoneFlexDrivers (Read-Only)
```lua
@type table
Read: permmodeldata_t.BoneFlexDrivers
```
## ModelConfigList 
```lua
@type CModelConfigList
Read: permmodeldata_t.ModelConfigList
Write: permmodeldata_t.ModelConfigList = value
```
## BodyGroupsHiddenInTools (Read-Only)
```lua
@type table
Read: permmodeldata_t.BodyGroupsHiddenInTools
```
## AnimatedMaterialAttributes (Read-Only)
```lua
@type table
Read: permmodeldata_t.AnimatedMaterialAttributes
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