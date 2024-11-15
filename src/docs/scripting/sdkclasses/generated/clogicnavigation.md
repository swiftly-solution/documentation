---
title: CLogicNavigation
index: true
order: 2
category:
  - Guide
---

# CLogicNavigation

::: tabs
@tab Lua
# Constructor
```lua
CLogicNavigation(ptr)
```
# Properties
## IsOn 
```lua
--- @type boolean
Read: clogicnavigation.IsOn
Write: clogicnavigation.IsOn = value
```
## NavProperty 
```lua
--- @type number
Read: clogicnavigation.NavProperty
Write: clogicnavigation.NavProperty = value
```
## Parent (Read-Only)
```lua
--- @type CLogicalEntity
Read: clogicnavigation.Parent
```
# Functions
## ToPtr
```lua
@returns string
clogicnavigation:ToPtr()
```
## IsValid
```lua
@returns bool
clogicnavigation:IsValid()
```

:::