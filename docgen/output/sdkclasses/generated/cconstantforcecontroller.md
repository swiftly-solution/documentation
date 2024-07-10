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
CConstantForceController(ptr --[[ string ]])
```
# Properties
## Linear 
```lua
@type Vector
Read: cconstantforcecontroller.Linear
Write: cconstantforcecontroller.Linear = value
```
## Angular 
```lua
@type Vector
Read: cconstantforcecontroller.Angular
Write: cconstantforcecontroller.Angular = value
```
## LinearSave 
```lua
@type Vector
Read: cconstantforcecontroller.LinearSave
Write: cconstantforcecontroller.LinearSave = value
```
## AngularSave 
```lua
@type Vector
Read: cconstantforcecontroller.AngularSave
Write: cconstantforcecontroller.AngularSave = value
```
# Functions
## ToPtr
```lua
@returns string
cconstantforcecontroller:ToPtr()
```
## IsValid
```lua
@returns bool
cconstantforcecontroller:IsValid()
```

:::