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
## Damping 
```lua
@type CAnimInputDamping
Read: cdirectionalblendupdatenode.Damping
Write: cdirectionalblendupdatenode.Damping = value
```
## BlendValueSource 
```lua
@type number
Read: cdirectionalblendupdatenode.BlendValueSource
Write: cdirectionalblendupdatenode.BlendValueSource = value
```
## ParamIndex 
```lua
@type CAnimParamHandle
Read: cdirectionalblendupdatenode.ParamIndex
Write: cdirectionalblendupdatenode.ParamIndex = value
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
## Parent 
```lua
@type CLeafUpdateNode
Read: cdirectionalblendupdatenode.Parent
Write: cdirectionalblendupdatenode.Parent = value
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