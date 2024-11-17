---
title: CVoiceContainerGranulator
index: true
order: 2
category:
  - Guide
---

# CVoiceContainerGranulator

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CVoiceContainerGranulator(ptr)
```
# Properties
## GrainLength 
```lua
--- @type number
Read: cvoicecontainergranulator.GrainLength
Write: cvoicecontainergranulator.GrainLength = value
```
## GrainCrossfadeAmount 
```lua
--- @type number
Read: cvoicecontainergranulator.GrainCrossfadeAmount
Write: cvoicecontainergranulator.GrainCrossfadeAmount = value
```
## StartJitter 
```lua
--- @type number
Read: cvoicecontainergranulator.StartJitter
Write: cvoicecontainergranulator.StartJitter = value
```
## PlaybackJitter 
```lua
--- @type number
Read: cvoicecontainergranulator.PlaybackJitter
Write: cvoicecontainergranulator.PlaybackJitter = value
```
## Parent (Read-Only)
```lua
--- @type CVoiceContainerBase
Read: cvoicecontainergranulator.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cvoicecontainergranulator:ToPtr()
```
## IsValid
```lua
--- @return bool
cvoicecontainergranulator:IsValid()
```

:::