---
title: CTriggerTeleport
index: true
order: 2
category:
  - Guide
---

# CTriggerTeleport

::: tabs
@tab Lua
# Constructor
```lua
CTriggerTeleport(ptr)
```
# Properties
## Landmark 
```lua
--- @type string
Read: ctriggerteleport.Landmark
Write: ctriggerteleport.Landmark = value
```
## UseLandmarkAngles 
```lua
--- @type boolean
Read: ctriggerteleport.UseLandmarkAngles
Write: ctriggerteleport.UseLandmarkAngles = value
```
## MirrorPlayer 
```lua
--- @type boolean
Read: ctriggerteleport.MirrorPlayer
Write: ctriggerteleport.MirrorPlayer = value
```
## CheckDestIfClearForPlayer 
```lua
--- @type boolean
Read: ctriggerteleport.CheckDestIfClearForPlayer
Write: ctriggerteleport.CheckDestIfClearForPlayer = value
```
## Parent (Read-Only)
```lua
--- @type CBaseTrigger
Read: ctriggerteleport.Parent
```
# Functions
## ToPtr
```lua
@returns string
ctriggerteleport:ToPtr()
```
## IsValid
```lua
@returns bool
ctriggerteleport:IsValid()
```

:::