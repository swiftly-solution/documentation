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
--- @param ptr string
CSosGroupActionLimitSchema(ptr)
```
# Properties
## MaxCount 
```lua
--- @type number
Read: csosgroupactionlimitschema.MaxCount
Write: csosgroupactionlimitschema.MaxCount = value
```
## StopType 
```lua
--- @type number
Read: csosgroupactionlimitschema.StopType
Write: csosgroupactionlimitschema.StopType = value
```
## SortType 
```lua
--- @type number
Read: csosgroupactionlimitschema.SortType
Write: csosgroupactionlimitschema.SortType = value
```
## Parent (Read-Only)
```lua
--- @type CSosGroupActionSchema
Read: csosgroupactionlimitschema.Parent
```
# Functions
## ToPtr
```lua
--- @return string
csosgroupactionlimitschema:ToPtr()
```
## IsValid
```lua
--- @return bool
csosgroupactionlimitschema:IsValid()
```

:::