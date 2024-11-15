---
title: CVoiceContainerLoopTrigger
index: true
order: 2
category:
  - Guide
---

# CVoiceContainerLoopTrigger

::: tabs
@tab Lua
# Constructor
```lua
CVoiceContainerLoopTrigger(ptr)
```
# Properties
## Sound (Read-Only)
```lua
--- @type CSoundContainerReference
Read: cvoicecontainerlooptrigger.Sound
```
## RetriggerTimeMin 
```lua
--- @type number
Read: cvoicecontainerlooptrigger.RetriggerTimeMin
Write: cvoicecontainerlooptrigger.RetriggerTimeMin = value
```
## RetriggerTimeMax 
```lua
--- @type number
Read: cvoicecontainerlooptrigger.RetriggerTimeMax
Write: cvoicecontainerlooptrigger.RetriggerTimeMax = value
```
## FadeTime 
```lua
--- @type number
Read: cvoicecontainerlooptrigger.FadeTime
Write: cvoicecontainerlooptrigger.FadeTime = value
```
## CrossFade 
```lua
--- @type boolean
Read: cvoicecontainerlooptrigger.CrossFade
Write: cvoicecontainerlooptrigger.CrossFade = value
```
## Parent (Read-Only)
```lua
--- @type CVoiceContainerBase
Read: cvoicecontainerlooptrigger.Parent
```
# Functions
## ToPtr
```lua
@returns string
cvoicecontainerlooptrigger:ToPtr()
```
## IsValid
```lua
@returns bool
cvoicecontainerlooptrigger:IsValid()
```

:::