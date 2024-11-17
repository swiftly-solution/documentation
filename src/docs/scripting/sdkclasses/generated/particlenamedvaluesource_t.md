---
title: ParticleNamedValueSource_t
index: true
order: 2
category:
  - Guide
---

# ParticleNamedValueSource_t

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
ParticleNamedValueSource_t(ptr)
```
# Properties
## Name 
```lua
--- @type string
Read: particlenamedvaluesource_t.Name
Write: particlenamedvaluesource_t.Name = value
```
## IsPublic 
```lua
--- @type boolean
Read: particlenamedvaluesource_t.IsPublic
Write: particlenamedvaluesource_t.IsPublic = value
```
## ValueType 
```lua
--- @type PulseValueType_t
Read: particlenamedvaluesource_t.ValueType
Write: particlenamedvaluesource_t.ValueType = value
```
## DefaultConfig (Read-Only)
```lua
--- @type ParticleNamedValueConfiguration_t
Read: particlenamedvaluesource_t.DefaultConfig
```
## NamedConfigs (Read-Only)
```lua
--- @type table
Read: particlenamedvaluesource_t.NamedConfigs
```
# Functions
## ToPtr
```lua
--- @return string
particlenamedvaluesource_t:ToPtr()
```
## IsValid
```lua
--- @return bool
particlenamedvaluesource_t:IsValid()
```

:::