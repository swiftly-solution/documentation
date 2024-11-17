---
title: CSceneObjectData
index: true
order: 2
category:
  - Guide
---

# CSceneObjectData

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CSceneObjectData(ptr)
```
# Properties
## MinBounds 
```lua
--- @type Vector
Read: csceneobjectdata.MinBounds
Write: csceneobjectdata.MinBounds = value
```
## MaxBounds 
```lua
--- @type Vector
Read: csceneobjectdata.MaxBounds
Write: csceneobjectdata.MaxBounds = value
```
## TintColor 
```lua
--- @type Vector4D
Read: csceneobjectdata.TintColor
Write: csceneobjectdata.TintColor = value
```
# Functions
## ToPtr
```lua
--- @return string
csceneobjectdata:ToPtr()
```
## IsValid
```lua
--- @return bool
csceneobjectdata:IsValid()
```

:::