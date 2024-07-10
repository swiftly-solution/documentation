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
CLogicEventListener(ptr --[[ string ]])
```
# Properties
## StrEventName 
```lua
@type string
Read: clogiceventlistener.StrEventName
Write: clogiceventlistener.StrEventName = value
```
## IsEnabled 
```lua
@type boolean
Read: clogiceventlistener.IsEnabled
Write: clogiceventlistener.IsEnabled = value
```
## Team 
```lua
@type number
Read: clogiceventlistener.Team
Write: clogiceventlistener.Team = value
```
## OnEventFired 
```lua
@type CEntityIOOutput
Read: clogiceventlistener.OnEventFired
Write: clogiceventlistener.OnEventFired = value
```
## Parent 
```lua
@type CLogicalEntity
Read: clogiceventlistener.Parent
Write: clogiceventlistener.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
clogiceventlistener:ToPtr()
```
## IsValid
```lua
@returns bool
clogiceventlistener:IsValid()
```

:::