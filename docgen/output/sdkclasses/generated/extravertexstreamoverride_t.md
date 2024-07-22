---
title: ExtraVertexStreamOverride_t
index: true
order: 2
category:
  - Guide
---

# ExtraVertexStreamOverride_t

::: tabs
@tab Lua
# Constructor
```lua
ExtraVertexStreamOverride_t(ptr --[[ string ]])
```
# Properties
## SubSceneObject 
```lua
@type number
Read: extravertexstreamoverride_t.SubSceneObject
Write: extravertexstreamoverride_t.SubSceneObject = value
```
## DrawCallIndex 
```lua
@type number
Read: extravertexstreamoverride_t.DrawCallIndex
Write: extravertexstreamoverride_t.DrawCallIndex = value
```
## AdditionalMeshDrawPrimitiveFlags 
```lua
@type number
Read: extravertexstreamoverride_t.AdditionalMeshDrawPrimitiveFlags
Write: extravertexstreamoverride_t.AdditionalMeshDrawPrimitiveFlags = value
```
## ExtraBufferBinding (Read-Only)
```lua
@type CRenderBufferBinding
Read: extravertexstreamoverride_t.ExtraBufferBinding
```
## Parent 
```lua
@type BaseSceneObjectOverride_t
Read: extravertexstreamoverride_t.Parent
Write: extravertexstreamoverride_t.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
extravertexstreamoverride_t:ToPtr()
```
## IsValid
```lua
@returns bool
extravertexstreamoverride_t:IsValid()
```

:::