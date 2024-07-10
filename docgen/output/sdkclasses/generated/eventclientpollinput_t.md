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
EventClientPollInput_t(ptr --[[ string ]])
```
# Properties
## LoopState 
```lua
@type EngineLoopState_t
Read: eventclientpollinput_t.LoopState
Write: eventclientpollinput_t.LoopState = value
```
## RealTime 
```lua
@type number
Read: eventclientpollinput_t.RealTime
Write: eventclientpollinput_t.RealTime = value
```
# Functions
## ToPtr
```lua
@returns string
eventclientpollinput_t:ToPtr()
```
## IsValid
```lua
@returns bool
eventclientpollinput_t:IsValid()
```

:::