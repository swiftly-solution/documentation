---
title: CAttributeManager
index: true
order: 2
category:
  - Guide
---

# CAttributeManager

::: tabs
@tab Lua
# Constructor
```lua
CAttributeManager(ptr --[[ string ]])
```
# Properties
## ReapplyProvisionParity 
```lua
@type number
Read: cattributemanager.ReapplyProvisionParity
Write: cattributemanager.ReapplyProvisionParity = value
```
## Outer (Read-Only)
```lua
@type CBaseEntity
Read: cattributemanager.Outer
```
## PreventLoopback 
```lua
@type boolean
Read: cattributemanager.PreventLoopback
Write: cattributemanager.PreventLoopback = value
```
## ProviderType 
```lua
@type number
Read: cattributemanager.ProviderType
Write: cattributemanager.ProviderType = value
```
# Functions
## ToPtr
```lua
@returns string
cattributemanager:ToPtr()
```
## IsValid
```lua
@returns bool
cattributemanager:IsValid()
```

:::