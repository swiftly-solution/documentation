---
title: CMotionGraphConfig
index: true
order: 2
category:
  - Guide
---

# CMotionGraphConfig

::: tabs
@tab Lua
# Constructor
```lua
CMotionGraphConfig(ptr --[[ string ]])
```
# Properties
## ParamValues 
```lua
@type table
Read: cmotiongraphconfig.ParamValues
Write: cmotiongraphconfig.ParamValues = value
```
## Duration 
```lua
@type number
Read: cmotiongraphconfig.Duration
Write: cmotiongraphconfig.Duration = value
```
## MotionIndex 
```lua
@type MotionIndex
Read: cmotiongraphconfig.MotionIndex
Write: cmotiongraphconfig.MotionIndex = value
```
## SampleStart 
```lua
@type number
Read: cmotiongraphconfig.SampleStart
Write: cmotiongraphconfig.SampleStart = value
```
## SampleCount 
```lua
@type number
Read: cmotiongraphconfig.SampleCount
Write: cmotiongraphconfig.SampleCount = value
```
# Functions
## ToPtr
```lua
@returns string
cmotiongraphconfig:ToPtr()
```
## IsValid
```lua
@returns bool
cmotiongraphconfig:IsValid()
```

:::