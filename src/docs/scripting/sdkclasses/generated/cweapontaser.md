---
title: CWeaponTaser
index: true
order: 2
category:
  - Guide
---

# CWeaponTaser

::: tabs
@tab Lua
# Constructor
```lua
CWeaponTaser(ptr)
```
# Properties
## FireTime 
```lua
--- @type number
Read: cweapontaser.FireTime
Write: cweapontaser.FireTime = value
```
## LastAttackTick 
```lua
--- @type number
Read: cweapontaser.LastAttackTick
Write: cweapontaser.LastAttackTick = value
```
## Parent (Read-Only)
```lua
--- @type CCSWeaponBaseGun
Read: cweapontaser.Parent
```
# Functions
## ToPtr
```lua
@returns string
cweapontaser:ToPtr()
```
## IsValid
```lua
@returns bool
cweapontaser:IsValid()
```

:::