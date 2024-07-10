---
title: CPhysConstraint
index: true
order: 2
category:
  - Guide
---

# CPhysConstraint

::: tabs
@tab Lua
# Constructor
```lua
CPhysConstraint(ptr --[[ string ]])
```
# Properties
## NameAttach1 
```lua
@type string
Read: cphysconstraint.NameAttach1
Write: cphysconstraint.NameAttach1 = value
```
## NameAttach2 
```lua
@type string
Read: cphysconstraint.NameAttach2
Write: cphysconstraint.NameAttach2 = value
```
## Attach1 (Read-Only)
```lua
@type CBaseEntity
Read: cphysconstraint.Attach1
```
## Attach2 (Read-Only)
```lua
@type CBaseEntity
Read: cphysconstraint.Attach2
```
## NameAttachment1 
```lua
@type string
Read: cphysconstraint.NameAttachment1
Write: cphysconstraint.NameAttachment1 = value
```
## NameAttachment2 
```lua
@type string
Read: cphysconstraint.NameAttachment2
Write: cphysconstraint.NameAttachment2 = value
```
## BreakSound 
```lua
@type string
Read: cphysconstraint.BreakSound
Write: cphysconstraint.BreakSound = value
```
## ForceLimit 
```lua
@type number
Read: cphysconstraint.ForceLimit
Write: cphysconstraint.ForceLimit = value
```
## TorqueLimit 
```lua
@type number
Read: cphysconstraint.TorqueLimit
Write: cphysconstraint.TorqueLimit = value
```
## TeleportTick 
```lua
@type number
Read: cphysconstraint.TeleportTick
Write: cphysconstraint.TeleportTick = value
```
## MinTeleportDistance 
```lua
@type number
Read: cphysconstraint.MinTeleportDistance
Write: cphysconstraint.MinTeleportDistance = value
```
## SnapObjectPositions 
```lua
@type boolean
Read: cphysconstraint.SnapObjectPositions
Write: cphysconstraint.SnapObjectPositions = value
```
## OnBreak 
```lua
@type CEntityIOOutput
Read: cphysconstraint.OnBreak
Write: cphysconstraint.OnBreak = value
```
## Parent 
```lua
@type CLogicalEntity
Read: cphysconstraint.Parent
Write: cphysconstraint.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cphysconstraint:ToPtr()
```
## IsValid
```lua
@returns bool
cphysconstraint:IsValid()
```

:::