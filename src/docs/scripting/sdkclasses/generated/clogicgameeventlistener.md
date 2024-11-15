---
title: CLogicGameEventListener
index: true
order: 2
category:
  - Guide
---

# CLogicGameEventListener

::: tabs
@tab Lua
# Constructor
```lua
CLogicGameEventListener(ptr)
```
# Properties
## OnEventFired (Read-Only)
```lua
--- @type CEntityIOOutput
Read: clogicgameeventlistener.OnEventFired
```
## GameEventName 
```lua
--- @type string
Read: clogicgameeventlistener.GameEventName
Write: clogicgameeventlistener.GameEventName = value
```
## GameEventItem 
```lua
--- @type string
Read: clogicgameeventlistener.GameEventItem
Write: clogicgameeventlistener.GameEventItem = value
```
## Enabled 
```lua
--- @type boolean
Read: clogicgameeventlistener.Enabled
Write: clogicgameeventlistener.Enabled = value
```
## StartDisabled 
```lua
--- @type boolean
Read: clogicgameeventlistener.StartDisabled
Write: clogicgameeventlistener.StartDisabled = value
```
## Parent (Read-Only)
```lua
--- @type CLogicalEntity
Read: clogicgameeventlistener.Parent
```
# Functions
## ToPtr
```lua
@returns string
clogicgameeventlistener:ToPtr()
```
## IsValid
```lua
@returns bool
clogicgameeventlistener:IsValid()
```

:::