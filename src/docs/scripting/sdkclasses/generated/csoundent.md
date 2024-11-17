---
title: CSoundEnt
index: true
order: 2
category:
  - Guide
---

# CSoundEnt

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CSoundEnt(ptr)
```
# Properties
## FreeSound 
```lua
--- @type number
Read: csoundent.FreeSound
Write: csoundent.FreeSound = value
```
## ActiveSound 
```lua
--- @type number
Read: csoundent.ActiveSound
Write: csoundent.ActiveSound = value
```
## CLastActiveSounds 
```lua
--- @type number
Read: csoundent.CLastActiveSounds
Write: csoundent.CLastActiveSounds = value
```
## SoundPool (Read-Only)
```lua
--- @type table
Read: csoundent.SoundPool
```
## Parent (Read-Only)
```lua
--- @type CPointEntity
Read: csoundent.Parent
```
# Functions
## ToPtr
```lua
--- @return string
csoundent:ToPtr()
```
## IsValid
```lua
--- @return bool
csoundent:IsValid()
```

:::