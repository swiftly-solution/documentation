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
CSceneListManager(ptr)
```
# Properties
## Scenes 
```lua
--- @type table
Read: cscenelistmanager.Scenes
Write: cscenelistmanager.Scenes = value
```
## Scenes1 (Read-Only)
```lua
--- @type table
Read: cscenelistmanager.Scenes1
```
## Parent (Read-Only)
```lua
--- @type CLogicalEntity
Read: cscenelistmanager.Parent
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