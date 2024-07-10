---
title: CMotionGraphGroup
index: true
order: 2
category:
  - Guide
---

# CMotionGraphGroup

::: tabs
@tab Lua
# Constructor
```lua
CMotionGraphGroup(ptr --[[ string ]])
```
# Properties
## SearchDB 
```lua
@type CMotionSearchDB
Read: cmotiongraphgroup.SearchDB
Write: cmotiongraphgroup.SearchDB = value
```
## MotionGraphConfigs 
```lua
@type table
Read: cmotiongraphgroup.MotionGraphConfigs
Write: cmotiongraphgroup.MotionGraphConfigs = value
```
## SampleToConfig 
```lua
@type table
Read: cmotiongraphgroup.SampleToConfig
Write: cmotiongraphgroup.SampleToConfig = value
```
## IsActiveScript 
```lua
@type AnimScriptHandle
Read: cmotiongraphgroup.IsActiveScript
Write: cmotiongraphgroup.IsActiveScript = value
```
# Functions
## ToPtr
```lua
@returns string
cmotiongraphgroup:ToPtr()
```
## IsValid
```lua
@returns bool
cmotiongraphgroup:IsValid()
```

:::