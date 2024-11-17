---
title: CEnvWind
index: true
order: 2
category:
  - Guide
---

# CEnvWind

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CEnvWind(ptr)
```
# Properties
## EnvWindShared (Read-Only)
```lua
--- @type CEnvWindShared
Read: cenvwind.EnvWindShared
```
## Parent (Read-Only)
```lua
--- @type CBaseEntity
Read: cenvwind.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cenvwind:ToPtr()
```
## IsValid
```lua
--- @return bool
cenvwind:IsValid()
```

:::