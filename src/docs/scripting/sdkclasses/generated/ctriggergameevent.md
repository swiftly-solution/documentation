---
title: CTriggerGameEvent
index: true
order: 2
category:
  - Guide
---

# CTriggerGameEvent

::: tabs
@tab Lua
# Constructor
```lua
CTriggerGameEvent(ptr)
```
# Properties
## StrStartTouchEventName 
```lua
--- @type string
Read: ctriggergameevent.StrStartTouchEventName
Write: ctriggergameevent.StrStartTouchEventName = value
```
## StrEndTouchEventName 
```lua
--- @type string
Read: ctriggergameevent.StrEndTouchEventName
Write: ctriggergameevent.StrEndTouchEventName = value
```
## StrTriggerID 
```lua
--- @type string
Read: ctriggergameevent.StrTriggerID
Write: ctriggergameevent.StrTriggerID = value
```
## Parent (Read-Only)
```lua
--- @type CBaseTrigger
Read: ctriggergameevent.Parent
```
# Functions
## ToPtr
```lua
@returns string
ctriggergameevent:ToPtr()
```
## IsValid
```lua
@returns bool
ctriggergameevent:IsValid()
```

:::