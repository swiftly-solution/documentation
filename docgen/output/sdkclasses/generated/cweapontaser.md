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
CWeaponTaser(ptr --[[ string ]])
```
# Properties
## FireTime 
```lua
@type number
Read: cweapontaser.FireTime
Write: cweapontaser.FireTime = value
```
## LastAttackTick 
```lua
@type number
Read: cweapontaser.LastAttackTick
Write: cweapontaser.LastAttackTick = value
```
## Parent 
```lua
@type CCSWeaponBaseGun
Read: cweapontaser.Parent
Write: cweapontaser.Parent = value
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