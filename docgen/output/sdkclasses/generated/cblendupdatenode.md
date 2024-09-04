---
title: CBlendUpdateNode
index: true
order: 2
category:
  - Guide
---

# CBlendUpdateNode

::: tabs
@tab Lua
# Constructor
```lua
CBlendUpdateNode(ptr --[[ string ]])
```
# Properties
## Children (Read-Only)
```lua
@type table
Read: cblendupdatenode.Children
```
## SortedOrder (Read-Only)
```lua
@type table
Read: cblendupdatenode.SortedOrder
```
## TargetValues (Read-Only)
```lua
@type table
Read: cblendupdatenode.TargetValues
```
## BlendValueSource 
```lua
@type number
Read: cblendupdatenode.BlendValueSource
Write: cblendupdatenode.BlendValueSource = value
```
## ParamIndex (Read-Only)
```lua
@type CAnimParamHandle
Read: cblendupdatenode.ParamIndex
```
## Damping (Read-Only)
```lua
@type CAnimInputDamping
Read: cblendupdatenode.Damping
```
## BlendKeyType 
```lua
@type number
Read: cblendupdatenode.BlendKeyType
Write: cblendupdatenode.BlendKeyType = value
```
## LockBlendOnReset 
```lua
@type boolean
Read: cblendupdatenode.LockBlendOnReset
Write: cblendupdatenode.LockBlendOnReset = value
```
## SyncCycles 
```lua
@type boolean
Read: cblendupdatenode.SyncCycles
Write: cblendupdatenode.SyncCycles = value
```
## Loop 
```lua
@type boolean
Read: cblendupdatenode.Loop
Write: cblendupdatenode.Loop = value
```
## LockWhenWaning 
```lua
@type boolean
Read: cblendupdatenode.LockWhenWaning
Write: cblendupdatenode.LockWhenWaning = value
```
## Parent (Read-Only)
```lua
@type CAnimUpdateNodeBase
Read: cblendupdatenode.Parent
```
# Functions
## ToPtr
```lua
@returns string
cblendupdatenode:ToPtr()
```
## IsValid
```lua
@returns bool
cblendupdatenode:IsValid()
```

:::