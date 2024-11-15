---
title: CMovementComponentUpdater
index: true
order: 2
category:
  - Guide
---

# CMovementComponentUpdater

::: tabs
@tab Lua
# Constructor
```lua
CMovementComponentUpdater(ptr)
```
# Properties
## FacingDamping (Read-Only)
```lua
--- @type CAnimInputDamping
Read: cmovementcomponentupdater.FacingDamping
```
## DefaultMotorIndex 
```lua
--- @type number
Read: cmovementcomponentupdater.DefaultMotorIndex
Write: cmovementcomponentupdater.DefaultMotorIndex = value
```
## DefaultRunSpeed 
```lua
--- @type number
Read: cmovementcomponentupdater.DefaultRunSpeed
Write: cmovementcomponentupdater.DefaultRunSpeed = value
```
## MoveVarsDisabled 
```lua
--- @type boolean
Read: cmovementcomponentupdater.MoveVarsDisabled
Write: cmovementcomponentupdater.MoveVarsDisabled = value
```
## NetworkPath 
```lua
--- @type boolean
Read: cmovementcomponentupdater.NetworkPath
Write: cmovementcomponentupdater.NetworkPath = value
```
## NetworkFacing 
```lua
--- @type boolean
Read: cmovementcomponentupdater.NetworkFacing
Write: cmovementcomponentupdater.NetworkFacing = value
```
## ParamHandles (Read-Only)
```lua
--- @type table
Read: cmovementcomponentupdater.ParamHandles
```
## Parent (Read-Only)
```lua
--- @type CAnimComponentUpdater
Read: cmovementcomponentupdater.Parent
```
# Functions
## ToPtr
```lua
@returns string
cmovementcomponentupdater:ToPtr()
```
## IsValid
```lua
@returns bool
cmovementcomponentupdater:IsValid()
```

:::