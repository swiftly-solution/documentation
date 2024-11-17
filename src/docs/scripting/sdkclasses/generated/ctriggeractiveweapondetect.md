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
--- @param ptr string
CTriggerActiveWeaponDetect(ptr)
```
# Properties
## OnTouchedActiveWeapon (Read-Only)
```lua
--- @type CEntityIOOutput
Read: ctriggeractiveweapondetect.OnTouchedActiveWeapon
```
## WeaponClassName 
```lua
--- @type string
Read: ctriggeractiveweapondetect.WeaponClassName
Write: ctriggeractiveweapondetect.WeaponClassName = value
```
## Parent (Read-Only)
```lua
--- @type CBaseTrigger
Read: ctriggeractiveweapondetect.Parent
```
# Functions
## ToPtr
```lua
--- @return string
ctriggeractiveweapondetect:ToPtr()
```
## IsValid
```lua
--- @return bool
ctriggeractiveweapondetect:IsValid()
```

:::