---
title: CInstructorEventEntity
index: true
order: 2
category:
  - Guide
---

# CInstructorEventEntity

::: tabs
@tab Lua
# Constructor
```lua
CInstructorEventEntity(ptr --[[ string ]])
```
# Properties
## Name 
```lua
@type string
Read: cinstructorevententity.Name
Write: cinstructorevententity.Name = value
```
## HintTargetEntity 
```lua
@type string
Read: cinstructorevententity.HintTargetEntity
Write: cinstructorevententity.HintTargetEntity = value
```
## TargetPlayer (Read-Only)
```lua
@type CBasePlayerPawn
Read: cinstructorevententity.TargetPlayer
```
## Parent 
```lua
@type CPointEntity
Read: cinstructorevententity.Parent
Write: cinstructorevententity.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cinstructorevententity:ToPtr()
```
## IsValid
```lua
@returns bool
cinstructorevententity:IsValid()
```

:::