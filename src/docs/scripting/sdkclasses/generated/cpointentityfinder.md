---
title: CPointEntityFinder
index: true
order: 2
category:
  - Guide
---

# CPointEntityFinder

::: tabs
@tab Lua
# Constructor
```lua
CPointEntityFinder(ptr)
```
# Properties
## Entity (Read-Only)
```lua
--- @type CBaseEntity
Read: cpointentityfinder.Entity
```
## FilterName 
```lua
--- @type string
Read: cpointentityfinder.FilterName
Write: cpointentityfinder.FilterName = value
```
## Filter (Read-Only)
```lua
--- @type CBaseFilter
Read: cpointentityfinder.Filter
```
## RefName 
```lua
--- @type string
Read: cpointentityfinder.RefName
Write: cpointentityfinder.RefName = value
```
## Reference (Read-Only)
```lua
--- @type CBaseEntity
Read: cpointentityfinder.Reference
```
## FindMethod 
```lua
--- @type number
Read: cpointentityfinder.FindMethod
Write: cpointentityfinder.FindMethod = value
```
## OnFoundEntity (Read-Only)
```lua
--- @type CEntityIOOutput
Read: cpointentityfinder.OnFoundEntity
```
## Parent (Read-Only)
```lua
--- @type CBaseEntity
Read: cpointentityfinder.Parent
```
# Functions
## ToPtr
```lua
@returns string
cpointentityfinder:ToPtr()
```
## IsValid
```lua
@returns bool
cpointentityfinder:IsValid()
```

:::