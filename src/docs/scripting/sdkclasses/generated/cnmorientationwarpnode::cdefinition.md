---
title: CNmOrientationWarpNode::CDefinition
index: true
order: 2
category:
  - Guide
---

# CNmOrientationWarpNode::CDefinition

::: tabs
@tab Lua
# Constructor
```lua
CNmOrientationWarpNode::CDefinition(ptr --[[ string ]])
```
# Properties
## ClipReferenceNodeIdx 
```lua
@type number
Read: cnmorientationwarpnode::cdefinition.ClipReferenceNodeIdx
Write: cnmorientationwarpnode::cdefinition.ClipReferenceNodeIdx = value
```
## TargetValueNodeIdx 
```lua
@type number
Read: cnmorientationwarpnode::cdefinition.TargetValueNodeIdx
Write: cnmorientationwarpnode::cdefinition.TargetValueNodeIdx = value
```
## IsOffsetNode 
```lua
@type boolean
Read: cnmorientationwarpnode::cdefinition.IsOffsetNode
Write: cnmorientationwarpnode::cdefinition.IsOffsetNode = value
```
## IsOffsetRelativeToCharacter 
```lua
@type boolean
Read: cnmorientationwarpnode::cdefinition.IsOffsetRelativeToCharacter
Write: cnmorientationwarpnode::cdefinition.IsOffsetRelativeToCharacter = value
```
## SamplingMode (Read-Only)
```lua
@type uint8_t
Read: cnmorientationwarpnode::cdefinition.SamplingMode
```
## Parent (Read-Only)
```lua
@type CNmPoseNode::CDefinition
Read: cnmorientationwarpnode::cdefinition.Parent
```
# Functions
## ToPtr
```lua
@returns string
cnmorientationwarpnode::cdefinition:ToPtr()
```
## IsValid
```lua
@returns bool
cnmorientationwarpnode::cdefinition:IsValid()
```

:::