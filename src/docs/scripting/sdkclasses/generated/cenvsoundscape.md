---
title: CEnvSoundscape
index: true
order: 2
category:
  - Guide
---

# CEnvSoundscape

::: tabs
@tab Lua
# Constructor
```lua
CEnvSoundscape(ptr --[[ string ]])
```
# Properties
## OnPlay 
```lua
@type CEntityIOOutput
Read: cenvsoundscape.OnPlay
Write: cenvsoundscape.OnPlay = value
```
## Radius 
```lua
@type number
Read: cenvsoundscape.Radius
Write: cenvsoundscape.Radius = value
```
## SoundscapeName 
```lua
@type string
Read: cenvsoundscape.SoundscapeName
Write: cenvsoundscape.SoundscapeName = value
```
## SoundEventName 
```lua
@type string
Read: cenvsoundscape.SoundEventName
Write: cenvsoundscape.SoundEventName = value
```
## OverrideWithEvent 
```lua
@type boolean
Read: cenvsoundscape.OverrideWithEvent
Write: cenvsoundscape.OverrideWithEvent = value
```
## SoundscapeIndex 
```lua
@type number
Read: cenvsoundscape.SoundscapeIndex
Write: cenvsoundscape.SoundscapeIndex = value
```
## SoundscapeEntityListId 
```lua
@type number
Read: cenvsoundscape.SoundscapeEntityListId
Write: cenvsoundscape.SoundscapeEntityListId = value
```
## SoundEventHash 
```lua
@type number
Read: cenvsoundscape.SoundEventHash
Write: cenvsoundscape.SoundEventHash = value
```
## PositionNames 
```lua
@type table
Read: cenvsoundscape.PositionNames
Write: cenvsoundscape.PositionNames = value
```
## ProxySoundscape (Read-Only)
```lua
@type CEnvSoundscape
Read: cenvsoundscape.ProxySoundscape
```
## Disabled 
```lua
@type boolean
Read: cenvsoundscape.Disabled
Write: cenvsoundscape.Disabled = value
```
## Parent 
```lua
@type CServerOnlyEntity
Read: cenvsoundscape.Parent
Write: cenvsoundscape.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cenvsoundscape:ToPtr()
```
## IsValid
```lua
@returns bool
cenvsoundscape:IsValid()
```

:::