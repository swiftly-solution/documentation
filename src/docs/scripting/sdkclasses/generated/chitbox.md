---
title: CHitBox
index: true
order: 2
category:
  - Guide
---

# CHitBox

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CHitBox(ptr)
```
# Properties
## Name 
```lua
--- @type string
Read: chitbox.Name
Write: chitbox.Name = value
```
## SurfaceProperty 
```lua
--- @type string
Read: chitbox.SurfaceProperty
Write: chitbox.SurfaceProperty = value
```
## BoneName 
```lua
--- @type string
Read: chitbox.BoneName
Write: chitbox.BoneName = value
```
## MinBounds 
```lua
--- @type Vector
Read: chitbox.MinBounds
Write: chitbox.MinBounds = value
```
## MaxBounds 
```lua
--- @type Vector
Read: chitbox.MaxBounds
Write: chitbox.MaxBounds = value
```
## ShapeRadius 
```lua
--- @type number
Read: chitbox.ShapeRadius
Write: chitbox.ShapeRadius = value
```
## BoneNameHash 
```lua
--- @type number
Read: chitbox.BoneNameHash
Write: chitbox.BoneNameHash = value
```
## GroupId 
```lua
--- @type number
Read: chitbox.GroupId
Write: chitbox.GroupId = value
```
## ShapeType 
```lua
--- @type number
Read: chitbox.ShapeType
Write: chitbox.ShapeType = value
```
## TranslationOnly 
```lua
--- @type boolean
Read: chitbox.TranslationOnly
Write: chitbox.TranslationOnly = value
```
## CRC 
```lua
--- @type number
Read: chitbox.CRC
Write: chitbox.CRC = value
```
## CRenderColor 
```lua
--- @type Color
Read: chitbox.CRenderColor
Write: chitbox.CRenderColor = value
```
## HitBoxIndex 
```lua
--- @type number
Read: chitbox.HitBoxIndex
Write: chitbox.HitBoxIndex = value
```
# Functions
## ToPtr
```lua
--- @return string
chitbox:ToPtr()
```
## IsValid
```lua
--- @return bool
chitbox:IsValid()
```

:::