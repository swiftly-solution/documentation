---
title: CRagdollComponentUpdater
index: true
order: 2
category:
  - Guide
---

# CRagdollComponentUpdater

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CRagdollComponentUpdater(ptr)
```
# Properties
## RagdollNodePaths (Read-Only)
```lua
--- @type table
Read: cragdollcomponentupdater.RagdollNodePaths
```
## BoneIndices (Read-Only)
```lua
--- @type table
Read: cragdollcomponentupdater.BoneIndices
```
## BoneNames (Read-Only)
```lua
--- @type table
Read: cragdollcomponentupdater.BoneNames
```
## WeightLists (Read-Only)
```lua
--- @type table
Read: cragdollcomponentupdater.WeightLists
```
## SpringFrequencyMin 
```lua
--- @type number
Read: cragdollcomponentupdater.SpringFrequencyMin
Write: cragdollcomponentupdater.SpringFrequencyMin = value
```
## SpringFrequencyMax 
```lua
--- @type number
Read: cragdollcomponentupdater.SpringFrequencyMax
Write: cragdollcomponentupdater.SpringFrequencyMax = value
```
## MaxStretch 
```lua
--- @type number
Read: cragdollcomponentupdater.MaxStretch
Write: cragdollcomponentupdater.MaxStretch = value
```
## SolidCollisionAtZeroWeight 
```lua
--- @type boolean
Read: cragdollcomponentupdater.SolidCollisionAtZeroWeight
Write: cragdollcomponentupdater.SolidCollisionAtZeroWeight = value
```
## Parent (Read-Only)
```lua
--- @type CAnimComponentUpdater
Read: cragdollcomponentupdater.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cragdollcomponentupdater:ToPtr()
```
## IsValid
```lua
--- @return bool
cragdollcomponentupdater:IsValid()
```

:::