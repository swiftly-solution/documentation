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
## Physics 
```lua
@type CPhysSurfacePropertiesPhysics
Read: cphyssurfaceproperties.Physics
Write: cphyssurfaceproperties.Physics = value
```
## AudioSounds 
```lua
@type CPhysSurfacePropertiesSoundNames
Read: cphyssurfaceproperties.AudioSounds
Write: cphyssurfaceproperties.AudioSounds = value
```
## AudioParams 
```lua
@type CPhysSurfacePropertiesAudio
Read: cphyssurfaceproperties.AudioParams
Write: cphyssurfaceproperties.AudioParams = value
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