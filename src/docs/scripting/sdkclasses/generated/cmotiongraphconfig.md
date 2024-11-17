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
--- @param ptr string
CMotionGraphConfig(ptr)
```
# Properties
## ParamValues 
```lua
--- @type table
Read: cmotiongraphconfig.ParamValues
Write: cmotiongraphconfig.ParamValues = value
```
## Duration 
```lua
--- @type number
Read: cmotiongraphconfig.Duration
Write: cmotiongraphconfig.Duration = value
```
## MotionIndex (Read-Only)
```lua
--- @type MotionIndex
Read: cmotiongraphconfig.MotionIndex
```
## SampleStart 
```lua
--- @type number
Read: cmotiongraphconfig.SampleStart
Write: cmotiongraphconfig.SampleStart = value
```
## SampleCount 
```lua
--- @type number
Read: cmotiongraphconfig.SampleCount
Write: cmotiongraphconfig.SampleCount = value
```
# Functions
## ToPtr
```lua
--- @return string
cmotiongraphconfig:ToPtr()
```
## IsValid
```lua
--- @return bool
cmotiongraphconfig:IsValid()
```

:::