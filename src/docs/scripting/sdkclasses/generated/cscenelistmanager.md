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
--- @param ptr string
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
--- @return string
cscenelistmanager:ToPtr()
```
## IsValid
```lua
--- @return bool
cscenelistmanager:IsValid()
```

:::