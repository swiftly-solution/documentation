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
CFogController(ptr)
```
# Properties
## Fog (Read-Only)
```lua
--- @type fogparams_t
Read: cfogcontroller.Fog
```
## UseAngles 
```lua
--- @type boolean
Read: cfogcontroller.UseAngles
Write: cfogcontroller.UseAngles = value
```
## ChangedVariables 
```lua
--- @type number
Read: cfogcontroller.ChangedVariables
Write: cfogcontroller.ChangedVariables = value
```
## Parent (Read-Only)
```lua
--- @type CBaseEntity
Read: cfogcontroller.Parent
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