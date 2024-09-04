---
title: ActiveModelConfig_t
index: true
order: 2
category:
  - Guide
---

# ActiveModelConfig_t

::: tabs
@tab Lua
# Constructor
```lua
ActiveModelConfig_t(ptr --[[ string ]])
```
# Properties
## Handle (Read-Only)
```lua
@type ModelConfigHandle_t
Read: activemodelconfig_t.Handle
```
## Name 
```lua
@type string
Read: activemodelconfig_t.Name
Write: activemodelconfig_t.Name = value
```
## AssociatedEntities (Read-Only)
```lua
@type table
Read: activemodelconfig_t.AssociatedEntities
```
## AssociatedEntityNames (Read-Only)
```lua
@type table
Read: activemodelconfig_t.AssociatedEntityNames
```
# Functions
## ToPtr
```lua
@returns string
activemodelconfig_t:ToPtr()
```
## IsValid
```lua
@returns bool
activemodelconfig_t:IsValid()
```

:::