---
title: CLogicLineToEntity
index: true
order: 2
category:
  - Guide
---

# CLogicLineToEntity

::: tabs
@tab Lua
# Constructor
```lua
CLogicLineToEntity(ptr --[[ string ]])
```
# Properties
## SourceName 
```lua
@type string
Read: clogiclinetoentity.SourceName
Write: clogiclinetoentity.SourceName = value
```
## StartEntity (Read-Only)
```lua
@type CBaseEntity
Read: clogiclinetoentity.StartEntity
```
## EndEntity (Read-Only)
```lua
@type CBaseEntity
Read: clogiclinetoentity.EndEntity
```
## Parent 
```lua
@type CLogicalEntity
Read: clogiclinetoentity.Parent
Write: clogiclinetoentity.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
clogiclinetoentity:ToPtr()
```
## IsValid
```lua
@returns bool
clogiclinetoentity:IsValid()
```

:::