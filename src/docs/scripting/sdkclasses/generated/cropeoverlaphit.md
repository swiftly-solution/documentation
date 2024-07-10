---
title: CRopeOverlapHit
index: true
order: 2
category:
  - Guide
---

# CRopeOverlapHit

::: tabs
@tab Lua
# Constructor
```lua
CRopeOverlapHit(ptr --[[ string ]])
```
# Properties
## Entity (Read-Only)
```lua
@type CBaseEntity
Read: cropeoverlaphit.Entity
```
## OverlappingLinks 
```lua
@type table
Read: cropeoverlaphit.OverlappingLinks
Write: cropeoverlaphit.OverlappingLinks = value
```
# Functions
## ToPtr
```lua
@returns string
cropeoverlaphit:ToPtr()
```
## IsValid
```lua
@returns bool
cropeoverlaphit:IsValid()
```

:::