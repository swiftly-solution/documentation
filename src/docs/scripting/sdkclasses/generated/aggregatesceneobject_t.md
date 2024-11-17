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
--- @param ptr string
AggregateSceneObject_t(ptr)
```
# Properties
## AllFlags 
```lua
--- @type number
Read: aggregatesceneobject_t.AllFlags
Write: aggregatesceneobject_t.AllFlags = value
```
## AnyFlags 
```lua
--- @type number
Read: aggregatesceneobject_t.AnyFlags
Write: aggregatesceneobject_t.AnyFlags = value
```
## Layer 
```lua
--- @type number
Read: aggregatesceneobject_t.Layer
Write: aggregatesceneobject_t.Layer = value
```
## AggregateMeshes (Read-Only)
```lua
--- @type table
Read: aggregatesceneobject_t.AggregateMeshes
```
## LodSetups (Read-Only)
```lua
--- @type table
Read: aggregatesceneobject_t.LodSetups
```
## VisClusterMembership (Read-Only)
```lua
--- @type table
Read: aggregatesceneobject_t.VisClusterMembership
```
# Functions
## ToPtr
```lua
--- @return string
aggregatesceneobject_t:ToPtr()
```
## IsValid
```lua
--- @return bool
aggregatesceneobject_t:IsValid()
```

:::