---
title: CLogicCase
index: true
order: 2
category:
  - Guide
---

# CLogicCase

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CLogicCase(ptr)
```
# Properties
## Case 
```lua
--- @type table
Read: clogiccase.Case
Write: clogiccase.Case = value
```
## ShuffleCases 
```lua
--- @type number
Read: clogiccase.ShuffleCases
Write: clogiccase.ShuffleCases = value
```
## LastShuffleCase 
```lua
--- @type number
Read: clogiccase.LastShuffleCase
Write: clogiccase.LastShuffleCase = value
```
## UchShuffleCaseMap 
```lua
--- @type table
Read: clogiccase.UchShuffleCaseMap
Write: clogiccase.UchShuffleCaseMap = value
```
## OnCase (Read-Only)
```lua
--- @type table
Read: clogiccase.OnCase
```
## Parent (Read-Only)
```lua
--- @type CLogicalEntity
Read: clogiccase.Parent
```
# Functions
## ToPtr
```lua
--- @return string
clogiccase:ToPtr()
```
## IsValid
```lua
--- @return bool
clogiccase:IsValid()
```

:::