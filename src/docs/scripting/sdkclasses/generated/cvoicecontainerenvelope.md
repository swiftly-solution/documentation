---
title: CVoiceContainerEnvelope
index: true
order: 2
category:
  - Guide
---

# CVoiceContainerEnvelope

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CVoiceContainerEnvelope(ptr)
```
# Properties
## AnalysisContainer (Read-Only)
```lua
--- @type CVoiceContainerAnalysisBase
Read: cvoicecontainerenvelope.AnalysisContainer
```
## Parent (Read-Only)
```lua
--- @type CVoiceContainerBase
Read: cvoicecontainerenvelope.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cvoicecontainerenvelope:ToPtr()
```
## IsValid
```lua
--- @return bool
cvoicecontainerenvelope:IsValid()
```

:::