---
title: CFilterEnemy
index: true
order: 2
category:
  - Guide
---

# CFilterEnemy

::: tabs
@tab Lua
# Constructor
```lua
CFilterEnemy(ptr --[[ string ]])
```
# Properties
## EnemyName 
```lua
@type string
Read: cfilterenemy.EnemyName
Write: cfilterenemy.EnemyName = value
```
## Radius 
```lua
@type number
Read: cfilterenemy.Radius
Write: cfilterenemy.Radius = value
```
## OuterRadius 
```lua
@type number
Read: cfilterenemy.OuterRadius
Write: cfilterenemy.OuterRadius = value
```
## MaxSquadmatesPerEnemy 
```lua
@type number
Read: cfilterenemy.MaxSquadmatesPerEnemy
Write: cfilterenemy.MaxSquadmatesPerEnemy = value
```
## PlayerName 
```lua
@type string
Read: cfilterenemy.PlayerName
Write: cfilterenemy.PlayerName = value
```
## Parent 
```lua
@type CBaseFilter
Read: cfilterenemy.Parent
Write: cfilterenemy.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cfilterenemy:ToPtr()
```
## IsValid
```lua
@returns bool
cfilterenemy:IsValid()
```

:::