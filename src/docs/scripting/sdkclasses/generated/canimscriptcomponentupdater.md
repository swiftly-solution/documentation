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
--- @param ptr string
CAnimScriptComponentUpdater(ptr)
```
# Properties
## Script (Read-Only)
```lua
--- @type AnimScriptHandle
Read: canimscriptcomponentupdater.Script
```
## Parent (Read-Only)
```lua
--- @type CAnimComponentUpdater
Read: canimscriptcomponentupdater.Parent
```
# Functions
## ToPtr
```lua
--- @return string
canimscriptcomponentupdater:ToPtr()
```
## IsValid
```lua
--- @return bool
canimscriptcomponentupdater:IsValid()
```

:::