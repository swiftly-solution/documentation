---
title: CFlashbangProjectile
index: true
order: 2
category:
  - Guide
---

# CFlashbangProjectile

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CFlashbangProjectile(ptr)
```
# Properties
## TimeToDetonate 
```lua
--- @type number
Read: cflashbangprojectile.TimeToDetonate
Write: cflashbangprojectile.TimeToDetonate = value
```
## NumOpponentsHit 
```lua
--- @type number
Read: cflashbangprojectile.NumOpponentsHit
Write: cflashbangprojectile.NumOpponentsHit = value
```
## NumTeammatesHit 
```lua
--- @type number
Read: cflashbangprojectile.NumTeammatesHit
Write: cflashbangprojectile.NumTeammatesHit = value
```
## Parent (Read-Only)
```lua
--- @type CBaseCSGrenadeProjectile
Read: cflashbangprojectile.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cflashbangprojectile:ToPtr()
```
## IsValid
```lua
--- @return bool
cflashbangprojectile:IsValid()
```

:::