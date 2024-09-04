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
## DrawCalls (Read-Only)
```lua
@type table
Read: csceneobjectdata.DrawCalls
```
## DrawBounds (Read-Only)
```lua
@type table
Read: csceneobjectdata.DrawBounds
```
## Meshlets (Read-Only)
```lua
@type table
Read: csceneobjectdata.Meshlets
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