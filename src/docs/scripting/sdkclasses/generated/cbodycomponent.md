---
title: CBodyComponent
index: true
order: 2
category:
  - Guide
---

# CBodyComponent

::: tabs
@tab Lua
# Constructor
```lua
CBodyComponent(ptr --[[ string ]])
```
# Properties
## SceneNode 
```lua
@type CGameSceneNode
Read: cbodycomponent.SceneNode
Write: cbodycomponent.SceneNode = value
```
## __pChainEntity (Read-Only)
```lua
@type CNetworkVarChainer
Read: cbodycomponent.__pChainEntity
```
## Parent 
```lua
@type CEntityComponent
Read: cbodycomponent.Parent
Write: cbodycomponent.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cbodycomponent:ToPtr()
```
## IsValid
```lua
@returns bool
cbodycomponent:IsValid()
```

:::