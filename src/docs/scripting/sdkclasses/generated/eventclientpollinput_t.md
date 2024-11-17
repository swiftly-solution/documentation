---
title: EventClientPollInput_t
index: true
order: 2
category:
  - Guide
---

# EventClientPollInput_t

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
EventClientPollInput_t(ptr)
```
# Properties
## LoopState (Read-Only)
```lua
--- @type EngineLoopState_t
Read: eventclientpollinput_t.LoopState
```
## RealTime 
```lua
--- @type number
Read: eventclientpollinput_t.RealTime
Write: eventclientpollinput_t.RealTime = value
```
# Functions
## ToPtr
```lua
--- @return string
eventclientpollinput_t:ToPtr()
```
## IsValid
```lua
--- @return bool
eventclientpollinput_t:IsValid()
```

:::