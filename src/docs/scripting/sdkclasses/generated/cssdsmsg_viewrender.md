---
title: CSSDSMsg_ViewRender
index: true
order: 2
category:
  - Guide
---

# CSSDSMsg_ViewRender

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CSSDSMsg_ViewRender(ptr)
```
# Properties
## ViewId (Read-Only)
```lua
--- @type SceneViewId_t
Read: cssdsmsg_viewrender.ViewId
```
## ViewName 
```lua
--- @type string
Read: cssdsmsg_viewrender.ViewName
Write: cssdsmsg_viewrender.ViewName = value
```
# Functions
## ToPtr
```lua
--- @return string
cssdsmsg_viewrender:ToPtr()
```
## IsValid
```lua
--- @return bool
cssdsmsg_viewrender:IsValid()
```

:::