---
title: CMarkupVolumeTagged
index: true
order: 2
category:
  - Guide
---

# CMarkupVolumeTagged

::: tabs
@tab Lua
# Constructor
```lua
CMarkupVolumeTagged(ptr --[[ string ]])
```
# Properties
## IsGroup 
```lua
@type boolean
Read: cmarkupvolumetagged.IsGroup
Write: cmarkupvolumetagged.IsGroup = value
```
## GroupByPrefab 
```lua
@type boolean
Read: cmarkupvolumetagged.GroupByPrefab
Write: cmarkupvolumetagged.GroupByPrefab = value
```
## GroupByVolume 
```lua
@type boolean
Read: cmarkupvolumetagged.GroupByVolume
Write: cmarkupvolumetagged.GroupByVolume = value
```
## GroupOtherGroups 
```lua
@type boolean
Read: cmarkupvolumetagged.GroupOtherGroups
Write: cmarkupvolumetagged.GroupOtherGroups = value
```
## IsInGroup 
```lua
@type boolean
Read: cmarkupvolumetagged.IsInGroup
Write: cmarkupvolumetagged.IsInGroup = value
```
## Parent (Read-Only)
```lua
@type CMarkupVolume
Read: cmarkupvolumetagged.Parent
```
# Functions
## ToPtr
```lua
@returns string
cmarkupvolumetagged:ToPtr()
```
## IsValid
```lua
@returns bool
cmarkupvolumetagged:IsValid()
```

:::