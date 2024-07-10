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
## NodeBlock 
```lua
@type VoxelVisBlockOffset_t
Read: cvoxelvisibility.NodeBlock
Write: cvoxelvisibility.NodeBlock = value
```
## RegionBlock 
```lua
@type VoxelVisBlockOffset_t
Read: cvoxelvisibility.RegionBlock
Write: cvoxelvisibility.RegionBlock = value
```
## EnclosedClusterListBlock 
```lua
@type VoxelVisBlockOffset_t
Read: cvoxelvisibility.EnclosedClusterListBlock
Write: cvoxelvisibility.EnclosedClusterListBlock = value
```
## EnclosedClustersBlock 
```lua
@type VoxelVisBlockOffset_t
Read: cvoxelvisibility.EnclosedClustersBlock
Write: cvoxelvisibility.EnclosedClustersBlock = value
```
## MasksBlock 
```lua
@type VoxelVisBlockOffset_t
Read: cvoxelvisibility.MasksBlock
Write: cvoxelvisibility.MasksBlock = value
```
## VisBlocks 
```lua
@type VoxelVisBlockOffset_t
Read: cvoxelvisibility.VisBlocks
Write: cvoxelvisibility.VisBlocks = value
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