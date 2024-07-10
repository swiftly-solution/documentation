---
title: CPhysTorque
index: true
order: 2
category:
  - Guide
---

# CPhysTorque

::: tabs
@tab Lua
# Constructor
```lua
CPhysTorque(ptr --[[ string ]])
```
# Properties
## Axis 
```lua
@type Vector
Read: cphystorque.Axis
Write: cphystorque.Axis = value
```
## Parent 
```lua
@type CPhysForce
Read: cphystorque.Parent
Write: cphystorque.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cphystorque:ToPtr()
```
## IsValid
```lua
@returns bool
cphystorque:IsValid()
```

:::