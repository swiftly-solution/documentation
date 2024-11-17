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
--- @param ptr string
CFootCycleDefinition(ptr)
```
# Properties
## StancePositionMS 
```lua
--- @type Vector
Read: cfootcycledefinition.StancePositionMS
Write: cfootcycledefinition.StancePositionMS = value
```
## MidpointPositionMS 
```lua
--- @type Vector
Read: cfootcycledefinition.MidpointPositionMS
Write: cfootcycledefinition.MidpointPositionMS = value
```
## StanceDirectionMS 
```lua
--- @type number
Read: cfootcycledefinition.StanceDirectionMS
Write: cfootcycledefinition.StanceDirectionMS = value
```
## ToStrideStartPos 
```lua
--- @type Vector
Read: cfootcycledefinition.ToStrideStartPos
Write: cfootcycledefinition.ToStrideStartPos = value
```
## StanceCycle (Read-Only)
```lua
--- @type CAnimCycle
Read: cfootcycledefinition.StanceCycle
```
## FootLiftCycle (Read-Only)
```lua
--- @type CFootCycle
Read: cfootcycledefinition.FootLiftCycle
```
## FootOffCycle (Read-Only)
```lua
--- @type CFootCycle
Read: cfootcycledefinition.FootOffCycle
```
## FootStrikeCycle (Read-Only)
```lua
--- @type CFootCycle
Read: cfootcycledefinition.FootStrikeCycle
```
## FootLandCycle (Read-Only)
```lua
--- @type CFootCycle
Read: cfootcycledefinition.FootLandCycle
```
# Functions
## ToPtr
```lua
--- @return string
cfootcycledefinition:ToPtr()
```
## IsValid
```lua
--- @return bool
cfootcycledefinition:IsValid()
```

:::