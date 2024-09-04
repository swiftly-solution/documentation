---
title: CLogicNPCCounterAABB
index: true
order: 2
category:
  - Guide
---

# CLogicNPCCounterAABB

::: tabs
@tab Lua
# Constructor
```lua
CLogicNPCCounterAABB(ptr --[[ string ]])
```
# Properties
## DistanceOuterMins 
```lua
@type Vector
Read: clogicnpccounteraabb.DistanceOuterMins
Write: clogicnpccounteraabb.DistanceOuterMins = value
```
## DistanceOuterMaxs 
```lua
@type Vector
Read: clogicnpccounteraabb.DistanceOuterMaxs
Write: clogicnpccounteraabb.DistanceOuterMaxs = value
```
## OuterMins 
```lua
@type Vector
Read: clogicnpccounteraabb.OuterMins
Write: clogicnpccounteraabb.OuterMins = value
```
## OuterMaxs 
```lua
@type Vector
Read: clogicnpccounteraabb.OuterMaxs
Write: clogicnpccounteraabb.OuterMaxs = value
```
## Parent (Read-Only)
```lua
@type CLogicNPCCounter
Read: clogicnpccounteraabb.Parent
```
# Functions
## ToPtr
```lua
@returns string
clogicnpccounteraabb:ToPtr()
```
## IsValid
```lua
@returns bool
clogicnpccounteraabb:IsValid()
```

:::