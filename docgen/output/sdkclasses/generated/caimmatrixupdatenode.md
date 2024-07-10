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
## OpFixedSettings 
```lua
@type AimMatrixOpFixedSettings_t
Read: caimmatrixupdatenode.OpFixedSettings
Write: caimmatrixupdatenode.OpFixedSettings = value
```
## Target 
```lua
@type number
Read: caimmatrixupdatenode.Target
Write: caimmatrixupdatenode.Target = value
```
## ParamIndex 
```lua
@type CAnimParamHandle
Read: caimmatrixupdatenode.ParamIndex
Write: caimmatrixupdatenode.ParamIndex = value
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