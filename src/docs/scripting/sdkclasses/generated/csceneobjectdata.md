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
CSceneObjectData(ptr --[[ string ]])
```
# Properties
## MinBounds 
```lua
@type Vector
Read: csceneobjectdata.MinBounds
Write: csceneobjectdata.MinBounds = value
```
## MaxBounds 
```lua
@type Vector
Read: csceneobjectdata.MaxBounds
Write: csceneobjectdata.MaxBounds = value
```
## DrawCalls 
```lua
@type table
Read: csceneobjectdata.DrawCalls
Write: csceneobjectdata.DrawCalls = value
```
## DrawBounds 
```lua
@type table
Read: csceneobjectdata.DrawBounds
Write: csceneobjectdata.DrawBounds = value
```
## Meshlets 
```lua
@type table
Read: csceneobjectdata.Meshlets
Write: csceneobjectdata.Meshlets = value
```
## TintColor 
```lua
@type Vector4D
Read: csceneobjectdata.TintColor
Write: csceneobjectdata.TintColor = value
```
# Functions
## ToPtr
```lua
@returns string
csceneobjectdata:ToPtr()
```
## IsValid
```lua
@returns bool
csceneobjectdata:IsValid()
```

:::