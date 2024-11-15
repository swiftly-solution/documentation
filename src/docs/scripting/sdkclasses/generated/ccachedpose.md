---
title: CCachedPose
index: true
order: 2
category:
  - Guide
---

# CCachedPose

::: tabs
@tab Lua
# Constructor
```lua
CCachedPose(ptr)
```
# Properties
## MorphWeights (Read-Only)
```lua
--- @type table
Read: ccachedpose.MorphWeights
```
## Sequence 
```lua
--- @type number
Read: ccachedpose.Sequence
Write: ccachedpose.Sequence = value
```
## Cycle 
```lua
--- @type number
Read: ccachedpose.Cycle
Write: ccachedpose.Cycle = value
```
# Functions
## ToPtr
```lua
@returns string
ccachedpose:ToPtr()
```
## IsValid
```lua
@returns bool
ccachedpose:IsValid()
```

:::