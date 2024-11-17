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
--- @param ptr string
CSSDSMsg_ViewTargetList(ptr)
```
# Properties
## ViewId (Read-Only)
```lua
--- @type SceneViewId_t
Read: cssdsmsg_viewtargetlist.ViewId
```
## ViewName 
```lua
--- @type string
Read: cssdsmsg_viewtargetlist.ViewName
Write: cssdsmsg_viewtargetlist.ViewName = value
```
## Targets (Read-Only)
```lua
--- @type table
Read: cssdsmsg_viewtargetlist.Targets
```
# Functions
## ToPtr
```lua
--- @return string
cssdsmsg_viewtargetlist:ToPtr()
```
## IsValid
```lua
--- @return bool
cssdsmsg_viewtargetlist:IsValid()
```

:::