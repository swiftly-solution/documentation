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
--- @param ptr string
CAimCameraUpdateNode(ptr)
```
# Properties
## ParameterPosition (Read-Only)
```lua
--- @type CAnimParamHandle
Read: caimcameraupdatenode.ParameterPosition
```
## ParameterOrientation (Read-Only)
```lua
--- @type CAnimParamHandle
Read: caimcameraupdatenode.ParameterOrientation
```
## ParameterSpineRotationWeight (Read-Only)
```lua
--- @type CAnimParamHandle
Read: caimcameraupdatenode.ParameterSpineRotationWeight
```
## ParameterPelvisOffset (Read-Only)
```lua
--- @type CAnimParamHandle
Read: caimcameraupdatenode.ParameterPelvisOffset
```
## ParameterUseIK (Read-Only)
```lua
--- @type CAnimParamHandle
Read: caimcameraupdatenode.ParameterUseIK
```
## ParameterCameraOnly (Read-Only)
```lua
--- @type CAnimParamHandle
Read: caimcameraupdatenode.ParameterCameraOnly
```
## ParameterWeaponDepenetrationDistance (Read-Only)
```lua
--- @type CAnimParamHandle
Read: caimcameraupdatenode.ParameterWeaponDepenetrationDistance
```
## ParameterWeaponDepenetrationDelta (Read-Only)
```lua
--- @type CAnimParamHandle
Read: caimcameraupdatenode.ParameterWeaponDepenetrationDelta
```
## ParameterCameraClearanceDistance (Read-Only)
```lua
--- @type CAnimParamHandle
Read: caimcameraupdatenode.ParameterCameraClearanceDistance
```
## OpFixedSettings (Read-Only)
```lua
--- @type AimCameraOpFixedSettings_t
Read: caimcameraupdatenode.OpFixedSettings
```
## Parent (Read-Only)
```lua
--- @type CUnaryUpdateNode
Read: caimcameraupdatenode.Parent
```
# Functions
## ToPtr
```lua
--- @return string
caimcameraupdatenode:ToPtr()
```
## IsValid
```lua
--- @return bool
caimcameraupdatenode:IsValid()
```

:::