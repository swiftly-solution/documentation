---
title: FeSpringIntegrator_t
index: true
order: 2
category:
  - Guide
---

# FeSpringIntegrator_t

::: tabs
@tab Lua
# Constructor
```lua
FeSpringIntegrator_t(ptr --[[ string ]])
```
# Properties
## Node 
```lua
@type table
Read: fespringintegrator_t.Node
Write: fespringintegrator_t.Node = value
```
## SpringRestLength 
```lua
@type number
Read: fespringintegrator_t.SpringRestLength
Write: fespringintegrator_t.SpringRestLength = value
```
## SpringConstant 
```lua
@type number
Read: fespringintegrator_t.SpringConstant
Write: fespringintegrator_t.SpringConstant = value
```
## SpringDamping 
```lua
@type number
Read: fespringintegrator_t.SpringDamping
Write: fespringintegrator_t.SpringDamping = value
```
## NodeWeight0 
```lua
@type number
Read: fespringintegrator_t.NodeWeight0
Write: fespringintegrator_t.NodeWeight0 = value
```
# Functions
## ToPtr
```lua
@returns string
fespringintegrator_t:ToPtr()
```
## IsValid
```lua
@returns bool
fespringintegrator_t:IsValid()
```

:::