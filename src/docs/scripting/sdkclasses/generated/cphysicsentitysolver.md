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
--- @param ptr string
CPhysicsEntitySolver(ptr)
```
# Properties
## MovingEntity (Read-Only)
```lua
--- @type CBaseEntity
Read: cphysicsentitysolver.MovingEntity
```
## PhysicsBlocker (Read-Only)
```lua
--- @type CBaseEntity
Read: cphysicsentitysolver.PhysicsBlocker
```
## SeparationDuration 
```lua
--- @type number
Read: cphysicsentitysolver.SeparationDuration
Write: cphysicsentitysolver.SeparationDuration = value
```
## CancelTime 
```lua
--- @type number
Read: cphysicsentitysolver.CancelTime
Write: cphysicsentitysolver.CancelTime = value
```
## Parent (Read-Only)
```lua
--- @type CLogicalEntity
Read: cphysicsentitysolver.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cphysicsentitysolver:ToPtr()
```
## IsValid
```lua
--- @return bool
cphysicsentitysolver:IsValid()
```

:::