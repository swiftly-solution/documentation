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
--- @param ptr string
CLogicLineToEntity(ptr)
```
# Properties
## SourceName 
```lua
--- @type string
Read: clogiclinetoentity.SourceName
Write: clogiclinetoentity.SourceName = value
```
## StartEntity (Read-Only)
```lua
--- @type CBaseEntity
Read: clogiclinetoentity.StartEntity
```
## EndEntity (Read-Only)
```lua
--- @type CBaseEntity
Read: clogiclinetoentity.EndEntity
```
## Parent (Read-Only)
```lua
--- @type CLogicalEntity
Read: clogiclinetoentity.Parent
```
# Functions
## ToPtr
```lua
--- @return string
clogiclinetoentity:ToPtr()
```
## IsValid
```lua
--- @return bool
clogiclinetoentity:IsValid()
```

:::