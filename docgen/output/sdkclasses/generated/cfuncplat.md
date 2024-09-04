---
title: CFuncPlat
index: true
order: 2
category:
  - Guide
---

# CFuncPlat

::: tabs
@tab Lua
# Constructor
```lua
CFuncPlat(ptr --[[ string ]])
```
# Properties
## Noise 
```lua
@type string
Read: cfuncplat.Noise
Write: cfuncplat.Noise = value
```
## Parent (Read-Only)
```lua
@type CBasePlatTrain
Read: cfuncplat.Parent
```
# Functions
## ToPtr
```lua
@returns string
cfuncplat:ToPtr()
```
## IsValid
```lua
@returns bool
cfuncplat:IsValid()
```

:::