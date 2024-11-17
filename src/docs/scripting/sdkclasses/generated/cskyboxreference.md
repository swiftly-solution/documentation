---
title: CSkyboxReference
index: true
order: 2
category:
  - Guide
---

# CSkyboxReference

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CSkyboxReference(ptr)
```
# Properties
## WorldGroupId 
```lua
--- @type number
Read: cskyboxreference.WorldGroupId
Write: cskyboxreference.WorldGroupId = value
```
## SkyCamera (Read-Only)
```lua
--- @type CSkyCamera
Read: cskyboxreference.SkyCamera
```
## Parent (Read-Only)
```lua
--- @type CBaseEntity
Read: cskyboxreference.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cskyboxreference:ToPtr()
```
## IsValid
```lua
--- @return bool
cskyboxreference:IsValid()
```

:::