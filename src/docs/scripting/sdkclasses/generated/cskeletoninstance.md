---
title: CSkeletonInstance
index: true
order: 2
category:
  - Guide
---

# CSkeletonInstance

::: tabs
@tab Lua
# Constructor
```lua
CSkeletonInstance(ptr --[[ string ]])
```
# Properties
## ModelState (Read-Only)
```lua
@type CModelState
Read: cskeletoninstance.ModelState
```
## IsAnimationEnabled 
```lua
@type boolean
Read: cskeletoninstance.IsAnimationEnabled
Write: cskeletoninstance.IsAnimationEnabled = value
```
## UseParentRenderBounds 
```lua
@type boolean
Read: cskeletoninstance.UseParentRenderBounds
Write: cskeletoninstance.UseParentRenderBounds = value
```
## DisableSolidCollisionsForHierarchy 
```lua
@type boolean
Read: cskeletoninstance.DisableSolidCollisionsForHierarchy
Write: cskeletoninstance.DisableSolidCollisionsForHierarchy = value
```
## MaterialGroup 
```lua
@type number
Read: cskeletoninstance.MaterialGroup
Write: cskeletoninstance.MaterialGroup = value
```
## HitboxSet 
```lua
@type number
Read: cskeletoninstance.HitboxSet
Write: cskeletoninstance.HitboxSet = value
```
## Parent 
```lua
@type CGameSceneNode
Read: cskeletoninstance.Parent
Write: cskeletoninstance.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cskeletoninstance:ToPtr()
```
## IsValid
```lua
@returns bool
cskeletoninstance:IsValid()
```

:::