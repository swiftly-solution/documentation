---
title: CLookAtUpdateNode
index: true
order: 2
category:
  - Guide
---

# CLookAtUpdateNode

::: tabs
@tab Lua
# Constructor
```lua
CLookAtUpdateNode(ptr --[[ string ]])
```
# Properties
## OpFixedSettings (Read-Only)
```lua
@type LookAtOpFixedSettings_t
Read: clookatupdatenode.OpFixedSettings
```
## Target 
```lua
@type number
Read: clookatupdatenode.Target
Write: clookatupdatenode.Target = value
```
## ParamIndex (Read-Only)
```lua
@type CAnimParamHandle
Read: clookatupdatenode.ParamIndex
```
## WeightParamIndex (Read-Only)
```lua
@type CAnimParamHandle
Read: clookatupdatenode.WeightParamIndex
```
## ResetChild 
```lua
@type boolean
Read: clookatupdatenode.ResetChild
Write: clookatupdatenode.ResetChild = value
```
## LockWhenWaning 
```lua
@type boolean
Read: clookatupdatenode.LockWhenWaning
Write: clookatupdatenode.LockWhenWaning = value
```
## Parent (Read-Only)
```lua
@type CUnaryUpdateNode
Read: clookatupdatenode.Parent
```
# Functions
## ToPtr
```lua
@returns string
clookatupdatenode:ToPtr()
```
## IsValid
```lua
@returns bool
clookatupdatenode:IsValid()
```

:::