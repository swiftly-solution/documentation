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
## Children 
```lua
@type table
Read: cblendupdatenode.Children
Write: cblendupdatenode.Children = value
```
## SortedOrder 
```lua
@type table
Read: cblendupdatenode.SortedOrder
Write: cblendupdatenode.SortedOrder = value
```
## TargetValues 
```lua
@type table
Read: cblendupdatenode.TargetValues
Write: cblendupdatenode.TargetValues = value
```
## BlendValueSource 
```lua
@type number
Read: cblendupdatenode.BlendValueSource
Write: cblendupdatenode.BlendValueSource = value
```
## ParamIndex 
```lua
@type CAnimParamHandle
Read: cblendupdatenode.ParamIndex
Write: cblendupdatenode.ParamIndex = value
```
## Damping 
```lua
@type CAnimInputDamping
Read: cblendupdatenode.Damping
Write: cblendupdatenode.Damping = value
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
## Parent 
```lua
@type CAnimUpdateNodeBase
Read: cblendupdatenode.Parent
Write: cblendupdatenode.Parent = value
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