---
title: CNmStateNode
index: true
order: 2
category:
  - Guide
---

# CNmStateNode

::: tabs
@tab Lua
# Constructor
```lua
CNmStateNode(ptr --[[ string ]])
```
# Properties
## ChildNodeIdx 
```lua
@type number
Read: cnmstatenode.ChildNodeIdx
Write: cnmstatenode.ChildNodeIdx = value
```
## LayerWeightNodeIdx 
```lua
@type number
Read: cnmstatenode.LayerWeightNodeIdx
Write: cnmstatenode.LayerWeightNodeIdx = value
```
## LayerRootMotionWeightNodeIdx 
```lua
@type number
Read: cnmstatenode.LayerRootMotionWeightNodeIdx
Write: cnmstatenode.LayerRootMotionWeightNodeIdx = value
```
## LayerBoneMaskNodeIdx 
```lua
@type number
Read: cnmstatenode.LayerBoneMaskNodeIdx
Write: cnmstatenode.LayerBoneMaskNodeIdx = value
```
## IsOffState 
```lua
@type boolean
Read: cnmstatenode.IsOffState
Write: cnmstatenode.IsOffState = value
```
## Parent 
```lua
@type CNmPoseNode
Read: cnmstatenode.Parent
Write: cnmstatenode.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cnmstatenode:ToPtr()
```
## IsValid
```lua
@returns bool
cnmstatenode:IsValid()
```

:::