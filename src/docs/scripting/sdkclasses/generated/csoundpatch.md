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
--- @param ptr string
CSoundPatch(ptr)
```
# Properties
## Pitch (Read-Only)
```lua
--- @type CSoundEnvelope
Read: csoundpatch.Pitch
```
## Volume (Read-Only)
```lua
--- @type CSoundEnvelope
Read: csoundpatch.Volume
```
## ShutdownTime 
```lua
--- @type number
Read: csoundpatch.ShutdownTime
Write: csoundpatch.ShutdownTime = value
```
## LastTime 
```lua
--- @type number
Read: csoundpatch.LastTime
Write: csoundpatch.LastTime = value
```
## SoundScriptName 
```lua
--- @type string
Read: csoundpatch.SoundScriptName
Write: csoundpatch.SoundScriptName = value
```
## SoundEntityIndex 
```lua
--- @type number
Read: csoundpatch.SoundEntityIndex
Write: csoundpatch.SoundEntityIndex = value
```
## SoundOrigin 
```lua
--- @type Vector
Read: csoundpatch.SoundOrigin
Write: csoundpatch.SoundOrigin = value
```
## IsPlaying 
```lua
--- @type number
Read: csoundpatch.IsPlaying
Write: csoundpatch.IsPlaying = value
```
## Filter (Read-Only)
```lua
--- @type CCopyRecipientFilter
Read: csoundpatch.Filter
```
## CloseCaptionDuration 
```lua
--- @type number
Read: csoundpatch.CloseCaptionDuration
Write: csoundpatch.CloseCaptionDuration = value
```
## UpdatedSoundOrigin 
```lua
--- @type boolean
Read: csoundpatch.UpdatedSoundOrigin
Write: csoundpatch.UpdatedSoundOrigin = value
```
## ClassName 
```lua
--- @type string
Read: csoundpatch.ClassName
Write: csoundpatch.ClassName = value
```
# Functions
## ToPtr
```lua
--- @return string
csoundpatch:ToPtr()
```
## IsValid
```lua
--- @return bool
csoundpatch:IsValid()
```

:::