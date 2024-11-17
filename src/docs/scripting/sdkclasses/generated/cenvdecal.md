---
title: CEnvDecal
index: true
order: 2
category:
  - Guide
---

# CEnvDecal

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CEnvDecal(ptr)
```
# Properties
## Width 
```lua
--- @type number
Read: cenvdecal.Width
Write: cenvdecal.Width = value
```
## Height 
```lua
--- @type number
Read: cenvdecal.Height
Write: cenvdecal.Height = value
```
## Depth 
```lua
--- @type number
Read: cenvdecal.Depth
Write: cenvdecal.Depth = value
```
## RenderOrder 
```lua
--- @type number
Read: cenvdecal.RenderOrder
Write: cenvdecal.RenderOrder = value
```
## ProjectOnWorld 
```lua
--- @type boolean
Read: cenvdecal.ProjectOnWorld
Write: cenvdecal.ProjectOnWorld = value
```
## ProjectOnCharacters 
```lua
--- @type boolean
Read: cenvdecal.ProjectOnCharacters
Write: cenvdecal.ProjectOnCharacters = value
```
## ProjectOnWater 
```lua
--- @type boolean
Read: cenvdecal.ProjectOnWater
Write: cenvdecal.ProjectOnWater = value
```
## DepthSortBias 
```lua
--- @type number
Read: cenvdecal.DepthSortBias
Write: cenvdecal.DepthSortBias = value
```
## Parent (Read-Only)
```lua
--- @type CBaseModelEntity
Read: cenvdecal.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cenvdecal:ToPtr()
```
## IsValid
```lua
--- @return bool
cenvdecal:IsValid()
```

:::