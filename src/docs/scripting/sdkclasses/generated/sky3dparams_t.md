---
title: sky3dparams_t
index: true
order: 2
category:
  - Guide
---

# sky3dparams_t

::: tabs
@tab Lua
# Constructor
```lua
sky3dparams_t(ptr --[[ string ]])
```
# Properties
## Scale 
```lua
@type number
Read: sky3dparams_t.Scale
Write: sky3dparams_t.Scale = value
```
## Origin 
```lua
@type Vector
Read: sky3dparams_t.Origin
Write: sky3dparams_t.Origin = value
```
## Clip3DSkyBoxNearToWorldFar 
```lua
@type boolean
Read: sky3dparams_t.Clip3DSkyBoxNearToWorldFar
Write: sky3dparams_t.Clip3DSkyBoxNearToWorldFar = value
```
## Clip3DSkyBoxNearToWorldFarOffset 
```lua
@type number
Read: sky3dparams_t.Clip3DSkyBoxNearToWorldFarOffset
Write: sky3dparams_t.Clip3DSkyBoxNearToWorldFarOffset = value
```
## Fog 
```lua
@type fogparams_t
Read: sky3dparams_t.Fog
Write: sky3dparams_t.Fog = value
```
## WorldGroupID 
```lua
@type string
Read: sky3dparams_t.WorldGroupID
Write: sky3dparams_t.WorldGroupID = value
```
# Functions
## ToPtr
```lua
@returns string
sky3dparams_t:ToPtr()
```
## IsValid
```lua
@returns bool
sky3dparams_t:IsValid()
```

:::