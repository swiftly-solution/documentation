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
--- @param ptr string
FeSpringIntegrator_t(ptr)
```
# Properties
## Node 
```lua
--- @type table
Read: fespringintegrator_t.Node
Write: fespringintegrator_t.Node = value
```
## SpringRestLength 
```lua
--- @type number
Read: fespringintegrator_t.SpringRestLength
Write: fespringintegrator_t.SpringRestLength = value
```
## SpringConstant 
```lua
--- @type number
Read: fespringintegrator_t.SpringConstant
Write: fespringintegrator_t.SpringConstant = value
```
## SpringDamping 
```lua
--- @type number
Read: fespringintegrator_t.SpringDamping
Write: fespringintegrator_t.SpringDamping = value
```
## NodeWeight0 
```lua
--- @type number
Read: fespringintegrator_t.NodeWeight0
Write: fespringintegrator_t.NodeWeight0 = value
```
# Functions
## ToPtr
```lua
--- @return string
fespringintegrator_t:ToPtr()
```
## IsValid
```lua
--- @return bool
fespringintegrator_t:IsValid()
```

:::