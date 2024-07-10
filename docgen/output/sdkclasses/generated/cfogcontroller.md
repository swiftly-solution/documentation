---
title: CFogController
index: true
order: 2
category:
  - Guide
---

# CFogController

::: tabs
@tab Lua
# Constructor
```lua
CFogController(ptr --[[ string ]])
```
# Properties
## Fog 
```lua
@type fogparams_t
Read: cfogcontroller.Fog
Write: cfogcontroller.Fog = value
```
## UseAngles 
```lua
@type boolean
Read: cfogcontroller.UseAngles
Write: cfogcontroller.UseAngles = value
```
## ChangedVariables 
```lua
@type number
Read: cfogcontroller.ChangedVariables
Write: cfogcontroller.ChangedVariables = value
```
## Parent 
```lua
@type CBaseEntity
Read: cfogcontroller.Parent
Write: cfogcontroller.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cfogcontroller:ToPtr()
```
## IsValid
```lua
@returns bool
cfogcontroller:IsValid()
```

:::