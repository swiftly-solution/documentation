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
--- @param ptr string
CMoverPathNode(ptr)
```
# Properties
## InTangentLocal 
```lua
--- @type Vector
Read: cmoverpathnode.InTangentLocal
Write: cmoverpathnode.InTangentLocal = value
```
## OutTangentLocal 
```lua
--- @type Vector
Read: cmoverpathnode.OutTangentLocal
Write: cmoverpathnode.OutTangentLocal = value
```
## ParentPathUniqueID 
```lua
--- @type string
Read: cmoverpathnode.ParentPathUniqueID
Write: cmoverpathnode.ParentPathUniqueID = value
```
## OnPassThrough (Read-Only)
```lua
--- @type CEntityIOOutput
Read: cmoverpathnode.OnPassThrough
```
## OnPassThroughForward (Read-Only)
```lua
--- @type CEntityIOOutput
Read: cmoverpathnode.OnPassThroughForward
```
## OnPassThroughReverse (Read-Only)
```lua
--- @type CEntityIOOutput
Read: cmoverpathnode.OnPassThroughReverse
```
## Mover (Read-Only)
```lua
--- @type CPathMover
Read: cmoverpathnode.Mover
```
## Parent (Read-Only)
```lua
--- @type CPointEntity
Read: cmoverpathnode.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cmoverpathnode:ToPtr()
```
## IsValid
```lua
--- @return bool
cmoverpathnode:IsValid()
```

:::