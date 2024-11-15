---
title: CPhysImpact
index: true
order: 2
category:
  - Guide
---

# CPhysImpact

::: tabs
@tab Lua
# Constructor
```lua
CPhysImpact(ptr)
```
# Properties
## Damage 
```lua
--- @type number
Read: cphysimpact.Damage
Write: cphysimpact.Damage = value
```
## Distance 
```lua
--- @type number
Read: cphysimpact.Distance
Write: cphysimpact.Distance = value
```
## DirectionEntityName 
```lua
--- @type string
Read: cphysimpact.DirectionEntityName
Write: cphysimpact.DirectionEntityName = value
```
## Parent (Read-Only)
```lua
--- @type CPointEntity
Read: cphysimpact.Parent
```
# Functions
## ToPtr
```lua
@returns string
cphysimpact:ToPtr()
```
## IsValid
```lua
@returns bool
cphysimpact:IsValid()
```

:::