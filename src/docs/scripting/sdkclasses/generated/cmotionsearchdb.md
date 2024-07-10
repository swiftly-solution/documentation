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
## RootNode 
```lua
@type CMotionSearchNode
Read: cmotionsearchdb.RootNode
Write: cmotionsearchdb.RootNode = value
```
## ResidualQuantizer 
```lua
@type CProductQuantizer
Read: cmotionsearchdb.ResidualQuantizer
Write: cmotionsearchdb.ResidualQuantizer = value
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