---
title: FeNodeReverseOffset_t
index: true
order: 2
category:
  - Guide
---

# FeNodeReverseOffset_t

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
FeNodeReverseOffset_t(ptr)
```
# Properties
## Offset 
```lua
--- @type Vector
Read: fenodereverseoffset_t.Offset
Write: fenodereverseoffset_t.Offset = value
```
## BoneCtrl 
```lua
--- @type number
Read: fenodereverseoffset_t.BoneCtrl
Write: fenodereverseoffset_t.BoneCtrl = value
```
## TargetNode 
```lua
--- @type number
Read: fenodereverseoffset_t.TargetNode
Write: fenodereverseoffset_t.TargetNode = value
```
# Functions
## ToPtr
```lua
--- @return string
fenodereverseoffset_t:ToPtr()
```
## IsValid
```lua
--- @return bool
fenodereverseoffset_t:IsValid()
```

:::