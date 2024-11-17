---
title: CSoundEventAABBEntity
index: true
order: 2
category:
  - Guide
---

# CSoundEventAABBEntity

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CSoundEventAABBEntity(ptr)
```
# Properties
## Mins 
```lua
--- @type Vector
Read: csoundeventaabbentity.Mins
Write: csoundeventaabbentity.Mins = value
```
## Maxs 
```lua
--- @type Vector
Read: csoundeventaabbentity.Maxs
Write: csoundeventaabbentity.Maxs = value
```
## Parent (Read-Only)
```lua
--- @type CSoundEventEntity
Read: csoundeventaabbentity.Parent
```
# Functions
## ToPtr
```lua
--- @return string
csoundeventaabbentity:ToPtr()
```
## IsValid
```lua
--- @return bool
csoundeventaabbentity:IsValid()
```

:::