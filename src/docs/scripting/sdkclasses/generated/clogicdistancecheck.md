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
--- @param ptr string
CLogicDistanceCheck(ptr)
```
# Properties
## EntityA 
```lua
--- @type string
Read: clogicdistancecheck.EntityA
Write: clogicdistancecheck.EntityA = value
```
## EntityB 
```lua
--- @type string
Read: clogicdistancecheck.EntityB
Write: clogicdistancecheck.EntityB = value
```
## Zone1Distance 
```lua
--- @type number
Read: clogicdistancecheck.Zone1Distance
Write: clogicdistancecheck.Zone1Distance = value
```
## Zone2Distance 
```lua
--- @type number
Read: clogicdistancecheck.Zone2Distance
Write: clogicdistancecheck.Zone2Distance = value
```
## InZone1 (Read-Only)
```lua
--- @type CEntityIOOutput
Read: clogicdistancecheck.InZone1
```
## InZone2 (Read-Only)
```lua
--- @type CEntityIOOutput
Read: clogicdistancecheck.InZone2
```
## InZone3 (Read-Only)
```lua
--- @type CEntityIOOutput
Read: clogicdistancecheck.InZone3
```
## Parent (Read-Only)
```lua
--- @type CLogicalEntity
Read: clogicdistancecheck.Parent
```
# Functions
## ToPtr
```lua
--- @return string
clogicdistancecheck:ToPtr()
```
## IsValid
```lua
--- @return bool
clogicdistancecheck:IsValid()
```

:::