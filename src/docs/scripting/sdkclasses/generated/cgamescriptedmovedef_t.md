---
title: CGameScriptedMoveDef_t
index: true
order: 2
category:
  - Guide
---

# CGameScriptedMoveDef_t

::: tabs
@tab Lua
# Constructor
```lua
CGameScriptedMoveDef_t(ptr)
```
# Properties
## Type 
```lua
--- @type Scripteduint8_t
Read: cgamescriptedmovedef_t.Type
Write: cgamescriptedmovedef_t.Type = value
```
## DestOffset 
```lua
--- @type Vector
Read: cgamescriptedmovedef_t.DestOffset
Write: cgamescriptedmovedef_t.DestOffset = value
```
## DestEntity (Read-Only)
```lua
--- @type CBaseEntity
Read: cgamescriptedmovedef_t.DestEntity
```
## Dest 
```lua
--- @type QAngle
Read: cgamescriptedmovedef_t.Dest
Write: cgamescriptedmovedef_t.Dest = value
```
## Duration 
```lua
--- @type number
Read: cgamescriptedmovedef_t.Duration
Write: cgamescriptedmovedef_t.Duration = value
```
## AngRate 
```lua
--- @type number
Read: cgamescriptedmovedef_t.AngRate
Write: cgamescriptedmovedef_t.AngRate = value
```
# Functions
## ToPtr
```lua
@returns string
cgamescriptedmovedef_t:ToPtr()
```
## IsValid
```lua
@returns bool
cgamescriptedmovedef_t:IsValid()
```

:::