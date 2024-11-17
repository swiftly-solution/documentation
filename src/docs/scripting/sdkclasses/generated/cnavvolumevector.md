---
title: CNavVolumeVector
index: true
order: 2
category:
  - Guide
---

# CNavVolumeVector

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CNavVolumeVector(ptr)
```
# Properties
## HasBeenPreFiltered 
```lua
--- @type boolean
Read: cnavvolumevector.HasBeenPreFiltered
Write: cnavvolumevector.HasBeenPreFiltered = value
```
## Parent (Read-Only)
```lua
--- @type CNavVolume
Read: cnavvolumevector.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cnavvolumevector:ToPtr()
```
## IsValid
```lua
--- @return bool
cnavvolumevector:IsValid()
```

:::