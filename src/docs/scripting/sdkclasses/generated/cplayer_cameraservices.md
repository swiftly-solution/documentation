---
title: CPlayer_CameraServices
index: true
order: 2
category:
  - Guide
---

# CPlayer_CameraServices

::: tabs
@tab Lua
# Constructor
```lua
CPlayer_CameraServices(ptr --[[ string ]])
```
# Properties
## CsViewPunchAngle 
```lua
@type QAngle
Read: cplayer_cameraservices.CsViewPunchAngle
Write: cplayer_cameraservices.CsViewPunchAngle = value
```
## CsViewPunchAngleTick 
```lua
@type number
Read: cplayer_cameraservices.CsViewPunchAngleTick
Write: cplayer_cameraservices.CsViewPunchAngleTick = value
```
## CsViewPunchAngleTickRatio 
```lua
@type number
Read: cplayer_cameraservices.CsViewPunchAngleTickRatio
Write: cplayer_cameraservices.CsViewPunchAngleTickRatio = value
```
## PlayerFog 
```lua
@type fogplayerparams_t
Read: cplayer_cameraservices.PlayerFog
Write: cplayer_cameraservices.PlayerFog = value
```
## ColorCorrectionCtrl (Read-Only)
```lua
@type CColorCorrection
Read: cplayer_cameraservices.ColorCorrectionCtrl
```
## ViewEntity (Read-Only)
```lua
@type CBaseEntity
Read: cplayer_cameraservices.ViewEntity
```
## TonemapController (Read-Only)
```lua
@type CTonemapController2
Read: cplayer_cameraservices.TonemapController
```
## Audio 
```lua
@type audioparams_t
Read: cplayer_cameraservices.Audio
Write: cplayer_cameraservices.Audio = value
```
## PostProcessingVolumes 
```lua
@type table
Read: cplayer_cameraservices.PostProcessingVolumes
Write: cplayer_cameraservices.PostProcessingVolumes = value
```
## OldPlayerZ 
```lua
@type number
Read: cplayer_cameraservices.OldPlayerZ
Write: cplayer_cameraservices.OldPlayerZ = value
```
## OldPlayerViewOffsetZ 
```lua
@type number
Read: cplayer_cameraservices.OldPlayerViewOffsetZ
Write: cplayer_cameraservices.OldPlayerViewOffsetZ = value
```
## Parent 
```lua
@type CPlayerPawnComponent
Read: cplayer_cameraservices.Parent
Write: cplayer_cameraservices.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cplayer_cameraservices:ToPtr()
```
## IsValid
```lua
@returns bool
cplayer_cameraservices:IsValid()
```

:::