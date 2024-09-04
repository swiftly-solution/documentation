---
title: CPhysPulley
index: true
order: 2
category:
  - Guide
---

# CPhysPulley

::: tabs
@tab Lua
# Constructor
```lua
CPhysPulley(ptr --[[ string ]])
```
# Properties
## Position2 
```lua
@type Vector
Read: cphyspulley.Position2
Write: cphyspulley.Position2 = value
```
## Offset 
```lua
@type table
Read: cphyspulley.Offset
Write: cphyspulley.Offset = value
```
## AddLength 
```lua
@type number
Read: cphyspulley.AddLength
Write: cphyspulley.AddLength = value
```
## GearRatio 
```lua
@type number
Read: cphyspulley.GearRatio
Write: cphyspulley.GearRatio = value
```
## Parent (Read-Only)
```lua
@type CPhysConstraint
Read: cphyspulley.Parent
```
# Functions
## ToPtr
```lua
@returns string
cphyspulley:ToPtr()
```
## IsValid
```lua
@returns bool
cphyspulley:IsValid()
```

:::