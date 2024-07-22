---
title: CFeIndexedJiggleBone
index: true
order: 2
category:
  - Guide
---

# CFeIndexedJiggleBone

::: tabs
@tab Lua
# Constructor
```lua
CFeIndexedJiggleBone(ptr --[[ string ]])
```
# Properties
## Node 
```lua
@type number
Read: cfeindexedjigglebone.Node
Write: cfeindexedjigglebone.Node = value
```
## JiggleParent 
```lua
@type number
Read: cfeindexedjigglebone.JiggleParent
Write: cfeindexedjigglebone.JiggleParent = value
```
## JiggleBone (Read-Only)
```lua
@type CFeJiggleBone
Read: cfeindexedjigglebone.JiggleBone
```
# Functions
## ToPtr
```lua
@returns string
cfeindexedjigglebone:ToPtr()
```
## IsValid
```lua
@returns bool
cfeindexedjigglebone:IsValid()
```

:::