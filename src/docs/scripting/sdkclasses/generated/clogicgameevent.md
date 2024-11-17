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
--- @param ptr string
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
--- @return string
clogicgameevent:ToPtr()
```
## IsValid
```lua
--- @return bool
clogicgameevent:IsValid()
```

:::