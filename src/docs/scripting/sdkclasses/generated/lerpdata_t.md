---
title: lerpdata_t
index: true
order: 2
category:
  - Guide
---

# lerpdata_t

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
lerpdata_t(ptr)
```
# Properties
## Ent (Read-Only)
```lua
--- @type CBaseEntity
Read: lerpdata_t.Ent
```
## MoveType 
```lua
--- @type number
Read: lerpdata_t.MoveType
Write: lerpdata_t.MoveType = value
```
## StartTime 
```lua
--- @type number
Read: lerpdata_t.StartTime
Write: lerpdata_t.StartTime = value
```
## StartOrigin 
```lua
--- @type Vector
Read: lerpdata_t.StartOrigin
Write: lerpdata_t.StartOrigin = value
```
## FXIndex (Read-Only)
```lua
--- @type ParticleIndex_t
Read: lerpdata_t.FXIndex
```
# Functions
## ToPtr
```lua
--- @return string
lerpdata_t:ToPtr()
```
## IsValid
```lua
--- @return bool
lerpdata_t:IsValid()
```

:::