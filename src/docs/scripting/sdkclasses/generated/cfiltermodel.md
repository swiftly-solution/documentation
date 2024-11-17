---
title: CFilterModel
index: true
order: 2
category:
  - Guide
---

# CFilterModel

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CFilterModel(ptr)
```
# Properties
## FilterModel 
```lua
--- @type string
Read: cfiltermodel.FilterModel
Write: cfiltermodel.FilterModel = value
```
## Parent (Read-Only)
```lua
--- @type CBaseFilter
Read: cfiltermodel.Parent
```
# Functions
## ToPtr
```lua
--- @return string
cfiltermodel:ToPtr()
```
## IsValid
```lua
--- @return bool
cfiltermodel:IsValid()
```

:::