---
title: CBtActionCombatPositioning
index: true
order: 2
category:
  - Guide
---

# CBtActionCombatPositioning

::: tabs
@tab Lua
# Constructor
```lua
CBtActionCombatPositioning(ptr --[[ string ]])
```
# Properties
## SensorInputKey 
```lua
@type string
Read: cbtactioncombatpositioning.SensorInputKey
Write: cbtactioncombatpositioning.SensorInputKey = value
```
## IsAttackingKey 
```lua
@type string
Read: cbtactioncombatpositioning.IsAttackingKey
Write: cbtactioncombatpositioning.IsAttackingKey = value
```
## ActionTimer 
```lua
@type CountdownTimer
Read: cbtactioncombatpositioning.ActionTimer
Write: cbtactioncombatpositioning.ActionTimer = value
```
## Crouching 
```lua
@type boolean
Read: cbtactioncombatpositioning.Crouching
Write: cbtactioncombatpositioning.Crouching = value
```
## Parent 
```lua
@type CBtNode
Read: cbtactioncombatpositioning.Parent
Write: cbtactioncombatpositioning.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cbtactioncombatpositioning:ToPtr()
```
## IsValid
```lua
@returns bool
cbtactioncombatpositioning:IsValid()
```

:::