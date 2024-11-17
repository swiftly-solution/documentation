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
--- @param ptr string
CVoiceContainerSetElement(ptr)
```
# Properties
## Sound (Read-Only)
```lua
--- @type CSoundContainerReference
Read: cvoicecontainersetelement.Sound
```
## VolumeDB 
```lua
--- @type number
Read: cvoicecontainersetelement.VolumeDB
Write: cvoicecontainersetelement.VolumeDB = value
```
# Functions
## ToPtr
```lua
--- @return string
cvoicecontainersetelement:ToPtr()
```
## IsValid
```lua
--- @return bool
cvoicecontainersetelement:IsValid()
```

:::