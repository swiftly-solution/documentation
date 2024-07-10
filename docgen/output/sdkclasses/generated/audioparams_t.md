---
title: audioparams_t
index: true
order: 2
category:
  - Guide
---

# audioparams_t

::: tabs
@tab Lua
# Constructor
```lua
audioparams_t(ptr --[[ string ]])
```
# Properties
## LocalSound 
```lua
@type table
Read: audioparams_t.LocalSound
Write: audioparams_t.LocalSound = value
```
## SoundscapeIndex 
```lua
@type number
Read: audioparams_t.SoundscapeIndex
Write: audioparams_t.SoundscapeIndex = value
```
## LocalBits 
```lua
@type number
Read: audioparams_t.LocalBits
Write: audioparams_t.LocalBits = value
```
## SoundscapeEntityListIndex 
```lua
@type number
Read: audioparams_t.SoundscapeEntityListIndex
Write: audioparams_t.SoundscapeEntityListIndex = value
```
## SoundEventHash 
```lua
@type number
Read: audioparams_t.SoundEventHash
Write: audioparams_t.SoundEventHash = value
```
# Functions
## ToPtr
```lua
@returns string
audioparams_t:ToPtr()
```
## IsValid
```lua
@returns bool
audioparams_t:IsValid()
```

:::