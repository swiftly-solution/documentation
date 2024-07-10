---
title: CNmLayerBlendNode
index: true
order: 2
category:
  - Guide
---

# CNmLayerBlendNode

::: tabs
@tab Lua
# Constructor
```lua
CNmLayerBlendNode(ptr --[[ string ]])
```
# Properties
## BaseNodeIdx 
```lua
@type number
Read: cnmlayerblendnode.BaseNodeIdx
Write: cnmlayerblendnode.BaseNodeIdx = value
```
## OnlySampleBaseRootMotion 
```lua
@type boolean
Read: cnmlayerblendnode.OnlySampleBaseRootMotion
Write: cnmlayerblendnode.OnlySampleBaseRootMotion = value
```
## Parent 
```lua
@type CNmPoseNode
Read: cnmlayerblendnode.Parent
Write: cnmlayerblendnode.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cnmlayerblendnode:ToPtr()
```
## IsValid
```lua
@returns bool
cnmlayerblendnode:IsValid()
```

:::