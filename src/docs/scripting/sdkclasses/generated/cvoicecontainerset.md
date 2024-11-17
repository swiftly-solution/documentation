---
title: CVoiceContainerSet
index: true
order: 2
category:
  - Guide
---

# CVoiceContainerSet

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CVoiceContainerSet(ptr)
```
# Properties
## SoundsToPlay (Read-Only)
```lua
--- @type table
Read: cvoicecontainerset.SoundsToPlay
```
## Parent (Read-Only)
```lua
--- @type CVoiceContainerBase
Read: cvoicecontainerset.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cvoicecontainerset:ToPtr()
```
## IsValid
```lua
--- @return bool
cvoicecontainerset:IsValid()
```

:::