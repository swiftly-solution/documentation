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
## __pChainEntity (Read-Only)
```lua
@type CNetworkVarChainer
Read: cbodycomponent.__pChainEntity
```
## Parent (Read-Only)
```lua
@type CEntityComponent
Read: cbodycomponent.Parent
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