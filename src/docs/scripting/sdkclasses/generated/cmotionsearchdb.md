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
--- @param ptr string
CMotionSearchDB(ptr)
```
# Properties
## RootNode (Read-Only)
```lua
--- @type CMotionSearchNode
Read: cmotionsearchdb.RootNode
```
## ResidualQuantizer (Read-Only)
```lua
--- @type CProductQuantizer
Read: cmotionsearchdb.ResidualQuantizer
```
## CodeIndices (Read-Only)
```lua
--- @type table
Read: cmotionsearchdb.CodeIndices
```
# Functions
## ToPtr
```lua
--- @return string
cmotionsearchdb:ToPtr()
```
## IsValid
```lua
--- @return bool
cmotionsearchdb:IsValid()
```

:::