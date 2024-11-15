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
CPhysTorque(ptr)
```
# Properties
## Axis 
```lua
--- @type Vector
Read: cphystorque.Axis
Write: cphystorque.Axis = value
```
## Parent (Read-Only)
```lua
--- @type CPhysForce
Read: cphystorque.Parent
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