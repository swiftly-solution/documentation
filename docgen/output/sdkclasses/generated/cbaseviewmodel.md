---
title: CBaseViewModel
index: true
order: 2
category:
  - Guide
---

# CBaseViewModel

::: tabs
@tab Lua
# Constructor
```lua
CBaseViewModel(ptr --[[ string ]])
```
# Properties
## LastFacing 
```lua
@type Vector
Read: cbaseviewmodel.LastFacing
Write: cbaseviewmodel.LastFacing = value
```
## ViewModelIndex 
```lua
@type number
Read: cbaseviewmodel.ViewModelIndex
Write: cbaseviewmodel.ViewModelIndex = value
```
## AnimationParity 
```lua
@type number
Read: cbaseviewmodel.AnimationParity
Write: cbaseviewmodel.AnimationParity = value
```
## AnimationStartTime 
```lua
@type number
Read: cbaseviewmodel.AnimationStartTime
Write: cbaseviewmodel.AnimationStartTime = value
```
## Weapon (Read-Only)
```lua
@type CBasePlayerWeapon
Read: cbaseviewmodel.Weapon
```
## VMName 
```lua
@type string
Read: cbaseviewmodel.VMName
Write: cbaseviewmodel.VMName = value
```
## AnimationPrefix 
```lua
@type string
Read: cbaseviewmodel.AnimationPrefix
Write: cbaseviewmodel.AnimationPrefix = value
```
## OldLayer 
```lua
@type number
Read: cbaseviewmodel.OldLayer
Write: cbaseviewmodel.OldLayer = value
```
## OldLayerStartTime 
```lua
@type number
Read: cbaseviewmodel.OldLayerStartTime
Write: cbaseviewmodel.OldLayerStartTime = value
```
## ControlPanel (Read-Only)
```lua
@type CBaseEntity
Read: cbaseviewmodel.ControlPanel
```
## Parent 
```lua
@type CBaseAnimGraph
Read: cbaseviewmodel.Parent
Write: cbaseviewmodel.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cbaseviewmodel:ToPtr()
```
## IsValid
```lua
@returns bool
cbaseviewmodel:IsValid()
```

:::