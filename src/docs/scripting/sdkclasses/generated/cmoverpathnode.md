---
title: CMoverPathNode
index: true
order: 2
category:
  - Guide
---

# CMoverPathNode

::: tabs
@tab Lua
# Constructor
```lua
CMoverPathNode(ptr --[[ string ]])
```
# Properties
## InTangentLocal 
```lua
@type Vector
Read: cmoverpathnode.InTangentLocal
Write: cmoverpathnode.InTangentLocal = value
```
## OutTangentLocal 
```lua
@type Vector
Read: cmoverpathnode.OutTangentLocal
Write: cmoverpathnode.OutTangentLocal = value
```
## ParentPathUniqueID 
```lua
@type string
Read: cmoverpathnode.ParentPathUniqueID
Write: cmoverpathnode.ParentPathUniqueID = value
```
## OnPassThrough (Read-Only)
```lua
@type CEntityIOOutput
Read: cmoverpathnode.OnPassThrough
```
## Mover (Read-Only)
```lua
@type CPathMover
Read: cmoverpathnode.Mover
```
## Parent (Read-Only)
```lua
@type CPointEntity
Read: cmoverpathnode.Parent
```
# Functions
## ToPtr
```lua
@returns string
cmoverpathnode:ToPtr()
```
## IsValid
```lua
@returns bool
cmoverpathnode:IsValid()
```

:::