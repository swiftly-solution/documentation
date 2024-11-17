---
title: CLogicNPCCounter
index: true
order: 2
category:
  - Guide
---

# CLogicNPCCounter

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CLogicNPCCounter(ptr)
```
# Properties
## OnMinCountAll (Read-Only)
```lua
--- @type CEntityIOOutput
Read: clogicnpccounter.OnMinCountAll
```
## OnMaxCountAll (Read-Only)
```lua
--- @type CEntityIOOutput
Read: clogicnpccounter.OnMaxCountAll
```
## OnMinCount_1 (Read-Only)
```lua
--- @type CEntityIOOutput
Read: clogicnpccounter.OnMinCount_1
```
## OnMaxCount_1 (Read-Only)
```lua
--- @type CEntityIOOutput
Read: clogicnpccounter.OnMaxCount_1
```
## OnMinCount_2 (Read-Only)
```lua
--- @type CEntityIOOutput
Read: clogicnpccounter.OnMinCount_2
```
## OnMaxCount_2 (Read-Only)
```lua
--- @type CEntityIOOutput
Read: clogicnpccounter.OnMaxCount_2
```
## OnMinCount_3 (Read-Only)
```lua
--- @type CEntityIOOutput
Read: clogicnpccounter.OnMinCount_3
```
## OnMaxCount_3 (Read-Only)
```lua
--- @type CEntityIOOutput
Read: clogicnpccounter.OnMaxCount_3
```
## Source (Read-Only)
```lua
--- @type CEntityInstance
Read: clogicnpccounter.Source
```
## SourceEntityName 
```lua
--- @type string
Read: clogicnpccounter.SourceEntityName
Write: clogicnpccounter.SourceEntityName = value
```
## DistanceMax 
```lua
--- @type number
Read: clogicnpccounter.DistanceMax
Write: clogicnpccounter.DistanceMax = value
```
## Disabled 
```lua
--- @type boolean
Read: clogicnpccounter.Disabled
Write: clogicnpccounter.Disabled = value
```
## MinCountAll 
```lua
--- @type number
Read: clogicnpccounter.MinCountAll
Write: clogicnpccounter.MinCountAll = value
```
## MaxCountAll 
```lua
--- @type number
Read: clogicnpccounter.MaxCountAll
Write: clogicnpccounter.MaxCountAll = value
```
## MinFactorAll 
```lua
--- @type number
Read: clogicnpccounter.MinFactorAll
Write: clogicnpccounter.MinFactorAll = value
```
## MaxFactorAll 
```lua
--- @type number
Read: clogicnpccounter.MaxFactorAll
Write: clogicnpccounter.MaxFactorAll = value
```
## NPCClassname_1 
```lua
--- @type string
Read: clogicnpccounter.NPCClassname_1
Write: clogicnpccounter.NPCClassname_1 = value
```
## NPCState_1 
```lua
--- @type number
Read: clogicnpccounter.NPCState_1
Write: clogicnpccounter.NPCState_1 = value
```
## InvertState_1 
```lua
--- @type boolean
Read: clogicnpccounter.InvertState_1
Write: clogicnpccounter.InvertState_1 = value
```
## MinCount_1 
```lua
--- @type number
Read: clogicnpccounter.MinCount_1
Write: clogicnpccounter.MinCount_1 = value
```
## MaxCount_1 
```lua
--- @type number
Read: clogicnpccounter.MaxCount_1
Write: clogicnpccounter.MaxCount_1 = value
```
## MinFactor_1 
```lua
--- @type number
Read: clogicnpccounter.MinFactor_1
Write: clogicnpccounter.MinFactor_1 = value
```
## MaxFactor_1 
```lua
--- @type number
Read: clogicnpccounter.MaxFactor_1
Write: clogicnpccounter.MaxFactor_1 = value
```
## DefaultDist_1 
```lua
--- @type number
Read: clogicnpccounter.DefaultDist_1
Write: clogicnpccounter.DefaultDist_1 = value
```
## NPCClassname_2 
```lua
--- @type string
Read: clogicnpccounter.NPCClassname_2
Write: clogicnpccounter.NPCClassname_2 = value
```
## NPCState_2 
```lua
--- @type number
Read: clogicnpccounter.NPCState_2
Write: clogicnpccounter.NPCState_2 = value
```
## InvertState_2 
```lua
--- @type boolean
Read: clogicnpccounter.InvertState_2
Write: clogicnpccounter.InvertState_2 = value
```
## MinCount_2 
```lua
--- @type number
Read: clogicnpccounter.MinCount_2
Write: clogicnpccounter.MinCount_2 = value
```
## MaxCount_2 
```lua
--- @type number
Read: clogicnpccounter.MaxCount_2
Write: clogicnpccounter.MaxCount_2 = value
```
## MinFactor_2 
```lua
--- @type number
Read: clogicnpccounter.MinFactor_2
Write: clogicnpccounter.MinFactor_2 = value
```
## MaxFactor_2 
```lua
--- @type number
Read: clogicnpccounter.MaxFactor_2
Write: clogicnpccounter.MaxFactor_2 = value
```
## DefaultDist_2 
```lua
--- @type number
Read: clogicnpccounter.DefaultDist_2
Write: clogicnpccounter.DefaultDist_2 = value
```
## NPCClassname_3 
```lua
--- @type string
Read: clogicnpccounter.NPCClassname_3
Write: clogicnpccounter.NPCClassname_3 = value
```
## NPCState_3 
```lua
--- @type number
Read: clogicnpccounter.NPCState_3
Write: clogicnpccounter.NPCState_3 = value
```
## InvertState_3 
```lua
--- @type boolean
Read: clogicnpccounter.InvertState_3
Write: clogicnpccounter.InvertState_3 = value
```
## MinCount_3 
```lua
--- @type number
Read: clogicnpccounter.MinCount_3
Write: clogicnpccounter.MinCount_3 = value
```
## MaxCount_3 
```lua
--- @type number
Read: clogicnpccounter.MaxCount_3
Write: clogicnpccounter.MaxCount_3 = value
```
## MinFactor_3 
```lua
--- @type number
Read: clogicnpccounter.MinFactor_3
Write: clogicnpccounter.MinFactor_3 = value
```
## MaxFactor_3 
```lua
--- @type number
Read: clogicnpccounter.MaxFactor_3
Write: clogicnpccounter.MaxFactor_3 = value
```
## DefaultDist_3 
```lua
--- @type number
Read: clogicnpccounter.DefaultDist_3
Write: clogicnpccounter.DefaultDist_3 = value
```
## Parent (Read-Only)
```lua
--- @type CBaseEntity
Read: clogicnpccounter.Parent
```
# Functions
## ToPtr
```lua
--- @return string
clogicnpccounter:ToPtr()
```
## IsValid
```lua
--- @return bool
clogicnpccounter:IsValid()
```

:::