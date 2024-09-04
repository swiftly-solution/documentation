---
title: CSosGroupActionTimeBlockLimitSchema
index: true
order: 2
category:
  - Guide
---

# CSosGroupActionTimeBlockLimitSchema

::: tabs
@tab Lua
# Constructor
```lua
CSosGroupActionTimeBlockLimitSchema(ptr --[[ string ]])
```
# Properties
## MaxCount 
```lua
@type number
Read: csosgroupactiontimeblocklimitschema.MaxCount
Write: csosgroupactiontimeblocklimitschema.MaxCount = value
```
## MaxDuration 
```lua
@type number
Read: csosgroupactiontimeblocklimitschema.MaxDuration
Write: csosgroupactiontimeblocklimitschema.MaxDuration = value
```
## Parent (Read-Only)
```lua
@type CSosGroupActionSchema
Read: csosgroupactiontimeblocklimitschema.Parent
```
# Functions
## ToPtr
```lua
@returns string
csosgroupactiontimeblocklimitschema:ToPtr()
```
## IsValid
```lua
@returns bool
csosgroupactiontimeblocklimitschema:IsValid()
```

:::