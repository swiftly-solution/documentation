---
title: CLogicDistanceAutosave
index: true
order: 2
category:
  - Guide
---

# CLogicDistanceAutosave

::: tabs
@tab Lua
# Constructor
```lua
CLogicDistanceAutosave(ptr --[[ string ]])
```
# Properties
## TargetEntity 
```lua
@type string
Read: clogicdistanceautosave.TargetEntity
Write: clogicdistanceautosave.TargetEntity = value
```
## DistanceToPlayer 
```lua
@type number
Read: clogicdistanceautosave.DistanceToPlayer
Write: clogicdistanceautosave.DistanceToPlayer = value
```
## ForceNewLevelUnit 
```lua
@type boolean
Read: clogicdistanceautosave.ForceNewLevelUnit
Write: clogicdistanceautosave.ForceNewLevelUnit = value
```
## CheckCough 
```lua
@type boolean
Read: clogicdistanceautosave.CheckCough
Write: clogicdistanceautosave.CheckCough = value
```
## ThinkDangerous 
```lua
@type boolean
Read: clogicdistanceautosave.ThinkDangerous
Write: clogicdistanceautosave.ThinkDangerous = value
```
## DangerousTime 
```lua
@type number
Read: clogicdistanceautosave.DangerousTime
Write: clogicdistanceautosave.DangerousTime = value
```
## Parent (Read-Only)
```lua
@type CLogicalEntity
Read: clogicdistanceautosave.Parent
```
# Functions
## ToPtr
```lua
@returns string
clogicdistanceautosave:ToPtr()
```
## IsValid
```lua
@returns bool
clogicdistanceautosave:IsValid()
```

:::