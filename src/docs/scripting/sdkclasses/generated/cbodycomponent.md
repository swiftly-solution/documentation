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
--- @param ptr string
CBodyComponent(ptr)
```
# Properties
## SceneNode (Read-Only)
```lua
--- @type CGameSceneNode
Read: cbodycomponent.SceneNode
```
## __pChainEntity (Read-Only)
```lua
--- @type CNetworkVarChainer
Read: cbodycomponent.__pChainEntity
```
## Parent (Read-Only)
```lua
--- @type CEntityComponent
Read: cbodycomponent.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cbodycomponent:ToPtr()
```
## IsValid
```lua
--- @return bool
cbodycomponent:IsValid()
```

:::