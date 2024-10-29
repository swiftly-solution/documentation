---
title: CDestructiblePartsSystemData_PartData
index: true
order: 2
category:
  - Guide
---

# CDestructiblePartsSystemData_PartData

::: tabs
@tab Lua
# Constructor
```lua
CDestructiblePartsSystemData_PartData(ptr --[[ string ]])
```
# Properties
## Name 
```lua
@type string
Read: cdestructiblepartssystemdata_partdata.Name
Write: cdestructiblepartssystemdata_partdata.Name = value
```
## BodyGroupValue 
```lua
@type number
Read: cdestructiblepartssystemdata_partdata.BodyGroupValue
Write: cdestructiblepartssystemdata_partdata.BodyGroupValue = value
```
## Health (Read-Only)
```lua
@type CSkillInt
Read: cdestructiblepartssystemdata_partdata.Health
```
## DamagePassthroughType 
```lua
@type number
Read: cdestructiblepartssystemdata_partdata.DamagePassthroughType
Write: cdestructiblepartssystemdata_partdata.DamagePassthroughType = value
```
## KillNPCOnDestruction 
```lua
@type boolean
Read: cdestructiblepartssystemdata_partdata.KillNPCOnDestruction
Write: cdestructiblepartssystemdata_partdata.KillNPCOnDestruction = value
```
# Functions
## ToPtr
```lua
@returns string
cdestructiblepartssystemdata_partdata:ToPtr()
```
## IsValid
```lua
@returns bool
cdestructiblepartssystemdata_partdata:IsValid()
```

:::