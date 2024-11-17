---
title: CHandleTest
index: true
order: 2
category:
  - Guide
---

# CHandleTest

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CHandleTest(ptr)
```
# Properties
## Handle (Read-Only)
```lua
--- @type CBaseEntity
Read: chandletest.Handle
```
## SendHandle 
```lua
--- @type boolean
Read: chandletest.SendHandle
Write: chandletest.SendHandle = value
```
## Parent (Read-Only)
```lua
--- @type CBaseEntity
Read: chandletest.Parent
```
# Functions
## ToPtr
```lua
--- @return string
chandletest:ToPtr()
```
## IsValid
```lua
--- @return bool
chandletest:IsValid()
```

:::