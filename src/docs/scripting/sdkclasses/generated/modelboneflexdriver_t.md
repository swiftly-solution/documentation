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
--- @param ptr string
ModelBoneFlexDriver_t(ptr)
```
# Properties
## BoneName 
```lua
--- @type string
Read: modelboneflexdriver_t.BoneName
Write: modelboneflexdriver_t.BoneName = value
```
## BoneNameToken 
```lua
--- @type number
Read: modelboneflexdriver_t.BoneNameToken
Write: modelboneflexdriver_t.BoneNameToken = value
```
## Controls (Read-Only)
```lua
--- @type table
Read: modelboneflexdriver_t.Controls
```
# Functions
## ToPtr
```lua
--- @return string
modelboneflexdriver_t:ToPtr()
```
## IsValid
```lua
--- @return bool
modelboneflexdriver_t:IsValid()
```

:::