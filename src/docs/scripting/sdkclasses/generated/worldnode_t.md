---
title: WorldNode_t
index: true
order: 2
category:
  - Guide
---

# WorldNode_t

::: tabs
@tab Lua
# Constructor
```lua
WorldNode_t(ptr)
```
# Properties
## SceneObjects (Read-Only)
```lua
--- @type table
Read: worldnode_t.SceneObjects
```
## InfoOverlays (Read-Only)
```lua
--- @type table
Read: worldnode_t.InfoOverlays
```
## VisClusterMembership (Read-Only)
```lua
--- @type table
Read: worldnode_t.VisClusterMembership
```
## AggregateSceneObjects (Read-Only)
```lua
--- @type table
Read: worldnode_t.AggregateSceneObjects
```
## ClutterSceneObjects (Read-Only)
```lua
--- @type table
Read: worldnode_t.ClutterSceneObjects
```
## ExtraVertexStreamOverrides (Read-Only)
```lua
--- @type table
Read: worldnode_t.ExtraVertexStreamOverrides
```
## MaterialOverrides (Read-Only)
```lua
--- @type table
Read: worldnode_t.MaterialOverrides
```
## ExtraVertexStreams (Read-Only)
```lua
--- @type table
Read: worldnode_t.ExtraVertexStreams
```
## LayerNames (Read-Only)
```lua
--- @type table
Read: worldnode_t.LayerNames
```
## SceneObjectLayerIndices (Read-Only)
```lua
--- @type table
Read: worldnode_t.SceneObjectLayerIndices
```
## OverlayLayerIndices (Read-Only)
```lua
--- @type table
Read: worldnode_t.OverlayLayerIndices
```
## GrassFileName 
```lua
--- @type string
Read: worldnode_t.GrassFileName
Write: worldnode_t.GrassFileName = value
```
## NodeLightingInfo (Read-Only)
```lua
--- @type BakedLightingInfo_t
Read: worldnode_t.NodeLightingInfo
```
## HasBakedGeometryFlag 
```lua
--- @type boolean
Read: worldnode_t.HasBakedGeometryFlag
Write: worldnode_t.HasBakedGeometryFlag = value
```
# Functions
## ToPtr
```lua
@returns string
worldnode_t:ToPtr()
```
## IsValid
```lua
@returns bool
worldnode_t:IsValid()
```

:::