---
title: CRagdollManager
index: true
order: 2
category:
  - Guide
---

# CRagdollManager

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CRagdollManager(ptr)
```
# Properties
## CurrentMaxRagdollCount 
```lua
--- @type number
Read: cragdollmanager.CurrentMaxRagdollCount
Write: cragdollmanager.CurrentMaxRagdollCount = value
```
## MaxRagdollCount 
```lua
--- @type number
Read: cragdollmanager.MaxRagdollCount
Write: cragdollmanager.MaxRagdollCount = value
```
## SaveImportant 
```lua
--- @type boolean
Read: cragdollmanager.SaveImportant
Write: cragdollmanager.SaveImportant = value
```
## CanTakeDamage 
```lua
--- @type boolean
Read: cragdollmanager.CanTakeDamage
Write: cragdollmanager.CanTakeDamage = value
```
## Parent (Read-Only)
```lua
--- @type CBaseEntity
Read: cragdollmanager.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cragdollmanager:ToPtr()
```
## IsValid
```lua
--- @return bool
cragdollmanager:IsValid()
```

:::