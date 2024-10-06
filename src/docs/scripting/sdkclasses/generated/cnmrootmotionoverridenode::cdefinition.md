---
title: CNmRootMotionOverrideNode::CDefinition
index: true
order: 2
category:
  - Guide
---

# CNmRootMotionOverrideNode::CDefinition

::: tabs
@tab Lua
# Constructor
```lua
CNmRootMotionOverrideNode::CDefinition(ptr --[[ string ]])
```
# Properties
## DesiredMovingVelocityNodeIdx 
```lua
@type number
Read: cnmrootmotionoverridenode::cdefinition.DesiredMovingVelocityNodeIdx
Write: cnmrootmotionoverridenode::cdefinition.DesiredMovingVelocityNodeIdx = value
```
## DesiredFacingDirectionNodeIdx 
```lua
@type number
Read: cnmrootmotionoverridenode::cdefinition.DesiredFacingDirectionNodeIdx
Write: cnmrootmotionoverridenode::cdefinition.DesiredFacingDirectionNodeIdx = value
```
## LinearVelocityLimitNodeIdx 
```lua
@type number
Read: cnmrootmotionoverridenode::cdefinition.LinearVelocityLimitNodeIdx
Write: cnmrootmotionoverridenode::cdefinition.LinearVelocityLimitNodeIdx = value
```
## AngularVelocityLimitNodeIdx 
```lua
@type number
Read: cnmrootmotionoverridenode::cdefinition.AngularVelocityLimitNodeIdx
Write: cnmrootmotionoverridenode::cdefinition.AngularVelocityLimitNodeIdx = value
```
## MaxLinearVelocity 
```lua
@type number
Read: cnmrootmotionoverridenode::cdefinition.MaxLinearVelocity
Write: cnmrootmotionoverridenode::cdefinition.MaxLinearVelocity = value
```
## MaxAngularVelocityRadians 
```lua
@type number
Read: cnmrootmotionoverridenode::cdefinition.MaxAngularVelocityRadians
Write: cnmrootmotionoverridenode::cdefinition.MaxAngularVelocityRadians = value
```
## OverrideFlags (Read-Only)
```lua
@type CNmBitFlags
Read: cnmrootmotionoverridenode::cdefinition.OverrideFlags
```
## Parent (Read-Only)
```lua
@type CNmPassthroughNode::CDefinition
Read: cnmrootmotionoverridenode::cdefinition.Parent
```
# Functions
## ToPtr
```lua
@returns string
cnmrootmotionoverridenode::cdefinition:ToPtr()
```
## IsValid
```lua
@returns bool
cnmrootmotionoverridenode::cdefinition:IsValid()
```

:::