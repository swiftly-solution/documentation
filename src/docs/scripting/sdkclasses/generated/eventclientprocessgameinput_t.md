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
EventClientProcessGameInput_t(ptr --[[ string ]])
```
# Properties
## LoopState 
```lua
@type EngineLoopState_t
Read: eventclientprocessgameinput_t.LoopState
Write: eventclientprocessgameinput_t.LoopState = value
```
## RealTime 
```lua
@type number
Read: eventclientprocessgameinput_t.RealTime
Write: eventclientprocessgameinput_t.RealTime = value
```
## FrameTime 
```lua
@type number
Read: eventclientprocessgameinput_t.FrameTime
Write: eventclientprocessgameinput_t.FrameTime = value
```
# Functions
## ToPtr
```lua
@returns string
eventclientprocessgameinput_t:ToPtr()
```
## IsValid
```lua
@returns bool
eventclientprocessgameinput_t:IsValid()
```

:::