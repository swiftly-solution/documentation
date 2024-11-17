---
title: CPhysicsWire
index: true
order: 2
category:
  - Guide
---

# CPhysicsWire

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CPhysicsWire(ptr)
```
# Properties
## Density 
```lua
--- @type number
Read: cphysicswire.Density
Write: cphysicswire.Density = value
```
## Parent (Read-Only)
```lua
--- @type CBaseEntity
Read: cphysicswire.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cphysicswire:ToPtr()
```
## IsValid
```lua
--- @return bool
cphysicswire:IsValid()
```

:::