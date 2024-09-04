---
title: CWayPointHelperUpdateNode
index: true
order: 2
category:
  - Guide
---

# CWayPointHelperUpdateNode

::: tabs
@tab Lua
# Constructor
```lua
CWayPointHelperUpdateNode(ptr --[[ string ]])
```
# Properties
## StartCycle 
```lua
@type number
Read: cwaypointhelperupdatenode.StartCycle
Write: cwaypointhelperupdatenode.StartCycle = value
```
## EndCycle 
```lua
@type number
Read: cwaypointhelperupdatenode.EndCycle
Write: cwaypointhelperupdatenode.EndCycle = value
```
## OnlyGoals 
```lua
@type boolean
Read: cwaypointhelperupdatenode.OnlyGoals
Write: cwaypointhelperupdatenode.OnlyGoals = value
```
## PreventOvershoot 
```lua
@type boolean
Read: cwaypointhelperupdatenode.PreventOvershoot
Write: cwaypointhelperupdatenode.PreventOvershoot = value
```
## PreventUndershoot 
```lua
@type boolean
Read: cwaypointhelperupdatenode.PreventUndershoot
Write: cwaypointhelperupdatenode.PreventUndershoot = value
```
## Parent (Read-Only)
```lua
@type CUnaryUpdateNode
Read: cwaypointhelperupdatenode.Parent
```
# Functions
## ToPtr
```lua
@returns string
cwaypointhelperupdatenode:ToPtr()
```
## IsValid
```lua
@returns bool
cwaypointhelperupdatenode:IsValid()
```

:::