---
title: constraint_axislimit_t
index: true
order: 2
category:
  - Guide
---

# constraint_axislimit_t

::: tabs
@tab Lua
# Constructor
```lua
constraint_axislimit_t(ptr --[[ string ]])
```
# Properties
## MinRotation 
```lua
@type number
Read: constraint_axislimit_t.MinRotation
Write: constraint_axislimit_t.MinRotation = value
```
## MaxRotation 
```lua
@type number
Read: constraint_axislimit_t.MaxRotation
Write: constraint_axislimit_t.MaxRotation = value
```
## MotorTargetAngSpeed 
```lua
@type number
Read: constraint_axislimit_t.MotorTargetAngSpeed
Write: constraint_axislimit_t.MotorTargetAngSpeed = value
```
## MotorMaxTorque 
```lua
@type number
Read: constraint_axislimit_t.MotorMaxTorque
Write: constraint_axislimit_t.MotorMaxTorque = value
```
# Functions
## ToPtr
```lua
@returns string
constraint_axislimit_t:ToPtr()
```
## IsValid
```lua
@returns bool
constraint_axislimit_t:IsValid()
```

:::