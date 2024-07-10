---
title: CSSDSMsg_ViewTargetList
index: true
order: 2
category:
  - Guide
---

# CSSDSMsg_ViewTargetList

::: tabs
@tab Lua
# Constructor
```lua
CSSDSMsg_ViewTargetList(ptr --[[ string ]])
```
# Properties
## ViewId 
```lua
@type SceneViewId_t
Read: cssdsmsg_viewtargetlist.ViewId
Write: cssdsmsg_viewtargetlist.ViewId = value
```
## ViewName 
```lua
@type string
Read: cssdsmsg_viewtargetlist.ViewName
Write: cssdsmsg_viewtargetlist.ViewName = value
```
## Targets 
```lua
@type table
Read: cssdsmsg_viewtargetlist.Targets
Write: cssdsmsg_viewtargetlist.Targets = value
```
# Functions
## ToPtr
```lua
@returns string
cssdsmsg_viewtargetlist:ToPtr()
```
## IsValid
```lua
@returns bool
cssdsmsg_viewtargetlist:IsValid()
```

:::