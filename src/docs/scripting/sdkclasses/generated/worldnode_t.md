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
WorldNode_t(ptr --[[ string ]])
```
# Properties
## SceneObjects 
```lua
@type table
Read: worldnode_t.SceneObjects
Write: worldnode_t.SceneObjects = value
```
## InfoOverlays 
```lua
@type table
Read: worldnode_t.InfoOverlays
Write: worldnode_t.InfoOverlays = value
```
## VisClusterMembership 
```lua
@type table
Read: worldnode_t.VisClusterMembership
Write: worldnode_t.VisClusterMembership = value
```
## AggregateSceneObjects 
```lua
@type table
Read: worldnode_t.AggregateSceneObjects
Write: worldnode_t.AggregateSceneObjects = value
```
## ClutterSceneObjects 
```lua
@type table
Read: worldnode_t.ClutterSceneObjects
Write: worldnode_t.ClutterSceneObjects = value
```
## ExtraVertexStreamOverrides 
```lua
@type table
Read: worldnode_t.ExtraVertexStreamOverrides
Write: worldnode_t.ExtraVertexStreamOverrides = value
```
## MaterialOverrides 
```lua
@type table
Read: worldnode_t.MaterialOverrides
Write: worldnode_t.MaterialOverrides = value
```
## ExtraVertexStreams 
```lua
@type table
Read: worldnode_t.ExtraVertexStreams
Write: worldnode_t.ExtraVertexStreams = value
```
## LayerNames 
```lua
@type table
Read: worldnode_t.LayerNames
Write: worldnode_t.LayerNames = value
```
## SceneObjectLayerIndices 
```lua
@type table
Read: worldnode_t.SceneObjectLayerIndices
Write: worldnode_t.SceneObjectLayerIndices = value
```
## OverlayLayerIndices 
```lua
@type table
Read: worldnode_t.OverlayLayerIndices
Write: worldnode_t.OverlayLayerIndices = value
```
## GrassFileName 
```lua
@type string
Read: worldnode_t.GrassFileName
Write: worldnode_t.GrassFileName = value
```
## NodeLightingInfo (Read-Only)
```lua
@type BakedLightingInfo_t
Read: worldnode_t.NodeLightingInfo
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