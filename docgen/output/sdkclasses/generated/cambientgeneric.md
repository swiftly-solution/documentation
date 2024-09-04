---
title: CAmbientGeneric
index: true
order: 2
category:
  - Guide
---

# CAmbientGeneric

::: tabs
@tab Lua
# Constructor
```lua
CAmbientGeneric(ptr --[[ string ]])
```
# Properties
## Radius 
```lua
@type number
Read: cambientgeneric.Radius
Write: cambientgeneric.Radius = value
```
## MaxRadius 
```lua
@type number
Read: cambientgeneric.MaxRadius
Write: cambientgeneric.MaxRadius = value
```
## SoundLevel 
```lua
@type number
Read: cambientgeneric.SoundLevel
Write: cambientgeneric.SoundLevel = value
```
## Dpv (Read-Only)
```lua
@type dynpitchvol_t
Read: cambientgeneric.Dpv
```
## Active 
```lua
@type boolean
Read: cambientgeneric.Active
Write: cambientgeneric.Active = value
```
## Looping 
```lua
@type boolean
Read: cambientgeneric.Looping
Write: cambientgeneric.Looping = value
```
## Sound 
```lua
@type string
Read: cambientgeneric.Sound
Write: cambientgeneric.Sound = value
```
## SourceEntName 
```lua
@type string
Read: cambientgeneric.SourceEntName
Write: cambientgeneric.SourceEntName = value
```
## SoundSource (Read-Only)
```lua
@type CBaseEntity
Read: cambientgeneric.SoundSource
```
## SoundSourceEntIndex 
```lua
@type number
Read: cambientgeneric.SoundSourceEntIndex
Write: cambientgeneric.SoundSourceEntIndex = value
```
## Parent (Read-Only)
```lua
@type CPointEntity
Read: cambientgeneric.Parent
```
# Functions
## ToPtr
```lua
@returns string
cambientgeneric:ToPtr()
```
## IsValid
```lua
@returns bool
cambientgeneric:IsValid()
```

:::