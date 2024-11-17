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
--- @param ptr string
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
--- @return string
ctriggerteleport:ToPtr()
```
## IsValid
```lua
--- @return bool
ctriggerteleport:IsValid()
```

:::