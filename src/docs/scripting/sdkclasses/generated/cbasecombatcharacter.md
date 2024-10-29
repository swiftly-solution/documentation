---
title: CBaseCombatCharacter
index: true
order: 2
category:
  - Guide
---

# CBaseCombatCharacter

::: tabs
@tab Lua
# Constructor
```lua
CBaseCombatCharacter(ptr --[[ string ]])
```
# Properties
## ForceServerRagdoll 
```lua
@type boolean
Read: cbasecombatcharacter.ForceServerRagdoll
Write: cbasecombatcharacter.ForceServerRagdoll = value
```
## ImpactEnergyScale 
```lua
@type number
Read: cbasecombatcharacter.ImpactEnergyScale
Write: cbasecombatcharacter.ImpactEnergyScale = value
```
## ApplyStressDamage 
```lua
@type boolean
Read: cbasecombatcharacter.ApplyStressDamage
Write: cbasecombatcharacter.ApplyStressDamage = value
```
## DamageCount 
```lua
@type number
Read: cbasecombatcharacter.DamageCount
Write: cbasecombatcharacter.DamageCount = value
```
## VecRelationships (Read-Only)
```lua
@type table
Read: cbasecombatcharacter.VecRelationships
```
## StrRelationships 
```lua
@type string
Read: cbasecombatcharacter.StrRelationships
Write: cbasecombatcharacter.StrRelationships = value
```
## Hull 
```lua
@type number
Read: cbasecombatcharacter.Hull
Write: cbasecombatcharacter.Hull = value
```
## NavHullIdx 
```lua
@type number
Read: cbasecombatcharacter.NavHullIdx
Write: cbasecombatcharacter.NavHullIdx = value
```
## Parent (Read-Only)
```lua
@type CBaseFlex
Read: cbasecombatcharacter.Parent
```
# Functions
## ToPtr
```lua
@returns string
cbasecombatcharacter:ToPtr()
```
## IsValid
```lua
@returns bool
cbasecombatcharacter:IsValid()
```

:::