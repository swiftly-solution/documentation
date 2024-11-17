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
--- @param ptr string
CLightEntity(ptr)
```
# Properties
## CLightComponent (Read-Only)
```lua
--- @type CLightComponent
Read: clightentity.CLightComponent
```
## Parent (Read-Only)
```lua
--- @type CBaseModelEntity
Read: clightentity.Parent
```
# Functions
## ToPtr
```lua
--- @return string
clightentity:ToPtr()
```
## IsValid
```lua
--- @return bool
clightentity:IsValid()
```

:::