---
title: CPhysMotor
index: true
order: 2
category:
  - Guide
---

# CPhysMotor

::: tabs
@tab Lua
# Constructor
```lua
CPhysMotor(ptr --[[ string ]])
```
# Properties
## NameAttach 
```lua
@type string
Read: cphysmotor.NameAttach
Write: cphysmotor.NameAttach = value
```
## AttachedObject (Read-Only)
```lua
@type CBaseEntity
Read: cphysmotor.AttachedObject
```
## SpinUp 
```lua
@type number
Read: cphysmotor.SpinUp
Write: cphysmotor.SpinUp = value
```
## AdditionalAcceleration 
```lua
@type number
Read: cphysmotor.AdditionalAcceleration
Write: cphysmotor.AdditionalAcceleration = value
```
## AngularAcceleration 
```lua
@type number
Read: cphysmotor.AngularAcceleration
Write: cphysmotor.AngularAcceleration = value
```
## LastTime 
```lua
@type number
Read: cphysmotor.LastTime
Write: cphysmotor.LastTime = value
```
## Motor (Read-Only)
```lua
@type CMotorController
Read: cphysmotor.Motor
```
## Parent 
```lua
@type CLogicalEntity
Read: cphysmotor.Parent
Write: cphysmotor.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cphysmotor:ToPtr()
```
## IsValid
```lua
@returns bool
cphysmotor:IsValid()
```

:::