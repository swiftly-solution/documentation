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
--- @param ptr string
CBombTarget(ptr)
```
# Properties
## OnBombExplode (Read-Only)
```lua
--- @type CEntityIOOutput
Read: cbombtarget.OnBombExplode
```
## OnBombPlanted (Read-Only)
```lua
--- @type CEntityIOOutput
Read: cbombtarget.OnBombPlanted
```
## OnBombDefused (Read-Only)
```lua
--- @type CEntityIOOutput
Read: cbombtarget.OnBombDefused
```
## IsBombSiteB 
```lua
--- @type boolean
Read: cbombtarget.IsBombSiteB
Write: cbombtarget.IsBombSiteB = value
```
## IsHeistBombTarget 
```lua
--- @type boolean
Read: cbombtarget.IsHeistBombTarget
Write: cbombtarget.IsHeistBombTarget = value
```
## BombPlantedHere 
```lua
--- @type boolean
Read: cbombtarget.BombPlantedHere
Write: cbombtarget.BombPlantedHere = value
```
## MountTarget 
```lua
--- @type string
Read: cbombtarget.MountTarget
Write: cbombtarget.MountTarget = value
```
## InstructorHint (Read-Only)
```lua
--- @type CBaseEntity
Read: cbombtarget.InstructorHint
```
## BombSiteDesignation 
```lua
--- @type number
Read: cbombtarget.BombSiteDesignation
Write: cbombtarget.BombSiteDesignation = value
```
## Parent (Read-Only)
```lua
--- @type CBaseTrigger
Read: cbombtarget.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cbombtarget:ToPtr()
```
## IsValid
```lua
--- @return bool
cbombtarget:IsValid()
```

:::