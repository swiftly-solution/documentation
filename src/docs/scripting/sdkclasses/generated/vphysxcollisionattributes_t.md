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
VPhysXCollisionAttributes_t(ptr --[[ string ]])
```
# Properties
## CollisionGroup 
```lua
@type number
Read: vphysxcollisionattributes_t.CollisionGroup
Write: vphysxcollisionattributes_t.CollisionGroup = value
```
## InteractAs 
```lua
@type table
Read: vphysxcollisionattributes_t.InteractAs
Write: vphysxcollisionattributes_t.InteractAs = value
```
## InteractWith 
```lua
@type table
Read: vphysxcollisionattributes_t.InteractWith
Write: vphysxcollisionattributes_t.InteractWith = value
```
## InteractExclude 
```lua
@type table
Read: vphysxcollisionattributes_t.InteractExclude
Write: vphysxcollisionattributes_t.InteractExclude = value
```
## CollisionGroupString 
```lua
@type string
Read: vphysxcollisionattributes_t.CollisionGroupString
Write: vphysxcollisionattributes_t.CollisionGroupString = value
```
## InteractAsStrings 
```lua
@type table
Read: vphysxcollisionattributes_t.InteractAsStrings
Write: vphysxcollisionattributes_t.InteractAsStrings = value
```
## InteractWithStrings 
```lua
@type table
Read: vphysxcollisionattributes_t.InteractWithStrings
Write: vphysxcollisionattributes_t.InteractWithStrings = value
```
## InteractExcludeStrings 
```lua
@type table
Read: vphysxcollisionattributes_t.InteractExcludeStrings
Write: vphysxcollisionattributes_t.InteractExcludeStrings = value
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