---
title: CPhysForce
index: true
order: 2
category:
  - Guide
---

# CPhysForce

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CPhysForce(ptr)
```
# Properties
## NameAttach 
```lua
--- @type string
Read: cphysforce.NameAttach
Write: cphysforce.NameAttach = value
```
## Force 
```lua
--- @type number
Read: cphysforce.Force
Write: cphysforce.Force = value
```
## ForceTime 
```lua
--- @type number
Read: cphysforce.ForceTime
Write: cphysforce.ForceTime = value
```
## AttachedObject (Read-Only)
```lua
--- @type CBaseEntity
Read: cphysforce.AttachedObject
```
## WasRestored 
```lua
--- @type boolean
Read: cphysforce.WasRestored
Write: cphysforce.WasRestored = value
```
## Integrator (Read-Only)
```lua
--- @type CConstantForceController
Read: cphysforce.Integrator
```
## Parent (Read-Only)
```lua
--- @type CPointEntity
Read: cphysforce.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cphysforce:ToPtr()
```
## IsValid
```lua
--- @return bool
cphysforce:IsValid()
```

:::