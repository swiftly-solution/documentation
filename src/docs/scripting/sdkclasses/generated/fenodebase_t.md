---
title: FeNodeBase_t
index: true
order: 2
category:
  - Guide
---

# FeNodeBase_t

::: tabs
@tab Lua
# Constructor
```lua
FeNodeBase_t(ptr)
```
# Properties
## Node 
```lua
--- @type number
Read: fenodebase_t.Node
Write: fenodebase_t.Node = value
```
## Dummy 
```lua
--- @type table
Read: fenodebase_t.Dummy
Write: fenodebase_t.Dummy = value
```
## NodeX0 
```lua
--- @type number
Read: fenodebase_t.NodeX0
Write: fenodebase_t.NodeX0 = value
```
## NodeX1 
```lua
--- @type number
Read: fenodebase_t.NodeX1
Write: fenodebase_t.NodeX1 = value
```
## NodeY0 
```lua
--- @type number
Read: fenodebase_t.NodeY0
Write: fenodebase_t.NodeY0 = value
```
## NodeY1 
```lua
--- @type number
Read: fenodebase_t.NodeY1
Write: fenodebase_t.NodeY1 = value
```
# Functions
## ToPtr
```lua
@returns string
fenodebase_t:ToPtr()
```
## IsValid
```lua
@returns bool
fenodebase_t:IsValid()
```

:::