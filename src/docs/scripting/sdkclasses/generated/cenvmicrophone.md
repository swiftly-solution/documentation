---
title: CEnvMicrophone
index: true
order: 2
category:
  - Guide
---

# CEnvMicrophone

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CEnvMicrophone(ptr)
```
# Properties
## Disabled 
```lua
--- @type boolean
Read: cenvmicrophone.Disabled
Write: cenvmicrophone.Disabled = value
```
## MeasureTarget (Read-Only)
```lua
--- @type CBaseEntity
Read: cenvmicrophone.MeasureTarget
```
## SoundType 
```lua
--- @type number
Read: cenvmicrophone.SoundType
Write: cenvmicrophone.SoundType = value
```
## SoundFlags 
```lua
--- @type number
Read: cenvmicrophone.SoundFlags
Write: cenvmicrophone.SoundFlags = value
```
## Sensitivity 
```lua
--- @type number
Read: cenvmicrophone.Sensitivity
Write: cenvmicrophone.Sensitivity = value
```
## SmoothFactor 
```lua
--- @type number
Read: cenvmicrophone.SmoothFactor
Write: cenvmicrophone.SmoothFactor = value
```
## MaxRange 
```lua
--- @type number
Read: cenvmicrophone.MaxRange
Write: cenvmicrophone.MaxRange = value
```
## SpeakerName 
```lua
--- @type string
Read: cenvmicrophone.SpeakerName
Write: cenvmicrophone.SpeakerName = value
```
## Speaker (Read-Only)
```lua
--- @type CBaseEntity
Read: cenvmicrophone.Speaker
```
## AvoidFeedback 
```lua
--- @type boolean
Read: cenvmicrophone.AvoidFeedback
Write: cenvmicrophone.AvoidFeedback = value
```
## SpeakerDSPPreset 
```lua
--- @type number
Read: cenvmicrophone.SpeakerDSPPreset
Write: cenvmicrophone.SpeakerDSPPreset = value
```
## ListenFilter 
```lua
--- @type string
Read: cenvmicrophone.ListenFilter
Write: cenvmicrophone.ListenFilter = value
```
## ListenFilter1 (Read-Only)
```lua
--- @type CBaseFilter
Read: cenvmicrophone.ListenFilter1
```
## OnRoutedSound (Read-Only)
```lua
--- @type CEntityIOOutput
Read: cenvmicrophone.OnRoutedSound
```
## OnHeardSound (Read-Only)
```lua
--- @type CEntityIOOutput
Read: cenvmicrophone.OnHeardSound
```
## LastSound 
```lua
--- @type string
Read: cenvmicrophone.LastSound
Write: cenvmicrophone.LastSound = value
```
## LastRoutedFrame 
```lua
--- @type number
Read: cenvmicrophone.LastRoutedFrame
Write: cenvmicrophone.LastRoutedFrame = value
```
## Parent (Read-Only)
```lua
--- @type CPointEntity
Read: cenvmicrophone.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cenvmicrophone:ToPtr()
```
## IsValid
```lua
--- @return bool
cenvmicrophone:IsValid()
```

:::