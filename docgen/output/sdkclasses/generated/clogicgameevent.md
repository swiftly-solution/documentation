---
title: CLogicGameEvent
index: true
order: 2
category:
  - Guide
---

# CLogicGameEvent

::: tabs
@tab Lua
# Constructor
```lua
CLogicGameEvent(ptr --[[ string ]])
```
# Properties
## EventName 
```lua
@type string
Read: clogicgameevent.EventName
Write: clogicgameevent.EventName = value
```
## Parent 
```lua
@type CLogicalEntity
Read: clogicgameevent.Parent
Write: clogicgameevent.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
clogicgameevent:ToPtr()
```
## IsValid
```lua
@returns bool
clogicgameevent:IsValid()
```

:::