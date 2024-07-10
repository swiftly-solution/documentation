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
CNavSpaceInfo(ptr --[[ string ]])
```
# Properties
## CreateFlightSpace 
```lua
@type boolean
Read: cnavspaceinfo.CreateFlightSpace
Write: cnavspaceinfo.CreateFlightSpace = value
```
## Parent 
```lua
@type CPointEntity
Read: cnavspaceinfo.Parent
Write: cnavspaceinfo.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cnavspaceinfo:ToPtr()
```
## IsValid
```lua
@returns bool
cnavspaceinfo:IsValid()
```

:::