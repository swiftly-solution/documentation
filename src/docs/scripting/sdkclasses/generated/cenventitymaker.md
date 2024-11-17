---
title: CEnvEntityMaker
index: true
order: 2
category:
  - Guide
---

# CEnvEntityMaker

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CEnvEntityMaker(ptr)
```
# Properties
## EntityMins 
```lua
--- @type Vector
Read: cenventitymaker.EntityMins
Write: cenventitymaker.EntityMins = value
```
## EntityMaxs 
```lua
--- @type Vector
Read: cenventitymaker.EntityMaxs
Write: cenventitymaker.EntityMaxs = value
```
## CurrentInstance (Read-Only)
```lua
--- @type CBaseEntity
Read: cenventitymaker.CurrentInstance
```
## CurrentBlocker (Read-Only)
```lua
--- @type CBaseEntity
Read: cenventitymaker.CurrentBlocker
```
## BlockerOrigin 
```lua
--- @type Vector
Read: cenventitymaker.BlockerOrigin
Write: cenventitymaker.BlockerOrigin = value
```
## PostSpawnDirection 
```lua
--- @type QAngle
Read: cenventitymaker.PostSpawnDirection
Write: cenventitymaker.PostSpawnDirection = value
```
## PostSpawnDirectionVariance 
```lua
--- @type number
Read: cenventitymaker.PostSpawnDirectionVariance
Write: cenventitymaker.PostSpawnDirectionVariance = value
```
## PostSpawnSpeed 
```lua
--- @type number
Read: cenventitymaker.PostSpawnSpeed
Write: cenventitymaker.PostSpawnSpeed = value
```
## PostSpawnUseAngles 
```lua
--- @type boolean
Read: cenventitymaker.PostSpawnUseAngles
Write: cenventitymaker.PostSpawnUseAngles = value
```
## Template 
```lua
--- @type string
Read: cenventitymaker.Template
Write: cenventitymaker.Template = value
```
## OutputOnSpawned (Read-Only)
```lua
--- @type CEntityIOOutput
Read: cenventitymaker.OutputOnSpawned
```
## OutputOnFailedSpawn (Read-Only)
```lua
--- @type CEntityIOOutput
Read: cenventitymaker.OutputOnFailedSpawn
```
## Parent (Read-Only)
```lua
--- @type CPointEntity
Read: cenventitymaker.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cenventitymaker:ToPtr()
```
## IsValid
```lua
--- @return bool
cenventitymaker:IsValid()
```

:::