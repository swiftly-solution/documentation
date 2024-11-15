---
title: CProjectedDecal
index: true
order: 2
category:
  - Guide
---

# CProjectedDecal

::: tabs
@tab Lua
# Constructor
```lua
CProjectedDecal(ptr)
```
# Properties
## Texture 
```lua
--- @type number
Read: cprojecteddecal.Texture
Write: cprojecteddecal.Texture = value
```
## Distance 
```lua
--- @type number
Read: cprojecteddecal.Distance
Write: cprojecteddecal.Distance = value
```
## Parent (Read-Only)
```lua
--- @type CPointEntity
Read: cprojecteddecal.Parent
```
# Functions
## ToPtr
```lua
@returns string
cprojecteddecal:ToPtr()
```
## IsValid
```lua
@returns bool
cprojecteddecal:IsValid()
```

:::