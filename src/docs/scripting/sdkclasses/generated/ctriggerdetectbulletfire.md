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
CTriggerDetectBulletFire(ptr --[[ string ]])
```
# Properties
## PlayerFireOnly 
```lua
@type boolean
Read: ctriggerdetectbulletfire.PlayerFireOnly
Write: ctriggerdetectbulletfire.PlayerFireOnly = value
```
## OnDetectedBulletFire (Read-Only)
```lua
@type CEntityIOOutput
Read: ctriggerdetectbulletfire.OnDetectedBulletFire
```
## Parent (Read-Only)
```lua
@type CBaseTrigger
Read: ctriggerdetectbulletfire.Parent
```
# Functions
## ToPtr
```lua
@returns string
ctriggerdetectbulletfire:ToPtr()
```
## IsValid
```lua
@returns bool
ctriggerdetectbulletfire:IsValid()
```

:::