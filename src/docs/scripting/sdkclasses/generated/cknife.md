---
title: CKnife
index: true
order: 2
category:
  - Guide
---

# CKnife

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CKnife(ptr)
```
# Properties
## FirstAttack 
```lua
--- @type boolean
Read: cknife.FirstAttack
Write: cknife.FirstAttack = value
```
## Parent (Read-Only)
```lua
--- @type CCSWeaponBase
Read: cknife.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cknife:ToPtr()
```
## IsValid
```lua
--- @return bool
cknife:IsValid()
```

:::