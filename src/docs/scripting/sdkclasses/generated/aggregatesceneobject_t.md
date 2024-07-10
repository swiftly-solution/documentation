---
title: AggregateSceneObject_t
index: true
order: 2
category:
  - Guide
---

# AggregateSceneObject_t

::: tabs
@tab Lua
# Constructor
```lua
AggregateSceneObject_t(ptr --[[ string ]])
```
# Properties
## AllFlags 
```lua
@type number
Read: aggregatesceneobject_t.AllFlags
Write: aggregatesceneobject_t.AllFlags = value
```
## AnyFlags 
```lua
@type number
Read: aggregatesceneobject_t.AnyFlags
Write: aggregatesceneobject_t.AnyFlags = value
```
## Layer 
```lua
@type number
Read: aggregatesceneobject_t.Layer
Write: aggregatesceneobject_t.Layer = value
```
## AggregateMeshes 
```lua
@type table
Read: aggregatesceneobject_t.AggregateMeshes
Write: aggregatesceneobject_t.AggregateMeshes = value
```
## LodSetups 
```lua
@type table
Read: aggregatesceneobject_t.LodSetups
Write: aggregatesceneobject_t.LodSetups = value
```
## VisClusterMembership 
```lua
@type table
Read: aggregatesceneobject_t.VisClusterMembership
Write: aggregatesceneobject_t.VisClusterMembership = value
```
# Functions
## ToPtr
```lua
@returns string
aggregatesceneobject_t:ToPtr()
```
## IsValid
```lua
@returns bool
aggregatesceneobject_t:IsValid()
```

:::