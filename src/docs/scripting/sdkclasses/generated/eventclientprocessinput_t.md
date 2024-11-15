---
title: EventClientProcessInput_t
index: true
order: 2
category:
  - Guide
---

# EventClientProcessInput_t

::: tabs
@tab Lua
# Constructor
```lua
EventClientProcessInput_t(ptr)
```
# Properties
## LoopState (Read-Only)
```lua
--- @type EngineLoopState_t
Read: eventclientprocessinput_t.LoopState
```
## RealTime 
```lua
--- @type number
Read: eventclientprocessinput_t.RealTime
Write: eventclientprocessinput_t.RealTime = value
```
## TickInterval 
```lua
--- @type number
Read: eventclientprocessinput_t.TickInterval
Write: eventclientprocessinput_t.TickInterval = value
```
## TickStartTime 
```lua
--- @type number
Read: eventclientprocessinput_t.TickStartTime
Write: eventclientprocessinput_t.TickStartTime = value
```
# Functions
## ToPtr
```lua
@returns string
eventclientprocessinput_t:ToPtr()
```
## IsValid
```lua
@returns bool
eventclientprocessinput_t:IsValid()
```

:::