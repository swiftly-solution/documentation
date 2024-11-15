---
title: CLogicAchievement
index: true
order: 2
category:
  - Guide
---

# CLogicAchievement

::: tabs
@tab Lua
# Constructor
```lua
CLogicAchievement(ptr)
```
# Properties
## Disabled 
```lua
--- @type boolean
Read: clogicachievement.Disabled
Write: clogicachievement.Disabled = value
```
## AchievementEventID 
```lua
--- @type string
Read: clogicachievement.AchievementEventID
Write: clogicachievement.AchievementEventID = value
```
## OnFired (Read-Only)
```lua
--- @type CEntityIOOutput
Read: clogicachievement.OnFired
```
## Parent (Read-Only)
```lua
--- @type CLogicalEntity
Read: clogicachievement.Parent
```
# Functions
## ToPtr
```lua
@returns string
clogicachievement:ToPtr()
```
## IsValid
```lua
@returns bool
clogicachievement:IsValid()
```

:::