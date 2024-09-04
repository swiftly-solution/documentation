---
title: ModelBoneFlexDriver_t
index: true
order: 2
category:
  - Guide
---

# ModelBoneFlexDriver_t

::: tabs
@tab Lua
# Constructor
```lua
ModelBoneFlexDriver_t(ptr --[[ string ]])
```
# Properties
## BoneName 
```lua
@type string
Read: modelboneflexdriver_t.BoneName
Write: modelboneflexdriver_t.BoneName = value
```
## BoneNameToken 
```lua
@type number
Read: modelboneflexdriver_t.BoneNameToken
Write: modelboneflexdriver_t.BoneNameToken = value
```
## Controls (Read-Only)
```lua
@type table
Read: modelboneflexdriver_t.Controls
```
# Functions
## ToPtr
```lua
@returns string
modelboneflexdriver_t:ToPtr()
```
## IsValid
```lua
@returns bool
modelboneflexdriver_t:IsValid()
```

:::