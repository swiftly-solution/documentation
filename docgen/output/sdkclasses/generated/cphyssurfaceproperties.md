---
title: CPhysSurfaceProperties
index: true
order: 2
category:
  - Guide
---

# CPhysSurfaceProperties

::: tabs
@tab Lua
# Constructor
```lua
CPhysSurfaceProperties(ptr --[[ string ]])
```
# Properties
## Name 
```lua
@type string
Read: cphyssurfaceproperties.Name
Write: cphyssurfaceproperties.Name = value
```
## NameHash 
```lua
@type number
Read: cphyssurfaceproperties.NameHash
Write: cphyssurfaceproperties.NameHash = value
```
## BaseNameHash 
```lua
@type number
Read: cphyssurfaceproperties.BaseNameHash
Write: cphyssurfaceproperties.BaseNameHash = value
```
## Hidden 
```lua
@type boolean
Read: cphyssurfaceproperties.Hidden
Write: cphyssurfaceproperties.Hidden = value
```
## Description 
```lua
@type string
Read: cphyssurfaceproperties.Description
Write: cphyssurfaceproperties.Description = value
```
## Physics (Read-Only)
```lua
@type CPhysSurfacePropertiesPhysics
Read: cphyssurfaceproperties.Physics
```
## AudioSounds (Read-Only)
```lua
@type CPhysSurfacePropertiesSoundNames
Read: cphyssurfaceproperties.AudioSounds
```
## AudioParams (Read-Only)
```lua
@type CPhysSurfacePropertiesAudio
Read: cphyssurfaceproperties.AudioParams
```
# Functions
## ToPtr
```lua
@returns string
cphyssurfaceproperties:ToPtr()
```
## IsValid
```lua
@returns bool
cphyssurfaceproperties:IsValid()
```

:::