---
title: CBodyComponentPoint
index: true
order: 2
category:
  - Guide
---

# CBodyComponentPoint

::: tabs
@tab Lua
# Constructor
```lua
CBodyComponentPoint(ptr --[[ string ]])
```
# Properties
## SceneNode (Read-Only)
```lua
@type CGameSceneNode
Read: cbodycomponentpoint.SceneNode
```
## Parent 
```lua
@type CBodyComponent
Read: cbodycomponentpoint.Parent
Write: cbodycomponentpoint.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cbodycomponentpoint:ToPtr()
```
## IsValid
```lua
@returns bool
cbodycomponentpoint:IsValid()
```

:::