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
CPlayer_CameraServices(ptr)
```
# Properties
## CsViewPunchAngle 
```lua
--- @type QAngle
Read: cplayer_cameraservices.CsViewPunchAngle
Write: cplayer_cameraservices.CsViewPunchAngle = value
```
## CsViewPunchAngleTick 
```lua
--- @type number
Read: cplayer_cameraservices.CsViewPunchAngleTick
Write: cplayer_cameraservices.CsViewPunchAngleTick = value
```
## CsViewPunchAngleTickRatio 
```lua
--- @type number
Read: cplayer_cameraservices.CsViewPunchAngleTickRatio
Write: cplayer_cameraservices.CsViewPunchAngleTickRatio = value
```
## PlayerFog (Read-Only)
```lua
--- @type fogplayerparams_t
Read: cplayer_cameraservices.PlayerFog
```
## ColorCorrectionCtrl (Read-Only)
```lua
--- @type CColorCorrection
Read: cplayer_cameraservices.ColorCorrectionCtrl
```
## ViewEntity (Read-Only)
```lua
--- @type CBaseEntity
Read: cplayer_cameraservices.ViewEntity
```
## TonemapController (Read-Only)
```lua
--- @type CTonemapController2
Read: cplayer_cameraservices.TonemapController
```
## Audio (Read-Only)
```lua
--- @type audioparams_t
Read: cplayer_cameraservices.Audio
```
## OldPlayerZ 
```lua
--- @type number
Read: cplayer_cameraservices.OldPlayerZ
Write: cplayer_cameraservices.OldPlayerZ = value
```
## OldPlayerViewOffsetZ 
```lua
--- @type number
Read: cplayer_cameraservices.OldPlayerViewOffsetZ
Write: cplayer_cameraservices.OldPlayerViewOffsetZ = value
```
## Parent (Read-Only)
```lua
--- @type CPlayerPawnComponent
Read: cplayer_cameraservices.Parent
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