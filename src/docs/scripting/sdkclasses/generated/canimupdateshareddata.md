---
title: CAnimUpdateSharedData
index: true
order: 2
category:
  - Guide
---

# CAnimUpdateSharedData

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CAnimUpdateSharedData(ptr)
```
# Properties
## Settings (Read-Only)
```lua
--- @type CAnimGraphSettingsManager
Read: canimupdateshareddata.Settings
```
## RootNodePath (Read-Only)
```lua
--- @type CAnimNodePath
Read: canimupdateshareddata.RootNodePath
```
# Functions
## ToPtr
```lua
--- @return string
canimupdateshareddata:ToPtr()
```
## IsValid
```lua
--- @return bool
canimupdateshareddata:IsValid()
```

:::