---
title: CSkyCamera
index: true
order: 2
category:
  - Guide
---

# CSkyCamera

::: tabs
@tab Lua
# Constructor
```lua
CSkyCamera(ptr --[[ string ]])
```
# Properties
## SkyboxData (Read-Only)
```lua
@type sky3dparams_t
Read: cskycamera.SkyboxData
```
## SkyboxSlotToken 
```lua
@type number
Read: cskycamera.SkyboxSlotToken
Write: cskycamera.SkyboxSlotToken = value
```
## UseAngles 
```lua
@type boolean
Read: cskycamera.UseAngles
Write: cskycamera.UseAngles = value
```
## Next 
```lua
@type CSkyCamera
Read: cskycamera.Next
Write: cskycamera.Next = value
```
## Parent (Read-Only)
```lua
@type CBaseEntity
Read: cskycamera.Parent
```
# Functions
## ToPtr
```lua
@returns string
cskycamera:ToPtr()
```
## IsValid
```lua
@returns bool
cskycamera:IsValid()
```

:::