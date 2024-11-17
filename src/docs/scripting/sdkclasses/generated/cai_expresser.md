---
title: CAI_Expresser
index: true
order: 2
category:
  - Guide
---

# CAI_Expresser

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CAI_Expresser(ptr)
```
# Properties
## StopTalkTime 
```lua
--- @type number
Read: cai_expresser.StopTalkTime
Write: cai_expresser.StopTalkTime = value
```
## StopTalkTimeWithoutDelay 
```lua
--- @type number
Read: cai_expresser.StopTalkTimeWithoutDelay
Write: cai_expresser.StopTalkTimeWithoutDelay = value
```
## BlockedTalkTime 
```lua
--- @type number
Read: cai_expresser.BlockedTalkTime
Write: cai_expresser.BlockedTalkTime = value
```
## VoicePitch 
```lua
--- @type number
Read: cai_expresser.VoicePitch
Write: cai_expresser.VoicePitch = value
```
## LastTimeAcceptedSpeak 
```lua
--- @type number
Read: cai_expresser.LastTimeAcceptedSpeak
Write: cai_expresser.LastTimeAcceptedSpeak = value
```
## AllowSpeakingInterrupts 
```lua
--- @type boolean
Read: cai_expresser.AllowSpeakingInterrupts
Write: cai_expresser.AllowSpeakingInterrupts = value
```
## ConsiderSceneInvolvementAsSpeech 
```lua
--- @type boolean
Read: cai_expresser.ConsiderSceneInvolvementAsSpeech
Write: cai_expresser.ConsiderSceneInvolvementAsSpeech = value
```
## SceneEntityDisabled 
```lua
--- @type boolean
Read: cai_expresser.SceneEntityDisabled
Write: cai_expresser.SceneEntityDisabled = value
```
## LastSpokenPriority 
```lua
--- @type number
Read: cai_expresser.LastSpokenPriority
Write: cai_expresser.LastSpokenPriority = value
```
## Outer (Read-Only)
```lua
--- @type CBaseFlex
Read: cai_expresser.Outer
```
# Functions
## ToPtr
```lua
--- @return string
cai_expresser:ToPtr()
```
## IsValid
```lua
--- @return bool
cai_expresser:IsValid()
```

:::