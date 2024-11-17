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
--- @param ptr string
CTestEffect(ptr)
```
# Properties
## Loop 
```lua
--- @type number
Read: ctesteffect.Loop
Write: ctesteffect.Loop = value
```
## Beam 
```lua
--- @type number
Read: ctesteffect.Beam
Write: ctesteffect.Beam = value
```
## Beam1 (Read-Only)
```lua
--- @type table
Read: ctesteffect.Beam1
```
## BeamTime 
```lua
--- @type table
Read: ctesteffect.BeamTime
Write: ctesteffect.BeamTime = value
```
## StartTime 
```lua
--- @type number
Read: ctesteffect.StartTime
Write: ctesteffect.StartTime = value
```
## Parent (Read-Only)
```lua
--- @type CBaseEntity
Read: ctesteffect.Parent
```
# Functions
## ToPtr
```lua
--- @return string
ctesteffect:ToPtr()
```
## IsValid
```lua
--- @return bool
ctesteffect:IsValid()
```

:::