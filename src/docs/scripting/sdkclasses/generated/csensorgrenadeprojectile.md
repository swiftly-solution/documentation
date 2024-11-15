---
title: CSensorGrenadeProjectile
index: true
order: 2
category:
  - Guide
---

# CSensorGrenadeProjectile

::: tabs
@tab Lua
# Constructor
```lua
CSensorGrenadeProjectile(ptr)
```
# Properties
## ExpireTime 
```lua
--- @type number
Read: csensorgrenadeprojectile.ExpireTime
Write: csensorgrenadeprojectile.ExpireTime = value
```
## NextDetectPlayerSound 
```lua
--- @type number
Read: csensorgrenadeprojectile.NextDetectPlayerSound
Write: csensorgrenadeprojectile.NextDetectPlayerSound = value
```
## DisplayGrenade (Read-Only)
```lua
--- @type CBaseEntity
Read: csensorgrenadeprojectile.DisplayGrenade
```
## Parent (Read-Only)
```lua
--- @type CBaseCSGrenadeProjectile
Read: csensorgrenadeprojectile.Parent
```
# Functions
## ToPtr
```lua
@returns string
csensorgrenadeprojectile:ToPtr()
```
## IsValid
```lua
@returns bool
csensorgrenadeprojectile:IsValid()
```

:::