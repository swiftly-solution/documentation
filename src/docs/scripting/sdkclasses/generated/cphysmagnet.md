---
title: CPhysMagnet
index: true
order: 2
category:
  - Guide
---

# CPhysMagnet

::: tabs
@tab Lua
# Constructor
```lua
CPhysMagnet(ptr)
```
# Properties
## OnMagnetAttach (Read-Only)
```lua
--- @type CEntityIOOutput
Read: cphysmagnet.OnMagnetAttach
```
## OnMagnetDetach (Read-Only)
```lua
--- @type CEntityIOOutput
Read: cphysmagnet.OnMagnetDetach
```
## MassScale 
```lua
--- @type number
Read: cphysmagnet.MassScale
Write: cphysmagnet.MassScale = value
```
## ForceLimit 
```lua
--- @type number
Read: cphysmagnet.ForceLimit
Write: cphysmagnet.ForceLimit = value
```
## TorqueLimit 
```lua
--- @type number
Read: cphysmagnet.TorqueLimit
Write: cphysmagnet.TorqueLimit = value
```
## MagnettedEntities (Read-Only)
```lua
--- @type table
Read: cphysmagnet.MagnettedEntities
```
## Active 
```lua
--- @type boolean
Read: cphysmagnet.Active
Write: cphysmagnet.Active = value
```
## HasHitSomething 
```lua
--- @type boolean
Read: cphysmagnet.HasHitSomething
Write: cphysmagnet.HasHitSomething = value
```
## TotalMass 
```lua
--- @type number
Read: cphysmagnet.TotalMass
Write: cphysmagnet.TotalMass = value
```
## Radius 
```lua
--- @type number
Read: cphysmagnet.Radius
Write: cphysmagnet.Radius = value
```
## NextSuckTime 
```lua
--- @type number
Read: cphysmagnet.NextSuckTime
Write: cphysmagnet.NextSuckTime = value
```
## MaxObjectsAttached 
```lua
--- @type number
Read: cphysmagnet.MaxObjectsAttached
Write: cphysmagnet.MaxObjectsAttached = value
```
## Parent (Read-Only)
```lua
--- @type CBaseAnimGraph
Read: cphysmagnet.Parent
```
# Functions
## ToPtr
```lua
@returns string
cphysmagnet:ToPtr()
```
## IsValid
```lua
@returns bool
cphysmagnet:IsValid()
```

:::