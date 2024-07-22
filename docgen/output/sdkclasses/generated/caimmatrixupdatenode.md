---
title: CAimMatrixUpdateNode
index: true
order: 2
category:
  - Guide
---

# CAimMatrixUpdateNode

::: tabs
@tab Lua
# Constructor
```lua
CAimMatrixUpdateNode(ptr --[[ string ]])
```
# Properties
## OpFixedSettings (Read-Only)
```lua
@type AimMatrixOpFixedSettings_t
Read: caimmatrixupdatenode.OpFixedSettings
```
## Target 
```lua
@type number
Read: caimmatrixupdatenode.Target
Write: caimmatrixupdatenode.Target = value
```
## ParamIndex (Read-Only)
```lua
@type CAnimParamHandle
Read: caimmatrixupdatenode.ParamIndex
```
## ResetChild 
```lua
@type boolean
Read: caimmatrixupdatenode.ResetChild
Write: caimmatrixupdatenode.ResetChild = value
```
## LockWhenWaning 
```lua
@type boolean
Read: caimmatrixupdatenode.LockWhenWaning
Write: caimmatrixupdatenode.LockWhenWaning = value
```
## Parent 
```lua
@type CUnaryUpdateNode
Read: caimmatrixupdatenode.Parent
Write: caimmatrixupdatenode.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
caimmatrixupdatenode:ToPtr()
```
## IsValid
```lua
@returns bool
caimmatrixupdatenode:IsValid()
```

:::