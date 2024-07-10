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
## Parent 
```lua
@type CSoundEventEntity
Read: csoundeventobbentity.Parent
Write: csoundeventobbentity.Parent = value
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