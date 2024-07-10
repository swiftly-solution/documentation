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
## OpFixedSettings 
```lua
@type LookAtOpFixedSettings_t
Read: clookatupdatenode.OpFixedSettings
Write: clookatupdatenode.OpFixedSettings = value
```
## Target 
```lua
@type number
Read: clookatupdatenode.Target
Write: clookatupdatenode.Target = value
```
## ParamIndex 
```lua
@type CAnimParamHandle
Read: clookatupdatenode.ParamIndex
Write: clookatupdatenode.ParamIndex = value
```
## WeightParamIndex 
```lua
@type CAnimParamHandle
Read: clookatupdatenode.WeightParamIndex
Write: clookatupdatenode.WeightParamIndex = value
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
## Parent 
```lua
@type CUnaryUpdateNode
Read: clookatupdatenode.Parent
Write: clookatupdatenode.Parent = value
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