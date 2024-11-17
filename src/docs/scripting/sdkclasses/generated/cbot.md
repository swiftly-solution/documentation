---
title: CBot
index: true
order: 2
category:
  - Guide
---

# CBot

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CBot(ptr)
```
# Properties
## Controller (Read-Only)
```lua
--- @type CCSPlayerController
Read: cbot.Controller
```
## Player (Read-Only)
```lua
--- @type CCSPlayerPawn
Read: cbot.Player
```
## HasSpawned 
```lua
--- @type boolean
Read: cbot.HasSpawned
Write: cbot.HasSpawned = value
```
## Id 
```lua
--- @type number
Read: cbot.Id
Write: cbot.Id = value
```
## IsRunning 
```lua
--- @type boolean
Read: cbot.IsRunning
Write: cbot.IsRunning = value
```
## IsCrouching 
```lua
--- @type boolean
Read: cbot.IsCrouching
Write: cbot.IsCrouching = value
```
## ForwardSpeed 
```lua
--- @type number
Read: cbot.ForwardSpeed
Write: cbot.ForwardSpeed = value
```
## LeftSpeed 
```lua
--- @type number
Read: cbot.LeftSpeed
Write: cbot.LeftSpeed = value
```
## VerticalSpeed 
```lua
--- @type number
Read: cbot.VerticalSpeed
Write: cbot.VerticalSpeed = value
```
## ButtonFlags 
```lua
--- @type number
Read: cbot.ButtonFlags
Write: cbot.ButtonFlags = value
```
## JumpTimestamp 
```lua
--- @type number
Read: cbot.JumpTimestamp
Write: cbot.JumpTimestamp = value
```
## ViewForward 
```lua
--- @type Vector
Read: cbot.ViewForward
Write: cbot.ViewForward = value
```
## PostureStackIndex 
```lua
--- @type number
Read: cbot.PostureStackIndex
Write: cbot.PostureStackIndex = value
```
# Functions
## ToPtr
```lua
--- @return string
cbot:ToPtr()
```
## IsValid
```lua
--- @return bool
cbot:IsValid()
```

:::