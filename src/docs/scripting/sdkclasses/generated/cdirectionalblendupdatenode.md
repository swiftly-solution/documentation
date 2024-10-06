---
title: CDirectionalBlendUpdateNode
index: true
order: 2
category:
  - Guide
---

# CDirectionalBlendUpdateNode

::: tabs
@tab Lua
# Constructor
```lua
CDirectionalBlendUpdateNode(ptr --[[ string ]])
```
# Properties
## Sequences 
```lua
@type table
Read: cdirectionalblendupdatenode.Sequences
Write: cdirectionalblendupdatenode.Sequences = value
```
## Damping (Read-Only)
```lua
@type CAnimInputDamping
Read: cdirectionalblendupdatenode.Damping
```
## BlendValueSource 
```lua
@type number
Read: cdirectionalblendupdatenode.BlendValueSource
Write: cdirectionalblendupdatenode.BlendValueSource = value
```
## ParamIndex (Read-Only)
```lua
@type CAnimParamHandle
Read: cdirectionalblendupdatenode.ParamIndex
```
## PlaybackSpeed 
```lua
@type number
Read: cdirectionalblendupdatenode.PlaybackSpeed
Write: cdirectionalblendupdatenode.PlaybackSpeed = value
```
## Duration 
```lua
@type number
Read: cdirectionalblendupdatenode.Duration
Write: cdirectionalblendupdatenode.Duration = value
```
## Loop 
```lua
@type boolean
Read: cdirectionalblendupdatenode.Loop
Write: cdirectionalblendupdatenode.Loop = value
```
## LockBlendOnReset 
```lua
@type boolean
Read: cdirectionalblendupdatenode.LockBlendOnReset
Write: cdirectionalblendupdatenode.LockBlendOnReset = value
```
## Parent (Read-Only)
```lua
@type CLeafUpdateNode
Read: cdirectionalblendupdatenode.Parent
```
# Functions
## ToPtr
```lua
@returns string
cdirectionalblendupdatenode:ToPtr()
```
## IsValid
```lua
@returns bool
cdirectionalblendupdatenode:IsValid()
```

:::