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
CHandleTest(ptr --[[ string ]])
```
# Properties
## Handle (Read-Only)
```lua
@type CBaseEntity
Read: chandletest.Handle
```
## SendHandle 
```lua
@type boolean
Read: chandletest.SendHandle
Write: chandletest.SendHandle = value
```
## Parent 
```lua
@type CBaseEntity
Read: chandletest.Parent
Write: chandletest.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
chandletest:ToPtr()
```
## IsValid
```lua
@returns bool
chandletest:IsValid()
```

:::