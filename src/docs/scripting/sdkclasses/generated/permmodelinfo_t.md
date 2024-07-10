---
title: PermModelInfo_t
index: true
order: 2
category:
  - Guide
---

# PermModelInfo_t

::: tabs
@tab Lua
# Constructor
```lua
PermModelInfo_t(ptr --[[ string ]])
```
# Properties
## Flags 
```lua
@type number
Read: permmodelinfo_t.Flags
Write: permmodelinfo_t.Flags = value
```
## HullMin 
```lua
@type Vector
Read: permmodelinfo_t.HullMin
Write: permmodelinfo_t.HullMin = value
```
## HullMax 
```lua
@type Vector
Read: permmodelinfo_t.HullMax
Write: permmodelinfo_t.HullMax = value
```
## ViewMin 
```lua
@type Vector
Read: permmodelinfo_t.ViewMin
Write: permmodelinfo_t.ViewMin = value
```
## ViewMax 
```lua
@type Vector
Read: permmodelinfo_t.ViewMax
Write: permmodelinfo_t.ViewMax = value
```
## Mass 
```lua
@type number
Read: permmodelinfo_t.Mass
Write: permmodelinfo_t.Mass = value
```
## EyePosition 
```lua
@type Vector
Read: permmodelinfo_t.EyePosition
Write: permmodelinfo_t.EyePosition = value
```
## MaxEyeDeflection 
```lua
@type number
Read: permmodelinfo_t.MaxEyeDeflection
Write: permmodelinfo_t.MaxEyeDeflection = value
```
## SurfaceProperty 
```lua
@type string
Read: permmodelinfo_t.SurfaceProperty
Write: permmodelinfo_t.SurfaceProperty = value
```
## KeyValueText 
```lua
@type string
Read: permmodelinfo_t.KeyValueText
Write: permmodelinfo_t.KeyValueText = value
```
# Functions
## ToPtr
```lua
@returns string
permmodelinfo_t:ToPtr()
```
## IsValid
```lua
@returns bool
permmodelinfo_t:IsValid()
```

:::