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
CAnimDesc(ptr --[[ string ]])
```
# Properties
## Flags (Read-Only)
```lua
@type CAnimDesc_Flag
Read: canimdesc.Flags
```
## Fps 
```lua
@type number
Read: canimdesc.Fps
Write: canimdesc.Fps = value
```
## Data (Read-Only)
```lua
@type CAnimEncodedFrames
Read: canimdesc.Data
```
## MovementArray 
```lua
@type table
Read: canimdesc.MovementArray
Write: canimdesc.MovementArray = value
```
## EventArray 
```lua
@type table
Read: canimdesc.EventArray
Write: canimdesc.EventArray = value
```
## ActivityArray 
```lua
@type table
Read: canimdesc.ActivityArray
Write: canimdesc.ActivityArray = value
```
## HierarchyArray 
```lua
@type table
Read: canimdesc.HierarchyArray
Write: canimdesc.HierarchyArray = value
```
## Framestalltime 
```lua
@type number
Read: canimdesc.Framestalltime
Write: canimdesc.Framestalltime = value
```
## RootMin 
```lua
@type Vector
Read: canimdesc.RootMin
Write: canimdesc.RootMin = value
```
## RootMax 
```lua
@type Vector
Read: canimdesc.RootMax
Write: canimdesc.RootMax = value
```
## BoneWorldMin 
```lua
@type table
Read: canimdesc.BoneWorldMin
Write: canimdesc.BoneWorldMin = value
```
## BoneWorldMax 
```lua
@type table
Read: canimdesc.BoneWorldMax
Write: canimdesc.BoneWorldMax = value
```
## SequenceParams (Read-Only)
```lua
@type CAnimSequenceParams
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