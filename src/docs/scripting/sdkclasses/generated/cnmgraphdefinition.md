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
## PersistentNodeIndices 
```lua
@type table
Read: cnmgraphdefinition.PersistentNodeIndices
Write: cnmgraphdefinition.PersistentNodeIndices = value
```
## RootNodeIdx 
```lua
@type number
Read: cnmgraphdefinition.RootNodeIdx
Write: cnmgraphdefinition.RootNodeIdx = value
```
## VirtualParameterNodeIndices 
```lua
@type table
Read: cnmgraphdefinition.VirtualParameterNodeIndices
Write: cnmgraphdefinition.VirtualParameterNodeIndices = value
```
## ChildGraphSlots 
```lua
@type table
Read: cnmgraphdefinition.ChildGraphSlots
Write: cnmgraphdefinition.ChildGraphSlots = value
```
## ExternalGraphSlots 
```lua
@type table
Read: cnmgraphdefinition.ExternalGraphSlots
Write: cnmgraphdefinition.ExternalGraphSlots = value
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