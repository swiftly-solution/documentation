---
title: RnHull_t
index: true
order: 2
category:
  - Guide
---

# RnHull_t

::: tabs
@tab Lua
# Constructor
```lua
RnHull_t(ptr --[[ string ]])
```
# Properties
## Centroid 
```lua
@type Vector
Read: rnhull_t.Centroid
Write: rnhull_t.Centroid = value
```
## MaxAngularRadius 
```lua
@type number
Read: rnhull_t.MaxAngularRadius
Write: rnhull_t.MaxAngularRadius = value
```
## Bounds (Read-Only)
```lua
@type AABB_t
Read: rnhull_t.Bounds
```
## OrthographicAreas 
```lua
@type Vector
Read: rnhull_t.OrthographicAreas
Write: rnhull_t.OrthographicAreas = value
```
## Volume 
```lua
@type number
Read: rnhull_t.Volume
Write: rnhull_t.Volume = value
```
## SurfaceArea 
```lua
@type number
Read: rnhull_t.SurfaceArea
Write: rnhull_t.SurfaceArea = value
```
## Vertices 
```lua
@type table
Read: rnhull_t.Vertices
Write: rnhull_t.Vertices = value
```
## VertexPositions 
```lua
@type table
Read: rnhull_t.VertexPositions
Write: rnhull_t.VertexPositions = value
```
## Edges 
```lua
@type table
Read: rnhull_t.Edges
Write: rnhull_t.Edges = value
```
## Faces 
```lua
@type table
Read: rnhull_t.Faces
Write: rnhull_t.Faces = value
```
## FacePlanes 
```lua
@type table
Read: rnhull_t.FacePlanes
Write: rnhull_t.FacePlanes = value
```
## Flags 
```lua
@type number
Read: rnhull_t.Flags
Write: rnhull_t.Flags = value
```
## RegionSVM 
```lua
@type CRegionSVM
Read: rnhull_t.RegionSVM
Write: rnhull_t.RegionSVM = value
```
# Functions
## ToPtr
```lua
@returns string
rnhull_t:ToPtr()
```
## IsValid
```lua
@returns bool
rnhull_t:IsValid()
```

:::