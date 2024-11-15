---
title: CInstancedSceneEntity
index: true
order: 2
category:
  - Guide
---

# CInstancedSceneEntity

::: tabs
@tab Lua
# Constructor
```lua
CInstancedSceneEntity(ptr)
```
# Properties
## Owner (Read-Only)
```lua
--- @type CBaseEntity
Read: cinstancedsceneentity.Owner
```
## HadOwner 
```lua
--- @type boolean
Read: cinstancedsceneentity.HadOwner
Write: cinstancedsceneentity.HadOwner = value
```
## PostSpeakDelay 
```lua
--- @type number
Read: cinstancedsceneentity.PostSpeakDelay
Write: cinstancedsceneentity.PostSpeakDelay = value
```
## PreDelay 
```lua
--- @type number
Read: cinstancedsceneentity.PreDelay
Write: cinstancedsceneentity.PreDelay = value
```
## IsBackground 
```lua
--- @type boolean
Read: cinstancedsceneentity.IsBackground
Write: cinstancedsceneentity.IsBackground = value
```
## RemoveOnCompletion 
```lua
--- @type boolean
Read: cinstancedsceneentity.RemoveOnCompletion
Write: cinstancedsceneentity.RemoveOnCompletion = value
```
## Target (Read-Only)
```lua
--- @type CBaseEntity
Read: cinstancedsceneentity.Target
```
## Parent (Read-Only)
```lua
--- @type CSceneEntity
Read: cinstancedsceneentity.Parent
```
# Functions
## ToPtr
```lua
@returns string
cinstancedsceneentity:ToPtr()
```
## IsValid
```lua
@returns bool
cinstancedsceneentity:IsValid()
```

:::