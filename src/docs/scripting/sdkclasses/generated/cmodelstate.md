---
title: CModelState
index: true
order: 2
category:
  - Guide
---

# CModelState

::: tabs
@tab Lua
# Constructor
```lua
CModelState(ptr)
```
# Properties
## ModelName 
```lua
--- @type string
Read: cmodelstate.ModelName
Write: cmodelstate.ModelName = value
```
## ClientClothCreationSuppressed 
```lua
--- @type boolean
Read: cmodelstate.ClientClothCreationSuppressed
Write: cmodelstate.ClientClothCreationSuppressed = value
```
## MeshGroupMask 
```lua
--- @type number
Read: cmodelstate.MeshGroupMask
Write: cmodelstate.MeshGroupMask = value
```
## IdealMotionType 
```lua
--- @type number
Read: cmodelstate.IdealMotionType
Write: cmodelstate.IdealMotionType = value
```
## ForceLOD 
```lua
--- @type number
Read: cmodelstate.ForceLOD
Write: cmodelstate.ForceLOD = value
```
## ClothUpdateFlags 
```lua
--- @type number
Read: cmodelstate.ClothUpdateFlags
Write: cmodelstate.ClothUpdateFlags = value
```
# Functions
## ToPtr
```lua
@returns string
cmodelstate:ToPtr()
```
## IsValid
```lua
@returns bool
cmodelstate:IsValid()
```

:::