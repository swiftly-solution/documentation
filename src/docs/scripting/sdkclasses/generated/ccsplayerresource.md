---
title: CCSPlayerResource
index: true
order: 2
category:
  - Guide
---

# CCSPlayerResource

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CCSPlayerResource(ptr)
```
# Properties
## HostageAlive 
```lua
--- @type table
Read: ccsplayerresource.HostageAlive
Write: ccsplayerresource.HostageAlive = value
```
## IsHostageFollowingSomeone 
```lua
--- @type table
Read: ccsplayerresource.IsHostageFollowingSomeone
Write: ccsplayerresource.IsHostageFollowingSomeone = value
```
## HostageEntityIDs 
```lua
--- @type table
Read: ccsplayerresource.HostageEntityIDs
Write: ccsplayerresource.HostageEntityIDs = value
```
## BombsiteCenterA 
```lua
--- @type Vector
Read: ccsplayerresource.BombsiteCenterA
Write: ccsplayerresource.BombsiteCenterA = value
```
## BombsiteCenterB 
```lua
--- @type Vector
Read: ccsplayerresource.BombsiteCenterB
Write: ccsplayerresource.BombsiteCenterB = value
```
## HostageRescueX 
```lua
--- @type table
Read: ccsplayerresource.HostageRescueX
Write: ccsplayerresource.HostageRescueX = value
```
## HostageRescueY 
```lua
--- @type table
Read: ccsplayerresource.HostageRescueY
Write: ccsplayerresource.HostageRescueY = value
```
## HostageRescueZ 
```lua
--- @type table
Read: ccsplayerresource.HostageRescueZ
Write: ccsplayerresource.HostageRescueZ = value
```
## EndMatchNextMapAllVoted 
```lua
--- @type boolean
Read: ccsplayerresource.EndMatchNextMapAllVoted
Write: ccsplayerresource.EndMatchNextMapAllVoted = value
```
## FoundGoalPositions 
```lua
--- @type boolean
Read: ccsplayerresource.FoundGoalPositions
Write: ccsplayerresource.FoundGoalPositions = value
```
## Parent (Read-Only)
```lua
--- @type CBaseEntity
Read: ccsplayerresource.Parent
```
# Functions
## ToPtr
```lua
--- @return string
ccsplayerresource:ToPtr()
```
## IsValid
```lua
--- @return bool
ccsplayerresource:IsValid()
```

:::