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
CTonemapTrigger(ptr --[[ string ]])
```
# Properties
## TonemapControllerName 
```lua
@type string
Read: ctonemaptrigger.TonemapControllerName
Write: ctonemaptrigger.TonemapControllerName = value
```
## TonemapController (Read-Only)
```lua
@type CEntityInstance
Read: ctonemaptrigger.TonemapController
```
## Parent 
```lua
@type CBaseTrigger
Read: ctonemaptrigger.Parent
Write: ctonemaptrigger.Parent = value
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