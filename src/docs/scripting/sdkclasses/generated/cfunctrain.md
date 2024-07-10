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
CFuncTrain(ptr --[[ string ]])
```
# Properties
## CurrentTarget (Read-Only)
```lua
@type CBaseEntity
Read: cfunctrain.CurrentTarget
```
## Activated 
```lua
@type boolean
Read: cfunctrain.Activated
Write: cfunctrain.Activated = value
```
## Enemy (Read-Only)
```lua
@type CBaseEntity
Read: cfunctrain.Enemy
```
## BlockDamage 
```lua
@type number
Read: cfunctrain.BlockDamage
Write: cfunctrain.BlockDamage = value
```
## NextBlockTime 
```lua
@type number
Read: cfunctrain.NextBlockTime
Write: cfunctrain.NextBlockTime = value
```
## LastTarget 
```lua
@type string
Read: cfunctrain.LastTarget
Write: cfunctrain.LastTarget = value
```
## Parent 
```lua
@type CBasePlatTrain
Read: cfunctrain.Parent
Write: cfunctrain.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cfunctrain:ToPtr()
```
## IsValid
```lua
@returns bool
cfunctrain:IsValid()
```

:::