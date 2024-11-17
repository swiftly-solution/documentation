---
title: CTriggerLerpObject
index: true
order: 2
category:
  - Guide
---

# CTriggerLerpObject

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CTriggerLerpObject(ptr)
```
# Properties
## LerpTarget 
```lua
--- @type string
Read: ctriggerlerpobject.LerpTarget
Write: ctriggerlerpobject.LerpTarget = value
```
## LerpTarget1 (Read-Only)
```lua
--- @type CBaseEntity
Read: ctriggerlerpobject.LerpTarget1
```
## LerpTargetAttachment 
```lua
--- @type string
Read: ctriggerlerpobject.LerpTargetAttachment
Write: ctriggerlerpobject.LerpTargetAttachment = value
```
## LerpDuration 
```lua
--- @type number
Read: ctriggerlerpobject.LerpDuration
Write: ctriggerlerpobject.LerpDuration = value
```
## LerpRestoreMoveType 
```lua
--- @type boolean
Read: ctriggerlerpobject.LerpRestoreMoveType
Write: ctriggerlerpobject.LerpRestoreMoveType = value
```
## SingleLerpObject 
```lua
--- @type boolean
Read: ctriggerlerpobject.SingleLerpObject
Write: ctriggerlerpobject.SingleLerpObject = value
```
## LerpingObjects (Read-Only)
```lua
--- @type table
Read: ctriggerlerpobject.LerpingObjects
```
## LerpEffect 
```lua
--- @type string
Read: ctriggerlerpobject.LerpEffect
Write: ctriggerlerpobject.LerpEffect = value
```
## LerpSound 
```lua
--- @type string
Read: ctriggerlerpobject.LerpSound
Write: ctriggerlerpobject.LerpSound = value
```
## AttachTouchingObject 
```lua
--- @type boolean
Read: ctriggerlerpobject.AttachTouchingObject
Write: ctriggerlerpobject.AttachTouchingObject = value
```
## EntityToWaitForDisconnect (Read-Only)
```lua
--- @type CBaseEntity
Read: ctriggerlerpobject.EntityToWaitForDisconnect
```
## OnLerpStarted (Read-Only)
```lua
--- @type CEntityIOOutput
Read: ctriggerlerpobject.OnLerpStarted
```
## OnLerpFinished (Read-Only)
```lua
--- @type CEntityIOOutput
Read: ctriggerlerpobject.OnLerpFinished
```
## Parent (Read-Only)
```lua
--- @type CBaseTrigger
Read: ctriggerlerpobject.Parent
```
# Functions
## ToPtr
```lua
--- @return string
ctriggerlerpobject:ToPtr()
```
## IsValid
```lua
--- @return bool
ctriggerlerpobject:IsValid()
```

:::