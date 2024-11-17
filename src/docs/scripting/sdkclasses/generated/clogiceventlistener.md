---
title: CLogicEventListener
index: true
order: 2
category:
  - Guide
---

# CLogicEventListener

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CLogicEventListener(ptr)
```
# Properties
## StrEventName 
```lua
--- @type string
Read: clogiceventlistener.StrEventName
Write: clogiceventlistener.StrEventName = value
```
## IsEnabled 
```lua
--- @type boolean
Read: clogiceventlistener.IsEnabled
Write: clogiceventlistener.IsEnabled = value
```
## Team 
```lua
--- @type number
Read: clogiceventlistener.Team
Write: clogiceventlistener.Team = value
```
## OnEventFired (Read-Only)
```lua
--- @type CEntityIOOutput
Read: clogiceventlistener.OnEventFired
```
## Parent (Read-Only)
```lua
--- @type CLogicalEntity
Read: clogiceventlistener.Parent
```
# Functions
## ToPtr
```lua
--- @return string
clogiceventlistener:ToPtr()
```
## IsValid
```lua
--- @return bool
clogiceventlistener:IsValid()
```

:::