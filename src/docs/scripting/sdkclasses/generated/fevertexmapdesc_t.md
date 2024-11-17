---
title: FeVertexMapDesc_t
index: true
order: 2
category:
  - Guide
---

# FeVertexMapDesc_t

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
FeVertexMapDesc_t(ptr)
```
# Properties
## Name 
```lua
--- @type string
Read: fevertexmapdesc_t.Name
Write: fevertexmapdesc_t.Name = value
```
## NameHash 
```lua
--- @type number
Read: fevertexmapdesc_t.NameHash
Write: fevertexmapdesc_t.NameHash = value
```
## Color 
```lua
--- @type number
Read: fevertexmapdesc_t.Color
Write: fevertexmapdesc_t.Color = value
```
## Flags 
```lua
--- @type number
Read: fevertexmapdesc_t.Flags
Write: fevertexmapdesc_t.Flags = value
```
## VertexBase 
```lua
--- @type number
Read: fevertexmapdesc_t.VertexBase
Write: fevertexmapdesc_t.VertexBase = value
```
## VertexCount 
```lua
--- @type number
Read: fevertexmapdesc_t.VertexCount
Write: fevertexmapdesc_t.VertexCount = value
```
## MapOffset 
```lua
--- @type number
Read: fevertexmapdesc_t.MapOffset
Write: fevertexmapdesc_t.MapOffset = value
```
## NodeListOffset 
```lua
--- @type number
Read: fevertexmapdesc_t.NodeListOffset
Write: fevertexmapdesc_t.NodeListOffset = value
```
## CenterOfMass 
```lua
--- @type Vector
Read: fevertexmapdesc_t.CenterOfMass
Write: fevertexmapdesc_t.CenterOfMass = value
```
## VolumetricSolveStrength 
```lua
--- @type number
Read: fevertexmapdesc_t.VolumetricSolveStrength
Write: fevertexmapdesc_t.VolumetricSolveStrength = value
```
## ScaleSourceNode 
```lua
--- @type number
Read: fevertexmapdesc_t.ScaleSourceNode
Write: fevertexmapdesc_t.ScaleSourceNode = value
```
## NodeListCount 
```lua
--- @type number
Read: fevertexmapdesc_t.NodeListCount
Write: fevertexmapdesc_t.NodeListCount = value
```
# Functions
## ToPtr
```lua
--- @return string
fevertexmapdesc_t:ToPtr()
```
## IsValid
```lua
--- @return bool
fevertexmapdesc_t:IsValid()
```

:::