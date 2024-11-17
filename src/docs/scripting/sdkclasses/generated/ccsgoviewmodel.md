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
--- @param ptr string
CCSGOViewModel(ptr)
```
# Properties
## ShouldIgnoreOffsetAndAccuracy 
```lua
--- @type boolean
Read: ccsgoviewmodel.ShouldIgnoreOffsetAndAccuracy
Write: ccsgoviewmodel.ShouldIgnoreOffsetAndAccuracy = value
```
## Parent (Read-Only)
```lua
--- @type CPredictedViewModel
Read: ccsgoviewmodel.Parent
```
# Functions
## ToPtr
```lua
--- @return string
ccsgoviewmodel:ToPtr()
```
## IsValid
```lua
--- @return bool
ccsgoviewmodel:IsValid()
```

:::