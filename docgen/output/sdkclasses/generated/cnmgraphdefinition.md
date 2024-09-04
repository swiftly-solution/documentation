---
title: CNmGraphDefinition
index: true
order: 2
category:
  - Guide
---

# CNmGraphDefinition

::: tabs
@tab Lua
# Constructor
```lua
CNmGraphDefinition(ptr --[[ string ]])
```
# Properties
## PersistentNodeIndices (Read-Only)
```lua
@type table
Read: cnmgraphdefinition.PersistentNodeIndices
```
## RootNodeIdx 
```lua
@type number
Read: cnmgraphdefinition.RootNodeIdx
Write: cnmgraphdefinition.RootNodeIdx = value
```
## VirtualParameterNodeIndices (Read-Only)
```lua
@type table
Read: cnmgraphdefinition.VirtualParameterNodeIndices
```
## ChildGraphSlots (Read-Only)
```lua
@type table
Read: cnmgraphdefinition.ChildGraphSlots
```
## ExternalGraphSlots (Read-Only)
```lua
@type table
Read: cnmgraphdefinition.ExternalGraphSlots
```
# Functions
## ToPtr
```lua
@returns string
cnmgraphdefinition:ToPtr()
```
## IsValid
```lua
@returns bool
cnmgraphdefinition:IsValid()
```

:::