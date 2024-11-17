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
--- @param ptr string
CEntityInstance(ptr)
```
# Properties
## PrivateVScripts 
```lua
--- @type string
Read: centityinstance.PrivateVScripts
Write: centityinstance.PrivateVScripts = value
```
## Entity (Read-Only)
```lua
--- @type CEntityIdentity
Read: centityinstance.Entity
```
## CScriptComponent (Read-Only)
```lua
--- @type CScriptComponent
Read: centityinstance.CScriptComponent
```
## VisibleinPVS 
```lua
--- @type boolean
Read: centityinstance.VisibleinPVS
Write: centityinstance.VisibleinPVS = value
```
# Functions
## ToPtr
```lua
--- @return string
centityinstance:ToPtr()
```
## IsValid
```lua
--- @return bool
centityinstance:IsValid()
```

:::