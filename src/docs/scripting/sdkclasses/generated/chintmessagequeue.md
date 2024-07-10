---
title: CHintMessageQueue
index: true
order: 2
category:
  - Guide
---

# CHintMessageQueue

::: tabs
@tab Lua
# Constructor
```lua
CHintMessageQueue(ptr --[[ string ]])
```
# Properties
## TmMessageEnd 
```lua
@type number
Read: chintmessagequeue.TmMessageEnd
Write: chintmessagequeue.TmMessageEnd = value
```
## PlayerController (Read-Only)
```lua
@type CBasePlayerController
Read: chintmessagequeue.PlayerController
```
# Functions
## ToPtr
```lua
@returns string
chintmessagequeue:ToPtr()
```
## IsValid
```lua
@returns bool
chintmessagequeue:IsValid()
```

:::