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
--- @param ptr string
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
--- @return string
clogicnavigation:ToPtr()
```
## IsValid
```lua
--- @return bool
clogicnavigation:IsValid()
```

:::