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
--- @param ptr string
ActiveModelConfig_t(ptr)
```
# Properties
## Handle (Read-Only)
```lua
--- @type ModelConfigHandle_t
Read: activemodelconfig_t.Handle
```
## Name 
```lua
--- @type string
Read: activemodelconfig_t.Name
Write: activemodelconfig_t.Name = value
```
## AssociatedEntityNames (Read-Only)
```lua
--- @type table
Read: activemodelconfig_t.AssociatedEntityNames
```
# Functions
## ToPtr
```lua
--- @return string
activemodelconfig_t:ToPtr()
```
## IsValid
```lua
--- @return bool
activemodelconfig_t:IsValid()
```

:::