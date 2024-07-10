---
title: CFootCycleDefinition
index: true
order: 2
category:
  - Guide
---

# CFootCycleDefinition

::: tabs
@tab Lua
# Constructor
```lua
CFootCycleDefinition(ptr --[[ string ]])
```
# Properties
## StancePositionMS 
```lua
@type Vector
Read: cfootcycledefinition.StancePositionMS
Write: cfootcycledefinition.StancePositionMS = value
```
## MidpointPositionMS 
```lua
@type Vector
Read: cfootcycledefinition.MidpointPositionMS
Write: cfootcycledefinition.MidpointPositionMS = value
```
## StanceDirectionMS 
```lua
@type number
Read: cfootcycledefinition.StanceDirectionMS
Write: cfootcycledefinition.StanceDirectionMS = value
```
## ToStrideStartPos 
```lua
@type Vector
Read: cfootcycledefinition.ToStrideStartPos
Write: cfootcycledefinition.ToStrideStartPos = value
```
## StanceCycle 
```lua
@type CAnimCycle
Read: cfootcycledefinition.StanceCycle
Write: cfootcycledefinition.StanceCycle = value
```
## FootLiftCycle 
```lua
@type CFootCycle
Read: cfootcycledefinition.FootLiftCycle
Write: cfootcycledefinition.FootLiftCycle = value
```
## FootOffCycle 
```lua
@type CFootCycle
Read: cfootcycledefinition.FootOffCycle
Write: cfootcycledefinition.FootOffCycle = value
```
## FootStrikeCycle 
```lua
@type CFootCycle
Read: cfootcycledefinition.FootStrikeCycle
Write: cfootcycledefinition.FootStrikeCycle = value
```
## FootLandCycle 
```lua
@type CFootCycle
Read: cfootcycledefinition.FootLandCycle
Write: cfootcycledefinition.FootLandCycle = value
```
# Functions
## ToPtr
```lua
@returns string
cfootcycledefinition:ToPtr()
```
## IsValid
```lua
@returns bool
cfootcycledefinition:IsValid()
```

:::