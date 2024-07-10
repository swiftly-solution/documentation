---
title: CAnimScriptComponentUpdater
index: true
order: 2
category:
  - Guide
---

# CAnimScriptComponentUpdater

::: tabs
@tab Lua
# Constructor
```lua
CAnimScriptComponentUpdater(ptr --[[ string ]])
```
# Properties
## Script 
```lua
@type AnimScriptHandle
Read: canimscriptcomponentupdater.Script
Write: canimscriptcomponentupdater.Script = value
```
## Parent 
```lua
@type CAnimComponentUpdater
Read: canimscriptcomponentupdater.Parent
Write: canimscriptcomponentupdater.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
canimscriptcomponentupdater:ToPtr()
```
## IsValid
```lua
@returns bool
canimscriptcomponentupdater:IsValid()
```

:::