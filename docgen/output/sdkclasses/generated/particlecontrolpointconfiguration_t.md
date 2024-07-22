---
title: ParticleControlPointConfiguration_t
index: true
order: 2
category:
  - Guide
---

# ParticleControlPointConfiguration_t

::: tabs
@tab Lua
# Constructor
```lua
ParticleControlPointConfiguration_t(ptr --[[ string ]])
```
# Properties
## Name 
```lua
@type string
Read: particlecontrolpointconfiguration_t.Name
Write: particlecontrolpointconfiguration_t.Name = value
```
## Drivers 
```lua
@type table
Read: particlecontrolpointconfiguration_t.Drivers
Write: particlecontrolpointconfiguration_t.Drivers = value
```
## PreviewState (Read-Only)
```lua
@type ParticlePreviewState_t
Read: particlecontrolpointconfiguration_t.PreviewState
```
# Functions
## ToPtr
```lua
@returns string
particlecontrolpointconfiguration_t:ToPtr()
```
## IsValid
```lua
@returns bool
particlecontrolpointconfiguration_t:IsValid()
```

:::