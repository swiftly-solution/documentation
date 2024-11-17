---
title: CConstantForceController
index: true
order: 2
category:
  - Guide
---

# CConstantForceController

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CConstantForceController(ptr)
```
# Properties
## Linear 
```lua
--- @type Vector
Read: cconstantforcecontroller.Linear
Write: cconstantforcecontroller.Linear = value
```
## Angular 
```lua
--- @type Vector
Read: cconstantforcecontroller.Angular
Write: cconstantforcecontroller.Angular = value
```
## LinearSave 
```lua
--- @type Vector
Read: cconstantforcecontroller.LinearSave
Write: cconstantforcecontroller.LinearSave = value
```
## AngularSave 
```lua
--- @type Vector
Read: cconstantforcecontroller.AngularSave
Write: cconstantforcecontroller.AngularSave = value
```
# Functions
## ToPtr
```lua
--- @return string
cconstantforcecontroller:ToPtr()
```
## IsValid
```lua
--- @return bool
cconstantforcecontroller:IsValid()
```

:::