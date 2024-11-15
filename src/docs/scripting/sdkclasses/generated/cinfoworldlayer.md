---
title: CInfoWorldLayer
index: true
order: 2
category:
  - Guide
---

# CInfoWorldLayer

::: tabs
@tab Lua
# Constructor
```lua
CInfoWorldLayer(ptr)
```
# Properties
## OutputOnEntitiesSpawned (Read-Only)
```lua
--- @type CEntityIOOutput
Read: cinfoworldlayer.OutputOnEntitiesSpawned
```
## WorldName 
```lua
--- @type string
Read: cinfoworldlayer.WorldName
Write: cinfoworldlayer.WorldName = value
```
## LayerName 
```lua
--- @type string
Read: cinfoworldlayer.LayerName
Write: cinfoworldlayer.LayerName = value
```
## WorldLayerVisible 
```lua
--- @type boolean
Read: cinfoworldlayer.WorldLayerVisible
Write: cinfoworldlayer.WorldLayerVisible = value
```
## EntitiesSpawned 
```lua
--- @type boolean
Read: cinfoworldlayer.EntitiesSpawned
Write: cinfoworldlayer.EntitiesSpawned = value
```
## CreateAsChildSpawnGroup 
```lua
--- @type boolean
Read: cinfoworldlayer.CreateAsChildSpawnGroup
Write: cinfoworldlayer.CreateAsChildSpawnGroup = value
```
## LayerSpawnGroup 
```lua
--- @type number
Read: cinfoworldlayer.LayerSpawnGroup
Write: cinfoworldlayer.LayerSpawnGroup = value
```
## Parent (Read-Only)
```lua
--- @type CBaseEntity
Read: cinfoworldlayer.Parent
```
# Functions
## ToPtr
```lua
@returns string
cinfoworldlayer:ToPtr()
```
## IsValid
```lua
@returns bool
cinfoworldlayer:IsValid()
```

:::