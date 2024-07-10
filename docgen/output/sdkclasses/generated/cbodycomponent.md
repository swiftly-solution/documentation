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
## SceneNode (Read-Only)
```lua
@type CGameSceneNode
Read: cbodycomponent.SceneNode
```
## __pChainEntity 
```lua
@type CNetworkVarChainer
Read: cbodycomponent.__pChainEntity
Write: cbodycomponent.__pChainEntity = value
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