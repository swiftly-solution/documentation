---
title: CLogicAutosave
index: true
order: 2
category:
  - Guide
---

# CLogicAutosave

::: tabs
@tab Lua
# Constructor
```lua
CLogicAutosave(ptr --[[ string ]])
```
# Properties
## ForceNewLevelUnit 
```lua
@type boolean
Read: clogicautosave.ForceNewLevelUnit
Write: clogicautosave.ForceNewLevelUnit = value
```
## MinHitPoints 
```lua
@type number
Read: clogicautosave.MinHitPoints
Write: clogicautosave.MinHitPoints = value
```
## MinHitPointsToCommit 
```lua
@type number
Read: clogicautosave.MinHitPointsToCommit
Write: clogicautosave.MinHitPointsToCommit = value
```
## Parent 
```lua
@type CLogicalEntity
Read: clogicautosave.Parent
Write: clogicautosave.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
clogicautosave:ToPtr()
```
## IsValid
```lua
@returns bool
clogicautosave:IsValid()
```

:::