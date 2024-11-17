---
title: CAnimComponentUpdater
index: true
order: 2
category:
  - Guide
---

# CAnimComponentUpdater

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CAnimComponentUpdater(ptr)
```
# Properties
## Name 
```lua
--- @type string
Read: canimcomponentupdater.Name
Write: canimcomponentupdater.Name = value
```
## Id (Read-Only)
```lua
--- @type AnimComponentID
Read: canimcomponentupdater.Id
```
## NetworkMode 
```lua
--- @type number
Read: canimcomponentupdater.NetworkMode
Write: canimcomponentupdater.NetworkMode = value
```
## StartEnabled 
```lua
--- @type boolean
Read: canimcomponentupdater.StartEnabled
Write: canimcomponentupdater.StartEnabled = value
```
# Functions
## ToPtr
```lua
--- @return string
canimcomponentupdater:ToPtr()
```
## IsValid
```lua
--- @return bool
canimcomponentupdater:IsValid()
```

:::