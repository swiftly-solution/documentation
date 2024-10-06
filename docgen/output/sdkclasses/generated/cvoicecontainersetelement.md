---
title: CVoiceContainerSetElement
index: true
order: 2
category:
  - Guide
---

# CVoiceContainerSetElement

::: tabs
@tab Lua
# Constructor
```lua
CVoiceContainerSetElement(ptr --[[ string ]])
```
# Properties
## Sound (Read-Only)
```lua
@type CSoundContainerReference
Read: cvoicecontainersetelement.Sound
```
## VolumeDB 
```lua
@type number
Read: cvoicecontainersetelement.VolumeDB
Write: cvoicecontainersetelement.VolumeDB = value
```
# Functions
## ToPtr
```lua
@returns string
cvoicecontainersetelement:ToPtr()
```
## IsValid
```lua
@returns bool
cvoicecontainersetelement:IsValid()
```

:::