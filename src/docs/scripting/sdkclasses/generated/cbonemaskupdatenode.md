---
title: CBoneMaskUpdateNode
index: true
order: 2
category:
  - Guide
---

# CBoneMaskUpdateNode

::: tabs
@tab Lua
# Constructor
```lua
CBoneMaskUpdateNode(ptr)
```
# Properties
## WeightListIndex 
```lua
--- @type number
Read: cbonemaskupdatenode.WeightListIndex
Write: cbonemaskupdatenode.WeightListIndex = value
```
## RootMotionBlend 
```lua
--- @type number
Read: cbonemaskupdatenode.RootMotionBlend
Write: cbonemaskupdatenode.RootMotionBlend = value
```
## BlendSpace 
```lua
--- @type number
Read: cbonemaskupdatenode.BlendSpace
Write: cbonemaskupdatenode.BlendSpace = value
```
## FootMotionTiming 
```lua
--- @type number
Read: cbonemaskupdatenode.FootMotionTiming
Write: cbonemaskupdatenode.FootMotionTiming = value
```
## UseBlendScale 
```lua
--- @type boolean
Read: cbonemaskupdatenode.UseBlendScale
Write: cbonemaskupdatenode.UseBlendScale = value
```
## BlendValueSource 
```lua
--- @type number
Read: cbonemaskupdatenode.BlendValueSource
Write: cbonemaskupdatenode.BlendValueSource = value
```
## BlendParameter (Read-Only)
```lua
--- @type CAnimParamHandle
Read: cbonemaskupdatenode.BlendParameter
```
## Parent (Read-Only)
```lua
--- @type CBinaryUpdateNode
Read: cbonemaskupdatenode.Parent
```
# Functions
## ToPtr
```lua
@returns string
cbonemaskupdatenode:ToPtr()
```
## IsValid
```lua
@returns bool
cbonemaskupdatenode:IsValid()
```

:::