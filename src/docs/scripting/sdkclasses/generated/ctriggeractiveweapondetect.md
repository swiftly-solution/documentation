---
title: CTriggerActiveWeaponDetect
index: true
order: 2
category:
  - Guide
---

# CTriggerActiveWeaponDetect

::: tabs
@tab Lua
# Constructor
```lua
CTriggerActiveWeaponDetect(ptr --[[ string ]])
```
# Properties
## OnTouchedActiveWeapon (Read-Only)
```lua
@type CEntityIOOutput
Read: ctriggeractiveweapondetect.OnTouchedActiveWeapon
```
## WeaponClassName 
```lua
@type string
Read: ctriggeractiveweapondetect.WeaponClassName
Write: ctriggeractiveweapondetect.WeaponClassName = value
```
## Parent (Read-Only)
```lua
@type CBaseTrigger
Read: ctriggeractiveweapondetect.Parent
```
# Functions
## ToPtr
```lua
@returns string
ctriggeractiveweapondetect:ToPtr()
```
## IsValid
```lua
@returns bool
ctriggeractiveweapondetect:IsValid()
```

:::