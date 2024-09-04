---
title: CSoundEventEntity
index: true
order: 2
category:
  - Guide
---

# CSoundEventEntity

::: tabs
@tab Lua
# Constructor
```lua
CSoundEventEntity(ptr --[[ string ]])
```
# Properties
## StartOnSpawn 
```lua
@type boolean
Read: csoundevententity.StartOnSpawn
Write: csoundevententity.StartOnSpawn = value
```
## ToLocalPlayer 
```lua
@type boolean
Read: csoundevententity.ToLocalPlayer
Write: csoundevententity.ToLocalPlayer = value
```
## StopOnNew 
```lua
@type boolean
Read: csoundevententity.StopOnNew
Write: csoundevententity.StopOnNew = value
```
## SaveRestore 
```lua
@type boolean
Read: csoundevententity.SaveRestore
Write: csoundevententity.SaveRestore = value
```
## SavedIsPlaying 
```lua
@type boolean
Read: csoundevententity.SavedIsPlaying
Write: csoundevententity.SavedIsPlaying = value
```
## SavedElapsedTime 
```lua
@type number
Read: csoundevententity.SavedElapsedTime
Write: csoundevententity.SavedElapsedTime = value
```
## SourceEntityName 
```lua
@type string
Read: csoundevententity.SourceEntityName
Write: csoundevententity.SourceEntityName = value
```
## AttachmentName 
```lua
@type string
Read: csoundevententity.AttachmentName
Write: csoundevententity.AttachmentName = value
```
## OnSoundFinished (Read-Only)
```lua
@type CEntityIOOutput
Read: csoundevententity.OnSoundFinished
```
## SoundName 
```lua
@type string
Read: csoundevententity.SoundName
Write: csoundevententity.SoundName = value
```
## Source (Read-Only)
```lua
@type CEntityInstance
Read: csoundevententity.Source
```
## EntityIndexSelection 
```lua
@type number
Read: csoundevententity.EntityIndexSelection
Write: csoundevententity.EntityIndexSelection = value
```
## Parent (Read-Only)
```lua
@type CBaseEntity
Read: csoundevententity.Parent
```
# Functions
## ToPtr
```lua
@returns string
csoundevententity:ToPtr()
```
## IsValid
```lua
@returns bool
csoundevententity:IsValid()
```

:::