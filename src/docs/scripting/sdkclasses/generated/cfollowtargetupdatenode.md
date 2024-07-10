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
CFollowTargetUpdateNode(ptr --[[ string ]])
```
# Properties
## OpFixedData 
```lua
@type FollowTargetOpFixedSettings_t
Read: cfollowtargetupdatenode.OpFixedData
Write: cfollowtargetupdatenode.OpFixedData = value
```
## ParameterPosition 
```lua
@type CAnimParamHandle
Read: cfollowtargetupdatenode.ParameterPosition
Write: cfollowtargetupdatenode.ParameterPosition = value
```
## ParameterOrientation 
```lua
@type CAnimParamHandle
Read: cfollowtargetupdatenode.ParameterOrientation
Write: cfollowtargetupdatenode.ParameterOrientation = value
```
## Parent 
```lua
@type CUnaryUpdateNode
Read: cfollowtargetupdatenode.Parent
Write: cfollowtargetupdatenode.Parent = value
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