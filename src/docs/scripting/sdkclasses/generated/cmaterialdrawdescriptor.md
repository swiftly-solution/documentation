---
title: CMaterialDrawDescriptor
index: true
order: 2
category:
  - Guide
---

# CMaterialDrawDescriptor

::: tabs
@tab Lua
# Constructor
```lua
CMaterialDrawDescriptor(ptr)
```
# Properties
## UvDensity 
```lua
--- @type number
Read: cmaterialdrawdescriptor.UvDensity
Write: cmaterialdrawdescriptor.UvDensity = value
```
## TintColor 
```lua
--- @type Vector
Read: cmaterialdrawdescriptor.TintColor
Write: cmaterialdrawdescriptor.TintColor = value
```
## Alpha 
```lua
--- @type number
Read: cmaterialdrawdescriptor.Alpha
Write: cmaterialdrawdescriptor.Alpha = value
```
## NumMeshlets 
```lua
--- @type number
Read: cmaterialdrawdescriptor.NumMeshlets
Write: cmaterialdrawdescriptor.NumMeshlets = value
```
## FirstMeshlet 
```lua
--- @type number
Read: cmaterialdrawdescriptor.FirstMeshlet
Write: cmaterialdrawdescriptor.FirstMeshlet = value
```
## PrimitiveType 
```lua
--- @type number
Read: cmaterialdrawdescriptor.PrimitiveType
Write: cmaterialdrawdescriptor.PrimitiveType = value
```
## BaseVertex 
```lua
--- @type number
Read: cmaterialdrawdescriptor.BaseVertex
Write: cmaterialdrawdescriptor.BaseVertex = value
```
## VertexCount 
```lua
--- @type number
Read: cmaterialdrawdescriptor.VertexCount
Write: cmaterialdrawdescriptor.VertexCount = value
```
## StartIndex 
```lua
--- @type number
Read: cmaterialdrawdescriptor.StartIndex
Write: cmaterialdrawdescriptor.StartIndex = value
```
## IndexCount 
```lua
--- @type number
Read: cmaterialdrawdescriptor.IndexCount
Write: cmaterialdrawdescriptor.IndexCount = value
```
## IndexBuffer (Read-Only)
```lua
--- @type CRenderBufferBinding
Read: cmaterialdrawdescriptor.IndexBuffer
```
# Functions
## ToPtr
```lua
@returns string
cmaterialdrawdescriptor:ToPtr()
```
## IsValid
```lua
@returns bool
cmaterialdrawdescriptor:IsValid()
```

:::