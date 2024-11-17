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
--- @param ptr string
CPathCorner(ptr)
```
# Properties
## Wait 
```lua
--- @type number
Read: cpathcorner.Wait
Write: cpathcorner.Wait = value
```
## Radius 
```lua
--- @type number
Read: cpathcorner.Radius
Write: cpathcorner.Radius = value
```
## OnPass (Read-Only)
```lua
--- @type CEntityIOOutput
Read: cpathcorner.OnPass
```
## Parent (Read-Only)
```lua
--- @type CPointEntity
Read: cpathcorner.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cpathcorner:ToPtr()
```
## IsValid
```lua
--- @return bool
cpathcorner:IsValid()
```

:::