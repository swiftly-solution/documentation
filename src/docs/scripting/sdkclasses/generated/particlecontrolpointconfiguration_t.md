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
--- @param ptr string
ParticleControlPointConfiguration_t(ptr)
```
# Properties
## Name 
```lua
--- @type string
Read: particlecontrolpointconfiguration_t.Name
Write: particlecontrolpointconfiguration_t.Name = value
```
## Drivers (Read-Only)
```lua
--- @type table
Read: particlecontrolpointconfiguration_t.Drivers
```
## PreviewState (Read-Only)
```lua
--- @type ParticlePreviewState_t
Read: particlecontrolpointconfiguration_t.PreviewState
```
# Functions
## ToPtr
```lua
--- @return string
particlecontrolpointconfiguration_t:ToPtr()
```
## IsValid
```lua
--- @return bool
particlecontrolpointconfiguration_t:IsValid()
```

:::