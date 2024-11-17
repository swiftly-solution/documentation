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
--- @param ptr string
CBtActionCombatPositioning(ptr)
```
# Properties
## SensorInputKey 
```lua
--- @type string
Read: cbtactioncombatpositioning.SensorInputKey
Write: cbtactioncombatpositioning.SensorInputKey = value
```
## IsAttackingKey 
```lua
--- @type string
Read: cbtactioncombatpositioning.IsAttackingKey
Write: cbtactioncombatpositioning.IsAttackingKey = value
```
## ActionTimer (Read-Only)
```lua
--- @type CountdownTimer
Read: cbtactioncombatpositioning.ActionTimer
```
## Crouching 
```lua
--- @type boolean
Read: cbtactioncombatpositioning.Crouching
Write: cbtactioncombatpositioning.Crouching = value
```
## Parent (Read-Only)
```lua
--- @type CBtNode
Read: cbtactioncombatpositioning.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cbtactioncombatpositioning:ToPtr()
```
## IsValid
```lua
--- @return bool
cbtactioncombatpositioning:IsValid()
```

:::