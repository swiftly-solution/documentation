---
title: CSoundPatch
index: true
order: 2
category:
  - Guide
---

# CSoundPatch

::: tabs
@tab Lua
# Constructor
```lua
CSoundPatch(ptr --[[ string ]])
```
# Properties
## Pitch 
```lua
@type CSoundEnvelope
Read: csoundpatch.Pitch
Write: csoundpatch.Pitch = value
```
## Volume 
```lua
@type CSoundEnvelope
Read: csoundpatch.Volume
Write: csoundpatch.Volume = value
```
## ShutdownTime 
```lua
@type number
Read: csoundpatch.ShutdownTime
Write: csoundpatch.ShutdownTime = value
```
## LastTime 
```lua
@type number
Read: csoundpatch.LastTime
Write: csoundpatch.LastTime = value
```
## SoundScriptName 
```lua
@type string
Read: csoundpatch.SoundScriptName
Write: csoundpatch.SoundScriptName = value
```
## Ent (Read-Only)
```lua
@type CBaseEntity
Read: csoundpatch.Ent
```
## SoundEntityIndex 
```lua
@type number
Read: csoundpatch.SoundEntityIndex
Write: csoundpatch.SoundEntityIndex = value
```
## SoundOrigin 
```lua
@type Vector
Read: csoundpatch.SoundOrigin
Write: csoundpatch.SoundOrigin = value
```
## IsPlaying 
```lua
@type number
Read: csoundpatch.IsPlaying
Write: csoundpatch.IsPlaying = value
```
## Filter 
```lua
@type CCopyRecipientFilter
Read: csoundpatch.Filter
Write: csoundpatch.Filter = value
```
## CloseCaptionDuration 
```lua
@type number
Read: csoundpatch.CloseCaptionDuration
Write: csoundpatch.CloseCaptionDuration = value
```
## UpdatedSoundOrigin 
```lua
@type boolean
Read: csoundpatch.UpdatedSoundOrigin
Write: csoundpatch.UpdatedSoundOrigin = value
```
## ClassName 
```lua
@type string
Read: csoundpatch.ClassName
Write: csoundpatch.ClassName = value
```
# Functions
## ToPtr
```lua
@returns string
csoundpatch:ToPtr()
```
## IsValid
```lua
@returns bool
csoundpatch:IsValid()
```

:::