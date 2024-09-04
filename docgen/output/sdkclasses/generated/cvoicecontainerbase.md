---
title: CVoiceContainerBase
index: true
order: 2
category:
  - Guide
---

# CVoiceContainerBase

::: tabs
@tab Lua
# Constructor
```lua
CVoiceContainerBase(ptr --[[ string ]])
```
# Properties
## HideAnalyzers 
```lua
@type boolean
Read: cvoicecontainerbase.HideAnalyzers
Write: cvoicecontainerbase.HideAnalyzers = value
```
## AnalysisContainers (Read-Only)
```lua
@type table
Read: cvoicecontainerbase.AnalysisContainers
```
# Functions
## ToPtr
```lua
@returns string
cvoicecontainerbase:ToPtr()
```
## IsValid
```lua
@returns bool
cvoicecontainerbase:IsValid()
```

:::