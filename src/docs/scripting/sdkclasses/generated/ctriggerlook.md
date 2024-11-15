---
title: CTriggerLook
index: true
order: 2
category:
  - Guide
---

# CTriggerLook

::: tabs
@tab Lua
# Constructor
```lua
CTriggerLook(ptr)
```
# Properties
## LookTarget (Read-Only)
```lua
--- @type CBaseEntity
Read: ctriggerlook.LookTarget
```
## FieldOfView 
```lua
--- @type number
Read: ctriggerlook.FieldOfView
Write: ctriggerlook.FieldOfView = value
```
## LookTime 
```lua
--- @type number
Read: ctriggerlook.LookTime
Write: ctriggerlook.LookTime = value
```
## LookTimeTotal 
```lua
--- @type number
Read: ctriggerlook.LookTimeTotal
Write: ctriggerlook.LookTimeTotal = value
```
## LookTimeLast 
```lua
--- @type number
Read: ctriggerlook.LookTimeLast
Write: ctriggerlook.LookTimeLast = value
```
## TimeoutDuration 
```lua
--- @type number
Read: ctriggerlook.TimeoutDuration
Write: ctriggerlook.TimeoutDuration = value
```
## TimeoutFired 
```lua
--- @type boolean
Read: ctriggerlook.TimeoutFired
Write: ctriggerlook.TimeoutFired = value
```
## IsLooking 
```lua
--- @type boolean
Read: ctriggerlook.IsLooking
Write: ctriggerlook.IsLooking = value
```
## 2DFOV 
```lua
--- @type boolean
Read: ctriggerlook.2DFOV
Write: ctriggerlook.2DFOV = value
```
## UseVelocity 
```lua
--- @type boolean
Read: ctriggerlook.UseVelocity
Write: ctriggerlook.UseVelocity = value
```
## TestOcclusion 
```lua
--- @type boolean
Read: ctriggerlook.TestOcclusion
Write: ctriggerlook.TestOcclusion = value
```
## OnTimeout (Read-Only)
```lua
--- @type CEntityIOOutput
Read: ctriggerlook.OnTimeout
```
## OnStartLook (Read-Only)
```lua
--- @type CEntityIOOutput
Read: ctriggerlook.OnStartLook
```
## OnEndLook (Read-Only)
```lua
--- @type CEntityIOOutput
Read: ctriggerlook.OnEndLook
```
## Parent (Read-Only)
```lua
--- @type CTriggerOnce
Read: ctriggerlook.Parent
```
# Functions
## ToPtr
```lua
@returns string
ctriggerlook:ToPtr()
```
## IsValid
```lua
@returns bool
ctriggerlook:IsValid()
```

:::