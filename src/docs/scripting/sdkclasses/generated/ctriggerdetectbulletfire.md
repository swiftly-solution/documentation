---
title: CTriggerDetectBulletFire
index: true
order: 2
category:
  - Guide
---

# CTriggerDetectBulletFire

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CTriggerDetectBulletFire(ptr)
```
# Properties
## PlayerFireOnly 
```lua
--- @type boolean
Read: ctriggerdetectbulletfire.PlayerFireOnly
Write: ctriggerdetectbulletfire.PlayerFireOnly = value
```
## OnDetectedBulletFire (Read-Only)
```lua
--- @type CEntityIOOutput
Read: ctriggerdetectbulletfire.OnDetectedBulletFire
```
## Parent (Read-Only)
```lua
--- @type CBaseTrigger
Read: ctriggerdetectbulletfire.Parent
```
# Functions
## ToPtr
```lua
--- @return string
ctriggerdetectbulletfire:ToPtr()
```
## IsValid
```lua
--- @return bool
ctriggerdetectbulletfire:IsValid()
```

:::