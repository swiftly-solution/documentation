---
title: FeMorphLayerDepr_t
index: true
order: 2
category:
  - Guide
---

# FeMorphLayerDepr_t

::: tabs
@tab Lua
# Constructor
```lua
FeMorphLayerDepr_t(ptr)
```
# Properties
## Name 
```lua
--- @type string
Read: femorphlayerdepr_t.Name
Write: femorphlayerdepr_t.Name = value
```
## NameHash 
```lua
--- @type number
Read: femorphlayerdepr_t.NameHash
Write: femorphlayerdepr_t.NameHash = value
```
## Nodes (Read-Only)
```lua
--- @type table
Read: femorphlayerdepr_t.Nodes
```
## InitPos (Read-Only)
```lua
--- @type table
Read: femorphlayerdepr_t.InitPos
```
## Gravity (Read-Only)
```lua
--- @type table
Read: femorphlayerdepr_t.Gravity
```
## GoalStrength (Read-Only)
```lua
--- @type table
Read: femorphlayerdepr_t.GoalStrength
```
## GoalDamping (Read-Only)
```lua
--- @type table
Read: femorphlayerdepr_t.GoalDamping
```
## Flags 
```lua
--- @type number
Read: femorphlayerdepr_t.Flags
Write: femorphlayerdepr_t.Flags = value
```
# Functions
## ToPtr
```lua
@returns string
femorphlayerdepr_t:ToPtr()
```
## IsValid
```lua
@returns bool
femorphlayerdepr_t:IsValid()
```

:::