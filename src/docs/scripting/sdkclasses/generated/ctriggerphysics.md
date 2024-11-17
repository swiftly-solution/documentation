---
title: CTriggerPhysics
index: true
order: 2
category:
  - Guide
---

# CTriggerPhysics

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CTriggerPhysics(ptr)
```
# Properties
## GravityScale 
```lua
--- @type number
Read: ctriggerphysics.GravityScale
Write: ctriggerphysics.GravityScale = value
```
## LinearLimit 
```lua
--- @type number
Read: ctriggerphysics.LinearLimit
Write: ctriggerphysics.LinearLimit = value
```
## LinearDamping 
```lua
--- @type number
Read: ctriggerphysics.LinearDamping
Write: ctriggerphysics.LinearDamping = value
```
## AngularLimit 
```lua
--- @type number
Read: ctriggerphysics.AngularLimit
Write: ctriggerphysics.AngularLimit = value
```
## AngularDamping 
```lua
--- @type number
Read: ctriggerphysics.AngularDamping
Write: ctriggerphysics.AngularDamping = value
```
## LinearForce 
```lua
--- @type number
Read: ctriggerphysics.LinearForce
Write: ctriggerphysics.LinearForce = value
```
## Frequency 
```lua
--- @type number
Read: ctriggerphysics.Frequency
Write: ctriggerphysics.Frequency = value
```
## DampingRatio 
```lua
--- @type number
Read: ctriggerphysics.DampingRatio
Write: ctriggerphysics.DampingRatio = value
```
## LinearForcePointAt 
```lua
--- @type Vector
Read: ctriggerphysics.LinearForcePointAt
Write: ctriggerphysics.LinearForcePointAt = value
```
## CollapseToForcePoint 
```lua
--- @type boolean
Read: ctriggerphysics.CollapseToForcePoint
Write: ctriggerphysics.CollapseToForcePoint = value
```
## LinearForcePointAtWorld 
```lua
--- @type Vector
Read: ctriggerphysics.LinearForcePointAtWorld
Write: ctriggerphysics.LinearForcePointAtWorld = value
```
## LinearForceDirection 
```lua
--- @type Vector
Read: ctriggerphysics.LinearForceDirection
Write: ctriggerphysics.LinearForceDirection = value
```
## ConvertToDebrisWhenPossible 
```lua
--- @type boolean
Read: ctriggerphysics.ConvertToDebrisWhenPossible
Write: ctriggerphysics.ConvertToDebrisWhenPossible = value
```
## Parent (Read-Only)
```lua
--- @type CBaseTrigger
Read: ctriggerphysics.Parent
```
# Functions
## ToPtr
```lua
--- @return string
ctriggerphysics:ToPtr()
```
## IsValid
```lua
--- @return bool
ctriggerphysics:IsValid()
```

:::