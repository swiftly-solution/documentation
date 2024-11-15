---
title: CFollowTargetUpdateNode
index: true
order: 2
category:
  - Guide
---

# CFollowTargetUpdateNode

::: tabs
@tab Lua
# Constructor
```lua
CFollowTargetUpdateNode(ptr)
```
# Properties
## OpFixedData (Read-Only)
```lua
--- @type FollowTargetOpFixedSettings_t
Read: cfollowtargetupdatenode.OpFixedData
```
## ParameterPosition (Read-Only)
```lua
--- @type CAnimParamHandle
Read: cfollowtargetupdatenode.ParameterPosition
```
## ParameterOrientation (Read-Only)
```lua
--- @type CAnimParamHandle
Read: cfollowtargetupdatenode.ParameterOrientation
```
## Parent (Read-Only)
```lua
--- @type CUnaryUpdateNode
Read: cfollowtargetupdatenode.Parent
```
# Functions
## ToPtr
```lua
@returns string
cfollowtargetupdatenode:ToPtr()
```
## IsValid
```lua
@returns bool
cfollowtargetupdatenode:IsValid()
```

:::