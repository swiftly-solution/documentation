---
title: CFogVolume
index: true
order: 2
category:
  - Guide
---

# CFogVolume

::: tabs
@tab Lua
# Constructor
```lua
CFogVolume(ptr)
```
# Properties
## FogName 
```lua
--- @type string
Read: cfogvolume.FogName
Write: cfogvolume.FogName = value
```
## PostProcessName 
```lua
--- @type string
Read: cfogvolume.PostProcessName
Write: cfogvolume.PostProcessName = value
```
## ColorCorrectionName 
```lua
--- @type string
Read: cfogvolume.ColorCorrectionName
Write: cfogvolume.ColorCorrectionName = value
```
## Disabled 
```lua
--- @type boolean
Read: cfogvolume.Disabled
Write: cfogvolume.Disabled = value
```
## InFogVolumesList 
```lua
--- @type boolean
Read: cfogvolume.InFogVolumesList
Write: cfogvolume.InFogVolumesList = value
```
## Parent (Read-Only)
```lua
--- @type CServerOnlyModelEntity
Read: cfogvolume.Parent
```
# Functions
## ToPtr
```lua
@returns string
cfogvolume:ToPtr()
```
## IsValid
```lua
@returns bool
cfogvolume:IsValid()
```

:::