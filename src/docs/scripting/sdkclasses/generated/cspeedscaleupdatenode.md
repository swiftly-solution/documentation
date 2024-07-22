---
title: CSpeedScaleUpdateNode
index: true
order: 2
category:
  - Guide
---

# CSpeedScaleUpdateNode

::: tabs
@tab Lua
# Constructor
```lua
CSpeedScaleUpdateNode(ptr --[[ string ]])
```
# Properties
## ParamIndex (Read-Only)
```lua
@type CAnimParamHandle
Read: cspeedscaleupdatenode.ParamIndex
```
## Parent 
```lua
@type CUnaryUpdateNode
Read: cspeedscaleupdatenode.Parent
Write: cspeedscaleupdatenode.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cspeedscaleupdatenode:ToPtr()
```
## IsValid
```lua
@returns bool
cspeedscaleupdatenode:IsValid()
```

:::