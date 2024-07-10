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
CSoundEnt(ptr --[[ string ]])
```
# Properties
## FreeSound 
```lua
@type number
Read: csoundent.FreeSound
Write: csoundent.FreeSound = value
```
## ActiveSound 
```lua
@type number
Read: csoundent.ActiveSound
Write: csoundent.ActiveSound = value
```
## CLastActiveSounds 
```lua
@type number
Read: csoundent.CLastActiveSounds
Write: csoundent.CLastActiveSounds = value
```
## SoundPool 
```lua
@type table
Read: csoundent.SoundPool
Write: csoundent.SoundPool = value
```
## Parent 
```lua
@type CPointEntity
Read: csoundent.Parent
Write: csoundent.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
csoundent:ToPtr()
```
## IsValid
```lua
@returns bool
csoundent:IsValid()
```

:::