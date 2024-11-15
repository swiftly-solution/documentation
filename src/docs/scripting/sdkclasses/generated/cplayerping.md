---
title: CPlayerPing
index: true
order: 2
category:
  - Guide
---

# CPlayerPing

::: tabs
@tab Lua
# Constructor
```lua
CPlayerPing(ptr)
```
# Properties
## Player (Read-Only)
```lua
--- @type CCSPlayerPawn
Read: cplayerping.Player
```
## PingedEntity (Read-Only)
```lua
--- @type CBaseEntity
Read: cplayerping.PingedEntity
```
## Type 
```lua
--- @type number
Read: cplayerping.Type
Write: cplayerping.Type = value
```
## Urgent 
```lua
--- @type boolean
Read: cplayerping.Urgent
Write: cplayerping.Urgent = value
```
## PlaceName 
```lua
--- @type string
Read: cplayerping.PlaceName
Write: cplayerping.PlaceName = value
```
## Parent (Read-Only)
```lua
--- @type CBaseEntity
Read: cplayerping.Parent
```
# Functions
## ToPtr
```lua
@returns string
cplayerping:ToPtr()
```
## IsValid
```lua
@returns bool
cplayerping:IsValid()
```

:::