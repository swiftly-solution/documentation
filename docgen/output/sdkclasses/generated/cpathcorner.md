---
title: CPathCorner
index: true
order: 2
category:
  - Guide
---

# CPathCorner

::: tabs
@tab Lua
# Constructor
```lua
CPathCorner(ptr --[[ string ]])
```
# Properties
## Wait 
```lua
@type number
Read: cpathcorner.Wait
Write: cpathcorner.Wait = value
```
## Radius 
```lua
@type number
Read: cpathcorner.Radius
Write: cpathcorner.Radius = value
```
## OnPass 
```lua
@type CEntityIOOutput
Read: cpathcorner.OnPass
Write: cpathcorner.OnPass = value
```
## Parent 
```lua
@type CPointEntity
Read: cpathcorner.Parent
Write: cpathcorner.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cpathcorner:ToPtr()
```
## IsValid
```lua
@returns bool
cpathcorner:IsValid()
```

:::