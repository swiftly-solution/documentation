---
title: ClutterSceneObject_t
index: true
order: 2
category:
  - Guide
---

# ClutterSceneObject_t

::: tabs
@tab Lua
# Constructor
```lua
ClutterSceneObject_t(ptr --[[ string ]])
```
# Properties
## Bounds 
```lua
@type AABB_t
Read: cluttersceneobject_t.Bounds
Write: cluttersceneobject_t.Bounds = value
```
## Flags 
```lua
@type number
Read: cluttersceneobject_t.Flags
Write: cluttersceneobject_t.Flags = value
```
## Layer 
```lua
@type number
Read: cluttersceneobject_t.Layer
Write: cluttersceneobject_t.Layer = value
```
## InstancePositions 
```lua
@type table
Read: cluttersceneobject_t.InstancePositions
Write: cluttersceneobject_t.InstancePositions = value
```
## InstanceScales 
```lua
@type table
Read: cluttersceneobject_t.InstanceScales
Write: cluttersceneobject_t.InstanceScales = value
```
## InstanceTintSrgb 
```lua
@type table
Read: cluttersceneobject_t.InstanceTintSrgb
Write: cluttersceneobject_t.InstanceTintSrgb = value
```
## Tiles 
```lua
@type table
Read: cluttersceneobject_t.Tiles
Write: cluttersceneobject_t.Tiles = value
```
# Functions
## ToPtr
```lua
@returns string
cluttersceneobject_t:ToPtr()
```
## IsValid
```lua
@returns bool
cluttersceneobject_t:IsValid()
```

:::