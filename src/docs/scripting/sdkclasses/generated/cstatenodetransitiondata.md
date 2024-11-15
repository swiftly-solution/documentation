---
title: CStateNodeTransitionData
index: true
order: 2
category:
  - Guide
---

# CStateNodeTransitionData

::: tabs
@tab Lua
# Constructor
```lua
CStateNodeTransitionData(ptr)
```
# Properties
## Curve (Read-Only)
```lua
--- @type CBlendCurve
Read: cstatenodetransitiondata.Curve
```
## Reset 
```lua
--- @type bitfield:1
Read: cstatenodetransitiondata.Reset
Write: cstatenodetransitiondata.Reset = value
```
## ResetCycleOption 
```lua
--- @type bitfield:3
Read: cstatenodetransitiondata.ResetCycleOption
Write: cstatenodetransitiondata.ResetCycleOption = value
```
# Functions
## ToPtr
```lua
@returns string
cstatenodetransitiondata:ToPtr()
```
## IsValid
```lua
@returns bool
cstatenodetransitiondata:IsValid()
```

:::