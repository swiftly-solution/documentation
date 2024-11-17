---
title: CNavLinkMovementVData
index: true
order: 2
category:
  - Guide
---

# CNavLinkMovementVData

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CNavLinkMovementVData(ptr)
```
# Properties
## IsInterpolated 
```lua
--- @type boolean
Read: cnavlinkmovementvdata.IsInterpolated
Write: cnavlinkmovementvdata.IsInterpolated = value
```
## RecommendedDistance 
```lua
--- @type number
Read: cnavlinkmovementvdata.RecommendedDistance
Write: cnavlinkmovementvdata.RecommendedDistance = value
```
## AnimgraphVars (Read-Only)
```lua
--- @type table
Read: cnavlinkmovementvdata.AnimgraphVars
```
# Functions
## ToPtr
```lua
--- @return string
cnavlinkmovementvdata:ToPtr()
```
## IsValid
```lua
--- @return bool
cnavlinkmovementvdata:IsValid()
```

:::