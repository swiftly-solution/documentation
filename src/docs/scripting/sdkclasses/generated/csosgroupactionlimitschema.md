---
title: CSosGroupActionLimitSchema
index: true
order: 2
category:
  - Guide
---

# CSosGroupActionLimitSchema

::: tabs
@tab Lua
# Constructor
```lua
CSosGroupActionLimitSchema(ptr --[[ string ]])
```
# Properties
## MaxCount 
```lua
@type number
Read: csosgroupactionlimitschema.MaxCount
Write: csosgroupactionlimitschema.MaxCount = value
```
## StopType 
```lua
@type number
Read: csosgroupactionlimitschema.StopType
Write: csosgroupactionlimitschema.StopType = value
```
## SortType 
```lua
@type number
Read: csosgroupactionlimitschema.SortType
Write: csosgroupactionlimitschema.SortType = value
```
## Parent 
```lua
@type CSosGroupActionSchema
Read: csosgroupactionlimitschema.Parent
Write: csosgroupactionlimitschema.Parent = value
```
# Functions
## ToPtr
```lua
@returns string
csosgroupactionlimitschema:ToPtr()
```
## IsValid
```lua
@returns bool
csosgroupactionlimitschema:IsValid()
```

:::