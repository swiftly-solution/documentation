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
CTriggerLerpObject(ptr --[[ string ]])
```
# Properties
## LerpTarget 
```lua
@type string
Read: ctriggerlerpobject.LerpTarget
Write: ctriggerlerpobject.LerpTarget = value
```
## LerpTarget1 (Read-Only)
```lua
@type CBaseEntity
Read: ctriggerlerpobject.LerpTarget1
```
## LerpTargetAttachment 
```lua
@type string
Read: ctriggerlerpobject.LerpTargetAttachment
Write: ctriggerlerpobject.LerpTargetAttachment = value
```
## LerpDuration 
```lua
@type number
Read: ctriggerlerpobject.LerpDuration
Write: ctriggerlerpobject.LerpDuration = value
```
## LerpRestoreMoveType 
```lua
@type boolean
Read: ctriggerlerpobject.LerpRestoreMoveType
Write: ctriggerlerpobject.LerpRestoreMoveType = value
```
## SingleLerpObject 
```lua
@type boolean
Read: ctriggerlerpobject.SingleLerpObject
Write: ctriggerlerpobject.SingleLerpObject = value
```
## LerpingObjects 
```lua
@type table
Read: ctriggerlerpobject.LerpingObjects
Write: ctriggerlerpobject.LerpingObjects = value
```
## LerpEffect 
```lua
@type string
Read: ctriggerlerpobject.LerpEffect
Write: ctriggerlerpobject.LerpEffect = value
```
## LerpSound 
```lua
@type string
Read: ctriggerlerpobject.LerpSound
Write: ctriggerlerpobject.LerpSound = value
```
## AttachTouchingObject 
```lua
@type boolean
Read: ctriggerlerpobject.AttachTouchingObject
Write: ctriggerlerpobject.AttachTouchingObject = value
```
## EntityToWaitForDisconnect (Read-Only)
```lua
@type CBaseEntity
Read: ctriggerlerpobject.EntityToWaitForDisconnect
```
## OnLerpStarted 
```lua
@type CEntityIOOutput
Read: ctriggerlerpobject.OnLerpStarted
Write: ctriggerlerpobject.OnLerpStarted = value
```
## OnLerpFinished 
```lua
@type CEntityIOOutput
Read: ctriggerlerpobject.OnLerpFinished
Write: ctriggerlerpobject.OnLerpFinished = value
```
## Parent 
```lua
@type CBaseTrigger
Read: ctriggerlerpobject.Parent
Write: ctriggerlerpobject.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
ctriggerlerpobject:ToPtr()
```
## IsValid
```lua
@returns bool
ctriggerlerpobject:IsValid()
```

:::