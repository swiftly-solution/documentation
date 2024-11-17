---
title: EventClientProcessGameInput_t
index: true
order: 2
category:
  - Guide
---

# EventClientProcessGameInput_t

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
EventClientProcessGameInput_t(ptr)
```
# Properties
## LoopState (Read-Only)
```lua
--- @type EngineLoopState_t
Read: eventclientprocessgameinput_t.LoopState
```
## RealTime 
```lua
--- @type number
Read: eventclientprocessgameinput_t.RealTime
Write: eventclientprocessgameinput_t.RealTime = value
```
## FrameTime 
```lua
--- @type number
Read: eventclientprocessgameinput_t.FrameTime
Write: eventclientprocessgameinput_t.FrameTime = value
```
# Functions
## ToPtr
```lua
--- @return string
eventclientprocessgameinput_t:ToPtr()
```
## IsValid
```lua
--- @return bool
eventclientprocessgameinput_t:IsValid()
```

:::