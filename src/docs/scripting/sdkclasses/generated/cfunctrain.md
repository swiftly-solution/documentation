---
title: CFuncTrain
index: true
order: 2
category:
  - Guide
---

# CFuncTrain

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CFuncTrain(ptr)
```
# Properties
## CurrentTarget (Read-Only)
```lua
--- @type CBaseEntity
Read: cfunctrain.CurrentTarget
```
## Activated 
```lua
--- @type boolean
Read: cfunctrain.Activated
Write: cfunctrain.Activated = value
```
## Enemy (Read-Only)
```lua
--- @type CBaseEntity
Read: cfunctrain.Enemy
```
## BlockDamage 
```lua
--- @type number
Read: cfunctrain.BlockDamage
Write: cfunctrain.BlockDamage = value
```
## NextBlockTime 
```lua
--- @type number
Read: cfunctrain.NextBlockTime
Write: cfunctrain.NextBlockTime = value
```
## LastTarget 
```lua
--- @type string
Read: cfunctrain.LastTarget
Write: cfunctrain.LastTarget = value
```
## Parent (Read-Only)
```lua
--- @type CBasePlatTrain
Read: cfunctrain.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cfunctrain:ToPtr()
```
## IsValid
```lua
--- @return bool
cfunctrain:IsValid()
```

:::