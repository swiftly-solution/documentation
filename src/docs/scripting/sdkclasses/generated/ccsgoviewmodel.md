---
title: CCSGOViewModel
index: true
order: 2
category:
  - Guide
---

# CCSGOViewModel

::: tabs
@tab Lua
# Constructor
```lua
CCSGOViewModel(ptr --[[ string ]])
```
# Properties
## ShouldIgnoreOffsetAndAccuracy 
```lua
@type boolean
Read: ccsgoviewmodel.ShouldIgnoreOffsetAndAccuracy
Write: ccsgoviewmodel.ShouldIgnoreOffsetAndAccuracy = value
```
## Parent (Read-Only)
```lua
@type CPredictedViewModel
Read: ccsgoviewmodel.Parent
```
# Functions
## ToPtr
```lua
@returns string
ccsgoviewmodel:ToPtr()
```
## IsValid
```lua
@returns bool
ccsgoviewmodel:IsValid()
```

:::