---
title: CAnimDesc
index: true
order: 2
category:
  - Guide
---

# CAnimDesc

::: tabs
@tab Lua
# Constructor
```lua
CAnimDesc(ptr)
```
# Properties
## Flags (Read-Only)
```lua
--- @type CAnimDesc_Flag
Read: canimdesc.Flags
```
## Fps 
```lua
--- @type number
Read: canimdesc.Fps
Write: canimdesc.Fps = value
```
## Data (Read-Only)
```lua
--- @type CAnimEncodedFrames
Read: canimdesc.Data
```
## MovementArray (Read-Only)
```lua
--- @type table
Read: canimdesc.MovementArray
```
## EventArray (Read-Only)
```lua
--- @type table
Read: canimdesc.EventArray
```
## ActivityArray (Read-Only)
```lua
--- @type table
Read: canimdesc.ActivityArray
```
## HierarchyArray (Read-Only)
```lua
--- @type table
Read: canimdesc.HierarchyArray
```
## Framestalltime 
```lua
--- @type number
Read: canimdesc.Framestalltime
Write: canimdesc.Framestalltime = value
```
## RootMin 
```lua
--- @type Vector
Read: canimdesc.RootMin
Write: canimdesc.RootMin = value
```
## RootMax 
```lua
--- @type Vector
Read: canimdesc.RootMax
Write: canimdesc.RootMax = value
```
## BoneWorldMin (Read-Only)
```lua
--- @type table
Read: canimdesc.BoneWorldMin
```
## BoneWorldMax (Read-Only)
```lua
--- @type table
Read: canimdesc.BoneWorldMax
```
## SequenceParams (Read-Only)
```lua
--- @type CAnimSequenceParams
Read: canimdesc.SequenceParams
```
# Functions
## ToPtr
```lua
@returns string
canimdesc:ToPtr()
```
## IsValid
```lua
@returns bool
canimdesc:IsValid()
```

:::