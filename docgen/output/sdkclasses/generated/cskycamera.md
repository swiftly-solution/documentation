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
## SkyboxData 
```lua
@type sky3dparams_t
Read: cskycamera.SkyboxData
Write: cskycamera.SkyboxData = value
```
## SkyboxSlotToken 
```lua
@type string
Read: cskycamera.SkyboxSlotToken
Write: cskycamera.SkyboxSlotToken = value
```
## UseAngles 
```lua
@type boolean
Read: cskycamera.UseAngles
Write: cskycamera.UseAngles = value
```
## Next (Read-Only)
```lua
@type CSkyCamera
Read: cskycamera.Next
```
## Parent 
```lua
@type CBaseEntity
Read: cskycamera.Parent
Write: cskycamera.Parent = value
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