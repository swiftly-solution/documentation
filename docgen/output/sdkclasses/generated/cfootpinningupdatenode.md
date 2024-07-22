---
title: CFootPinningUpdateNode
index: true
order: 2
category:
  - Guide
---

# CFootPinningUpdateNode

::: tabs
@tab Lua
# Constructor
```lua
CFootPinningUpdateNode(ptr --[[ string ]])
```
# Properties
## PoseOpFixedData (Read-Only)
```lua
@type FootPinningPoseOpFixedData_t
Read: cfootpinningupdatenode.PoseOpFixedData
```
## TimingSource 
```lua
@type number
Read: cfootpinningupdatenode.TimingSource
Write: cfootpinningupdatenode.TimingSource = value
```
## Params 
```lua
@type table
Read: cfootpinningupdatenode.Params
Write: cfootpinningupdatenode.Params = value
```
## ResetChild 
```lua
@type boolean
Read: cfootpinningupdatenode.ResetChild
Write: cfootpinningupdatenode.ResetChild = value
```
## Parent 
```lua
@type CUnaryUpdateNode
Read: cfootpinningupdatenode.Parent
Write: cfootpinningupdatenode.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cfootpinningupdatenode:ToPtr()
```
## IsValid
```lua
@returns bool
cfootpinningupdatenode:IsValid()
```

:::