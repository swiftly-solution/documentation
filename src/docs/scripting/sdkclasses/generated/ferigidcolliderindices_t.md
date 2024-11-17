---
title: FeRigidColliderIndices_t
index: true
order: 2
category:
  - Guide
---

# FeRigidColliderIndices_t

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
FeRigidColliderIndices_t(ptr)
```
# Properties
## TaperedCapsuleRigidIndex 
```lua
--- @type number
Read: ferigidcolliderindices_t.TaperedCapsuleRigidIndex
Write: ferigidcolliderindices_t.TaperedCapsuleRigidIndex = value
```
## SphereRigidIndex 
```lua
--- @type number
Read: ferigidcolliderindices_t.SphereRigidIndex
Write: ferigidcolliderindices_t.SphereRigidIndex = value
```
## BoxRigidIndex 
```lua
--- @type number
Read: ferigidcolliderindices_t.BoxRigidIndex
Write: ferigidcolliderindices_t.BoxRigidIndex = value
```
## SDFRigidIndex 
```lua
--- @type number
Read: ferigidcolliderindices_t.SDFRigidIndex
Write: ferigidcolliderindices_t.SDFRigidIndex = value
```
## CollisionPlaneIndex 
```lua
--- @type number
Read: ferigidcolliderindices_t.CollisionPlaneIndex
Write: ferigidcolliderindices_t.CollisionPlaneIndex = value
```
# Functions
## ToPtr
```lua
--- @return string
ferigidcolliderindices_t:ToPtr()
```
## IsValid
```lua
--- @return bool
ferigidcolliderindices_t:IsValid()
```

:::