---
title: CTriggerPush
index: true
order: 2
category:
  - Guide
---

# CTriggerPush

::: tabs
@tab Lua
# Constructor
```lua
CTriggerPush(ptr --[[ string ]])
```
# Properties
## PushEntitySpace 
```lua
@type QAngle
Read: ctriggerpush.PushEntitySpace
Write: ctriggerpush.PushEntitySpace = value
```
## PushDirEntitySpace 
```lua
@type Vector
Read: ctriggerpush.PushDirEntitySpace
Write: ctriggerpush.PushDirEntitySpace = value
```
## TriggerOnStartTouch 
```lua
@type boolean
Read: ctriggerpush.TriggerOnStartTouch
Write: ctriggerpush.TriggerOnStartTouch = value
```
## UsePathSimple 
```lua
@type boolean
Read: ctriggerpush.UsePathSimple
Write: ctriggerpush.UsePathSimple = value
```
## PathSimpleName 
```lua
@type string
Read: ctriggerpush.PathSimpleName
Write: ctriggerpush.PathSimpleName = value
```
## PathSimple (Read-Only)
```lua
@type CPathSimple
Read: ctriggerpush.PathSimple
```
## SplinePushType 
```lua
@type number
Read: ctriggerpush.SplinePushType
Write: ctriggerpush.SplinePushType = value
```
## Parent (Read-Only)
```lua
@type CBaseTrigger
Read: ctriggerpush.Parent
```
# Functions
## ToPtr
```lua
@returns string
ctriggerpush:ToPtr()
```
## IsValid
```lua
@returns bool
ctriggerpush:IsValid()
```

:::