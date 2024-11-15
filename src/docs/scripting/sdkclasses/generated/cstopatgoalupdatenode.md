---
title: CStopAtGoalUpdateNode
index: true
order: 2
category:
  - Guide
---

# CStopAtGoalUpdateNode

::: tabs
@tab Lua
# Constructor
```lua
CStopAtGoalUpdateNode(ptr)
```
# Properties
## OuterRadius 
```lua
--- @type number
Read: cstopatgoalupdatenode.OuterRadius
Write: cstopatgoalupdatenode.OuterRadius = value
```
## InnerRadius 
```lua
--- @type number
Read: cstopatgoalupdatenode.InnerRadius
Write: cstopatgoalupdatenode.InnerRadius = value
```
## MaxScale 
```lua
--- @type number
Read: cstopatgoalupdatenode.MaxScale
Write: cstopatgoalupdatenode.MaxScale = value
```
## MinScale 
```lua
--- @type number
Read: cstopatgoalupdatenode.MinScale
Write: cstopatgoalupdatenode.MinScale = value
```
## Damping (Read-Only)
```lua
--- @type CAnimInputDamping
Read: cstopatgoalupdatenode.Damping
```
## Parent (Read-Only)
```lua
--- @type CUnaryUpdateNode
Read: cstopatgoalupdatenode.Parent
```
# Functions
## ToPtr
```lua
@returns string
cstopatgoalupdatenode:ToPtr()
```
## IsValid
```lua
@returns bool
cstopatgoalupdatenode:IsValid()
```

:::