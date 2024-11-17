---
title: CVoiceContainerSelector
index: true
order: 2
category:
  - Guide
---

# CVoiceContainerSelector

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CVoiceContainerSelector(ptr)
```
# Properties
## Mode 
```lua
--- @type number
Read: cvoicecontainerselector.Mode
Write: cvoicecontainerselector.Mode = value
```
## SoundsToPlay (Read-Only)
```lua
--- @type CSoundContainerReferenceArray
Read: cvoicecontainerselector.SoundsToPlay
```
## ProbabilityWeights (Read-Only)
```lua
--- @type table
Read: cvoicecontainerselector.ProbabilityWeights
```
## Parent (Read-Only)
```lua
--- @type CVoiceContainerBase
Read: cvoicecontainerselector.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cvoicecontainerselector:ToPtr()
```
## IsValid
```lua
--- @return bool
cvoicecontainerselector:IsValid()
```

:::