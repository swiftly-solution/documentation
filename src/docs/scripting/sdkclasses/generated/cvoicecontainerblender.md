---
title: CVoiceContainerBlender
index: true
order: 2
category:
  - Guide
---

# CVoiceContainerBlender

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CVoiceContainerBlender(ptr)
```
# Properties
## FirstSound (Read-Only)
```lua
--- @type CSoundContainerReference
Read: cvoicecontainerblender.FirstSound
```
## SecondSound (Read-Only)
```lua
--- @type CSoundContainerReference
Read: cvoicecontainerblender.SecondSound
```
## BlendFactor 
```lua
--- @type number
Read: cvoicecontainerblender.BlendFactor
Write: cvoicecontainerblender.BlendFactor = value
```
## Parent (Read-Only)
```lua
--- @type CVoiceContainerBase
Read: cvoicecontainerblender.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cvoicecontainerblender:ToPtr()
```
## IsValid
```lua
--- @return bool
cvoicecontainerblender:IsValid()
```

:::