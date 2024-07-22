---
title: CVoxelVisibility
index: true
order: 2
category:
  - Guide
---

# CVoxelVisibility

::: tabs
@tab Lua
# Constructor
```lua
CVoxelVisibility(ptr --[[ string ]])
```
# Properties
## BaseClusterCount 
```lua
@type number
Read: cvoxelvisibility.BaseClusterCount
Write: cvoxelvisibility.BaseClusterCount = value
```
## PVSBytesPerCluster 
```lua
@type number
Read: cvoxelvisibility.PVSBytesPerCluster
Write: cvoxelvisibility.PVSBytesPerCluster = value
```
## MinBounds 
```lua
@type Vector
Read: cvoxelvisibility.MinBounds
Write: cvoxelvisibility.MinBounds = value
```
## MaxBounds 
```lua
@type Vector
Read: cvoxelvisibility.MaxBounds
Write: cvoxelvisibility.MaxBounds = value
```
## GridSize 
```lua
@type number
Read: cvoxelvisibility.GridSize
Write: cvoxelvisibility.GridSize = value
```
## SkyVisibilityCluster 
```lua
@type number
Read: cvoxelvisibility.SkyVisibilityCluster
Write: cvoxelvisibility.SkyVisibilityCluster = value
```
## SunVisibilityCluster 
```lua
@type number
Read: cvoxelvisibility.SunVisibilityCluster
Write: cvoxelvisibility.SunVisibilityCluster = value
```
## NodeBlock (Read-Only)
```lua
@type VoxelVisBlockOffset_t
Read: cvoxelvisibility.NodeBlock
```
## RegionBlock (Read-Only)
```lua
@type VoxelVisBlockOffset_t
Read: cvoxelvisibility.RegionBlock
```
## EnclosedClusterListBlock (Read-Only)
```lua
@type VoxelVisBlockOffset_t
Read: cvoxelvisibility.EnclosedClusterListBlock
```
## EnclosedClustersBlock (Read-Only)
```lua
@type VoxelVisBlockOffset_t
Read: cvoxelvisibility.EnclosedClustersBlock
```
## MasksBlock (Read-Only)
```lua
@type VoxelVisBlockOffset_t
Read: cvoxelvisibility.MasksBlock
```
## VisBlocks (Read-Only)
```lua
@type VoxelVisBlockOffset_t
Read: cvoxelvisibility.VisBlocks
```
# Functions
## ToPtr
```lua
@returns string
cvoxelvisibility:ToPtr()
```
## IsValid
```lua
@returns bool
cvoxelvisibility:IsValid()
```

:::