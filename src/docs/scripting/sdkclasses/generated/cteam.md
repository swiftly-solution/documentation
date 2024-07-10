---
title: CTeam
index: true
order: 2
category:
  - Guide
---

# CTeam

::: tabs
@tab Lua
# Constructor
```lua
CTeam(ptr --[[ string ]])
```
# Properties
## PlayerControllers 
```lua
@type table
Read: cteam.PlayerControllers
Write: cteam.PlayerControllers = value
```
## Players 
```lua
@type table
Read: cteam.Players
Write: cteam.Players = value
```
## Score 
```lua
@type number
Read: cteam.Score
Write: cteam.Score = value
```
## Teamname 
```lua
@type string
Read: cteam.Teamname
Write: cteam.Teamname = value
```
## Parent 
```lua
@type CBaseEntity
Read: cteam.Parent
Write: cteam.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cteam:ToPtr()
```
## IsValid
```lua
@returns bool
cteam:IsValid()
```

:::