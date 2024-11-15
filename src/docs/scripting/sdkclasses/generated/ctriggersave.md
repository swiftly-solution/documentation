---
title: CTriggerSave
index: true
order: 2
category:
  - Guide
---

# CTriggerSave

::: tabs
@tab Lua
# Constructor
```lua
CTriggerSave(ptr)
```
# Properties
## ForceNewLevelUnit 
```lua
--- @type boolean
Read: ctriggersave.ForceNewLevelUnit
Write: ctriggersave.ForceNewLevelUnit = value
```
## DangerousTimer 
```lua
--- @type number
Read: ctriggersave.DangerousTimer
Write: ctriggersave.DangerousTimer = value
```
## MinHitPoints 
```lua
--- @type number
Read: ctriggersave.MinHitPoints
Write: ctriggersave.MinHitPoints = value
```
## Parent (Read-Only)
```lua
--- @type CBaseTrigger
Read: ctriggersave.Parent
```
# Functions
## ToPtr
```lua
@returns string
ctriggersave:ToPtr()
```
## IsValid
```lua
@returns bool
ctriggersave:IsValid()
```

:::