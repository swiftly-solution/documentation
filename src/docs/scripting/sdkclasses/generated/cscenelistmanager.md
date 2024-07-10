---
title: CSceneListManager
index: true
order: 2
category:
  - Guide
---

# CSceneListManager

::: tabs
@tab Lua
# Constructor
```lua
CSceneListManager(ptr --[[ string ]])
```
# Properties
## Scenes 
```lua
@type table
Read: cscenelistmanager.Scenes
Write: cscenelistmanager.Scenes = value
```
## Scenes1 
```lua
@type table
Read: cscenelistmanager.Scenes1
Write: cscenelistmanager.Scenes1 = value
```
## Parent 
```lua
@type CLogicalEntity
Read: cscenelistmanager.Parent
Write: cscenelistmanager.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cscenelistmanager:ToPtr()
```
## IsValid
```lua
@returns bool
cscenelistmanager:IsValid()
```

:::