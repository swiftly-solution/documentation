---
title: CMotorController
index: true
order: 2
category:
  - Guide
---

# CMotorController

::: tabs
@tab Lua
# Constructor
```lua
CMotorController(ptr)
```
# Properties
## Speed 
```lua
--- @type number
Read: cmotorcontroller.Speed
Write: cmotorcontroller.Speed = value
```
## MaxTorque 
```lua
--- @type number
Read: cmotorcontroller.MaxTorque
Write: cmotorcontroller.MaxTorque = value
```
## Axis 
```lua
--- @type Vector
Read: cmotorcontroller.Axis
Write: cmotorcontroller.Axis = value
```
## InertiaFactor 
```lua
--- @type number
Read: cmotorcontroller.InertiaFactor
Write: cmotorcontroller.InertiaFactor = value
```
# Functions
## ToPtr
```lua
@returns string
cmotorcontroller:ToPtr()
```
## IsValid
```lua
@returns bool
cmotorcontroller:IsValid()
```

:::