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
CLogicAchievement(ptr --[[ string ]])
```
# Properties
## Disabled 
```lua
@type boolean
Read: clogicachievement.Disabled
Write: clogicachievement.Disabled = value
```
## AchievementEventID 
```lua
@type string
Read: clogicachievement.AchievementEventID
Write: clogicachievement.AchievementEventID = value
```
## OnFired 
```lua
@type CEntityIOOutput
Read: clogicachievement.OnFired
Write: clogicachievement.OnFired = value
```
## Parent 
```lua
@type CLogicalEntity
Read: clogicachievement.Parent
Write: clogicachievement.Parent = value
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