---
title: CSequenceUpdateNode
index: true
order: 2
category:
  - Guide
---

# CSequenceUpdateNode

::: tabs
@tab Lua
# Constructor
```lua
CSequenceUpdateNode(ptr --[[ string ]])
```
# Properties
## ParamSpans (Read-Only)
```lua
@type CParamSpanUpdater
Read: csequenceupdatenode.ParamSpans
```
## Tags 
```lua
@type table
Read: csequenceupdatenode.Tags
Write: csequenceupdatenode.Tags = value
```
## PlaybackSpeed 
```lua
@type number
Read: csequenceupdatenode.PlaybackSpeed
Write: csequenceupdatenode.PlaybackSpeed = value
```
## Duration 
```lua
@type number
Read: csequenceupdatenode.Duration
Write: csequenceupdatenode.Duration = value
```
## Loop 
```lua
@type boolean
Read: csequenceupdatenode.Loop
Write: csequenceupdatenode.Loop = value
```
## Parent 
```lua
@type CLeafUpdateNode
Read: csequenceupdatenode.Parent
Write: csequenceupdatenode.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
csequenceupdatenode:ToPtr()
```
## IsValid
```lua
@returns bool
csequenceupdatenode:IsValid()
```

:::