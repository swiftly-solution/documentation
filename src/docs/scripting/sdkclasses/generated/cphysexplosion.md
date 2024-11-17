---
title: CPhysExplosion
index: true
order: 2
category:
  - Guide
---

# CPhysExplosion

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CPhysExplosion(ptr)
```
# Properties
## ExplodeOnSpawn 
```lua
--- @type boolean
Read: cphysexplosion.ExplodeOnSpawn
Write: cphysexplosion.ExplodeOnSpawn = value
```
## Magnitude 
```lua
--- @type number
Read: cphysexplosion.Magnitude
Write: cphysexplosion.Magnitude = value
```
## Damage 
```lua
--- @type number
Read: cphysexplosion.Damage
Write: cphysexplosion.Damage = value
```
## Radius 
```lua
--- @type number
Read: cphysexplosion.Radius
Write: cphysexplosion.Radius = value
```
## TargetEntityName 
```lua
--- @type string
Read: cphysexplosion.TargetEntityName
Write: cphysexplosion.TargetEntityName = value
```
## InnerRadius 
```lua
--- @type number
Read: cphysexplosion.InnerRadius
Write: cphysexplosion.InnerRadius = value
```
## PushScale 
```lua
--- @type number
Read: cphysexplosion.PushScale
Write: cphysexplosion.PushScale = value
```
## ConvertToDebrisWhenPossible 
```lua
--- @type boolean
Read: cphysexplosion.ConvertToDebrisWhenPossible
Write: cphysexplosion.ConvertToDebrisWhenPossible = value
```
## OnPushedPlayer (Read-Only)
```lua
--- @type CEntityIOOutput
Read: cphysexplosion.OnPushedPlayer
```
## Parent (Read-Only)
```lua
--- @type CPointEntity
Read: cphysexplosion.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cphysexplosion:ToPtr()
```
## IsValid
```lua
--- @return bool
cphysexplosion:IsValid()
```

:::