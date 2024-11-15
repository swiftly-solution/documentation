---
title: CPointTemplate
index: true
order: 2
category:
  - Guide
---

# CPointTemplate

::: tabs
@tab Lua
# Constructor
```lua
CPointTemplate(ptr)
```
# Properties
## WorldName 
```lua
--- @type string
Read: cpointtemplate.WorldName
Write: cpointtemplate.WorldName = value
```
## Source2EntityLumpName 
```lua
--- @type string
Read: cpointtemplate.Source2EntityLumpName
Write: cpointtemplate.Source2EntityLumpName = value
```
## EntityFilterName 
```lua
--- @type string
Read: cpointtemplate.EntityFilterName
Write: cpointtemplate.EntityFilterName = value
```
## TimeoutInterval 
```lua
--- @type number
Read: cpointtemplate.TimeoutInterval
Write: cpointtemplate.TimeoutInterval = value
```
## AsynchronouslySpawnEntities 
```lua
--- @type boolean
Read: cpointtemplate.AsynchronouslySpawnEntities
Write: cpointtemplate.AsynchronouslySpawnEntities = value
```
## OutputOnSpawned (Read-Only)
```lua
--- @type CEntityIOOutput
Read: cpointtemplate.OutputOnSpawned
```
## ClientOnlyEntityBehavior 
```lua
--- @type number
Read: cpointtemplate.ClientOnlyEntityBehavior
Write: cpointtemplate.ClientOnlyEntityBehavior = value
```
## OwnerSpawnGroupType 
```lua
--- @type number
Read: cpointtemplate.OwnerSpawnGroupType
Write: cpointtemplate.OwnerSpawnGroupType = value
```
## CreatedSpawnGroupHandles (Read-Only)
```lua
--- @type table
Read: cpointtemplate.CreatedSpawnGroupHandles
```
## Parent (Read-Only)
```lua
--- @type CLogicalEntity
Read: cpointtemplate.Parent
```
# Functions
## ToPtr
```lua
@returns string
cpointtemplate:ToPtr()
```
## IsValid
```lua
@returns bool
cpointtemplate:IsValid()
```

:::