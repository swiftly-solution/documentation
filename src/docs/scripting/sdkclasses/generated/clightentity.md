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
## CLightComponent (Read-Only)
```lua
@type CLightComponent
Read: clightentity.CLightComponent
```
## Parent 
```lua
@type CBaseModelEntity
Read: clightentity.Parent
Write: clightentity.Parent = value
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