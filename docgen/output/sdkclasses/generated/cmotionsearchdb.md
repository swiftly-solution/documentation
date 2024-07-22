---
title: CMotionSearchDB
index: true
order: 2
category:
  - Guide
---

# CMotionSearchDB

::: tabs
@tab Lua
# Constructor
```lua
CMotionSearchDB(ptr --[[ string ]])
```
# Properties
## RootNode (Read-Only)
```lua
@type CMotionSearchNode
Read: cmotionsearchdb.RootNode
```
## ResidualQuantizer (Read-Only)
```lua
@type CProductQuantizer
Read: cmotionsearchdb.ResidualQuantizer
```
## CodeIndices 
```lua
@type table
Read: cmotionsearchdb.CodeIndices
Write: cmotionsearchdb.CodeIndices = value
```
# Functions
## ToPtr
```lua
@returns string
cmotionsearchdb:ToPtr()
```
## IsValid
```lua
@returns bool
cmotionsearchdb:IsValid()
```

:::