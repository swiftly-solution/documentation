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
CLogicGameEvent(ptr)
```
# Properties
## EventName 
```lua
--- @type string
Read: clogicgameevent.EventName
Write: clogicgameevent.EventName = value
```
## Parent (Read-Only)
```lua
--- @type CLogicalEntity
Read: clogicgameevent.Parent
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