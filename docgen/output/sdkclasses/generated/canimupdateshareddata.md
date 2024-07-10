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
CAnimUpdateSharedData(ptr --[[ string ]])
```
# Properties
## Settings 
```lua
@type CAnimGraphSettingsManager
Read: canimupdateshareddata.Settings
Write: canimupdateshareddata.Settings = value
```
## RootNodePath 
```lua
@type CAnimNodePath
Read: canimupdateshareddata.RootNodePath
Write: canimupdateshareddata.RootNodePath = value
```
# Functions
## ToPtr
```lua
@returns string
canimupdateshareddata:ToPtr()
```
## IsValid
```lua
@returns bool
canimupdateshareddata:IsValid()
```

:::