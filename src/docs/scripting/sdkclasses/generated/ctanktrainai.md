---
title: CTankTrainAI
index: true
order: 2
category:
  - Guide
---

# CTankTrainAI

::: tabs
@tab Lua
# Constructor
```lua
CTankTrainAI(ptr)
```
# Properties
## Train (Read-Only)
```lua
--- @type CFuncTrackTrain
Read: ctanktrainai.Train
```
## TargetEntity (Read-Only)
```lua
--- @type CBaseEntity
Read: ctanktrainai.TargetEntity
```
## SoundPlaying 
```lua
--- @type number
Read: ctanktrainai.SoundPlaying
Write: ctanktrainai.SoundPlaying = value
```
## StartSoundName 
```lua
--- @type string
Read: ctanktrainai.StartSoundName
Write: ctanktrainai.StartSoundName = value
```
## EngineSoundName 
```lua
--- @type string
Read: ctanktrainai.EngineSoundName
Write: ctanktrainai.EngineSoundName = value
```
## MovementSoundName 
```lua
--- @type string
Read: ctanktrainai.MovementSoundName
Write: ctanktrainai.MovementSoundName = value
```
## TargetEntityName 
```lua
--- @type string
Read: ctanktrainai.TargetEntityName
Write: ctanktrainai.TargetEntityName = value
```
## Parent (Read-Only)
```lua
--- @type CPointEntity
Read: ctanktrainai.Parent
```
# Functions
## ToPtr
```lua
@returns string
ctanktrainai:ToPtr()
```
## IsValid
```lua
@returns bool
ctanktrainai:IsValid()
```

:::