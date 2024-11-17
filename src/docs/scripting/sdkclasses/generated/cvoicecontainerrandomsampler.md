---
title: CVoiceContainerRandomSampler
index: true
order: 2
category:
  - Guide
---

# CVoiceContainerRandomSampler

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CVoiceContainerRandomSampler(ptr)
```
# Properties
## Amplitude 
```lua
--- @type number
Read: cvoicecontainerrandomsampler.Amplitude
Write: cvoicecontainerrandomsampler.Amplitude = value
```
## AmplitudeJitter 
```lua
--- @type number
Read: cvoicecontainerrandomsampler.AmplitudeJitter
Write: cvoicecontainerrandomsampler.AmplitudeJitter = value
```
## TimeJitter 
```lua
--- @type number
Read: cvoicecontainerrandomsampler.TimeJitter
Write: cvoicecontainerrandomsampler.TimeJitter = value
```
## MaxLength 
```lua
--- @type number
Read: cvoicecontainerrandomsampler.MaxLength
Write: cvoicecontainerrandomsampler.MaxLength = value
```
## NumDelayVariations 
```lua
--- @type number
Read: cvoicecontainerrandomsampler.NumDelayVariations
Write: cvoicecontainerrandomsampler.NumDelayVariations = value
```
## Parent (Read-Only)
```lua
--- @type CVoiceContainerBase
Read: cvoicecontainerrandomsampler.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cvoicecontainerrandomsampler:ToPtr()
```
## IsValid
```lua
--- @return bool
cvoicecontainerrandomsampler:IsValid()
```

:::