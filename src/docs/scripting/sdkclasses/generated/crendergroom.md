---
title: CRenderGroom
index: true
order: 2
category:
  - Guide
---

# CRenderGroom

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CRenderGroom(ptr)
```
# Properties
## Hairs (Read-Only)
```lua
--- @type table
Read: crendergroom.Hairs
```
## HairPositionOffsets (Read-Only)
```lua
--- @type table
Read: crendergroom.HairPositionOffsets
```
## SegmentsPerHairStrand 
```lua
--- @type number
Read: crendergroom.SegmentsPerHairStrand
Write: crendergroom.SegmentsPerHairStrand = value
```
## GuideHairCount 
```lua
--- @type number
Read: crendergroom.GuideHairCount
Write: crendergroom.GuideHairCount = value
```
## HairCount 
```lua
--- @type number
Read: crendergroom.HairCount
Write: crendergroom.HairCount = value
```
## GroomGroupID 
```lua
--- @type number
Read: crendergroom.GroomGroupID
Write: crendergroom.GroomGroupID = value
```
## AttachBoneIdx 
```lua
--- @type number
Read: crendergroom.AttachBoneIdx
Write: crendergroom.AttachBoneIdx = value
```
## AttachMeshIdx 
```lua
--- @type number
Read: crendergroom.AttachMeshIdx
Write: crendergroom.AttachMeshIdx = value
```
## AttachMeshDrawCallIdx 
```lua
--- @type number
Read: crendergroom.AttachMeshDrawCallIdx
Write: crendergroom.AttachMeshDrawCallIdx = value
```
## EnableSimulation 
```lua
--- @type boolean
Read: crendergroom.EnableSimulation
Write: crendergroom.EnableSimulation = value
```
# Functions
## ToPtr
```lua
--- @return string
crendergroom:ToPtr()
```
## IsValid
```lua
--- @return bool
crendergroom:IsValid()
```

:::