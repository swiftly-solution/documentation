---
title: CSoundContainerReference
index: true
order: 2
category:
  - Guide
---

# CSoundContainerReference

::: tabs
@tab Lua
# Constructor
```lua
CSoundContainerReference(ptr)
```
# Properties
## UseReference 
```lua
--- @type boolean
Read: csoundcontainerreference.UseReference
Write: csoundcontainerreference.UseReference = value
```
## Sound (Read-Only)
```lua
--- @type CVoiceContainerBase
Read: csoundcontainerreference.Sound
```
# Functions
## ToPtr
```lua
@returns string
csoundcontainerreference:ToPtr()
```
## IsValid
```lua
@returns bool
csoundcontainerreference:IsValid()
```

:::