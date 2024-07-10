---
title: CTestEffect
index: true
order: 2
category:
  - Guide
---

# CTestEffect

::: tabs
@tab Lua
# Constructor
```lua
CTestEffect(ptr --[[ string ]])
```
# Properties
## Loop 
```lua
@type number
Read: ctesteffect.Loop
Write: ctesteffect.Loop = value
```
## Beam 
```lua
@type number
Read: ctesteffect.Beam
Write: ctesteffect.Beam = value
```
## Beam1 
```lua
@type table
Read: ctesteffect.Beam1
Write: ctesteffect.Beam1 = value
```
## BeamTime 
```lua
@type table
Read: ctesteffect.BeamTime
Write: ctesteffect.BeamTime = value
```
## StartTime 
```lua
@type number
Read: ctesteffect.StartTime
Write: ctesteffect.StartTime = value
```
## Parent 
```lua
@type CBaseEntity
Read: ctesteffect.Parent
Write: ctesteffect.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
ctesteffect:ToPtr()
```
## IsValid
```lua
@returns bool
ctesteffect:IsValid()
```

:::