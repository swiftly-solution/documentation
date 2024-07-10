---
title: CBombTarget
index: true
order: 2
category:
  - Guide
---

# CBombTarget

::: tabs
@tab Lua
# Constructor
```lua
CBombTarget(ptr --[[ string ]])
```
# Properties
## OnBombExplode 
```lua
@type CEntityIOOutput
Read: cbombtarget.OnBombExplode
Write: cbombtarget.OnBombExplode = value
```
## OnBombPlanted 
```lua
@type CEntityIOOutput
Read: cbombtarget.OnBombPlanted
Write: cbombtarget.OnBombPlanted = value
```
## OnBombDefused 
```lua
@type CEntityIOOutput
Read: cbombtarget.OnBombDefused
Write: cbombtarget.OnBombDefused = value
```
## IsBombSiteB 
```lua
@type boolean
Read: cbombtarget.IsBombSiteB
Write: cbombtarget.IsBombSiteB = value
```
## IsHeistBombTarget 
```lua
@type boolean
Read: cbombtarget.IsHeistBombTarget
Write: cbombtarget.IsHeistBombTarget = value
```
## BombPlantedHere 
```lua
@type boolean
Read: cbombtarget.BombPlantedHere
Write: cbombtarget.BombPlantedHere = value
```
## MountTarget 
```lua
@type string
Read: cbombtarget.MountTarget
Write: cbombtarget.MountTarget = value
```
## InstructorHint (Read-Only)
```lua
@type CBaseEntity
Read: cbombtarget.InstructorHint
```
## BombSiteDesignation 
```lua
@type number
Read: cbombtarget.BombSiteDesignation
Write: cbombtarget.BombSiteDesignation = value
```
## Parent 
```lua
@type CBaseTrigger
Read: cbombtarget.Parent
Write: cbombtarget.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cbombtarget:ToPtr()
```
## IsValid
```lua
@returns bool
cbombtarget:IsValid()
```

:::