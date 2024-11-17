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
--- @param ptr string
CFuncPlat(ptr)
```
# Properties
## Noise 
```lua
--- @type string
Read: cfuncplat.Noise
Write: cfuncplat.Noise = value
```
## Parent (Read-Only)
```lua
--- @type CBasePlatTrain
Read: cfuncplat.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cfuncplat:ToPtr()
```
## IsValid
```lua
--- @return bool
cfuncplat:IsValid()
```

:::