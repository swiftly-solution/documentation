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
CNavLinkMovementVData(ptr --[[ string ]])
```
# Properties
## IsInterpolated 
```lua
@type boolean
Read: cnavlinkmovementvdata.IsInterpolated
Write: cnavlinkmovementvdata.IsInterpolated = value
```
## RecommendedDistance 
```lua
@type number
Read: cnavlinkmovementvdata.RecommendedDistance
Write: cnavlinkmovementvdata.RecommendedDistance = value
```
## AnimgraphVars (Read-Only)
```lua
@type table
Read: cnavlinkmovementvdata.AnimgraphVars
```
# Functions
## ToPtr
```lua
@returns string
cnavlinkmovementvdata:ToPtr()
```
## IsValid
```lua
@returns bool
cnavlinkmovementvdata:IsValid()
```

:::