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
CTeam(ptr)
```
# Properties
## Score 
```lua
--- @type number
Read: cteam.Score
Write: cteam.Score = value
```
## Teamname 
```lua
--- @type string
Read: cteam.Teamname
Write: cteam.Teamname = value
```
## Parent (Read-Only)
```lua
--- @type CBaseEntity
Read: cteam.Parent
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