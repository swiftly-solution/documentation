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
--- @param ptr string
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
--- @return string
cweapontaser:ToPtr()
```
## IsValid
```lua
--- @return bool
cweapontaser:IsValid()
```

:::