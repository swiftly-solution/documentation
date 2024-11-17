---
title: CInfoSpawnGroupLoadUnload
index: true
order: 2
category:
  - Guide
---

# CInfoSpawnGroupLoadUnload

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CInfoSpawnGroupLoadUnload(ptr)
```
# Properties
## OnSpawnGroupLoadStarted (Read-Only)
```lua
--- @type CEntityIOOutput
Read: cinfospawngrouploadunload.OnSpawnGroupLoadStarted
```
## OnSpawnGroupLoadFinished (Read-Only)
```lua
--- @type CEntityIOOutput
Read: cinfospawngrouploadunload.OnSpawnGroupLoadFinished
```
## OnSpawnGroupUnloadStarted (Read-Only)
```lua
--- @type CEntityIOOutput
Read: cinfospawngrouploadunload.OnSpawnGroupUnloadStarted
```
## OnSpawnGroupUnloadFinished (Read-Only)
```lua
--- @type CEntityIOOutput
Read: cinfospawngrouploadunload.OnSpawnGroupUnloadFinished
```
## SpawnGroupName 
```lua
--- @type string
Read: cinfospawngrouploadunload.SpawnGroupName
Write: cinfospawngrouploadunload.SpawnGroupName = value
```
## SpawnGroupFilterName 
```lua
--- @type string
Read: cinfospawngrouploadunload.SpawnGroupFilterName
Write: cinfospawngrouploadunload.SpawnGroupFilterName = value
```
## LandmarkName 
```lua
--- @type string
Read: cinfospawngrouploadunload.LandmarkName
Write: cinfospawngrouploadunload.LandmarkName = value
```
## FixedSpawnGroupName 
```lua
--- @type string
Read: cinfospawngrouploadunload.FixedSpawnGroupName
Write: cinfospawngrouploadunload.FixedSpawnGroupName = value
```
## TimeoutInterval 
```lua
--- @type number
Read: cinfospawngrouploadunload.TimeoutInterval
Write: cinfospawngrouploadunload.TimeoutInterval = value
```
## StreamingStarted 
```lua
--- @type boolean
Read: cinfospawngrouploadunload.StreamingStarted
Write: cinfospawngrouploadunload.StreamingStarted = value
```
## UnloadingStarted 
```lua
--- @type boolean
Read: cinfospawngrouploadunload.UnloadingStarted
Write: cinfospawngrouploadunload.UnloadingStarted = value
```
## Parent (Read-Only)
```lua
--- @type CLogicalEntity
Read: cinfospawngrouploadunload.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cinfospawngrouploadunload:ToPtr()
```
## IsValid
```lua
--- @return bool
cinfospawngrouploadunload:IsValid()
```

:::