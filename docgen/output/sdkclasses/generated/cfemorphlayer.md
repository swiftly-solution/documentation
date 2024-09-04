---
title: CFeMorphLayer
index: true
order: 2
category:
  - Guide
---

# CFeMorphLayer

::: tabs
@tab Lua
# Constructor
```lua
CFeMorphLayer(ptr --[[ string ]])
```
# Properties
## Name 
```lua
@type string
Read: cfemorphlayer.Name
Write: cfemorphlayer.Name = value
```
## NameHash 
```lua
@type number
Read: cfemorphlayer.NameHash
Write: cfemorphlayer.NameHash = value
```
## Nodes (Read-Only)
```lua
@type table
Read: cfemorphlayer.Nodes
```
## InitPos (Read-Only)
```lua
@type table
Read: cfemorphlayer.InitPos
```
## Gravity (Read-Only)
```lua
@type table
Read: cfemorphlayer.Gravity
```
## GoalStrength (Read-Only)
```lua
@type table
Read: cfemorphlayer.GoalStrength
```
## GoalDamping (Read-Only)
```lua
@type table
Read: cfemorphlayer.GoalDamping
```
# Functions
## ToPtr
```lua
@returns string
cfemorphlayer:ToPtr()
```
## IsValid
```lua
@returns bool
cfemorphlayer:IsValid()
```

:::