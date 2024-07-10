---
title: CNmRootMotionData
index: true
order: 2
category:
  - Guide
---

# CNmRootMotionData

::: tabs
@tab Lua
# Constructor
```lua
CNmRootMotionData(ptr --[[ string ]])
```
# Properties
## NumFrames 
```lua
@type number
Read: cnmrootmotiondata.NumFrames
Write: cnmrootmotiondata.NumFrames = value
```
## AverageLinearVelocity 
```lua
@type number
Read: cnmrootmotiondata.AverageLinearVelocity
Write: cnmrootmotiondata.AverageLinearVelocity = value
```
## AverageAngularVelocityRadians 
```lua
@type number
Read: cnmrootmotiondata.AverageAngularVelocityRadians
Write: cnmrootmotiondata.AverageAngularVelocityRadians = value
```
# Functions
## ToPtr
```lua
@returns string
cnmrootmotiondata:ToPtr()
```
## IsValid
```lua
@returns bool
cnmrootmotiondata:IsValid()
```

:::