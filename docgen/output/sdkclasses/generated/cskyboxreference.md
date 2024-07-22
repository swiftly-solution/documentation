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
CSkyboxReference(ptr --[[ string ]])
```
# Properties
## WorldGroupId 
```lua
@type number
Read: cskyboxreference.WorldGroupId
Write: cskyboxreference.WorldGroupId = value
```
## SkyCamera (Read-Only)
```lua
@type CSkyCamera
Read: cskyboxreference.SkyCamera
```
## Parent 
```lua
@type CBaseEntity
Read: cskyboxreference.Parent
Write: cskyboxreference.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cskyboxreference:ToPtr()
```
## IsValid
```lua
@returns bool
cskyboxreference:IsValid()
```

:::