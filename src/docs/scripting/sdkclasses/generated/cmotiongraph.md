---
title: CMotionGraph
index: true
order: 2
category:
  - Guide
---

# CMotionGraph

::: tabs
@tab Lua
# Constructor
```lua
CMotionGraph(ptr)
```
# Properties
## ParamSpans (Read-Only)
```lua
--- @type CParamSpanUpdater
Read: cmotiongraph.ParamSpans
```
## Tags (Read-Only)
```lua
--- @type table
Read: cmotiongraph.Tags
```
## ParameterCount 
```lua
--- @type number
Read: cmotiongraph.ParameterCount
Write: cmotiongraph.ParameterCount = value
```
## ConfigStartIndex 
```lua
--- @type number
Read: cmotiongraph.ConfigStartIndex
Write: cmotiongraph.ConfigStartIndex = value
```
## ConfigCount 
```lua
--- @type number
Read: cmotiongraph.ConfigCount
Write: cmotiongraph.ConfigCount = value
```
## Loop 
```lua
--- @type boolean
Read: cmotiongraph.Loop
Write: cmotiongraph.Loop = value
```
# Functions
## ToPtr
```lua
@returns string
cmotiongraph:ToPtr()
```
## IsValid
```lua
@returns bool
cmotiongraph:IsValid()
```

:::