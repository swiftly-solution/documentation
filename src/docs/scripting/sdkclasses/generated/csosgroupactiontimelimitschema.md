---
title: CSosGroupActionTimeLimitSchema
index: true
order: 2
category:
  - Guide
---

# CSosGroupActionTimeLimitSchema

::: tabs
@tab Lua
# Constructor
```lua
CSosGroupActionTimeLimitSchema(ptr --[[ string ]])
```
# Properties
## MaxDuration 
```lua
@type number
Read: csosgroupactiontimelimitschema.MaxDuration
Write: csosgroupactiontimelimitschema.MaxDuration = value
```
## Parent (Read-Only)
```lua
@type CSosGroupActionSchema
Read: csosgroupactiontimelimitschema.Parent
```
# Functions
## ToPtr
```lua
@returns string
csosgroupactiontimelimitschema:ToPtr()
```
## IsValid
```lua
@returns bool
csosgroupactiontimelimitschema:IsValid()
```

:::