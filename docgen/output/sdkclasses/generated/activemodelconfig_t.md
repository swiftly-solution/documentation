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
## Handle 
```lua
@type ModelConfigHandle_t
Read: activemodelconfig_t.Handle
Write: activemodelconfig_t.Handle = value
```
## Name 
```lua
@type string
Read: activemodelconfig_t.Name
Write: activemodelconfig_t.Name = value
```
## AssociatedEntities 
```lua
@type table
Read: activemodelconfig_t.AssociatedEntities
Write: activemodelconfig_t.AssociatedEntities = value
```
## AssociatedEntityNames 
```lua
@type table
Read: activemodelconfig_t.AssociatedEntityNames
Write: activemodelconfig_t.AssociatedEntityNames = value
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