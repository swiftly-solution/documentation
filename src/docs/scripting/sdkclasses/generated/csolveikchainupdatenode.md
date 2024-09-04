---
title: CSolveIKChainUpdateNode
index: true
order: 2
category:
  - Guide
---

# CSolveIKChainUpdateNode

::: tabs
@tab Lua
# Constructor
```lua
CSolveIKChainUpdateNode(ptr --[[ string ]])
```
# Properties
## TargetHandles (Read-Only)
```lua
@type table
Read: csolveikchainupdatenode.TargetHandles
```
## OpFixedData (Read-Only)
```lua
@type SolveIKChainPoseOpFixedSettings_t
Read: csolveikchainupdatenode.OpFixedData
```
## Parent (Read-Only)
```lua
@type CUnaryUpdateNode
Read: csolveikchainupdatenode.Parent
```
# Functions
## ToPtr
```lua
@returns string
csolveikchainupdatenode:ToPtr()
```
## IsValid
```lua
@returns bool
csolveikchainupdatenode:IsValid()
```

:::