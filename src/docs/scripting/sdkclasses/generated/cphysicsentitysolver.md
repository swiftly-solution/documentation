---
title: CPhysicsEntitySolver
index: true
order: 2
category:
  - Guide
---

# CPhysicsEntitySolver

::: tabs
@tab Lua
# Constructor
```lua
CPhysicsEntitySolver(ptr --[[ string ]])
```
# Properties
## MovingEntity (Read-Only)
```lua
@type CBaseEntity
Read: cphysicsentitysolver.MovingEntity
```
## PhysicsBlocker (Read-Only)
```lua
@type CBaseEntity
Read: cphysicsentitysolver.PhysicsBlocker
```
## SeparationDuration 
```lua
@type number
Read: cphysicsentitysolver.SeparationDuration
Write: cphysicsentitysolver.SeparationDuration = value
```
## CancelTime 
```lua
@type number
Read: cphysicsentitysolver.CancelTime
Write: cphysicsentitysolver.CancelTime = value
```
## Parent 
```lua
@type CLogicalEntity
Read: cphysicsentitysolver.Parent
Write: cphysicsentitysolver.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cphysicsentitysolver:ToPtr()
```
## IsValid
```lua
@returns bool
cphysicsentitysolver:IsValid()
```

:::