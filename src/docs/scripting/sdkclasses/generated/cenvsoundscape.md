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
CEnvSoundscape(ptr)
```
# Properties
## OnPlay (Read-Only)
```lua
--- @type CEntityIOOutput
Read: cenvsoundscape.OnPlay
```
## Radius 
```lua
--- @type number
Read: cenvsoundscape.Radius
Write: cenvsoundscape.Radius = value
```
## SoundEventName 
```lua
--- @type string
Read: cenvsoundscape.SoundEventName
Write: cenvsoundscape.SoundEventName = value
```
## OverrideWithEvent 
```lua
--- @type boolean
Read: cenvsoundscape.OverrideWithEvent
Write: cenvsoundscape.OverrideWithEvent = value
```
## SoundscapeIndex 
```lua
--- @type number
Read: cenvsoundscape.SoundscapeIndex
Write: cenvsoundscape.SoundscapeIndex = value
```
## SoundscapeEntityListId 
```lua
--- @type number
Read: cenvsoundscape.SoundscapeEntityListId
Write: cenvsoundscape.SoundscapeEntityListId = value
```
## PositionNames 
```lua
--- @type table
Read: cenvsoundscape.PositionNames
Write: cenvsoundscape.PositionNames = value
```
## ProxySoundscape (Read-Only)
```lua
--- @type CEnvSoundscape
Read: cenvsoundscape.ProxySoundscape
```
## Disabled 
```lua
--- @type boolean
Read: cenvsoundscape.Disabled
Write: cenvsoundscape.Disabled = value
```
## SoundscapeName 
```lua
--- @type string
Read: cenvsoundscape.SoundscapeName
Write: cenvsoundscape.SoundscapeName = value
```
## SoundEventHash 
```lua
--- @type number
Read: cenvsoundscape.SoundEventHash
Write: cenvsoundscape.SoundEventHash = value
```
## Parent (Read-Only)
```lua
--- @type CBaseEntity
Read: cenvsoundscape.Parent
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