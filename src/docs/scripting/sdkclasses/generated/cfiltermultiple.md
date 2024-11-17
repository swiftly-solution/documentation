---
title: CFilterMultiple
index: true
order: 2
category:
  - Guide
---

# CFilterMultiple

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CFilterMultiple(ptr)
```
# Properties
## FilterType 
```lua
--- @type number
Read: cfiltermultiple.FilterType
Write: cfiltermultiple.FilterType = value
```
## FilterName 
```lua
--- @type table
Read: cfiltermultiple.FilterName
Write: cfiltermultiple.FilterName = value
```
## Filter (Read-Only)
```lua
--- @type table
Read: cfiltermultiple.Filter
```
## FilterCount 
```lua
--- @type number
Read: cfiltermultiple.FilterCount
Write: cfiltermultiple.FilterCount = value
```
## Parent (Read-Only)
```lua
--- @type CBaseFilter
Read: cfiltermultiple.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cfiltermultiple:ToPtr()
```
## IsValid
```lua
--- @return bool
cfiltermultiple:IsValid()
```

:::