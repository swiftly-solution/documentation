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
--- @param ptr string
CFootPinningUpdateNode(ptr)
```
# Properties
## PoseOpFixedData (Read-Only)
```lua
--- @type FootPinningPoseOpFixedData_t
Read: cfootpinningupdatenode.PoseOpFixedData
```
## TimingSource 
```lua
--- @type number
Read: cfootpinningupdatenode.TimingSource
Write: cfootpinningupdatenode.TimingSource = value
```
## Params (Read-Only)
```lua
--- @type table
Read: cfootpinningupdatenode.Params
```
## ResetChild 
```lua
--- @type boolean
Read: cfootpinningupdatenode.ResetChild
Write: cfootpinningupdatenode.ResetChild = value
```
## Parent (Read-Only)
```lua
--- @type CUnaryUpdateNode
Read: cfootpinningupdatenode.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cfootpinningupdatenode:ToPtr()
```
## IsValid
```lua
--- @return bool
cfootpinningupdatenode:IsValid()
```

:::