---
title: CLogicCollisionPair
index: true
order: 2
category:
  - Guide
---

# CLogicCollisionPair

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CLogicCollisionPair(ptr)
```
# Properties
## NameAttach1 
```lua
--- @type string
Read: clogiccollisionpair.NameAttach1
Write: clogiccollisionpair.NameAttach1 = value
```
## NameAttach2 
```lua
--- @type string
Read: clogiccollisionpair.NameAttach2
Write: clogiccollisionpair.NameAttach2 = value
```
## SupportMultipleEntitiesWithSameName 
```lua
--- @type boolean
Read: clogiccollisionpair.SupportMultipleEntitiesWithSameName
Write: clogiccollisionpair.SupportMultipleEntitiesWithSameName = value
```
## Disabled 
```lua
--- @type boolean
Read: clogiccollisionpair.Disabled
Write: clogiccollisionpair.Disabled = value
```
## Succeeded 
```lua
--- @type boolean
Read: clogiccollisionpair.Succeeded
Write: clogiccollisionpair.Succeeded = value
```
## Parent (Read-Only)
```lua
--- @type CLogicalEntity
Read: clogiccollisionpair.Parent
```
# Functions
## ToPtr
```lua
--- @return string
clogiccollisionpair:ToPtr()
```
## IsValid
```lua
--- @return bool
clogiccollisionpair:IsValid()
```

:::