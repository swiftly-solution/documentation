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
CGameSceneNode(ptr --[[ string ]])
```
# Properties
## Owner (Read-Only)
```lua
@type CEntityInstance
Read: cgamescenenode.Owner
```
## Parent (Read-Only)
```lua
@type CGameSceneNode
Read: cgamescenenode.Parent
```
## Child (Read-Only)
```lua
@type CGameSceneNode
Read: cgamescenenode.Child
```
## NextSibling (Read-Only)
```lua
@type CGameSceneNode
Read: cgamescenenode.NextSibling
```
## Origin 
```lua
@type CNetworkOriginCellCoordQuantizedVector
Read: cgamescenenode.Origin
Write: cgamescenenode.Origin = value
```
## Rotation 
```lua
@type QAngle
Read: cgamescenenode.Rotation
Write: cgamescenenode.Rotation = value
```
## Scale 
```lua
@type number
Read: cgamescenenode.Scale
Write: cgamescenenode.Scale = value
```
## AbsOrigin 
```lua
@type Vector
Read: cgamescenenode.AbsOrigin
Write: cgamescenenode.AbsOrigin = value
```
## AbsRotation 
```lua
@type QAngle
Read: cgamescenenode.AbsRotation
Write: cgamescenenode.AbsRotation = value
```
## AbsScale 
```lua
@type number
Read: cgamescenenode.AbsScale
Write: cgamescenenode.AbsScale = value
```
## ParentAttachmentOrBone 
```lua
@type number
Read: cgamescenenode.ParentAttachmentOrBone
Write: cgamescenenode.ParentAttachmentOrBone = value
```
## DebugAbsOriginChanges 
```lua
@type boolean
Read: cgamescenenode.DebugAbsOriginChanges
Write: cgamescenenode.DebugAbsOriginChanges = value
```
## Dormant 
```lua
@type boolean
Read: cgamescenenode.Dormant
Write: cgamescenenode.Dormant = value
```
## ForceParentToBeNetworked 
```lua
@type boolean
Read: cgamescenenode.ForceParentToBeNetworked
Write: cgamescenenode.ForceParentToBeNetworked = value
```
## HierarchicalDepth 
```lua
@type number
Read: cgamescenenode.HierarchicalDepth
Write: cgamescenenode.HierarchicalDepth = value
```
## HierarchyType 
```lua
@type number
Read: cgamescenenode.HierarchyType
Write: cgamescenenode.HierarchyType = value
```
## DoNotSetAnimTimeInInvalidatePhysicsCount 
```lua
@type number
Read: cgamescenenode.DoNotSetAnimTimeInInvalidatePhysicsCount
Write: cgamescenenode.DoNotSetAnimTimeInInvalidatePhysicsCount = value
```
## Name 
```lua
@type string
Read: cgamescenenode.Name
Write: cgamescenenode.Name = value
```
## HierarchyAttachName 
```lua
@type string
Read: cgamescenenode.HierarchyAttachName
Write: cgamescenenode.HierarchyAttachName = value
```
## ZOffset 
```lua
@type number
Read: cgamescenenode.ZOffset
Write: cgamescenenode.ZOffset = value
```
## ClientLocalScale 
```lua
@type number
Read: cgamescenenode.ClientLocalScale
Write: cgamescenenode.ClientLocalScale = value
```
## RenderOrigin 
```lua
@type Vector
Read: cgamescenenode.RenderOrigin
Write: cgamescenenode.RenderOrigin = value
```
# Functions
## ToPtr
```lua
@returns string
cgamescenenode:ToPtr()
```
## IsValid
```lua
@returns bool
cgamescenenode:IsValid()
```

:::