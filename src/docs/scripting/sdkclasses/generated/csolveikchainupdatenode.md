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
## TargetHandles 
```lua
@type table
Read: csolveikchainupdatenode.TargetHandles
Write: csolveikchainupdatenode.TargetHandles = value
```
## OpFixedData (Read-Only)
```lua
@type SolveIKChainPoseOpFixedSettings_t
Read: csolveikchainupdatenode.OpFixedData
```
## Parent 
```lua
@type CUnaryUpdateNode
Read: csolveikchainupdatenode.Parent
Write: csolveikchainupdatenode.Parent = value
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