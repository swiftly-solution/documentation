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
ClutterSceneObject_t(ptr)
```
# Properties
## Bounds (Read-Only)
```lua
--- @type AABB_t
Read: cluttersceneobject_t.Bounds
```
## Flags 
```lua
--- @type number
Read: cluttersceneobject_t.Flags
Write: cluttersceneobject_t.Flags = value
```
## Layer 
```lua
--- @type number
Read: cluttersceneobject_t.Layer
Write: cluttersceneobject_t.Layer = value
```
## InstancePositions (Read-Only)
```lua
--- @type table
Read: cluttersceneobject_t.InstancePositions
```
## InstanceScales (Read-Only)
```lua
--- @type table
Read: cluttersceneobject_t.InstanceScales
```
## InstanceTintSrgb (Read-Only)
```lua
--- @type table
Read: cluttersceneobject_t.InstanceTintSrgb
```
## Tiles (Read-Only)
```lua
--- @type table
Read: cluttersceneobject_t.Tiles
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