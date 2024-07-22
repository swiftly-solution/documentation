---
title: IKTargetSettings_t
index: true
order: 2
category:
  - Guide
---

# IKTargetSettings_t

::: tabs
@tab Lua
# Constructor
```lua
IKTargetSettings_t(ptr --[[ string ]])
```
# Properties
## TargetSource 
```lua
@type number
Read: iktargetsettings_t.TargetSource
Write: iktargetsettings_t.TargetSource = value
```
## Bone (Read-Only)
```lua
@type IKBoneNameAndIndex_t
Read: iktargetsettings_t.Bone
```
## AnimgraphParameterNamePosition (Read-Only)
```lua
@type AnimParamID
Read: iktargetsettings_t.AnimgraphParameterNamePosition
```
## AnimgraphParameterNameOrientation (Read-Only)
```lua
@type AnimParamID
Read: iktargetsettings_t.AnimgraphParameterNameOrientation
```
## TargetCoordSystem 
```lua
@type number
Read: iktargetsettings_t.TargetCoordSystem
Write: iktargetsettings_t.TargetCoordSystem = value
```
# Functions
## ToPtr
```lua
@returns string
iktargetsettings_t:ToPtr()
```
## IsValid
```lua
@returns bool
iktargetsettings_t:IsValid()
```

:::