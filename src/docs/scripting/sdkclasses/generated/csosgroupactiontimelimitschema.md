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
--- @param ptr string
CSosGroupActionTimeLimitSchema(ptr)
```
# Properties
## MaxDuration 
```lua
--- @type number
Read: csosgroupactiontimelimitschema.MaxDuration
Write: csosgroupactiontimelimitschema.MaxDuration = value
```
## Parent (Read-Only)
```lua
--- @type CSosGroupActionSchema
Read: csosgroupactiontimelimitschema.Parent
```
# Functions
## ToPtr
```lua
--- @return string
csosgroupactiontimelimitschema:ToPtr()
```
## IsValid
```lua
--- @return bool
csosgroupactiontimelimitschema:IsValid()
```

:::