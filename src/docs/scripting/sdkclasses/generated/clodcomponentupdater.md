---
title: CLODComponentUpdater
index: true
order: 2
category:
  - Guide
---

# CLODComponentUpdater

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CLODComponentUpdater(ptr)
```
# Properties
## ServerLOD 
```lua
--- @type number
Read: clodcomponentupdater.ServerLOD
Write: clodcomponentupdater.ServerLOD = value
```
## Parent (Read-Only)
```lua
--- @type CAnimComponentUpdater
Read: clodcomponentupdater.Parent
```
# Functions
## ToPtr
```lua
--- @return string
clodcomponentupdater:ToPtr()
```
## IsValid
```lua
--- @return bool
clodcomponentupdater:IsValid()
```

:::