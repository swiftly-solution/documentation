---
title: SpawnPoint
index: true
order: 2
category:
  - Guide
---

# SpawnPoint

::: tabs
@tab Lua
# Constructor
```lua
SpawnPoint(ptr --[[ string ]])
```
# Properties
## Priority 
```lua
@type number
Read: spawnpoint.Priority
Write: spawnpoint.Priority = value
```
## Enabled 
```lua
@type boolean
Read: spawnpoint.Enabled
Write: spawnpoint.Enabled = value
```
## Type 
```lua
@type number
Read: spawnpoint.Type
Write: spawnpoint.Type = value
```
## Parent (Read-Only)
```lua
@type CServerOnlyPointEntity
Read: spawnpoint.Parent
```
# Functions
## ToPtr
```lua
@returns string
spawnpoint:ToPtr()
```
## IsValid
```lua
@returns bool
spawnpoint:IsValid()
```

:::