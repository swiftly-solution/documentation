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
--- @param ptr string
CFilterEnemy(ptr)
```
# Properties
## EnemyName 
```lua
--- @type string
Read: cfilterenemy.EnemyName
Write: cfilterenemy.EnemyName = value
```
## Radius 
```lua
--- @type number
Read: cfilterenemy.Radius
Write: cfilterenemy.Radius = value
```
## OuterRadius 
```lua
--- @type number
Read: cfilterenemy.OuterRadius
Write: cfilterenemy.OuterRadius = value
```
## MaxSquadmatesPerEnemy 
```lua
--- @type number
Read: cfilterenemy.MaxSquadmatesPerEnemy
Write: cfilterenemy.MaxSquadmatesPerEnemy = value
```
## PlayerName 
```lua
--- @type string
Read: cfilterenemy.PlayerName
Write: cfilterenemy.PlayerName = value
```
## Parent (Read-Only)
```lua
--- @type CBaseFilter
Read: cfilterenemy.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cfilterenemy:ToPtr()
```
## IsValid
```lua
--- @return bool
cfilterenemy:IsValid()
```

:::