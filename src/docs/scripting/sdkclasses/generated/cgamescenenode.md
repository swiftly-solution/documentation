---
title: CGameSceneNode
index: true
order: 2
category:
  - Guide
---

# CGameSceneNode

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CGameSceneNode(ptr)
```
# Properties
## Owner (Read-Only)
```lua
--- @type CEntityInstance
Read: cgamescenenode.Owner
```
## Parent (Read-Only)
```lua
--- @type CGameSceneNode
Read: cgamescenenode.Parent
```
## Child (Read-Only)
```lua
--- @type CGameSceneNode
Read: cgamescenenode.Child
```
## NextSibling (Read-Only)
```lua
--- @type CGameSceneNode
Read: cgamescenenode.NextSibling
```
## Origin (Read-Only)
```lua
--- @type CNetworkOriginCellCoordQuantizedVector
Read: cgamescenenode.Origin
```
## Rotation 
```lua
--- @type QAngle
Read: cgamescenenode.Rotation
Write: cgamescenenode.Rotation = value
```
## Scale 
```lua
--- @type number
Read: cgamescenenode.Scale
Write: cgamescenenode.Scale = value
```
## AbsOrigin 
```lua
--- @type Vector
Read: cgamescenenode.AbsOrigin
Write: cgamescenenode.AbsOrigin = value
```
## AbsRotation 
```lua
--- @type QAngle
Read: cgamescenenode.AbsRotation
Write: cgamescenenode.AbsRotation = value
```
## AbsScale 
```lua
--- @type number
Read: cgamescenenode.AbsScale
Write: cgamescenenode.AbsScale = value
```
## ParentAttachmentOrBone 
```lua
--- @type number
Read: cgamescenenode.ParentAttachmentOrBone
Write: cgamescenenode.ParentAttachmentOrBone = value
```
## DebugAbsOriginChanges 
```lua
--- @type boolean
Read: cgamescenenode.DebugAbsOriginChanges
Write: cgamescenenode.DebugAbsOriginChanges = value
```
## Dormant 
```lua
--- @type boolean
Read: cgamescenenode.Dormant
Write: cgamescenenode.Dormant = value
```
## ForceParentToBeNetworked 
```lua
--- @type boolean
Read: cgamescenenode.ForceParentToBeNetworked
Write: cgamescenenode.ForceParentToBeNetworked = value
```
## DirtyHierarchy 
```lua
--- @type bitfield:1
Read: cgamescenenode.DirtyHierarchy
Write: cgamescenenode.DirtyHierarchy = value
```
## DirtyBoneMergeInfo 
```lua
--- @type bitfield:1
Read: cgamescenenode.DirtyBoneMergeInfo
Write: cgamescenenode.DirtyBoneMergeInfo = value
```
## NetworkedPositionChanged 
```lua
--- @type bitfield:1
Read: cgamescenenode.NetworkedPositionChanged
Write: cgamescenenode.NetworkedPositionChanged = value
```
## NetworkedAnglesChanged 
```lua
--- @type bitfield:1
Read: cgamescenenode.NetworkedAnglesChanged
Write: cgamescenenode.NetworkedAnglesChanged = value
```
## NetworkedScaleChanged 
```lua
--- @type bitfield:1
Read: cgamescenenode.NetworkedScaleChanged
Write: cgamescenenode.NetworkedScaleChanged = value
```
## WillBeCallingPostDataUpdate 
```lua
--- @type bitfield:1
Read: cgamescenenode.WillBeCallingPostDataUpdate
Write: cgamescenenode.WillBeCallingPostDataUpdate = value
```
## BoneMergeFlex 
```lua
--- @type bitfield:1
Read: cgamescenenode.BoneMergeFlex
Write: cgamescenenode.BoneMergeFlex = value
```
## LatchAbsOrigin 
```lua
--- @type bitfield:2
Read: cgamescenenode.LatchAbsOrigin
Write: cgamescenenode.LatchAbsOrigin = value
```
## DirtyBoneMergeBoneToRoot 
```lua
--- @type bitfield:1
Read: cgamescenenode.DirtyBoneMergeBoneToRoot
Write: cgamescenenode.DirtyBoneMergeBoneToRoot = value
```
## HierarchicalDepth 
```lua
--- @type number
Read: cgamescenenode.HierarchicalDepth
Write: cgamescenenode.HierarchicalDepth = value
```
## HierarchyType 
```lua
--- @type number
Read: cgamescenenode.HierarchyType
Write: cgamescenenode.HierarchyType = value
```
## DoNotSetAnimTimeInInvalidatePhysicsCount 
```lua
--- @type number
Read: cgamescenenode.DoNotSetAnimTimeInInvalidatePhysicsCount
Write: cgamescenenode.DoNotSetAnimTimeInInvalidatePhysicsCount = value
```
## Name 
```lua
--- @type number
Read: cgamescenenode.Name
Write: cgamescenenode.Name = value
```
## HierarchyAttachName 
```lua
--- @type number
Read: cgamescenenode.HierarchyAttachName
Write: cgamescenenode.HierarchyAttachName = value
```
## ZOffset 
```lua
--- @type number
Read: cgamescenenode.ZOffset
Write: cgamescenenode.ZOffset = value
```
## ClientLocalScale 
```lua
--- @type number
Read: cgamescenenode.ClientLocalScale
Write: cgamescenenode.ClientLocalScale = value
```
## RenderOrigin 
```lua
--- @type Vector
Read: cgamescenenode.RenderOrigin
Write: cgamescenenode.RenderOrigin = value
```
# Functions
## GetSkeletonInstance
```lua
--- @return CSkeletonInstance
cgamescenenode:GetSkeletonInstance()
```
## ToPtr
```lua
--- @return string
cgamescenenode:ToPtr()
```
## IsValid
```lua
--- @return bool
cgamescenenode:IsValid()
```

:::