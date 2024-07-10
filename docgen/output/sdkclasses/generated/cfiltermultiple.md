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
CFilterMultiple(ptr --[[ string ]])
```
# Properties
## FilterType 
```lua
@type number
Read: cfiltermultiple.FilterType
Write: cfiltermultiple.FilterType = value
```
## FilterName 
```lua
@type table
Read: cfiltermultiple.FilterName
Write: cfiltermultiple.FilterName = value
```
## Filter 
```lua
@type table
Read: cfiltermultiple.Filter
Write: cfiltermultiple.Filter = value
```
## FilterCount 
```lua
@type number
Read: cfiltermultiple.FilterCount
Write: cfiltermultiple.FilterCount = value
```
## Parent 
```lua
@type CBaseFilter
Read: cfiltermultiple.Parent
Write: cfiltermultiple.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
cfiltermultiple:ToPtr()
```
## IsValid
```lua
@returns bool
cfiltermultiple:IsValid()
```

:::