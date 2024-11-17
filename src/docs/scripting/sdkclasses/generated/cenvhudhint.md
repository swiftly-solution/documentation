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
--- @param ptr string
CEnvHudHint(ptr)
```
# Properties
## Message 
```lua
--- @type string
Read: cenvhudhint.Message
Write: cenvhudhint.Message = value
```
## Parent (Read-Only)
```lua
--- @type CPointEntity
Read: cenvhudhint.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cenvhudhint:ToPtr()
```
## IsValid
```lua
--- @return bool
cenvhudhint:IsValid()
```

:::