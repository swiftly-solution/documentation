---
title: CEnvHudHint
index: true
order: 2
category:
  - Guide
---

# CEnvHudHint

::: tabs
@tab Lua
# Constructor
```lua
CEnvHudHint(ptr --[[ string ]])
```
# Properties
## Message 
```lua
@type string
Read: cenvhudhint.Message
Write: cenvhudhint.Message = value
```
## Parent 
```lua
@type CPointEntity
Read: cenvhudhint.Parent
Write: cenvhudhint.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cenvhudhint:ToPtr()
```
## IsValid
```lua
@returns bool
cenvhudhint:IsValid()
```

:::