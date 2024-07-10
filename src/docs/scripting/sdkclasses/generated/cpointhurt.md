---
title: CPointHurt
index: true
order: 2
category:
  - Guide
---

# CPointHurt

::: tabs
@tab Lua
# Constructor
```lua
CPointHurt(ptr --[[ string ]])
```
# Properties
## Damage 
```lua
@type number
Read: cpointhurt.Damage
Write: cpointhurt.Damage = value
```
## BitsDamageType 
```lua
@type number
Read: cpointhurt.BitsDamageType
Write: cpointhurt.BitsDamageType = value
```
## Radius 
```lua
@type number
Read: cpointhurt.Radius
Write: cpointhurt.Radius = value
```
## Delay 
```lua
@type number
Read: cpointhurt.Delay
Write: cpointhurt.Delay = value
```
## StrTarget 
```lua
@type string
Read: cpointhurt.StrTarget
Write: cpointhurt.StrTarget = value
```
## Activator (Read-Only)
```lua
@type CBaseEntity
Read: cpointhurt.Activator
```
## Parent 
```lua
@type CPointEntity
Read: cpointhurt.Parent
Write: cpointhurt.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cpointhurt:ToPtr()
```
## IsValid
```lua
@returns bool
cpointhurt:IsValid()
```

:::