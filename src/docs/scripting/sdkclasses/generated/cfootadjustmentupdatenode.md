---
title: CFootAdjustmentUpdateNode
index: true
order: 2
category:
  - Guide
---

# CFootAdjustmentUpdateNode

::: tabs
@tab Lua
# Constructor
```lua
CFootAdjustmentUpdateNode(ptr --[[ string ]])
```
# Properties
## Clips (Read-Only)
```lua
@type table
Read: cfootadjustmentupdatenode.Clips
```
## BasePoseCacheHandle (Read-Only)
```lua
@type CPoseHandle
Read: cfootadjustmentupdatenode.BasePoseCacheHandle
```
## FacingTarget (Read-Only)
```lua
@type CAnimParamHandle
Read: cfootadjustmentupdatenode.FacingTarget
```
## TurnTimeMin 
```lua
@type number
Read: cfootadjustmentupdatenode.TurnTimeMin
Write: cfootadjustmentupdatenode.TurnTimeMin = value
```
## TurnTimeMax 
```lua
@type number
Read: cfootadjustmentupdatenode.TurnTimeMax
Write: cfootadjustmentupdatenode.TurnTimeMax = value
```
## StepHeightMax 
```lua
@type number
Read: cfootadjustmentupdatenode.StepHeightMax
Write: cfootadjustmentupdatenode.StepHeightMax = value
```
## StepHeightMaxAngle 
```lua
@type number
Read: cfootadjustmentupdatenode.StepHeightMaxAngle
Write: cfootadjustmentupdatenode.StepHeightMaxAngle = value
```
## ResetChild 
```lua
@type boolean
Read: cfootadjustmentupdatenode.ResetChild
Write: cfootadjustmentupdatenode.ResetChild = value
```
## AnimationDriven 
```lua
@type boolean
Read: cfootadjustmentupdatenode.AnimationDriven
Write: cfootadjustmentupdatenode.AnimationDriven = value
```
## Parent (Read-Only)
```lua
@type CUnaryUpdateNode
Read: cfootadjustmentupdatenode.Parent
```
# Functions
## ToPtr
```lua
@returns string
cfootadjustmentupdatenode:ToPtr()
```
## IsValid
```lua
@returns bool
cfootadjustmentupdatenode:IsValid()
```

:::