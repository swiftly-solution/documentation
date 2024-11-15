---
title: CTonemapTrigger
index: true
order: 2
category:
  - Guide
---

# CTonemapTrigger

::: tabs
@tab Lua
# Constructor
```lua
CTonemapTrigger(ptr)
```
# Properties
## TonemapControllerName 
```lua
--- @type string
Read: ctonemaptrigger.TonemapControllerName
Write: ctonemaptrigger.TonemapControllerName = value
```
## TonemapController (Read-Only)
```lua
--- @type CEntityInstance
Read: ctonemaptrigger.TonemapController
```
## Parent (Read-Only)
```lua
--- @type CBaseTrigger
Read: ctonemaptrigger.Parent
```
# Functions
## ToPtr
```lua
@returns string
ctonemaptrigger:ToPtr()
```
## IsValid
```lua
@returns bool
ctonemaptrigger:IsValid()
```

:::