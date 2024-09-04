---
title: CLightEntity
index: true
order: 2
category:
  - Guide
---

# CLightEntity

::: tabs
@tab Lua
# Constructor
```lua
CLightEntity(ptr --[[ string ]])
```
# Properties
## CLightComponent 
```lua
@type CLightComponent
Read: clightentity.CLightComponent
Write: clightentity.CLightComponent = value
```
## Parent (Read-Only)
```lua
@type CBaseModelEntity
Read: clightentity.Parent
```
# Functions
## ToPtr
```lua
@returns string
clightentity:ToPtr()
```
## IsValid
```lua
@returns bool
clightentity:IsValid()
```

:::