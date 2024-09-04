---
title: CSoundEventOBBEntity
index: true
order: 2
category:
  - Guide
---

# CSoundEventOBBEntity

::: tabs
@tab Lua
# Constructor
```lua
CSoundEventOBBEntity(ptr --[[ string ]])
```
# Properties
## Mins 
```lua
@type Vector
Read: csoundeventobbentity.Mins
Write: csoundeventobbentity.Mins = value
```
## Maxs 
```lua
@type Vector
Read: csoundeventobbentity.Maxs
Write: csoundeventobbentity.Maxs = value
```
## Parent (Read-Only)
```lua
@type CSoundEventEntity
Read: csoundeventobbentity.Parent
```
# Functions
## ToPtr
```lua
@returns string
csoundeventobbentity:ToPtr()
```
## IsValid
```lua
@returns bool
csoundeventobbentity:IsValid()
```

:::