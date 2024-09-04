---
title: CAimCameraUpdateNode
index: true
order: 2
category:
  - Guide
---

# CAimCameraUpdateNode

::: tabs
@tab Lua
# Constructor
```lua
CAimCameraUpdateNode(ptr --[[ string ]])
```
# Properties
## ParameterPosition (Read-Only)
```lua
@type CAnimParamHandle
Read: caimcameraupdatenode.ParameterPosition
```
## ParameterOrientation (Read-Only)
```lua
@type CAnimParamHandle
Read: caimcameraupdatenode.ParameterOrientation
```
## ParameterSpineRotationWeight (Read-Only)
```lua
@type CAnimParamHandle
Read: caimcameraupdatenode.ParameterSpineRotationWeight
```
## ParameterPelvisOffset (Read-Only)
```lua
@type CAnimParamHandle
Read: caimcameraupdatenode.ParameterPelvisOffset
```
## ParameterUseIK (Read-Only)
```lua
@type CAnimParamHandle
Read: caimcameraupdatenode.ParameterUseIK
```
## ParameterWeaponDepenetrationDistance (Read-Only)
```lua
@type CAnimParamHandle
Read: caimcameraupdatenode.ParameterWeaponDepenetrationDistance
```
## ParameterCameraClearanceDistance (Read-Only)
```lua
@type CAnimParamHandle
Read: caimcameraupdatenode.ParameterCameraClearanceDistance
```
## OpFixedSettings (Read-Only)
```lua
@type AimCameraOpFixedSettings_t
Read: caimcameraupdatenode.OpFixedSettings
```
## Parent (Read-Only)
```lua
@type CUnaryUpdateNode
Read: caimcameraupdatenode.Parent
```
# Functions
## ToPtr
```lua
@returns string
caimcameraupdatenode:ToPtr()
```
## IsValid
```lua
@returns bool
caimcameraupdatenode:IsValid()
```

:::