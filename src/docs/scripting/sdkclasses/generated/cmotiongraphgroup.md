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
--- @param ptr string
CMotionGraphGroup(ptr)
```
# Properties
## SearchDB (Read-Only)
```lua
--- @type CMotionSearchDB
Read: cmotiongraphgroup.SearchDB
```
## MotionGraphConfigs (Read-Only)
```lua
--- @type table
Read: cmotiongraphgroup.MotionGraphConfigs
```
## SampleToConfig (Read-Only)
```lua
--- @type table
Read: cmotiongraphgroup.SampleToConfig
```
## IsActiveScript (Read-Only)
```lua
--- @type AnimScriptHandle
Read: cmotiongraphgroup.IsActiveScript
```
# Functions
## ToPtr
```lua
--- @return string
cmotiongraphgroup:ToPtr()
```
## IsValid
```lua
--- @return bool
cmotiongraphgroup:IsValid()
```

:::