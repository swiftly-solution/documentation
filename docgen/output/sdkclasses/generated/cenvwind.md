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
CEnvWind(ptr --[[ string ]])
```
# Properties
## EnvWindShared (Read-Only)
```lua
@type CEnvWindShared
Read: cenvwind.EnvWindShared
```
## Parent 
```lua
@type CBaseEntity
Read: cenvwind.Parent
Write: cenvwind.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cenvwind:ToPtr()
```
## IsValid
```lua
@returns bool
cenvwind:IsValid()
```

:::