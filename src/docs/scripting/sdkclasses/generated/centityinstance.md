---
title: CEntityInstance
index: true
order: 2
category:
  - Guide
---

# CEntityInstance

::: tabs
@tab Lua
# Constructor
```lua
CEntityInstance(ptr --[[ string ]])
```
# Properties
## PrivateVScripts 
```lua
@type string
Read: centityinstance.PrivateVScripts
Write: centityinstance.PrivateVScripts = value
```
## Entity 
```lua
@type CEntityIdentity
Read: centityinstance.Entity
Write: centityinstance.Entity = value
```
## CScriptComponent 
```lua
@type CScriptComponent
Read: centityinstance.CScriptComponent
Write: centityinstance.CScriptComponent = value
```
## VisibleinPVS 
```lua
@type boolean
Read: centityinstance.VisibleinPVS
Write: centityinstance.VisibleinPVS = value
```
# Functions
## ToPtr
```lua
@returns string
centityinstance:ToPtr()
```
## IsValid
```lua
@returns bool
centityinstance:IsValid()
```

:::