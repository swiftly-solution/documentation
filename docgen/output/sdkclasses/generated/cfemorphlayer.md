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
## Nodes 
```lua
@type table
Read: cfemorphlayer.Nodes
Write: cfemorphlayer.Nodes = value
```
## InitPos 
```lua
@type table
Read: cfemorphlayer.InitPos
Write: cfemorphlayer.InitPos = value
```
## Gravity 
```lua
@type table
Read: cfemorphlayer.Gravity
Write: cfemorphlayer.Gravity = value
```
## GoalStrength 
```lua
@type table
Read: cfemorphlayer.GoalStrength
Write: cfemorphlayer.GoalStrength = value
```
## GoalDamping 
```lua
@type table
Read: cfemorphlayer.GoalDamping
Write: cfemorphlayer.GoalDamping = value
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