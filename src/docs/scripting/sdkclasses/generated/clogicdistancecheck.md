---
title: CLogicDistanceCheck
index: true
order: 2
category:
  - Guide
---

# CLogicDistanceCheck

::: tabs
@tab Lua
# Constructor
```lua
CLogicDistanceCheck(ptr --[[ string ]])
```
# Properties
## EntityA 
```lua
@type string
Read: clogicdistancecheck.EntityA
Write: clogicdistancecheck.EntityA = value
```
## EntityB 
```lua
@type string
Read: clogicdistancecheck.EntityB
Write: clogicdistancecheck.EntityB = value
```
## Zone1Distance 
```lua
@type number
Read: clogicdistancecheck.Zone1Distance
Write: clogicdistancecheck.Zone1Distance = value
```
## Zone2Distance 
```lua
@type number
Read: clogicdistancecheck.Zone2Distance
Write: clogicdistancecheck.Zone2Distance = value
```
## InZone1 
```lua
@type CEntityIOOutput
Read: clogicdistancecheck.InZone1
Write: clogicdistancecheck.InZone1 = value
```
## InZone2 
```lua
@type CEntityIOOutput
Read: clogicdistancecheck.InZone2
Write: clogicdistancecheck.InZone2 = value
```
## InZone3 
```lua
@type CEntityIOOutput
Read: clogicdistancecheck.InZone3
Write: clogicdistancecheck.InZone3 = value
```
## Parent 
```lua
@type CLogicalEntity
Read: clogicdistancecheck.Parent
Write: clogicdistancecheck.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
clogicdistancecheck:ToPtr()
```
## IsValid
```lua
@returns bool
clogicdistancecheck:IsValid()
```

:::