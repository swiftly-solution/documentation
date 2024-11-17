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
--- @param ptr string
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
--- @return string
ctonemaptrigger:ToPtr()
```
## IsValid
```lua
--- @return bool
ctonemaptrigger:IsValid()
```

:::