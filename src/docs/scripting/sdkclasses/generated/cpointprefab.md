---
title: CPointPrefab
index: true
order: 2
category:
  - Guide
---

# CPointPrefab

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CPointPrefab(ptr)
```
# Properties
## TargetMapName 
```lua
--- @type string
Read: cpointprefab.TargetMapName
Write: cpointprefab.TargetMapName = value
```
## ForceWorldGroupID 
```lua
--- @type string
Read: cpointprefab.ForceWorldGroupID
Write: cpointprefab.ForceWorldGroupID = value
```
## AssociatedRelayTargetName 
```lua
--- @type string
Read: cpointprefab.AssociatedRelayTargetName
Write: cpointprefab.AssociatedRelayTargetName = value
```
## FixupNames 
```lua
--- @type boolean
Read: cpointprefab.FixupNames
Write: cpointprefab.FixupNames = value
```
## LoadDynamic 
```lua
--- @type boolean
Read: cpointprefab.LoadDynamic
Write: cpointprefab.LoadDynamic = value
```
## AssociatedRelayEntity (Read-Only)
```lua
--- @type CPointPrefab
Read: cpointprefab.AssociatedRelayEntity
```
## Parent (Read-Only)
```lua
--- @type CServerOnlyPointEntity
Read: cpointprefab.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cpointprefab:ToPtr()
```
## IsValid
```lua
--- @return bool
cpointprefab:IsValid()
```

:::