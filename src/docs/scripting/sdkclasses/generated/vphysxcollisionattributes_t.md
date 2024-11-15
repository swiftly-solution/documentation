---
title: VPhysXCollisionAttributes_t
index: true
order: 2
category:
  - Guide
---

# VPhysXCollisionAttributes_t

::: tabs
@tab Lua
# Constructor
```lua
VPhysXCollisionAttributes_t(ptr)
```
# Properties
## CollisionGroup 
```lua
--- @type number
Read: vphysxcollisionattributes_t.CollisionGroup
Write: vphysxcollisionattributes_t.CollisionGroup = value
```
## InteractAs (Read-Only)
```lua
--- @type table
Read: vphysxcollisionattributes_t.InteractAs
```
## InteractWith (Read-Only)
```lua
--- @type table
Read: vphysxcollisionattributes_t.InteractWith
```
## InteractExclude (Read-Only)
```lua
--- @type table
Read: vphysxcollisionattributes_t.InteractExclude
```
## CollisionGroupString 
```lua
--- @type string
Read: vphysxcollisionattributes_t.CollisionGroupString
Write: vphysxcollisionattributes_t.CollisionGroupString = value
```
## InteractAsStrings (Read-Only)
```lua
--- @type table
Read: vphysxcollisionattributes_t.InteractAsStrings
```
## InteractWithStrings (Read-Only)
```lua
--- @type table
Read: vphysxcollisionattributes_t.InteractWithStrings
```
## InteractExcludeStrings (Read-Only)
```lua
--- @type table
Read: vphysxcollisionattributes_t.InteractExcludeStrings
```
# Functions
## ToPtr
```lua
@returns string
vphysxcollisionattributes_t:ToPtr()
```
## IsValid
```lua
@returns bool
vphysxcollisionattributes_t:IsValid()
```

:::