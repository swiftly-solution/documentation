---
title: CNavSpaceInfo
index: true
order: 2
category:
  - Guide
---

# CNavSpaceInfo

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CNavSpaceInfo(ptr)
```
# Properties
## CreateFlightSpace 
```lua
--- @type boolean
Read: cnavspaceinfo.CreateFlightSpace
Write: cnavspaceinfo.CreateFlightSpace = value
```
## Parent (Read-Only)
```lua
--- @type CPointEntity
Read: cnavspaceinfo.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cnavspaceinfo:ToPtr()
```
## IsValid
```lua
--- @return bool
cnavspaceinfo:IsValid()
```

:::